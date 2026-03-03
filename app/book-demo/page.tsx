"use client"

import * as React from "react"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { Zap, Users, BarChart3, Shield, CheckCircle2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

// If you have shadcn/ui (recommended)
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"

const benefits = [
  { icon: Zap, title: "Instant Setup", desc: "Get started in minutes, not days" },
  { icon: Users, title: "Expert Team", desc: "Dedicated compliance specialists" },
  { icon: BarChart3, title: "ROI Focused", desc: "See measurable results fast" },
  { icon: Shield, title: "Enterprise Grade", desc: "Bank-level security standards" },
]

const marketSegments = [
  { id: "bank", label: "Bank" },
  { id: "corporate", label: "Corporate" },
  { id: "fintech", label: "Fintech" },
  { id: "assetmanagement", label: "Asset Management and Servicing" },
]

// Country list with dial codes (wide coverage)
const COUNTRIES: Array<{ name: string; iso2: string; dial: string }> = [
  { name: "Afghanistan", iso2: "AF", dial: "+93" },
  { name: "Albania", iso2: "AL", dial: "+355" },
  { name: "Algeria", iso2: "DZ", dial: "+213" },
  { name: "Andorra", iso2: "AD", dial: "+376" },
  { name: "Angola", iso2: "AO", dial: "+244" },
  { name: "Argentina", iso2: "AR", dial: "+54" },
  { name: "Armenia", iso2: "AM", dial: "+374" },
  { name: "Australia", iso2: "AU", dial: "+61" },
  { name: "Austria", iso2: "AT", dial: "+43" },
  { name: "Azerbaijan", iso2: "AZ", dial: "+994" },
  { name: "Bahrain", iso2: "BH", dial: "+973" },
  { name: "Bangladesh", iso2: "BD", dial: "+880" },
  { name: "Belarus", iso2: "BY", dial: "+375" },
  { name: "Belgium", iso2: "BE", dial: "+32" },
  { name: "Belize", iso2: "BZ", dial: "+501" },
  { name: "Benin", iso2: "BJ", dial: "+229" },
  { name: "Bhutan", iso2: "BT", dial: "+975" },
  { name: "Bolivia", iso2: "BO", dial: "+591" },
  { name: "Bosnia and Herzegovina", iso2: "BA", dial: "+387" },
  { name: "Botswana", iso2: "BW", dial: "+267" },
  { name: "Brazil", iso2: "BR", dial: "+55" },
  { name: "Brunei", iso2: "BN", dial: "+673" },
  { name: "Bulgaria", iso2: "BG", dial: "+359" },
  { name: "Burkina Faso", iso2: "BF", dial: "+226" },
  { name: "Burundi", iso2: "BI", dial: "+257" },
  { name: "Cambodia", iso2: "KH", dial: "+855" },
  { name: "Cameroon", iso2: "CM", dial: "+237" },
  { name: "Canada", iso2: "CA", dial: "+1" },
  { name: "Cape Verde", iso2: "CV", dial: "+238" },
  { name: "Central African Republic", iso2: "CF", dial: "+236" },
  { name: "Chad", iso2: "TD", dial: "+235" },
  { name: "Chile", iso2: "CL", dial: "+56" },
  { name: "China", iso2: "CN", dial: "+86" },
  { name: "Colombia", iso2: "CO", dial: "+57" },
  { name: "Comoros", iso2: "KM", dial: "+269" },
  { name: "Congo (DRC)", iso2: "CD", dial: "+243" },
  { name: "Congo (Republic)", iso2: "CG", dial: "+242" },
  { name: "Costa Rica", iso2: "CR", dial: "+506" },
  { name: "Côte d’Ivoire", iso2: "CI", dial: "+225" },
  { name: "Croatia", iso2: "HR", dial: "+385" },
  { name: "Cuba", iso2: "CU", dial: "+53" },
  { name: "Cyprus", iso2: "CY", dial: "+357" },
  { name: "Czechia", iso2: "CZ", dial: "+420" },
  { name: "Denmark", iso2: "DK", dial: "+45" },
  { name: "Djibouti", iso2: "DJ", dial: "+253" },
  { name: "Dominican Republic", iso2: "DO", dial: "+1" },
  { name: "Ecuador", iso2: "EC", dial: "+593" },
  { name: "Egypt", iso2: "EG", dial: "+20" },
  { name: "El Salvador", iso2: "SV", dial: "+503" },
  { name: "Equatorial Guinea", iso2: "GQ", dial: "+240" },
  { name: "Eritrea", iso2: "ER", dial: "+291" },
  { name: "Estonia", iso2: "EE", dial: "+372" },
  { name: "Eswatini", iso2: "SZ", dial: "+268" },
  { name: "Ethiopia", iso2: "ET", dial: "+251" },
  { name: "Fiji", iso2: "FJ", dial: "+679" },
  { name: "Finland", iso2: "FI", dial: "+358" },
  { name: "France", iso2: "FR", dial: "+33" },
  { name: "Gabon", iso2: "GA", dial: "+241" },
  { name: "Gambia", iso2: "GM", dial: "+220" },
  { name: "Georgia", iso2: "GE", dial: "+995" },
  { name: "Germany", iso2: "DE", dial: "+49" },
  { name: "Ghana", iso2: "GH", dial: "+233" },
  { name: "Greece", iso2: "GR", dial: "+30" },
  { name: "Guatemala", iso2: "GT", dial: "+502" },
  { name: "Guinea", iso2: "GN", dial: "+224" },
  { name: "Guinea-Bissau", iso2: "GW", dial: "+245" },
  { name: "Guyana", iso2: "GY", dial: "+592" },
  { name: "Haiti", iso2: "HT", dial: "+509" },
  { name: "Honduras", iso2: "HN", dial: "+504" },
  { name: "Hong Kong", iso2: "HK", dial: "+852" },
  { name: "Hungary", iso2: "HU", dial: "+36" },
  { name: "Iceland", iso2: "IS", dial: "+354" },
  { name: "India", iso2: "IN", dial: "+91" },
  { name: "Indonesia", iso2: "ID", dial: "+62" },
  { name: "Iran", iso2: "IR", dial: "+98" },
  { name: "Iraq", iso2: "IQ", dial: "+964" },
  { name: "Ireland", iso2: "IE", dial: "+353" },
  { name: "Israel", iso2: "IL", dial: "+972" },
  { name: "Italy", iso2: "IT", dial: "+39" },
  { name: "Jamaica", iso2: "JM", dial: "+1" },
  { name: "Japan", iso2: "JP", dial: "+81" },
  { name: "Jordan", iso2: "JO", dial: "+962" },
  { name: "Kazakhstan", iso2: "KZ", dial: "+7" },
  { name: "Kenya", iso2: "KE", dial: "+254" },
  { name: "Kuwait", iso2: "KW", dial: "+965" },
  { name: "Kyrgyzstan", iso2: "KG", dial: "+996" },
  { name: "Laos", iso2: "LA", dial: "+856" },
  { name: "Latvia", iso2: "LV", dial: "+371" },
  { name: "Lebanon", iso2: "LB", dial: "+961" },
  { name: "Lesotho", iso2: "LS", dial: "+266" },
  { name: "Liberia", iso2: "LR", dial: "+231" },
  { name: "Libya", iso2: "LY", dial: "+218" },
  { name: "Lithuania", iso2: "LT", dial: "+370" },
  { name: "Luxembourg", iso2: "LU", dial: "+352" },
  { name: "Macau", iso2: "MO", dial: "+853" },
  { name: "Madagascar", iso2: "MG", dial: "+261" },
  { name: "Malawi", iso2: "MW", dial: "+265" },
  { name: "Malaysia", iso2: "MY", dial: "+60" },
  { name: "Maldives", iso2: "MV", dial: "+960" },
  { name: "Mali", iso2: "ML", dial: "+223" },
  { name: "Malta", iso2: "MT", dial: "+356" },
  { name: "Mauritania", iso2: "MR", dial: "+222" },
  { name: "Mauritius", iso2: "MU", dial: "+230" },
  { name: "Mexico", iso2: "MX", dial: "+52" },
  { name: "Moldova", iso2: "MD", dial: "+373" },
  { name: "Mongolia", iso2: "MN", dial: "+976" },
  { name: "Montenegro", iso2: "ME", dial: "+382" },
  { name: "Morocco", iso2: "MA", dial: "+212" },
  { name: "Mozambique", iso2: "MZ", dial: "+258" },
  { name: "Myanmar", iso2: "MM", dial: "+95" },
  { name: "Namibia", iso2: "NA", dial: "+264" },
  { name: "Nepal", iso2: "NP", dial: "+977" },
  { name: "Netherlands", iso2: "NL", dial: "+31" },
  { name: "New Zealand", iso2: "NZ", dial: "+64" },
  { name: "Nicaragua", iso2: "NI", dial: "+505" },
  { name: "Niger", iso2: "NE", dial: "+227" },
  { name: "Nigeria", iso2: "NG", dial: "+234" },
  { name: "North Macedonia", iso2: "MK", dial: "+389" },
  { name: "Norway", iso2: "NO", dial: "+47" },
  { name: "Oman", iso2: "OM", dial: "+968" },
  { name: "Pakistan", iso2: "PK", dial: "+92" },
  { name: "Panama", iso2: "PA", dial: "+507" },
  { name: "Paraguay", iso2: "PY", dial: "+595" },
  { name: "Peru", iso2: "PE", dial: "+51" },
  { name: "Philippines", iso2: "PH", dial: "+63" },
  { name: "Poland", iso2: "PL", dial: "+48" },
  { name: "Portugal", iso2: "PT", dial: "+351" },
  { name: "Qatar", iso2: "QA", dial: "+974" },
  { name: "Romania", iso2: "RO", dial: "+40" },
  { name: "Russia", iso2: "RU", dial: "+7" },
  { name: "Rwanda", iso2: "RW", dial: "+250" },
  { name: "Saudi Arabia", iso2: "SA", dial: "+966" },
  { name: "Senegal", iso2: "SN", dial: "+221" },
  { name: "Serbia", iso2: "RS", dial: "+381" },
  { name: "Seychelles", iso2: "SC", dial: "+248" },
  { name: "Sierra Leone", iso2: "SL", dial: "+232" },
  { name: "Singapore", iso2: "SG", dial: "+65" },
  { name: "Slovakia", iso2: "SK", dial: "+421" },
  { name: "Slovenia", iso2: "SI", dial: "+386" },
  { name: "Somalia", iso2: "SO", dial: "+252" },
  { name: "South Africa", iso2: "ZA", dial: "+27" },
  { name: "South Korea", iso2: "KR", dial: "+82" },
  { name: "Spain", iso2: "ES", dial: "+34" },
  { name: "Sri Lanka", iso2: "LK", dial: "+94" },
  { name: "Sudan", iso2: "SD", dial: "+249" },
  { name: "Sweden", iso2: "SE", dial: "+46" },
  { name: "Switzerland", iso2: "CH", dial: "+41" },
  { name: "Syria", iso2: "SY", dial: "+963" },
  { name: "Taiwan", iso2: "TW", dial: "+886" },
  { name: "Tanzania", iso2: "TZ", dial: "+255" },
  { name: "Thailand", iso2: "TH", dial: "+66" },
  { name: "Tunisia", iso2: "TN", dial: "+216" },
  { name: "Turkey", iso2: "TR", dial: "+90" },
  { name: "Uganda", iso2: "UG", dial: "+256" },
  { name: "Ukraine", iso2: "UA", dial: "+380" },
  { name: "United Arab Emirates", iso2: "AE", dial: "+971" },
  { name: "United Kingdom", iso2: "GB", dial: "+44" },
  { name: "United States", iso2: "US", dial: "+1" },
  { name: "Uruguay", iso2: "UY", dial: "+598" },
  { name: "Uzbekistan", iso2: "UZ", dial: "+998" },
  { name: "Venezuela", iso2: "VE", dial: "+58" },
  { name: "Vietnam", iso2: "VN", dial: "+84" },
  { name: "Yemen", iso2: "YE", dial: "+967" },
  { name: "Zambia", iso2: "ZM", dial: "+260" },
  { name: "Zimbabwe", iso2: "ZW", dial: "+263" },
]

function isEmailValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function BookDemoPage() {
  const { t } = useLanguage()

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    marketSegment: "",
    country: "", // store country name
    phoneNumber: "",
    marketingConsent: false,
  })

  const [countryOpen, setCountryOpen] = React.useState(false)
  const selectedCountry = React.useMemo(
    () => COUNTRIES.find((c) => c.name === formData.country) || null,
    [formData.country]
  )

  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [submitError, setSubmitError] = React.useState<string | null>(null)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"

    if (!formData.businessEmail.trim()) newErrors.businessEmail = "Email is required"
    else if (!isEmailValid(formData.businessEmail)) newErrors.businessEmail = "Please enter a valid email"

    if (!formData.marketSegment) newErrors.marketSegment = "Market segment is required"
    if (!formData.country) newErrors.country = "Country is required"

    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required"
    else if (formData.phoneNumber.replace(/\D/g, "").length < 7) newErrors.phoneNumber = "Please enter a valid phone number"

    if (!formData.marketingConsent) newErrors.marketingConsent = "Consent is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const setField = (name: keyof typeof formData, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as string]) setErrors((prev) => ({ ...prev, [name as string]: "" }))
    if (submitError) setSubmitError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const payload = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        businessEmail: formData.businessEmail.trim(),
        marketSegment: formData.marketSegment,
        country: formData.country,
        dialCode: selectedCountry?.dial || "",
        phoneNumber: formData.phoneNumber.trim(),
        marketingConsent: formData.marketingConsent,
      }

      const res = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const json = await res.json().catch(() => ({}))

      if (!res.ok) {
        const msg = json?.error || "Something went wrong. Please try again."
        setSubmitError(msg)
        setIsSubmitting(false)
        return
      }

      setSubmitted(true)
      setIsSubmitting(false)

      // optional: reset
      setFormData({
        firstName: "",
        lastName: "",
        businessEmail: "",
        marketSegment: "",
        country: "",
        phoneNumber: "",
        marketingConsent: false,
      })
      setErrors({})

      setTimeout(() => setSubmitted(false), 4000)
    } catch {
      setSubmitError("Network error. Please try again.")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#002E49] via-slate-900 to-slate-800 border-t border-slate-800 py-16">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="container mx-auto px-4 text-center max-w-3xl"
  >
    <h1 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
      {t("Request a Demo") || "Book a Personalized Demo"}
    </h1>
    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
      {t("For additional details or to request a demonstration of any One Constellation solution, please complete the form and indicate your area of interest. A member of our team will reach out to you shortly.") || "Discover how One Constellation can transform your compliance processes. Fill out the form below to schedule a personalized demo and see our solutions in action."}
    </p>
  </motion.div>
</section>

      {/* Main */}
      <section className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Left: benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <h2 className="text-3xl font-medium text-slate-900 mb-8">{t("whatYouWillGet") || "Why Choose Us"}</h2>

              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 hover:border-accent/50 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center flex-shrink-0 transition">
                        <benefit.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 mb-1">{benefit.title}</h3>
                        <p className="text-sm text-slate-600">{benefit.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-12 pt-8 border-t border-slate-200">
                {[
                  { value: "98%", label: "Customer Satisfaction" },
                  { value: "3000+", label: "Active Clients" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-2xl font-medium text-accent">{stat.value}</p>
                    <p className="text-xs text-slate-600 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl border border-slate-200 p-12 md:p-16 text-center bg-gradient-to-br from-accent/5 to-accent/10"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-3xl font-medium text-slate-900 mb-3">{t("demoScheduled") || "Request Received!"}</h2>
                  <p className="text-slate-600 text-lg mb-8">
                    {t("checkEmail") || "We’ll contact you shortly to schedule your demo."}
                  </p>
                  <Button asChild className="rounded-full px-8 h-12 bg-accent hover:bg-accent/90 text-white">
                    <a href="/">{t("backHome") || "Back to Home"}</a>
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="rounded-2xl border border-slate-200 p-8 md:p-10 bg-white">
                    <h3 className="text-xl font-medium text-slate-900 mb-6">
                      {t("yourInformation") || "Your Information"}
                    </h3>

                    {submitError && (
                      <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {submitError}
                      </div>
                    )}

                    <div className="space-y-5">
                      {/* First name */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          {t("firstName") || "First Name"} *
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setField("firstName", e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition ${
                            errors.firstName ? "border-red-500" : "border-slate-200"
                          }`}
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                      </div>

                      {/* Last name */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          {t("lastName") || "Last Name"} *
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setField("lastName", e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition ${
                            errors.lastName ? "border-red-500" : "border-slate-200"
                          }`}
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          {t("businessEmail") || "Business Email"} *
                        </label>
                        <input
                          type="email"
                          value={formData.businessEmail}
                          onChange={(e) => setField("businessEmail", e.target.value)}
                          placeholder={t("businessEmail") || "name@company.com"}
                          className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition ${
                            errors.businessEmail ? "border-red-500" : "border-slate-200"
                          }`}
                        />
                        {errors.businessEmail && <p className="text-red-500 text-sm mt-1">{errors.businessEmail}</p>}
                      </div>

                      {/* Segment */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          {t("marketSegment") || "Market Segment"} *
                        </label>
                        <select
                          value={formData.marketSegment}
                          onChange={(e) => setField("marketSegment", e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition ${
                            errors.marketSegment ? "border-red-500" : "border-slate-200"
                          }`}
                        >
                          <option value="">{t("selectSegment") || "Select a segment"}</option>
                          {marketSegments.map((segment) => (
                            <option key={segment.id} value={segment.id}>
                              {segment.label}
                            </option>
                          ))}
                        </select>
                        {errors.marketSegment && <p className="text-red-500 text-sm mt-1">{errors.marketSegment}</p>}
                      </div>

                      {/* Country (Searchable) */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          {t("country") || "Country"} *
                        </label>

                        <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                          <PopoverTrigger asChild>
                            <button
                              type="button"
                              className={`w-full px-4 py-3 rounded-lg border text-left flex items-center justify-between gap-3 bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                                errors.country ? "border-red-500" : "border-slate-200"
                              }`}
                            >
                              <span className={formData.country ? "text-slate-900" : "text-slate-400"}>
                                {formData.country || (t("selectCountry") || "Select a country")}
                              </span>
                              <Search className="w-4 h-4 text-slate-400" />
                            </button>
                          </PopoverTrigger>

                          <PopoverContent className="p-0 w-[--radix-popover-trigger-width]">
                            <Command>
                              <CommandInput placeholder="Search country..." />
                              <CommandEmpty>No country found.</CommandEmpty>
                              <CommandGroup className="max-h-72 overflow-auto">
                                {COUNTRIES.map((c) => (
                                  <CommandItem
                                    key={c.iso2}
                                    value={`${c.name} ${c.dial}`}
                                    onSelect={() => {
                                      setField("country", c.name)
                                      setCountryOpen(false)
                                    }}
                                  >
                                    <div className="flex items-center justify-between w-full">
                                      <span className="text-slate-900">{c.name}</span>
                                      <span className="text-slate-500 text-sm">{c.dial}</span>
                                    </div>
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>

                        {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          {t("phoneNumber") || "Phone Number"} *
                        </label>

                        <div className="flex gap-2">
                          <div className="w-24 px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 flex items-center font-semibold text-slate-700">
                            {selectedCountry?.dial || "Code"}
                          </div>

                          <input
                            type="tel"
                            value={formData.phoneNumber}
                            onChange={(e) => setField("phoneNumber", e.target.value)}
                            placeholder={t("phoneFormat") || "e.g. 5551234567"}
                            className={`flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition ${
                              errors.phoneNumber ? "border-red-500" : "border-slate-200"
                            }`}
                          />
                        </div>

                        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                      </div>

                      {/* Consent checkbox */}
                      <div>
                        <label className="flex items-start gap-3 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={formData.marketingConsent}
                            onChange={(e) => setField("marketingConsent", e.target.checked)}
                            className="mt-1 h-4 w-4 rounded border-slate-300"
                          />
                          <span className="text-sm text-slate-700">
                            I confirm that I would like to receive emails from One Constellation. *
                          </span>
                        </label>
                        {errors.marketingConsent && (
                          <p className="text-red-500 text-sm mt-1">{errors.marketingConsent}</p>
                        )}

                        <p className="mt-2 text-xs text-slate-500">
                          Click here to view a copy of our{" "}
                          <a href="/privacy-policy" className="text-slate-900 hover:underline" target="_blank" rel="noreferrer">
                            privacy policy
                          </a>
                          .
                        </p>
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full mt-8 h-12 rounded-lg text-white font-semibold flex items-center justify-center gap-2 transition ${
                        isSubmitting ? "bg-slate-400 cursor-not-allowed" : "bg-accent hover:bg-accent/90"
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      {isSubmitting ? "Submitting..." : (t("confirmAppointment") || "Request Demo")}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}