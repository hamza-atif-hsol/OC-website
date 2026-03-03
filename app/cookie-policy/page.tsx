import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy - One Constellation",
  description:
    "One Constellation Privacy Policy describing how we collect, use, share, and protect your personal data, including cookies and your rights.",
}

type TocItem = { id: string; label: string }

const TOC: TocItem[] = [
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "how-we-collect", label: "How We Collect Your Information" },
  { id: "how-we-protect", label: "How We Protect Your Information" },
  { id: "sharing", label: "Sharing and Disclosure of Information" },
  { id: "cookies", label: "Cookies and Tracking Technologies" },
  { id: "rights", label: "Your Rights and Choices" },
  { id: "retention", label: "Data Retention" },
  { id: "international", label: "International Data Transfers" },
  { id: "updates", label: "Updates to This Privacy Policy" },
]

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-[15px] md:text-base font-semibold text-slate-900">
        {title}
      </h2>
      <div className="mt-3 text-sm leading-6 text-slate-600">{children}</div>
      <div className="mt-8 border-b border-slate-200/70" />
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-2">
      {items.map((x, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      {/* Header strip (matches screenshot style) */}
      <section className="border-b border-slate-200 bg-slate-50/60">
        <div className="container mx-auto px-4">
          <div className="py-10 md:py-12 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
              Privacy Policy
            </h1>
            <p className="mt-2 text-xs text-slate-500">
              Last modified: November 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left TOC */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <nav className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="text-xs font-semibold text-slate-900">
                    Privacy Policy
                  </div>
                  <div className="mt-3 space-y-2">
                    {TOC.map((x) => (
                      <a
                        key={x.id}
                        href={`#${x.id}`}
                        className="block text-xs text-slate-600 hover:text-slate-900 transition"
                      >
                        {x.label}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </aside>

            {/* Right content */}
            <div className="lg:col-span-9">
              <div className="max-w-3xl">
                {/* Intro (matches PDF top text) */}
                <p className="text-sm leading-6 text-slate-600">
                  Welcome to One Constellation. Your privacy is important to us,
                  and we are committed to protecting the personal information you
                  share with us. This Privacy Policy explains how One
                  Constellation (“we,” “us,” or “our”) collects, uses, and
                  safeguards your personal information.
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  By accessing our website and using our services, you consent to
                  the collection, use, and disclosure of your personal data as
                  described in this Privacy Policy.
                </p>

                <div className="mt-8 border-b border-slate-200/70" />

                <div className="mt-8 space-y-8">
                  <Section id="information-we-collect" title="Information We Collect">
                    <p>We collect personal data for a specific purpose to us, including when you:</p>
                    <BulletList
                      items={[
                        "Register for our services",
                        "Subscribe to our newsletter",
                        "Contact us for inquiries or support",
                        "Participate in surveys, events, or promotions",
                        "Apply for a job or partnership opportunity",
                      ]}
                    />
                    <p className="mt-4">
                      The types of personal data we collect may include:
                    </p>
                    <BulletList
                      items={[
                        "Name, contact number, and email address",
                        "Business/company details (if applicable)",
                        "IP address and browser details for security and analytics",
                        "Payment and billing information (if applicable)",
                      ]}
                    />
                    <p className="mt-4">
                      Additionally, we may collect anonymized data, such as website
                      usage metrics, to improve our services.
                    </p>
                  </Section>

                  <Section id="how-we-use" title="How We Use Your Information">
                    <p>We use your personal data to:</p>
                    <BulletList
                      items={[
                        "Provide and manage our services",
                        "Respond to inquiries and provide customer support",
                        "Improve our website and user experience",
                        "Send you relevant updates, newsletters, or promotional materials",
                        "Conduct research, analytics, and troubleshooting",
                        "Comply with legal obligations and regulatory requirements",
                      ]}
                    />
                    <p className="mt-4">
                      If you have subscribed to communications, you may opt out at
                      any time by contacting us at{" "}
                      <a className="text-slate-900 font-medium hover:underline" href="mailto:info@one-constellation.com">
                        info@one-constellation.com
                      </a>
                      .
                    </p>
                  </Section>

                  <Section id="how-we-collect" title="How We Collect Your Information">
                    <p>We collect personal data through various means, including:</p>
                    <BulletList
                      items={[
                        "Direct interactions (e.g., filling out forms, sending emails, or making inquiries)",
                        "Automated technologies (e.g., website analytics, cookies, and tracking tools)",
                        "Third-party partners who help us operate our business",
                      ]}
                    />
                  </Section>

                  <Section id="how-we-protect" title="How We Protect Your Information">
                    <p>
                      We implement strict security measures to protect your
                      personal data against unauthorized access, alteration, or
                      disclosure. These measures include:
                    </p>
                    <BulletList
                      items={[
                        "Secure servers and encryption technologies",
                        "Access controls and authentication procedures",
                        "Regular system monitoring and security audits",
                      ]}
                    />
                    <p className="mt-4">
                      While we take every reasonable precaution to safeguard your
                      information, no method of data transmission over the
                      internet is 100% secure. We encourage you to take additional
                      precautions when sharing personal data online.
                    </p>
                  </Section>

                  <Section id="sharing" title="Sharing and Disclosure of Information">
                    <p>
                      We do not sell or trade your personal data. However, we may
                      share your information with trusted third parties under the
                      following circumstances:
                    </p>
                    <BulletList
                      items={[
                        "Service Providers: To help us deliver our services, such as payment processors, IT support, and marketing platforms.",
                        "Legal and Regulatory Authorities: If required to comply with applicable laws, regulations, or legal processes.",
                        "Business Transfers: If our company undergoes a merger, acquisition, or sale of assets, your data may be transferred as part of the transaction.",
                      ]}
                    />
                  </Section>

                  <Section id="cookies" title="Cookies and Tracking Technologies">
                    <p>
                      Our website uses cookies to enhance your browsing
                      experience. These cookies help us analyze web traffic,
                      personalize content, and improve functionality. You can
                      manage your cookie preferences through your browser
                      settings.
                    </p>
                    <p className="mt-4">
                      For more information on how we use cookies, please contact{" "}
                      <a className="text-slate-900 font-medium hover:underline" href="mailto:info@one-constellation.com">
                        info@one-constellation.com
                      </a>
                      .
                    </p>
                  </Section>

                  <Section id="rights" title="Your Rights and Choices">
                    <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                    <BulletList
                      items={[
                        "Access & Correction: Request access to your personal data and correct any inaccuracies.",
                        "Data Deletion: Request that we delete your personal data, subject to legal and contractual obligations.",
                        "Opt-Out: Unsubscribe from marketing emails at any time.",
                        "Restriction & Objection: Request restrictions on processing or object to certain uses of your personal data.",
                      ]}
                    />
                    <p className="mt-4">
                      To exercise these rights, please contact us at{" "}
                      <a className="text-slate-900 font-medium hover:underline" href="mailto:info@one-constellation.com">
                        info@one-constellation.com
                      </a>
                      .
                    </p>
                  </Section>

                  <Section id="retention" title="Data Retention">
                    <p>
                      We retain your personal data only for as long as necessary
                      to fulfill the purposes outlined in this Privacy Policy or
                      as required by law. Once data is no longer needed, it is
                      securely deleted or anonymized.
                    </p>
                  </Section>

                  <Section id="international" title="International Data Transfers">
                    <p>
                      Your data may be transferred and stored in locations
                      outside your country of residence, including jurisdictions
                      that may not provide the same level of data protection. We
                      ensure appropriate safeguards are in place to protect your
                      personal data when transferred internationally.
                    </p>
                  </Section>

                  <Section id="updates" title="Updates to This Privacy Policy">
                    <p>
                      We may update this Privacy Policy periodically to reflect
                      changes in our practices or legal requirements. Any updates
                      will be posted on this page, and we encourage you to review
                      it regularly.
                    </p>
                    <p className="mt-4">
                      If you have any questions about this Privacy Policy, please
                      contact us at:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="text-sm">
                        <span className="font-medium text-slate-900">Email:</span>{" "}
                        <a className="text-slate-700 hover:underline" href="mailto:info@one-constellation.com">
                          info@one-constellation.com
                        </a>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-slate-900">Website:</span>{" "}
                        <Link className="text-slate-700 hover:underline" href="/">
                          one-constellation.com
                        </Link>
                      </div>
                    </div>

                    {/* <div className="mt-6">
                      <Link
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }}
                        className="inline-flex text-sm font-semibold text-slate-900 hover:underline"
                      >
                        Back to top
                      </Link>
                    </div> */}
                  </Section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}