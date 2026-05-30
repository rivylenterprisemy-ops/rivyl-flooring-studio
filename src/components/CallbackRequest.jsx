/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const CallbackRequestContext = createContext(null)

const initialForm = {
  fullName: "",
  phoneNumber: "",
  preferredCallTime: "",
  message: "",
}

export function CallbackRequestProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const openCallbackRequest = useCallback(() => setIsOpen(true), [])
  const closeCallbackRequest = useCallback(() => setIsOpen(false), [])

  return (
    <CallbackRequestContext.Provider value={{ openCallbackRequest }}>
      {children}
      {isOpen ? <CallbackRequestModal onClose={closeCallbackRequest} /> : null}
    </CallbackRequestContext.Provider>
  )
}

export function useCallbackRequest() {
  const value = useContext(CallbackRequestContext)

  if (!value) {
    throw new Error("useCallbackRequest must be used inside CallbackRequestProvider")
  }

  return value
}

function CallbackRequestModal({ onClose }) {
  const { content, lang } = useLocale()
  const { callback } = content
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const firstFieldRef = useRef(null)
  const dialogRef = useRef(null)
  const previousFocusRef = useRef(null)
  const statusRef = useRef(status)

  useEffect(() => {
    statusRef.current = status
  }, [status])

  useEffect(() => {
    previousFocusRef.current = document.activeElement
    document.body.style.overflow = "hidden"
    window.setTimeout(() => firstFieldRef.current?.focus(), 0)

    const handleKeyDown = (event) => {
      if (event.key === "Escape" && statusRef.current !== "sending") {
        onClose()
      }

      if (event.key === "Tab") {
        const focusableElements = dialogRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
        const focusable = Array.from(focusableElements || [])

        if (!focusable.length) {
          return
        }

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
      previousFocusRef.current?.focus?.()
    }
  }, [onClose])

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: "" }))
    setStatusMessage("")
  }

  const validate = () => {
    const nextErrors = {}

    if (!form.fullName.trim()) {
      nextErrors.fullName = callback.validation.nameRequired
    }

    if (!form.phoneNumber.trim()) {
      nextErrors.phoneNumber = callback.validation.phoneRequired
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!validate()) {
      return
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      setStatus("error")
      setStatusMessage(callback.failure)
      return
    }

    setStatus("sending")
    setStatusMessage("")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          "Full Name": form.fullName.trim(),
          "Phone Number": form.phoneNumber.trim(),
          "Preferred Call Time": form.preferredCallTime.trim(),
          "Brief Message": form.message.trim(),
          Language: lang.toUpperCase(),
          "Website Source": "Rivyl Flooring Studio",
        }),
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error("Web3Forms submission failed")
      }

      setForm(initialForm)
      setErrors({})
      setStatus("success")
      setStatusMessage(callback.success)
    } catch {
      setStatus("error")
      setStatusMessage(callback.failure)
    }
  }

  const isSending = status === "sending"

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-stone-950/42 px-5 py-6 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !isSending) {
          onClose()
        }
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="callback-request-title"
        className="relative max-h-[calc(100vh-3rem)] w-full max-w-md overflow-y-auto rounded-3xl border border-white/70 bg-[#f8f4ee] p-5 text-stone-950 shadow-[0_28px_75px_rgba(39,32,24,0.24)] sm:p-6"
      >
        <button
          type="button"
          className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full border border-stone-300/75 bg-white/55 text-stone-800 transition duration-300 hover:bg-white hover:text-stone-950"
          onClick={onClose}
          disabled={isSending}
          aria-label={callback.close}
        >
          <X className="size-4" />
        </button>

        <div className="pr-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
            {callback.eyebrow}
          </p>
          <h2
            id="callback-request-title"
            className="font-['Playfair_Display'] text-3xl font-semibold leading-tight text-stone-950"
          >
            {callback.title}
          </h2>
        </div>

        <form className="mt-6 grid gap-4" onSubmit={handleSubmit} noValidate>
          <Field
            id="callback-full-name"
            label={callback.fields.fullName}
            error={errors.fullName}
          >
            <input
              ref={firstFieldRef}
              id="callback-full-name"
              name="fullName"
              value={form.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              disabled={isSending}
              required
              className={inputClassName(errors.fullName)}
            />
          </Field>

          <Field
            id="callback-phone-number"
            label={callback.fields.phoneNumber}
            error={errors.phoneNumber}
          >
            <input
              id="callback-phone-number"
              name="phoneNumber"
              type="tel"
              value={form.phoneNumber}
              onChange={(event) => updateField("phoneNumber", event.target.value)}
              disabled={isSending}
              required
              className={inputClassName(errors.phoneNumber)}
            />
          </Field>

          <Field id="callback-call-time" label={callback.fields.preferredCallTime}>
            <input
              id="callback-call-time"
              name="preferredCallTime"
              value={form.preferredCallTime}
              onChange={(event) => updateField("preferredCallTime", event.target.value)}
              disabled={isSending}
              className={inputClassName()}
            />
          </Field>

          <Field id="callback-message" label={callback.fields.message}>
            <textarea
              id="callback-message"
              name="message"
              rows="3"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              disabled={isSending}
              className={cn(inputClassName(), "min-h-24 resize-none py-3")}
            />
          </Field>

          {statusMessage ? (
            <p
              className={cn(
                "rounded-2xl border px-4 py-3 text-sm leading-6",
                status === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                  : "border-red-200 bg-red-50 text-red-900"
              )}
            >
              {statusMessage}
            </p>
          ) : null}

          <div className="mt-1 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              className="h-11 rounded-full border-stone-300/75 bg-transparent px-6 text-sm text-stone-800 shadow-none transition duration-300 hover:bg-white/70 hover:text-stone-950"
              onClick={onClose}
              disabled={isSending}
            >
              {callback.cancel}
            </Button>
            <Button
              type="submit"
              className="h-11 rounded-full bg-stone-950 px-6 text-sm text-white shadow-[0_14px_30px_rgba(28,25,23,0.14)] transition duration-300 hover:bg-stone-800 disabled:translate-y-0 disabled:opacity-60"
              disabled={isSending}
            >
              {isSending ? callback.sending : callback.submit}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-stone-800">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error ? <p className="mt-2 text-sm text-red-800">{error}</p> : null}
    </div>
  )
}

function inputClassName(hasError) {
  return cn(
    "h-11 w-full rounded-2xl border bg-white/70 px-4 text-sm text-stone-950 outline-none transition duration-300 placeholder:text-stone-400 focus:border-stone-500 focus:bg-white focus:ring-4 focus:ring-stone-300/30 disabled:cursor-not-allowed disabled:opacity-70",
    hasError ? "border-red-300 focus:border-red-500 focus:ring-red-200/50" : "border-stone-300/75"
  )
}
