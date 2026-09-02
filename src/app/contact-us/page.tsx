import React from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Mail, Phone, Clock, MessageSquare } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PillButton from "@/components/ui/PillButton";

export const metadata = {
  title: "Contact Us — AgentCraft Academy",
  description: "Official contact information, registered office, and customer care for AgentCraft Academy.",
};

export default function ContactUsPage() {
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
            <MessageSquare size={14} className="text-[#ff6f1e]" />
            <span>Support & Admissions Desk</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#2b1a07] tracking-tight">
            Contact Us
          </h1>
          <p className="font-display text-base text-[#171717]/70 mt-2">
            Have questions regarding our curriculum, GST invoicing, cohort schedules, or enterprise team enrollments? Our team is available 6 days a week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Office Address Card */}
          <div className="p-6 rounded-[14px] bg-[#fdfbf9] border-[1.5px] border-[#171717] shadow-[rgba(0,0,0,0.06)_0px_4px_16px_0px]">
            <div className="w-10 h-10 rounded-full border border-[#171717] bg-[#f7efe9] flex items-center justify-center mb-4 text-[#ff6f1e]">
              <MapPin size={20} />
            </div>
            <h3 className="font-display text-xl font-bold text-[#2b1a07] mb-2">
              Registered Office
            </h3>
            <p className="font-display text-sm text-[#171717]/85 leading-relaxed">
              <strong>AgentCraft Academy Private Limited</strong><br />
              Tower 3, Level 5, The Capital<br />
              G Block, Bandra Kurla Complex (BKC)<br />
              Bandra (East), Mumbai, Maharashtra 400051<br />
              India
            </p>
          </div>

          {/* Direct Channels Card */}
          <div className="p-6 rounded-[14px] bg-[#fdfbf9] border-[1.5px] border-[#171717] shadow-[rgba(0,0,0,0.06)_0px_4px_16px_0px]">
            <div className="w-10 h-10 rounded-full border border-[#171717] bg-[#f7efe9] flex items-center justify-center mb-4 text-[#22c55e]">
              <Phone size={20} />
            </div>
            <h3 className="font-display text-xl font-bold text-[#2b1a07] mb-2">
              Direct Communication
            </h3>
            <div className="space-y-2.5 font-display text-sm text-[#171717]/85">
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-[#ff6f1e]" />
                <span><strong>Admissions:</strong> lab@agentcraft.academy</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-[#ff6f1e]" />
                <span><strong>Grievance / Billing:</strong> legal@agentcraft.academy</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-[#22c55e]" />
                <span><strong>Phone / WhatsApp:</strong> +91 98200 41289</span>
              </p>
              <p className="flex items-center gap-2 pt-2 border-t border-[#171717]/10 text-xs text-[#171717]/60">
                <Clock size={14} />
                <span>Mon – Sat: 10:00 AM – 7:00 PM IST</span>
              </p>
            </div>
          </div>
        </div>

        {/* Quick Help Card */}
        <div className="p-8 rounded-[16px] bg-[#f7efe9] border-[1.5px] border-[#171717] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-[#2b1a07] mb-1">
              Need Instant Guidance on WhatsApp?
            </h3>
            <p className="font-display text-sm text-[#171717]/80">
              Speak directly with our engineering admissions coordinator for syllabus queries or custom corporate quotes.
            </p>
          </div>
          <PillButton
            href="https://wa.me/"
            size="lg"
            className="!bg-[#22c55e]/20 hover:!bg-[#22c55e]/30 !border-[#171717] shrink-0"
          >
            Chat on WhatsApp
          </PillButton>
        </div>
      </main>

      <Footer />
    </div>
  );
}
