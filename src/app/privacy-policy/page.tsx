import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy — Agentis Academy",
  description: "Privacy Policy and data protection standards for Agentis Academy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf9] text-[#171717]">
      <Header />

      <main className="max-w-[900px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-display text-[#ff6f1e] hover:underline mb-8"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="border-b border-[#171717]/15 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7efe9] border border-[#171717] text-xs font-semibold mb-4">
            <Shield size={14} className="text-[#22c55e]" />
            <span>Legal Compliance • DPDP & GDPR Compliant</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#2b1a07] tracking-tight">
            Privacy Policy
          </h1>
          <p className="font-display text-sm text-[#171717]/60 mt-2">
            Last Updated: March 1, 2026 • Effective Immediately
          </p>
        </div>

        <div className="space-y-8 font-display text-base text-[#171717]/85 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">1. Introduction</h2>
            <p>
              Agentis Academy (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and safeguarded when you visit our website (<strong>agentis.academy</strong>), enroll in our cohort courses, or purchase our digital curriculum passes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">2. Information We Collect</h2>
            <p className="mb-2">We collect only necessary information to deliver our educational programs and process payment transactions:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li><strong>Contact Information:</strong> Full name, email address, phone number, and company name.</li>
              <li><strong>Billing & Invoicing:</strong> Billing address and GSTIN (for Indian tax invoices). Payment details (card numbers, UPI VPA) are handled securely via PCI-DSS compliant payment gateways (Razorpay, Stripe) and are never stored on our servers.</li>
              <li><strong>Educational Activity:</strong> Attendance in live sessions, assignment submissions, and community interaction logs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>To provide, manage, and verify your enrollment in our courses and Discord community.</li>
              <li>To issue tax invoices and process transactions via authorized payment processors.</li>
              <li>To send critical operational updates, lecture links, syllabus code repositories, and schedule changes.</li>
              <li>To provide responsive academic and technical support.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">4. Information Sharing & Third Parties</h2>
            <p>
              We do not sell, rent, or trade your personal data. We disclose your information only to trusted service providers who adhere to strict data security standards:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm mt-2">
              <li><strong>Payment Processors:</strong> Razorpay, Stripe (for secure payment processing).</li>
              <li><strong>Learning Platforms:</strong> Zoom (for live lectures) and Discord / GitHub (for code repos & channels).</li>
              <li><strong>Legal Compliance:</strong> If mandated by law enforcement or regulatory authorities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">5. Data Security</h2>
            <p>
              All traffic is encrypted via TLS 1.3. We implement strict role-based access controls and adhere to industry standards to safeguard your data against unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">6. Your Rights</h2>
            <p>
              Under applicable Indian Information Technology Acts and DPDP regulations, you have the right to access, rectify, or request deletion of your personal information. To exercise these rights, email us at <a href="mailto:privacy@agentis.academy" className="text-[#ff6f1e] underline">privacy@agentis.academy</a>.
            </p>
          </section>

          <section className="p-6 rounded-[12px] bg-[#f7efe9] border border-[#171717]/20 mt-8">
            <h3 className="font-bold text-[#2b1a07] mb-2">Grievance & Privacy Officer</h3>
            <p className="text-sm">
              <strong>Agentis Academy</strong><br />
              Attn: Data Protection Officer<br />
              Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051, India<br />
              Email: <a href="mailto:privacy@agentis.academy" className="text-[#ff6f1e] underline">privacy@agentis.academy</a><br />
              Phone: +91 98200 41289
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
