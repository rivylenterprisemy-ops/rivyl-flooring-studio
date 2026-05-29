import HomePage from "@/pages/HomePage"
import { LocaleProvider } from "@/lib/i18n"

export default function App() {
  return (
    <LocaleProvider>
      <HomePage />
    </LocaleProvider>
  )
}
