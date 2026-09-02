import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms & Conditions — AgentCraft Academy",
  description: "Terms of Service and enrollment agreement for AgentCraft Academy.",
};

export default function TermsPage() {
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
            <FileText size={14} className="text-[#3b82f6]" />
            <span>Merchant & Student Agreement</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#2b1a07] tracking-tight">
            Terms & Conditions
          </h1>
          <p className="font-display text-sm text-[#171717]/60 mt-2">
            Last Updated: March 1, 2026 • Effective Immediately
          </p>
        </div>

        <div className="space-y-8 font-display text-base text-[#171717]/85 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing our website (<strong>agentcraft.academy</strong>) or enrolling in any program, workshop, or digital course offered by AgentCraft Academy (&quot;Company,&quot; &quot;we,&quot; &quot;us&quot;), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services or purchase passes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">2. Educational Services & Digital Access</h2>
            <p className="mb-2">
              AgentCraft Academy provides professional online technical education regarding autonomous AI agents, workflow automation, and local model deployment:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>Access to live lectures, workshop recordings, curriculum repositories, and community communication channels is provided on a single-seat license basis.</li>
              <li>You may not redistribute, resell, sub-license, or publicly broadcast lecture recordings or proprietary code templates without explicit written consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">3. Payments, Pricing & Taxes</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>All pricing is clearly displayed in Indian Rupees (INR) or applicable international currencies.</li>
              <li>Goods and Services Tax (GST at 18%) is applied as required by Indian tax laws. A compliant B2B tax invoice with your company GSTIN is provided immediately upon checkout.</li>
              <li>Payments are processed securely through RBI-authorized payment aggregators (e.g. Razorpay, Stripe). We support UPI, Credit/Debit Cards, NetBanking, and authorized EMI options.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">4. Cancellation & Refund Policy</h2>
            <p>
              We offer a straightforward <strong>14-Day Money-Back Guarantee</strong>. If you attend the live cohort labs and find the course unsatisfactory within 14 calendar days of your cohort commencement date, you are eligible for a full 100% refund. For complete details, see our dedicated <Link href="/refund-policy" className="text-[#ff6f1e] underline">Refund & Cancellation Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">5. Intellectual Property Rights</h2>
            <p>
              All curriculum designs, lecture decks, audio-visual recordings, and proprietary starter frameworks are the exclusive intellectual property of AgentCraft Academy. Code created by you during your own lab assignments and projects belongs 100% to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">6. Governing Law & Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in <strong>Mumbai, Maharashtra, India</strong>.
            </p>
          </section>

          <section className="p-6 rounded-[12px] bg-[#f7efe9] border border-[#171717]/20 mt-8">
            <h3 className="font-bold text-[#2b1a07] mb-2">Corporate Information</h3>
            <p className="text-sm">
              <strong>AgentCraft Academy</strong><br />
              Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051, India<br />
              Email: <a href="mailto:legal@agentcraft.academy" className="text-[#ff6f1e] underline">legal@agentcraft.academy</a><br />
              Helpline: +91 98200 41289
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
