import React from "react";
import Link from "next/link";
import { ArrowLeft, Zap, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Shipping & Delivery Policy — Agentis Academy",
  description: "Digital delivery policy and instant fulfillment SLA for Agentis Academy.",
};

export default function DeliveryPolicyPage() {
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
            <Zap size={14} className="text-[#ff6f1e]" />
            <span>Digital Delivery SLA • Zero Physical Shipping Fees</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#2b1a07] tracking-tight">
            Shipping & Delivery Policy
          </h1>
          <p className="font-display text-sm text-[#171717]/60 mt-2">
            Applicable to All Online Courses, Live Cohort Passes & Digital Assets
          </p>
        </div>

        <div className="space-y-8 font-display text-base text-[#171717]/85 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">1. Nature of Our Products</h2>
            <p>
              Agentis Academy exclusively provides <strong>digital educational services and digital content</strong>. We do not manufacture, package, or dispatch tangible physical merchandise. Consequently, <strong>no shipping, postage, or freight charges apply to any order</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">2. Delivery Method & SLA Timeline</h2>
            <p className="mb-2">
              All course access, software templates, community access tokens, and tax invoices are delivered electronically:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li><strong>Instant Fulfillment:</strong> Within <strong>5 minutes</strong> of successful payment confirmation via Razorpay or Stripe, you will receive an automated welcome email at the email address provided during checkout.</li>
              <li><strong>What is Delivered:</strong>
                <ul className="list-circle pl-5 mt-1 space-y-1">
                  <li>LMS learning portal account activation and login credentials.</li>
                  <li>Invite links to the private Discord server and student channels.</li>
                  <li>Calendar invitations with Zoom links for upcoming live weekend workshops.</li>
                  <li>GitHub repository access to starter code templates and tool boilerplate.</li>
                  <li>Official GST tax invoice in PDF format.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">3. Troubleshooting Electronic Delivery</h2>
            <p className="mb-2">If you have completed your purchase but have not received your onboarding email within 15 minutes:</p>
            <ol className="list-decimal pl-5 space-y-1.5 text-sm">
              <li>Check your Spam, Promotions, or Junk mail folders.</li>
              <li>Verify that the email address entered during checkout was free of typos.</li>
              <li>Contact our emergency fulfillment desk at <a href="mailto:support@agentis.academy" className="text-[#ff6f1e] underline">support@agentis.academy</a> or message us directly on WhatsApp at <strong>+91 98200 41289</strong>. We will verify your payment and re-issue your credentials immediately.</li>
            </ol>
          </section>

          <section className="p-6 rounded-[12px] bg-[#f7efe9] border border-[#171717]/20 mt-8">
            <h3 className="font-bold text-[#2b1a07] mb-2">Fulfillment Support Desk</h3>
            <p className="text-sm">
              <strong>Agentis Academy Operations</strong><br />
              Email: <a href="mailto:support@agentis.academy" className="text-[#ff6f1e] underline">support@agentis.academy</a><br />
              WhatsApp Helpline: +91 98200 41289<br />
              Hours: Monday – Saturday, 10:00 AM – 7:00 PM IST
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
