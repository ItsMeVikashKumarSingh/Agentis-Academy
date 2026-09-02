import React from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Mail, Phone, Clock, MessageSquare } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PillButton from "@/components/ui/PillButton";

export const metadata = {
  title: "Contact Us — Agentis Academy",
  description: "Official contact details, registered office address, and support desk for Agentis Academy.",
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
            <span>Official Contact & Grievance Desk</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#2b1a07] tracking-tight">
            Contact Us
          </h1>
          <p className="font-display text-sm text-[#171717]/70 mt-2">
            Have questions about course curriculum, GST invoices, cohort schedules, or enterprise training? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Registered Office */}
          <div className="p-6 rounded-[16px] bg-[#fdfbf9] border-[1.5px] border-[#171717] shadow-[rgba(0,0,0,0.1)_0px_2px_8px_0px]">
            <div className="w-10 h-10 rounded-full bg-[#ff6f1e]/15 border border-[#171717] flex items-center justify-center mb-4 text-[#ff6f1e]">
              <MapPin size={20} />
            </div>
            <h3 className="font-display font-bold text-lg text-[#2b1a07] mb-2">
              Registered Corporate Office
            </h3>
            <p className="font-display text-sm text-[#171717]/85 leading-relaxed">
              <strong>Agentis Academy</strong><br />
              Level 6, Platina Building, C-59, G Block<br />
              Bandra Kurla Complex (BKC)<br />
              Bandra (East), Mumbai, Maharashtra 400051<br />
              India
            </p>
          </div>

          {/* Direct Channels */}
          <div className="p-6 rounded-[16px] bg-[#fdfbf9] border-[1.5px] border-[#171717] shadow-[rgba(0,0,0,0.1)_0px_2px_8px_0px]">
            <div className="w-10 h-10 rounded-full bg-[#22c55e]/15 border border-[#171717] flex items-center justify-center mb-4 text-[#22c55e]">
              <Phone size={20} />
            </div>
            <h3 className="font-display font-bold text-lg text-[#2b1a07] mb-2">
              Direct Inquiries & Helpline
            </h3>
            <div className="font-display text-sm text-[#171717]/85 space-y-2">
              <p>
                <strong>Admissions & General:</strong><br />
                <a href="mailto:lab@agentis.academy" className="text-[#ff6f1e] underline">
                  lab@agentis.academy
                </a>
              </p>
              <p>
                <strong>Legal & Grievances:</strong><br />
                <a href="mailto:legal@agentis.academy" className="text-[#ff6f1e] underline">
                  legal@agentis.academy
                </a>
              </p>
              <p>
                <strong>Phone / WhatsApp:</strong><br />
                <a href="tel:+919820041289" className="text-[#171717] font-semibold">
                  +91 98200 41289
                </a>
              </p>
              <p className="flex items-center gap-1.5 text-xs text-[#171717]/60 pt-1">
                <Clock size={13} /> Mon – Sat, 10:00 AM – 7:00 PM IST
              </p>
            </div>
          </div>
        </div>

        {/* Quick Action Box */}
        <div className="p-8 rounded-[16px] bg-[#f7efe9] border-[1.5px] border-[#171717] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[rgba(0,0,0,0.12)_0px_2px_8px_0px]">
          <div>
            <h3 className="font-display font-bold text-xl text-[#2b1a07] mb-1">
              Prefer chatting on WhatsApp?
            </h3>
            <p className="font-display text-sm text-[#171717]/75">
              Get rapid answers regarding batch eligibility, track syllabi, or payment plans.
            </p>
          </div>
          <PillButton
            href="https://wa.me/"
            size="lg"
            className="!bg-[#25D366] !text-white !border-[#171717] shrink-0"
          >
            Open WhatsApp Chat
          </PillButton>
        </div>
      </main>

      <Footer />
    </div>
  );
}
