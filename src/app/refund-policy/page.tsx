import React from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Refund & Cancellation Policy — AgentCraft Academy",
  description: "14-Day Money-Back Guarantee and cancellation terms for AgentCraft Academy.",
};

export default function RefundPolicyPage() {
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
            <RefreshCw size={14} className="text-[#22c55e]" />
            <span>100% Student Protection Guarantee</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#2b1a07] tracking-tight">
            Refund & Cancellation Policy
          </h1>
          <p className="font-display text-sm text-[#171717]/60 mt-2">
            Clear, transparent policies compliant with Indian Consumer Protection guidelines.
          </p>
        </div>

        <div className="space-y-8 font-display text-base text-[#171717]/85 leading-relaxed">
          {/* Highlight Box */}
          <div className="p-6 rounded-[14px] bg-[#f7efe9] border-2 border-[#171717] flex items-start gap-4">
            <CheckCircle2 size={24} className="text-[#22c55e] mt-0.5 shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-[#2b1a07] mb-1">Our 14-Day Money-Back Guarantee</h2>
              <p className="text-sm text-[#171717]/80 leading-relaxed">
                We believe in the real-world engineering value of our curriculum. If you attend our live weekend cohort sessions during the first 14 calendar days and conclude that this program does not deliver high leverage for your engineering career, we will issue a full 100% refund — no interrogation.
              </p>
            </div>
          </div>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">1. Refund Eligibility Window</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong>Live Cohort Passes (Builder Lab / Fellowship):</strong> You have <strong>14 calendar days</strong> from the official cohort kickoff date to request a full refund.
              </li>
              <li>
                <strong>Self-Paced Tracks (Starter Pass):</strong> You have <strong>7 calendar days</strong> from the timestamp of purchase to request a full refund, provided less than 25% of video lessons have been marked completed.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">2. How to Request a Refund</h2>
            <p className="mb-2">Requesting a refund takes less than 2 minutes:</p>
            <ol className="list-decimal pl-5 space-y-1.5 text-sm">
              <li>Send an email from your registered purchase email address to <a href="mailto:refunds@agentcraft.academy" className="text-[#ff6f1e] underline">refunds@agentcraft.academy</a> or drop a WhatsApp message to <strong>+91 98200 41289</strong>.</li>
              <li>Mention your full name, Order / Payment ID, and registered phone number.</li>
              <li>A brief sentence of feedback is appreciated to help us improve, but is completely optional.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">3. Processing Time & Settlement</h2>
            <p>
              Once initiated, our finance team approves eligible refund requests within <strong>24 business hours</strong>. The refunded amount will be credited back to your original source of payment (UPI account, Credit/Debit Card, or NetBanking bank account) within <strong>5 to 7 banking business days</strong>, in compliance with RBI / Payment Gateway (Razorpay/Stripe) timelines.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">4. Cancellation & Cohort Transfers</h2>
            <p>
              If unexpected work emergencies or family commitments arise, you may request to pause your enrollment and transfer to the subsequent cohort batch at zero additional cost, provided you inform us prior to Week 3 of the current cohort.
            </p>
          </section>

          <section className="p-6 rounded-[12px] bg-[#f7efe9] border border-[#171717]/20 mt-8">
            <h3 className="font-bold text-[#2b1a07] mb-2">Dedicated Refund Helpdesk</h3>
            <p className="text-sm">
              <strong>AgentCraft Academy Student Accounts</strong><br />
              Email: <a href="mailto:refunds@agentcraft.academy" className="text-[#ff6f1e] underline">refunds@agentcraft.academy</a><br />
              WhatsApp / Helpline: +91 98200 41289<br />
              Operating Hours: Monday – Saturday, 10:00 AM – 7:00 PM IST
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
