import React from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Refund & Cancellation Policy — Agentis Academy",
  description: "14-Day Money-Back Guarantee and transparent refund policy for Agentis Academy.",
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
            <span>100% Student Protection Policy</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#2b1a07] tracking-tight">
            Refund & Cancellation Policy
          </h1>
          <p className="font-display text-sm text-[#171717]/60 mt-2">
            Effective Date: March 1, 2026 • 14-Day Money-Back Guarantee
          </p>
        </div>

        <div className="space-y-8 font-display text-base text-[#171717]/85 leading-relaxed">
          {/* Highlight Banner */}
          <div className="p-6 rounded-[16px] bg-[#fdfbf9] border-[1.5px] border-[#171717] shadow-[rgba(0,0,0,0.15)_0px_2px_8px_0px]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#22c55e]/20 border border-[#171717] flex items-center justify-center shrink-0">
                <CheckCircle2 size={22} className="text-[#15803d]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2b1a07] mb-1">
                  14-Day 100% Money-Back Guarantee
                </h3>
                <p className="text-sm text-[#171717]/80 leading-relaxed">
                  We are engineers who pride ourselves on delivering the most rigorous production-grade AI curriculum available. If you attend the live labs during the first 14 days and decide the course is not for you, we will issue a complete 100% refund — no questions asked, no friction.
                </p>
              </div>
            </div>
          </div>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">1. Eligibility Timeline</h2>
            <p>
              You may request a full refund within <strong>14 calendar days</strong> from the official kickoff date of your enrolled cohort. For self-paced standalone track passes, refund requests must be initiated within <strong>7 calendar days</strong> of purchase, provided less than 25% of course content has been accessed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">2. How to Request a Refund</h2>
            <p className="mb-3">Initiating a refund is straightforward:</p>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Send an email to <a href="mailto:refunds@agentis.academy" className="text-[#ff6f1e] underline">refunds@agentis.academy</a> from the email address used during purchase.</li>
              <li>Include your full name, registered phone number, and Order / Payment ID (from your invoice receipt).</li>
              <li>Our support desk will acknowledge your request within 24 business hours.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">3. Refund Processing & Bank Timelines</h2>
            <p>
              Once approved, your refund is processed immediately via our payment gateway (Razorpay/Stripe). The funds will reflect in your original payment method (Credit Card, Debit Card, NetBanking, or UPI) within <strong>5 to 7 banking business days</strong>, depending on your card issuer or banking partner.
            </p>
          </section>

          <section className="p-6 rounded-[12px] bg-[#f7efe9] border border-[#171717]/20 mt-8">
            <h3 className="font-bold text-[#2b1a07] mb-2">Refund Helpdesk</h3>
            <p className="text-sm">
              Email: <a href="mailto:refunds@agentis.academy" className="text-[#ff6f1e] underline">refunds@agentis.academy</a><br />
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
