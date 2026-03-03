"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import React from "react"
import { CheckCircle2, Zap, Shield, TrendingUp, Users, Layers, Eye, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function KYCPage() {
  const { t } = useLanguage()


  const pills = 4
  const containerRef = React.useRef<HTMLDivElement | null>(null)

  const [metrics, setMetrics] = React.useState({
    pillW: 112,
    gap: 24,
    totalW: 112 * 4 + 24 * 3,
  })

  React.useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return

    const calc = () => {
      const pillEls = el.querySelectorAll<HTMLElement>("[data-pill]")
      if (pillEls.length < 2) return

      const r0 = pillEls[0].getBoundingClientRect()
      const r1 = pillEls[1].getBoundingClientRect()

      const pillW = r0.width
      const gap = Math.max(0, r1.left - r0.right) // real gap
      const totalW = pills * pillW + (pills - 1) * gap

      setMetrics({ pillW, gap, totalW })
    }

    calc()

    const ro = new ResizeObserver(() => calc())
    ro.observe(el)

    window.addEventListener("resize", calc)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", calc)
    }
  }, [])
  const baseH = 520 // reference height for background (matches tallest pill)


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-40 bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-medium leading-tight text-black">
                Terms of Service

              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-black max-w-xl leading-relaxed font-light"
              >
                One Constellation is committed to transparency in how personal information is handled through its services. By using our platform, you acknowledge and understand that we collect, use, and process personal data in accordance with applicable data protection laws and regulatory requirements.              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-black max-w-xl leading-relaxed font-light">
                We respect your right to understand how your personal data — including any sensitive information — is collected, used, stored, and shared. We implement appropriate technical and organizational safeguards to protect personal data against unauthorized access, disclosure, alteration, or misuse.
              </motion.p>

              {/* <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                <Link href="/book-demo">
                  <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-500 hover:to-teal-500 text-slate-900 font-semibold shadow-lg shadow-cyan-400/50 transition-all">
                    {t("requestDemo")}
                  </Button>
                </Link>
              </motion.div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex justify-center items-center h-[520px]"
            >
              <div ref={containerRef} className="relative flex gap-6">
                {Array.from({ length: pills }).map((_, i) => {
                  const pillH = i % 2 === 0 ? 520 : 420
                  const xOffset = i * (metrics.pillW + metrics.gap)

                  return (
                    <motion.div
                      key={i}
                      data-pill
                      animate={{ y: [0, -12, 0] }}
                      transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
                      className="relative w-28 md:w-36 rounded-[80px] overflow-hidden shadow-2xl bg-slate-800"
                      style={{ height: `${pillH}px` }}
                    >
                      {/* ✅ Perfect continuous panorama */}
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: "url('/terms.jpg')",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: `${metrics.totalW}px ${baseH}px`,
                          backgroundPosition: `-${xOffset}px 0px`,
                        }}
                      />

                      {/* Optional: subtle glass overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                  )
                })}
              </div>

              {/* Ambient Glow */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-cyan-400/20 via-transparent to-teal-400/20 blur-[140px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4  space-y-14">

          <p className="text-sm text-slate-500">
            Version Date: May 19, 2025
          </p>

          {/* 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              1. Access to our Platform and Services
            </h2>
            <p className="text-slate-700 leading-relaxed">
              One Constellation is a brand operating under ASCENT GLOBAL FINTECH SOLUTIONS PTE. LTD., a company incorporated in Singapore with its registered office at 8 Temasek Boulevard, #34-03, Suntec Tower Three, Singapore 038988. In these Terms of Use, references to “we” or “us” refer to One Constellation.


            </p>
            <p className="text-slate-700 leading-relaxed">
              Access to and use of the protected and/or secure areas of the Platform are restricted to Authorized Users (defined below) only. You may not obtain or attempt to obtain unauthorized access to such parts of our Platform, or to any other protected information, through any means not intentionally made available by us for Your specific use. A breach of this provision may be an offence under the Computer Misuse Act (Cap. 50A) of Singapore (as may be amended or re-enacted).


            </p>
            <p className="text-slate-700 leading-relaxed">
              If You are below 18 years old, You must not use or access our Platform.


            </p>
            <p className="text-slate-700 leading-relaxed">
              By accessing or using our Platform, You accept and agree to be legally bound by these Terms of Use. If You do not agree to be bound by these Terms of Use, please refrain from accessing or using our Platform.


            </p>
            <p className="text-slate-700 leading-relaxed">
              We may revise these Terms of Use at any time by amending this page. You are expected to check this page from time to time to take notice of any changes we have made, as they are binding on You. Some of the provisions contained in these Terms of Use may also be superseded by provisions or notices published elsewhere on our Platform. Your continued access and/or use of our Platform following any amendment of these Terms of Use will signify Your assent to and acceptance of its revised terms.

            </p>
            <p className="text-slate-700 leading-relaxed">
              If you have any comments or questions about these Terms of Use of our Platform,
              please contact us at{" "}
              <a
                href="mailto:info@one-constellation.com"
                className="text-accent hover:underline font-medium"
              >
                info@one-constellation.com
              </a>.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <span className="font-semibold">License:</span>{" "}
              Company grants you a non-exclusive, non-transferable, revocable license to use the themes for your personal or commercial websites, subject to the limitations specified in these Terms.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <span className="font-semibold">Updates:</span>{" "}
              You are entitled to receive updates for purchased themes for one year from the date of purchase. After that period, you may renew your license for continued access to updates.
            </p>
          </div>

          {/* 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              2. Access to our Platform and Services

            </h2>
            <p className="text-slate-700 leading-relaxed">
              We license the access and use of our Platform to external fund managers to provide informational and administrative services and tools to their clients, employees and other users (“Authorized Users”). We also work with third-party organizations, e.g. DocuSign and Dow Jones, through API integration or manual informational input into our Platform. You are permitted to access and/or our Platform subject to such licensing or other contractual arrangement(s), and we reserve the right to withdraw or amend access to or use of our Platform for any reason without notice. We will not be liable to You or any third party if for any reason our Platform is unavailable at any time or for any period. We shall not at any time be obliged to provide any adaptations, enhancements and/or modifications to our Platform, including without limitation any updates, patches, bug-fixes and/or upgrades to our Platform or any new versions and/or releases of our Platform or its software or content which incorporate new features or functions.



            </p>

          </div>



          <p className="text-slate-700 leading-relaxed">
            You may use our Platform only for lawful purposes. You will not use our Platform:

          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>In any way that breaches any applicable law, regulation or code of practice.</li>
            <li>In any way that breaches any applicable law, regulation or code of practice</li>
            <li>To transmit, or procure the sending of, any unsolicited or unauthorized advertising or promotional material or any other form of similar solicitation (spam)</li>
            <li>To generate and/or cause congestion to our network traffic in excess of reasonable and normal usage.</li>
            <li>To cause any disruption, interference, interruption or degradation in our network and/or our Platform</li>
            <li>To knowingly transmit any data, send or upload any material that contains any viruses, trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other technologically harmful programs, data or code</li>

          </ul>


          <p className="text-slate-700 leading-relaxed">
            You further agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Provide, make available to, or permit individuals other than authorized Users to use or access our Platform, in whole or in part.
            </li>
            <li>Copy, reproduce, republish, upload, post, or transmit our Platform, its software and/or its content, or in any way infringe our Intellectual Property Rights.</li>
            <li>Information obtained from publicly available sources.</li>
            <li>license, sell, resell, rent, lease, transfer, distribute, or otherwise transfer rights to our Platform other than as authorized under these Terms of Use
            </li>
            <li>Modify, translate, reverse engineer, decompile, disassemble, create derivative works, or otherwise attempt to derive or discover a part of or the entire source code of our Platforms. any proprietary notices or labels on our Platform, unless authorized by us in writing.</li>
            <li>Use our Platform to store or transmit infringing, libellous, unlawful or tortious material, or to store or transmit material in violation of third-party rights, including privacy rights
            </li>
            <li>Use our Platform to violate any rights of others
            </li>
            <li>Use our Platform to store or transmit malicious code, Trojan horses, malware, spam, viruses or other destructive technology (“Viruses”)
            </li>

            <li>Interfere with, impair, or disrupt the integrity or performance of our Platform or any other third party’s use of our Platform
            </li>
            <li>Use our Platform in a manner that results in excessive use, bandwidth or storage; or</li>
            <li>Alter, circumvent or provide the means to alter or circumvent our Platform, including technical limitations, recurring fees, or usage limits.
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            You acknowledge, agree and warrant that:

          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>You will be responsible for Your activity and compliance with these Terms of Use
            </li>
            <li>You will be responsible for the performance and security (including without limitation) taking all necessary measures to the extent reasonably possible to prevent unauthorized use or access, and observing in a timely manner any relevant security measures specified by us from time to time of any software, hardware or equipment used by You in connection with our Platform
            </li>
            <li>To the best of Your knowledge, Your software, hardware or equipment through which access to the our Platform may be effected, is free from any electronic, mechanical, data failure or corruption, computer viruses, bugs and/or harmful or malicious software of any kind whatsoever
            </li>
            <li>You will be solely responsible and liable for all losses and consequences arising from or in connection with any failure by You to comply with any of the foregoing
            </li>
            <li>You will comply with all applicable laws; and
            </li>
            <li>The information You have provided us, including but not limited to registration information and financial information provided to our Platform, are accurate, complete and current for as long as You are accessing and/or using our Platform.
            </li>
          </ul>


          {/* 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              3. Data Protection and Privacy Terms
            </h2>
            <p className="text-slate-700 leading-relaxed">
              You acknowledge and agree that we collect, use, disclose and/or process any personal data we may collect from You (including personal data relating to a third party that You provide to us) in connection with our Platform in accordance with our Privacy Policy. You acknowledge that You have accessed and read the Privacy Policy and have explicitly agreed to the terms set out in it.


            </p>
            <p className="text-slate-700 leading-relaxed">
              By accessing and using our Platform, You consent to us, our related corporations, and our respective agents, authorised service providers and business partners (collectively, the “Representatives”) collecting, using and disclosing Your personal data for purposes set out in our Privacy Policy, as may be updated and/or amended us from time to time, and which You confirm You have read, understood and agreed to.
            </p>
            <p className="text-slate-700 leading-relaxed">
              If You are located in the European Economic Area, please take note that, for the purposes of our compliance with the EU’s General Data Protection Regulation, and notwithstanding anything in these Terms of Use to the contrary, we do not seek agreement to our Privacy Policy or consent to collect, use, disclose or process any personal data either (i) from You in respect of Your personal data; or (ii) from any person whom You authorise or permit to access our services or whose personal data You provide to us. We rely on the legal bases set out in the EU General Data Protection Regulations Privacy Notice [insert link to notice page] to collect, use or process such personal data in the manner and for the purposes set out within such policy to provide You with the services specified
            </p>
            <p className="text-slate-700 leading-relaxed">
              You acknowledge and confirm that You have informed any individual of his/her inclusion for the services specified in these Terms of Use and confirm that they know You have done this and have not objected to You giving us their information for such purpose.
            </p>
            <p className="text-slate-700 leading-relaxed">
              You additionally confirm that You have made them aware of the EU General Data Protection Regulations Privacy Notice.
              If You are located in the Hong Kong Special Administrative Region of the People’s Republic of China (“HKSAR”), Your Personal Data will be protected in accordance with the Personal Data (Privacy) Ordinance (Cap. 486) of Hong Kong (as may be amended or re-enacted).
            </p>
            <p className="text-slate-700 leading-relaxed">
              You consent to receiving SMS OTP (being a one-time use personal identification number) assigned by us through short message service to be used for access to our Platform for Yourself and You consent to Your mobile number(s) being used by us for the purposes of providing the SMS OTP to You.


            </p>
            <p className="text-slate-700 leading-relaxed">
              You consent to Your mobile number(s) and email address(es) being used by us for the purposes of providing You with alerts and notifications which are determined by the Bank from time to time as being relevant or useful to You.
            </p>
            <p className="text-slate-700 leading-relaxed">
              In addition, You consent to our systems being programmed to gather certain anonymous data to help us understand how our Platform is being used and how we can improve it. This automatically gathered data includes Your device’s IP or “Internet Protocol” address, statistics about how You navigate through our Platform, and information provided through the use of “cookies”.
            </p>
          </div>

          {/* 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              5. Disclosure of Personal Information
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We may share personal information with service providers, partners,
              affiliates, and authorities where required, always subject to
              contractual and legal safeguards. Personal data is never sold.
            </p>
          </div>

          {/* 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              4. Intellectual Property Rights
            </h2>

            <p className="text-slate-700 leading-relaxed">
              We are the owner or licensee of all intellectual property rights in our Platform and its content. Nothing in these Terms shall be construed as an assignment or transfer of any such rights. All rights are expressly reserved.
            </p>

            <p className="text-slate-700 leading-relaxed">
              “Intellectual Property Rights” include copyrights, rights in software and databases, patents, trademarks, domain names, designs, know-how, trade secrets, confidential information, and all similar rights worldwide, whether registered or unregistered.
            </p>

            <p className="text-slate-700 leading-relaxed">
              You may print or download extracts for personal use only, provided that you do not modify content, remove proprietary notices, or use graphics separately from accompanying text.
            </p>

            <p className="text-slate-700 leading-relaxed">
              No license is granted to use trademarks, trade names, or logos displayed on the Platform without prior written consent.
            </p>
          </div>

          {/* 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              5. Our Liability
            </h2>

            <p className="text-slate-700 leading-relaxed">
              Our Platform is provided “as is” without warranties of any kind, express or implied. We do not guarantee uninterrupted, secure, or error-free access.
            </p>

            <p className="text-slate-700 leading-relaxed">
              To the maximum extent permitted by law, we exclude liability for:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Any direct or indirect loss arising from use or inability to use the Platform;</li>
              <li>Loss of data, revenue, profits, contracts, or business opportunities;</li>
              <li>Malware, viruses, or harmful code transmitted by third parties;</li>
              <li>Content posted by users or third-party websites linked from our Platform.</li>
            </ul>

            <p className="text-slate-700 leading-relaxed">
              Nothing excludes liability for death, personal injury caused by negligence, fraud, or any liability that cannot legally be excluded.
            </p>
          </div>

          {/* 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              6. Breach of Terms
            </h2>

            <p className="text-slate-700 leading-relaxed">
              If we determine that you have breached these Terms, we may take appropriate action, including suspension or termination of access.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Temporary or permanent removal of access;</li>
              <li>Issuance of warnings;</li>
              <li>Legal proceedings for recovery of damages or costs;</li>
              <li>Disclosure of information to authorities where required by law.</li>
            </ul>

            <p className="text-slate-700 leading-relaxed">
              You agree to indemnify and hold us harmless against any claims, damages, or expenses arising from your breach of these Terms.
            </p>
          </div>

          {/* 7 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              7. Reservation of Rights
            </h2>

            <p className="text-slate-700 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue the Platform or any part thereof at any time without prior notice.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Access to certain features may be restricted to authorized users. We may monitor, remove, restrict, suspend, or terminate accounts at our discretion.
            </p>
          </div>

          {/* 8 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              8. Links to Third Party Sites
            </h2>

            <p className="text-slate-700 leading-relaxed">
              Our Platform may contain links to third-party websites. These links are provided for convenience only and do not constitute endorsement.
            </p>

            <p className="text-slate-700 leading-relaxed">
              We are not responsible for the content, policies, or practices of third-party websites and shall not be liable for any loss arising from their use.
            </p>
          </div>

          {/* 9 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              9. Termination
            </h2>

            <p className="text-slate-700 leading-relaxed">
              We may terminate or suspend your access immediately upon notice if you breach these Terms.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Upon termination, all rights granted to you shall cease immediately.
            </p>
          </div>

          {/* 10 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              10. Governing Law
            </h2>

            <p className="text-slate-700 leading-relaxed">
              These Terms are governed by the laws of Singapore. The courts of Singapore shall have exclusive jurisdiction over disputes arising from these Terms.
            </p>
          </div>

          {/* 11 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              11. General Provisions
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Force Majeure:</strong> We are not liable for failures caused by events beyond our control.</li>
              <li><strong>Severability:</strong> If any provision is invalid, the remaining provisions remain enforceable.</li>
              <li><strong>Non-Waiver:</strong> Delay in enforcing rights does not constitute waiver.</li>
            </ul>
          </div>

          {/* 12 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              12. Reliance on Information
            </h2>

            <p className="text-slate-700 leading-relaxed">
              Information provided on our Platform is for general informational purposes only and does not constitute legal, financial, or investment advice.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Any reliance on information provided is at your own risk.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24 fintech-gradient">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-medium">
              For More Information
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mx-auto">
              If you would like more information on One Constellation's privacy notice, please contact us.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-accent hover:bg-accent/90 text-white">
                  {t("Contact Us")}
                </Button>
              </Link>
              {/* <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-2">
                  Contact Us
                </Button>
              </Link> */}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
