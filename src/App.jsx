import HomePage from "@/pages/HomePage"
import { CallbackRequestProvider } from "@/components/CallbackRequest"
import { LocaleProvider } from "@/lib/i18n"

export default function App() {
  return (
    <LocaleProvider>
      <CallbackRequestProvider>
        <HomePage />
      </CallbackRequestProvider>
    </LocaleProvider>
  )
}
