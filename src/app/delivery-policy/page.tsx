import React from "react";
import Link from "next/link";
import { ArrowLeft, Zap, Mail, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Digital Delivery & Fulfillment Policy — AgentCraft Academy",
  description: "Digital course fulfillment timeline and access delivery policy.",
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
            <span>Instant Digital Delivery SLA</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#2b1a07] tracking-tight">
            Shipping & Delivery Policy
          </h1>
          <p className="font-display text-sm text-[#171717]/60 mt-2">
            Applicable to all digital courses, cohort passes, and technical resources.
          </p>
        </div>

        <div className="space-y-8 font-display text-base text-[#171717]/85 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">1. Nature of Products</h2>
            <p>
              AgentCraft Academy exclusively offers <strong>digital educational services</strong>, live cohort workshops, recorded video lectures, Notion templates, and downloadable software repositories. We do not manufacture or ship physical physical parcels or tangible merchandise. Consequently, no physical postal shipping fees are levied.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">2. Delivery Method & Timeline</h2>
            <p className="mb-3">
              Delivery is 100% electronic and instantaneous upon successful completion of your payment:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-[12px] bg-[#f7efe9] border border-[#171717]/20">
                <div className="flex items-center gap-2 font-bold text-[#2b1a07] mb-1">
                  <Clock size={16} className="text-[#ff6f1e]" />
                  <span>Instant Delivery (0 to 5 Minutes)</span>
                </div>
                <p className="text-xs text-[#171717]/75 leading-relaxed">
                  Upon payment confirmation, an automated onboarding welcome email is triggered containing your LMS dashboard credentials, Discord invite link, and GST tax invoice.
                </p>
              </div>

              <div className="p-5 rounded-[12px] bg-[#f7efe9] border border-[#171717]/20">
                <div className="flex items-center gap-2 font-bold text-[#2b1a07] mb-1">
                  <Mail size={16} className="text-[#22c55e]" />
                  <span>GitHub Repository Invitations</span>
                </div>
                <p className="text-xs text-[#171717]/75 leading-relaxed">
                  Access invitations to private curriculum repositories (LangGraph templates, FastMCP boilerplate) are dispatched within 2 hours of submitting your GitHub handle.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">3. What to Do If You Do Not Receive Your Email</h2>
            <p className="mb-2">
              In rare instances, automated confirmation emails may be routed to Spam or Promotional folders. If you have not received your enrollment confirmation within 15 minutes of payment:
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Check your email Spam / Junk / Promotions tab for messages from <strong>enroll@agentcraft.academy</strong>.</li>
              <li>Confirm that the email entered during checkout was accurate.</li>
              <li>Contact our emergency operations desk via WhatsApp at <strong>+91 98200 41289</strong> or email <strong>support@agentcraft.academy</strong> with your Payment ID for immediate manual provisioning.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2b1a07] mb-3">4. Lifetime Updates</h2>
            <p>
              Enrolled students enjoy lifetime access to curriculum revisions, updated code templates, and migration guides as underlying AI models release new updates.
            </p>
          </section>

          <section className="p-6 rounded-[12px] bg-[#f7efe9] border border-[#171717]/20 mt-8">
            <h3 className="font-bold text-[#2b1a07] mb-2">Fulfillment Support</h3>
            <p className="text-sm">
              <strong>AgentCraft Academy Digital Dispatch Team</strong><br />
              Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051, India<br />
              Email: <a href="mailto:support@agentcraft.academy" className="text-[#ff6f1e] underline">support@agentcraft.academy</a><br />
              Phone / WhatsApp: +91 98200 41289
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
