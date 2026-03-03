"use client"

import * as React from "react"

/**
 * ✅ React + Tailwind Checklist (Improved UI)
 * - ✅ Header removed (no “Checklist” top card)
 * - ✅ Required * kept on required fields
 * - ✅ Upload UI simplified (single clear button + previews + delete)
 * - ✅ Same IDs + same payload keys + same endpoint + same validations/logic
 * - ✅ No functionality removed
 */

type UploadSection =
  | "fundLogo"
  | "subscriptionAgreement"
  | "additionalAgreement"
  | "redemptionDocument"
  | "referenceDocuments"
  | "entityLogo"
  | "others"

type UploadedMap = Record<UploadSection, File[]>

const MAX_FILES = 5
const ALLOWED_TYPES = ["image/png", "image/jpeg", "application/pdf"]

function isImage(file: File) {
  return file.type.startsWith("image/")
}

function countLabel(n: number) {
  return n === 1 ? "1 file selected" : `${n} files selected`
}

function RequiredLabel({
  children,
  required,
  htmlFor,
}: {
  children: React.ReactNode
  required?: boolean
  htmlFor?: string
}) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-semibold text-slate-900">
      {children} {required ? <span className="text-red-500">*</span> : null}
    </label>
  )
}

export default function ChecklistTailwindReact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [showDigitalCurrency, setShowDigitalCurrency] = React.useState(false)

  const [uploadedFiles, setUploadedFiles] = React.useState<UploadedMap>({
    fundLogo: [],
    subscriptionAgreement: [],
    additionalAgreement: [],
    redemptionDocument: [],
    referenceDocuments: [],
    entityLogo: [],
    others: [],
  })

  const [previews, setPreviews] = React.useState<Record<string, string>>({})

  const inputRefs = React.useRef<Record<UploadSection, HTMLInputElement | null>>({
    fundLogo: null,
    subscriptionAgreement: null,
    additionalAgreement: null,
    redemptionDocument: null,
    referenceDocuments: null,
    entityLogo: null,
    others: null,
  })

  const [form, setForm] = React.useState({
    // Page 1
    name: "",
    email: "",
    date: "",
    fundName: "",
    jurisdiction: "",
    fundCode: "",
    otherType: "",
    typeTraditional: false,
    typeDigital: false,
    typeHybrid: false,
    typeOthers: false,
    tradingDigitalCurrency: "",
    classType1: "",
    currency1: "",
    isin1: "",
    classType2: "",
    currency2: "",
    isin2: "",
    classType3: "",
    currency3: "",
    isin3: "",
    classType4: "",
    currency4: "",
    isin4: "",
    fundDescriptionTextArea: "",

    // Page 2
    faceVerification: false,
    vcip: false,
    pennyDrop: false,
    individual: false,
    corporate: false,
    privateCompany: false,
    trustee: false,
    partnership: false,
    llc: false,
    llp: false,
    selfManaged: false,
    regulated: false,
    nonRegulated: false,
    publicListed: false,
    otherCheckbox: false,
    entityTypeOthersTextArea: "",
    jointAccount: false,
    governmentIntegration: false,
    signpass: false,
    panAadhar: false,
    documentDigitalisation: false,

    // Upload checkboxes
    checkSubscriptionAgreement: false,
    checkAdditionalAgreement: false,
    checkRedemptionDocument: false,
    checkOthers: false,
    referenceDocumentCheck: false,

    // Page 3
    investorManager: false,
    investorManagerEntityTextArea: "",
    imReadEmailsCheck: false,
    imReadEmailsTextArea: "",
    entity_logo_check: false,
    verified: false,

    otherDocumentsTextArea: "",
  })

  // --------- DOM helpers (keep your highlight behavior) ----------
  const resetAllBorders = () => {
    document.querySelectorAll("input, textarea").forEach((el) => {
      ;(el as HTMLElement).style.border = "1px solid #e2e8f0"
    })
  }

  const highlightField = (id: string) => {
    const el = document.getElementById(id) as HTMLElement | null
    if (!el) return
    el.style.border = "2px solid red"
    const top = el.getBoundingClientRect().top + window.scrollY - 20
    window.scrollTo({ top, behavior: "smooth" })
  }

  // --------- Upload Logic ----------
  const addFiles = (section: UploadSection) => {
    const current = uploadedFiles[section]
    if (current.length >= MAX_FILES) {
      alert(`You can only upload up to ${MAX_FILES} files.`)
      return
    }
    inputRefs.current[section]?.click()
  }

  const handleUpload = (section: UploadSection, filesList: FileList | null) => {
    if (!filesList) return
    const incoming = Array.from(filesList)

    if (uploadedFiles[section].length + incoming.length > MAX_FILES) {
      alert(`Only ${MAX_FILES} files can be uploaded per section.`)
      return
    }

    const valid: File[] = []
    for (const f of incoming) {
      if (!ALLOWED_TYPES.includes(f.type)) {
        alert("Only PNG, JPEG, and PDF files are allowed.")
        continue
      }
      valid.push(f)

      if (isImage(f)) {
        const url = URL.createObjectURL(f)
        const key = `${section}__${f.name}__${f.size}__${f.lastModified}`
        setPreviews((p) => ({ ...p, [key]: url }))
      }
    }

    setUploadedFiles((prev) => ({ ...prev, [section]: [...prev[section], ...valid] }))

    // Auto-check checkboxes like your original behavior
    if (section === "subscriptionAgreement") setForm((p) => ({ ...p, checkSubscriptionAgreement: true }))
    if (section === "additionalAgreement") setForm((p) => ({ ...p, checkAdditionalAgreement: true }))
    if (section === "redemptionDocument") setForm((p) => ({ ...p, checkRedemptionDocument: true }))
    if (section === "others") setForm((p) => ({ ...p, checkOthers: true }))
    if (section === "referenceDocuments") setForm((p) => ({ ...p, referenceDocumentCheck: true }))
    if (section === "entityLogo") setForm((p) => ({ ...p, entity_logo_check: true }))
  }

  const deleteFile = (section: UploadSection, index: number) => {
    const f = uploadedFiles[section][index]
    const key = `${section}__${f.name}__${f.size}__${f.lastModified}`

    setPreviews((p) => {
      const next = { ...p }
      const url = next[key]
      if (url) URL.revokeObjectURL(url)
      delete next[key]
      return next
    })

    setUploadedFiles((prev) => {
      const nextArr = [...prev[section]]
      nextArr.splice(index, 1)
      return { ...prev, [section]: nextArr }
    })

    const afterCount = uploadedFiles[section].length - 1
    if (afterCount <= 0) {
      if (section === "subscriptionAgreement") setForm((p) => ({ ...p, checkSubscriptionAgreement: false }))
      if (section === "additionalAgreement") setForm((p) => ({ ...p, checkAdditionalAgreement: false }))
      if (section === "redemptionDocument") setForm((p) => ({ ...p, checkRedemptionDocument: false }))
      if (section === "others") setForm((p) => ({ ...p, checkOthers: false }))
      if (section === "referenceDocuments") setForm((p) => ({ ...p, referenceDocumentCheck: false }))
      if (section === "entityLogo") setForm((p) => ({ ...p, entity_logo_check: false }))
    }
  }

  const toggleDigitalField = (checked: boolean) => {
    setShowDigitalCurrency(checked)
    setForm((p) => ({ ...p, typeDigital: checked }))
  }

  // --------- Submit (same endpoint & keys) ----------
  const sendEmail = async () => {
    resetAllBorders()

    // required validations (same as your old code)
    if (!form.name) return highlightField("name")
    if (!form.email) return highlightField("email")
    if (!form.date) return highlightField("date")
    if (!form.fundName) return highlightField("fundName")
    if (!form.jurisdiction) return highlightField("jurisdiction")
    if (!form.fundCode) return highlightField("fundCode")

    if (!uploadedFiles.fundLogo || uploadedFiles.fundLogo.length === 0) {
      return highlightField("fundLogo_container")
    }

    if (form.referenceDocumentCheck && uploadedFiles.referenceDocuments.length === 0) {
      return highlightField("referenceDocuments_container")
    }

    if (form.entity_logo_check && uploadedFiles.entityLogo.length === 0) {
      return highlightField("entityLogo_container")
    }

    if (!form.verified) return highlightField("verificationCheck")

    if (form.investorManager && !form.investorManagerEntityTextArea.trim()) {
      return highlightField("investorManager")
    }

    setIsSubmitting(true)

    try {
      const fd = new FormData()

      // match your payload keys
      fd.append("referenceDocumentCheck", JSON.stringify(form.referenceDocumentCheck))
      fd.append("investorManager", String(form.investorManager))
      fd.append("imReadEmailsCheck", String(form.imReadEmailsCheck))
      fd.append("entity_logo_check", String(form.entity_logo_check))
      fd.append("verified", String(form.verified))
      fd.append("investorManagerEntityTextArea", form.investorManagerEntityTextArea)
      fd.append("imReadEmailsTextArea", form.imReadEmailsTextArea)
      fd.append("entityTypeOthersTextArea", form.entityTypeOthersTextArea)

      // files
      ;(Object.keys(uploadedFiles) as UploadSection[]).forEach((key) => {
        uploadedFiles[key].forEach((file) => fd.append(key, file))
      })

      // page 2
      fd.append("faceVerification", String(form.faceVerification))
      fd.append("vcip", String(form.vcip))
      fd.append("pennyDrop", String(form.pennyDrop))
      fd.append("tradingDigitalCurrency", String(form.tradingDigitalCurrency))
      fd.append("individual", String(form.individual))
      fd.append("corporate", String(form.corporate))
      fd.append("privateCompany", String(form.privateCompany))
      fd.append("trustee", String(form.trustee))
      fd.append("partnership", String(form.partnership))
      fd.append("llc", String(form.llc))
      fd.append("llp", String(form.llp))
      fd.append("selfManaged", String(form.selfManaged))
      fd.append("regulated", String(form.regulated))
      fd.append("nonRegulated", String(form.nonRegulated))
      fd.append("publicListed", String(form.publicListed))
      fd.append("otherCheckbox", String(form.otherCheckbox))
      fd.append("otherDocumentsTextArea", String(form.otherDocumentsTextArea))
      fd.append("jointAccount", String(form.jointAccount))
      fd.append("governmentIntegration", String(form.governmentIntegration))
      fd.append("signpass", String(form.signpass))
      fd.append("panAadhar", String(form.panAadhar))
      fd.append("documentDigitalisation", String(form.documentDigitalisation))

      // page 1
      fd.append("name", form.name)
      fd.append("email", form.email)
      fd.append("date", form.date)
      fd.append("fundName", form.fundName)
      fd.append("jurisdiction", form.jurisdiction)
      fd.append("fundCode", form.fundCode)
      fd.append("typeTraditional", String(form.typeTraditional))
      fd.append("typeDigital", String(form.typeDigital))
      fd.append("typeHybrid", String(form.typeHybrid))
      fd.append("typeOthers", String(form.typeOthers))
      fd.append("otherType", form.otherType)
      fd.append("fundDescriptionTextArea", form.fundDescriptionTextArea)

      fd.append(
        "classTypes",
        JSON.stringify([
          { classType: form.classType1, currency: form.currency1, isin: form.isin1 },
          { classType: form.classType2, currency: form.currency2, isin: form.isin2 },
          { classType: form.classType3, currency: form.currency3, isin: form.isin3 },
          { classType: form.classType4, currency: form.currency4, isin: form.isin4 },
        ])
      )

      // upload checkboxes
      fd.append("checkSubscriptionAgreement", String(form.checkSubscriptionAgreement))
      fd.append("checkAdditionalAgreement", String(form.checkAdditionalAgreement))
      fd.append("checkRedemptionDocument", String(form.checkRedemptionDocument))
      fd.append("checkOthers", String(form.checkOthers))

      const res = await fetch("https://telemetry.one-constellation.com/form/save", {
        method: "POST",
        body: fd,
      })

      if (!res.ok) throw new Error("Failed")
      alert("Your checklist has been successfully submitted!")
    } catch {
      alert("Error submitting the checklist.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // --------- UI Blocks ----------
  const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
      <div className="px-6 py-5 border-b border-slate-100">
        <h2 className="text-base md:text-lg font-bold text-slate-900">{title}</h2>
      </div>
      <div className="px-6 py-6">{children}</div>
    </section>
  )

  const Field = ({
    id,
    label,
    required,
    type = "text",
    value,
    onChange,
    placeholder,
  }: {
    id: string
    label: string
    required?: boolean
    type?: string
    value: string
    onChange: (v: string) => void
    placeholder?: string
  }) => (
    <div>
      <RequiredLabel htmlFor={id} required={required}>
        {label}
      </RequiredLabel>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none
        focus:bg-white focus:ring-2 focus:ring-teal-500/25 focus:border-teal-500"
      />
    </div>
  )

  const Toggle = ({
    id,
    label,
    checked,
    onChange,
    desc,
  }: {
    id: string
    label: string
    desc?: string
    checked: boolean
    onChange: (v: boolean) => void
  }) => (
    <label
      htmlFor={id}
      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 cursor-pointer hover:bg-slate-100 transition"
    >
      <input
        id={id}
        type="checkbox"
        className="mt-1 h-4 w-4 accent-teal-600"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div>
        <div className="text-sm font-semibold text-slate-900">{label}</div>
        {desc ? <div className="text-xs text-slate-500 mt-0.5">{desc}</div> : null}
      </div>
    </label>
  )

  const UploadBox = ({
    section,
    title,
    required,
    containerId,
    nameId,
    previewId,
    hint,
  }: {
    section: UploadSection
    title: string
    required?: boolean
    containerId: string
    nameId: string
    previewId: string
    hint?: string
  }) => {
    const files = uploadedFiles[section]

    return (
      <div id={containerId} className="rounded-3xl border border-slate-200 bg-white p-5">
        <div className="flex flex-wrap items-center gap-3">
          <div className="min-w-[220px]">
            <div className="text-sm font-semibold text-slate-900">
              {title} {required ? <span className="text-red-500">*</span> : null}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {hint ?? `PNG, JPG, PDF • up to ${MAX_FILES} files`}
            </div>
          </div>

          <button
            type="button"
            onClick={() => addFiles(section)}
            className="ml-auto inline-flex items-center justify-center rounded-2xl bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700 transition"
          >
            Upload files
          </button>

          <div id={nameId} className="w-full md:w-auto text-sm text-slate-600">
            {files.length ? countLabel(files.length) : "No file chosen"}
          </div>
        </div>

        <div id={previewId} className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {files.map((f, idx) => {
            const key = `${section}__${f.name}__${f.size}__${f.lastModified}`
            const imgUrl = previews[key]
            return (
              <div key={key} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 flex gap-3">
                {imgUrl ? (
                  <img src={imgUrl} alt={f.name} className="h-16 w-16 rounded-xl object-cover bg-white" />
                ) : (
                  <div className="h-16 w-16 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-xs text-slate-500">
                    PDF
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold text-slate-900 truncate">{f.name}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{Math.round(f.size / 1024)} KB</div>

                  <button
                    type="button"
                    onClick={() => deleteFile(section, idx)}
                    className="mt-2 inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50"
                  >
                    Remove
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <input
          ref={(el) => {
            inputRefs.current[section] = el
          }}
          type="file"
          className="hidden"
          onChange={(e) => {
            handleUpload(section, e.target.files)
            e.currentTarget.value = ""
          }}
          multiple
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 z-[999]">
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-12 w-12 rounded-full border-4 border-white border-t-teal-600 animate-spin" />
          </div>
        </div>
      )}

      {/* ✅ No header card here */}
      <div className="mx-auto max-w-[980px] px-4 py-8 space-y-6">
        {/* Requestor Details */}
        <Card title="Requestor Details">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Field
              id="name"
              label="Name"
              required
              value={form.name}
              onChange={(v) => setForm((p) => ({ ...p, name: v }))}
            />
            <Field
              id="email"
              label="Email"
              required
              type="email"
              value={form.email}
              onChange={(v) => setForm((p) => ({ ...p, email: v }))}
            />
            <Field
              id="date"
              label="Date"
              required
              type="date"
              value={form.date}
              onChange={(v) => setForm((p) => ({ ...p, date: v }))}
            />
          </div>
        </Card>

        {/* 1. Domain/Fund Info */}
        <Card title="1. Domain / Fund Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field
              id="fundName"
              label="Domain/Fund Name"
              required
              value={form.fundName}
              onChange={(v) => setForm((p) => ({ ...p, fundName: v }))}
            />
            <Field
              id="jurisdiction"
              label="Domain/Fund Jurisdiction/s"
              required
              value={form.jurisdiction}
              onChange={(v) => setForm((p) => ({ ...p, jurisdiction: v }))}
            />
            <div className="md:col-span-2">
              <Field
                id="fundCode"
                label="Domain/Fund Code (Fund ISIN No)"
                required
                value={form.fundCode}
                onChange={(v) => setForm((p) => ({ ...p, fundCode: v }))}
              />
              <p className="mt-2 text-xs text-slate-500">This can also be the Fund ISIN No.</p>
            </div>
          </div>

          <div className="mt-6" id="fundLogo_container">
            <UploadBox
              section="fundLogo"
              title="Domain/Fund Logo"
              required
              containerId="fundLogo_container"
              nameId="fundLogo_name"
              previewId="fundLogo_preview_container"
            />
          </div>

          <div className="mt-6">
            <div className="text-sm font-semibold text-slate-900">Domain/Fund Type</div>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
              <Toggle
                id="typeTraditional"
                label="Traditional"
                desc="Standard fund / domain setup"
                checked={form.typeTraditional}
                onChange={(v) => setForm((p) => ({ ...p, typeTraditional: v }))}
              />

              <div className="space-y-3">
                <Toggle
                  id="typeDigital"
                  label="Digital"
                  desc="Crypto / tokenized / digital asset"
                  checked={form.typeDigital}
                  onChange={toggleDigitalField}
                />

                <div id="digitalCurrencyField" className={showDigitalCurrency ? "" : "hidden"}>
                  <RequiredLabel htmlFor="tradingDigitalCurrency" required={form.typeDigital}>
                    Trading Digital Currency
                  </RequiredLabel>
                  <textarea
                    id="tradingDigitalCurrency"
                    value={form.tradingDigitalCurrency}
                    onChange={(e) => setForm((p) => ({ ...p, tradingDigitalCurrency: e.target.value }))}
                    placeholder="Please mention digital currency"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none
                    focus:bg-white focus:ring-2 focus:ring-teal-500/25 focus:border-teal-500"
                    rows={3}
                  />
                </div>
              </div>

              <Toggle
                id="typeHybrid"
                label="Hybrid"
                desc="Combination of traditional & digital"
                checked={form.typeHybrid}
                onChange={(v) => setForm((p) => ({ ...p, typeHybrid: v }))}
              />

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <Toggle
                  id="typeOthers"
                  label="Others"
                  desc="Specify if none apply"
                  checked={form.typeOthers}
                  onChange={(v) => setForm((p) => ({ ...p, typeOthers: v }))}
                />
                <input
                  id="otherType"
                  value={form.otherType}
                  onChange={(e) => setForm((p) => ({ ...p, otherType: e.target.value }))}
                  placeholder="Specify.."
                  className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none
                  focus:ring-2 focus:ring-teal-500/25 focus:border-teal-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-sm font-semibold text-slate-900">Class Type (If applicable)</div>
            <div className="mt-3 overflow-x-auto rounded-3xl border border-slate-200 bg-white">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Class Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Currency</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">ISIN No (If Any)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {([1, 2, 3, 4] as const).map((n) => (
                    <tr key={n}>
                      <td className="px-4 py-3">
                        <input
                          id={`classType${n}`}
                          value={(form as any)[`classType${n}`]}
                          onChange={(e) => setForm((p) => ({ ...(p as any), [`classType${n}`]: e.target.value }))}
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none
                          focus:bg-white focus:ring-2 focus:ring-teal-500/25 focus:border-teal-500"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          id={`currency${n}`}
                          value={(form as any)[`currency${n}`]}
                          onChange={(e) => setForm((p) => ({ ...(p as any), [`currency${n}`]: e.target.value }))}
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none
                          focus:bg-white focus:ring-2 focus:ring-teal-500/25 focus:border-teal-500"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          id={`isin${n}`}
                          value={(form as any)[`isin${n}`]}
                          onChange={(e) => setForm((p) => ({ ...(p as any), [`isin${n}`]: e.target.value }))}
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none
                          focus:bg-white focus:ring-2 focus:ring-teal-500/25 focus:border-teal-500"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6">
            <RequiredLabel htmlFor="fundDescriptionTextArea">Domain/Fund Description</RequiredLabel>
            <div className="text-xs text-slate-500 mt-1">The description will be displayed in the onboarding portal</div>
            <textarea
              id="fundDescriptionTextArea"
              value={form.fundDescriptionTextArea}
              onChange={(e) => setForm((p) => ({ ...p, fundDescriptionTextArea: e.target.value }))}
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none
              focus:bg-white focus:ring-2 focus:ring-teal-500/25 focus:border-teal-500"
              rows={4}
            />
          </div>
        </Card>

        {/* 2. Onboarding Setup */}
        <Card title="2. Customer Onboarding Setup (If Required)">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Toggle
              id="faceVerification"
              label="Face Verification"
              checked={form.faceVerification}
              onChange={(v) => setForm((p) => ({ ...p, faceVerification: v }))}
            />
            <Toggle
              id="vcip"
              label="VCIP (Video Based Customer Identification Process)"
              checked={form.vcip}
              onChange={(v) => setForm((p) => ({ ...p, vcip: v }))}
            />
            <div className="md:col-span-2">
              <Toggle
                id="pennyDrop"
                label="Penny Drop Verification (India only)"
                checked={form.pennyDrop}
                onChange={(v) => setForm((p) => ({ ...p, pennyDrop: v }))}
              />
            </div>

            <Toggle
              id="individual"
              label="Individual Onboarding module"
              checked={form.individual}
              onChange={(v) => setForm((p) => ({ ...p, individual: v }))}
            />
            <Toggle
              id="corporate"
              label="Corporate Onboarding module"
              checked={form.corporate}
              onChange={(v) => setForm((p) => ({ ...p, corporate: v }))}
            />
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-sm font-semibold text-slate-900">Entity Types</div>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { id: "privateCompany", label: "Private Company" },
                { id: "trustee", label: "Trustee" },
                { id: "partnership", label: "Partnership" },
                { id: "llc", label: "LLC" },
                { id: "llp", label: "LLP" },
                { id: "selfManaged", label: "Self-Managed Super Fund" },
                { id: "regulated", label: "Regulated Pool Investment Vehicle" },
                { id: "nonRegulated", label: "Non-Regulated Pool Investment Vehicle" },
                { id: "publicListed", label: "Public & Listed Companies" },
              ].map((x) => (
                <Toggle
                  key={x.id}
                  id={x.id}
                  label={x.label}
                  checked={(form as any)[x.id]}
                  onChange={(v) => setForm((p) => ({ ...(p as any), [x.id]: v }))}
                />
              ))}

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <Toggle
                  id="otherCheckbox"
                  label="Others"
                  checked={form.otherCheckbox}
                  onChange={(v) => setForm((p) => ({ ...p, otherCheckbox: v }))}
                />
                <textarea
                  id="entityTypeOthersTextArea"
                  value={form.entityTypeOthersTextArea}
                  onChange={(e) => setForm((p) => ({ ...p, entityTypeOthersTextArea: e.target.value }))}
                  placeholder="Specify.."
                  className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm outline-none
                  focus:bg-white focus:ring-2 focus:ring-teal-500/25 focus:border-teal-500"
                  rows={3}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: "jointAccount", label: "Joint Account Module" },
              { id: "governmentIntegration", label: "Government Integrations" },
              { id: "signpass", label: "Singpass (MyInfo / Corppass)" },
              { id: "panAadhar", label: "PAN / Adhaar" },
              { id: "documentDigitalisation", label: "Document Digitalisation" },
            ].map((x) => (
              <Toggle
                key={x.id}
                id={x.id}
                label={x.label}
                checked={(form as any)[x.id]}
                onChange={(v) => setForm((p) => ({ ...(p as any), [x.id]: v }))}
              />
            ))}
          </div>

          <div className="mt-6 space-y-4">
            <div id="subscriptionAgreement_container">
              <UploadBox
                section="subscriptionAgreement"
                title="Subscription Agreement"
                containerId="subscriptionAgreement_container"
                nameId="subscriptionAgreement_name"
                previewId="subscriptionAgreement_preview_container"
              />
            </div>

            <div id="additionalAgreement_container">
              <UploadBox
                section="additionalAgreement"
                title="Additional Subscription"
                containerId="additionalAgreement_container"
                nameId="additionalAgreement_name"
                previewId="additionalAgreement_preview_container"
              />
            </div>

            <div id="redemptionDocument_container">
              <UploadBox
                section="redemptionDocument"
                title="Redemption Document"
                containerId="redemptionDocument_container"
                nameId="redemptionDocument_name"
                previewId="redemptionDocument_preview_container"
              />
            </div>

            <div id="others_container">
              <UploadBox
                section="others"
                title="Others"
                containerId="others_container"
                nameId="others_name"
                previewId="others_preview_container"
                hint="Upload supporting docs (if any)."
              />
              <div className="mt-3">
                <RequiredLabel htmlFor="otherDocumentsTextArea">Others Notes</RequiredLabel>
                <textarea
                  id="otherDocumentsTextArea"
                  value={form.otherDocumentsTextArea}
                  onChange={(e) => setForm((p) => ({ ...p, otherDocumentsTextArea: e.target.value }))}
                  placeholder="Specify.."
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none
                  focus:bg-white focus:ring-2 focus:ring-teal-500/25 focus:border-teal-500"
                  rows={3}
                />
              </div>
            </div>

            <div id="referenceDocuments_container">
              <UploadBox
                section="referenceDocuments"
                title="Reference Documents (PPM / Fact Sheets etc.)"
                containerId="referenceDocuments_container"
                nameId="referenceDocuments_name"
                previewId="referenceDocuments_preview_container"
              />
            </div>
          </div>
        </Card>

        {/* 3. Management Portal Access */}
        <Card title="3. Management Portal Access (If Required)">
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <Toggle
                id="investorManager"
                label="Investor Manager Entity Name"
                checked={form.investorManager}
                onChange={(v) => setForm((p) => ({ ...p, investorManager: v }))}
              />
              <textarea
                id="investorManagerEntityTextArea"
                value={form.investorManagerEntityTextArea}
                onChange={(e) => setForm((p) => ({ ...p, investorManagerEntityTextArea: e.target.value }))}
                placeholder="Specify.."
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none
                focus:ring-2 focus:ring-teal-500/25 focus:border-teal-500"
                rows={4}
              />

              <div className="mt-5">
                <Toggle
                  id="imReadEmailsCheck"
                  label="IM Read Only Access (Provide emails)"
                  checked={form.imReadEmailsCheck}
                  onChange={(v) => setForm((p) => ({ ...p, imReadEmailsCheck: v }))}
                />
                <textarea
                  id="imReadEmailsTextArea"
                  value={form.imReadEmailsTextArea}
                  onChange={(e) => setForm((p) => ({ ...p, imReadEmailsTextArea: e.target.value }))}
                  placeholder="Specify.."
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none
                  focus:ring-2 focus:ring-teal-500/25 focus:border-teal-500"
                  rows={5}
                />
              </div>
            </div>

            <div id="entityLogo_container">
              <UploadBox
                section="entityLogo"
                title="Entity Logo"
                containerId="entityLogo_container"
                nameId="entityLogo_name"
                previewId="entityLogo_preview_container"
              />
            </div>

            <div id="verificationCheck" className="rounded-3xl border border-slate-200 bg-white p-5">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  id="verified"
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-teal-600"
                  checked={form.verified}
                  onChange={(e) => setForm((p) => ({ ...p, verified: e.target.checked }))}
                />
                <div className="text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">Confirmation</span>{" "}
                  <span className="text-red-500 font-semibold">*</span>
                  <div className="mt-1">
                    I have verified the requirements of the clients and have provided the necessary information for One
                    Constellation team to setup the fund/account.
                  </div>
                </div>
              </label>
            </div>

            <div className="flex justify-end">
              <button
                id="submitBtn"
                onClick={sendEmail}
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-bold text-white
                hover:bg-slate-800 transition disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Send Request"}
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}