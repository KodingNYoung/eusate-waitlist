"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function AnimatedBlock({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FeatureRow({
  reverse = false,
  textContent,
  imageContent,
}: {
  reverse?: boolean;
  textContent: React.ReactNode;
  imageContent: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <motion.div variants={fadeUpVariants} className="flex-1">
        {textContent}
      </motion.div>
      <motion.div variants={fadeUpVariants} className="flex-1">
        {imageContent}
      </motion.div>
    </motion.div>
  );
}

// ── Mock UI: Helpdesk ticket grid ──────────────────────────────────────────
function HelpdeskUI() {
  const tickets = [
    { id: "#TIC-2386", tag: "OPEN", tagColor: "bg-amber-400 text-black" },
    { id: "#TIC-2386", tag: "TAKEN", tagColor: "bg-blue-500 text-white" },
    { id: "#TIC-2596", tag: "TAKEN", tagColor: "bg-blue-500 text-white" },
    {
      id: "#TIC-2596",
      tag: "RESOLVED & CLOSED",
      tagColor: "bg-emerald-500 text-white",
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/60">
      {/* titlebar */}
      <div className="flex items-center gap-2 border-b border-zinc-100 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
        <span className="ml-3 text-xs font-medium text-zinc-400">Helpdesk</span>
      </div>

      <div className="flex">
        {/* sidebar */}
        <div className="flex w-12 flex-col items-center gap-4 border-r border-zinc-100 py-4">
          {["▦", "⊞", "◎", "⊟", "☰"].map((icon, i) => (
            <span key={i} className="text-sm text-zinc-300">
              {icon}
            </span>
          ))}
        </div>

        <div className="flex-1 p-4">
          <h3 className="mb-0.5 text-sm font-semibold text-zinc-800">
            Helpdesk
          </h3>
          <p className="mb-3 text-[11px] text-zinc-400">
            Empower your AI with curated knowledge
          </p>

          {/* tabs */}
          <div className="mb-3 flex gap-3 text-[11px]">
            {[
              "Summary",
              "All Tickets",
              "Assigned to me",
              "AI Tickets",
              "Ongoing calls",
            ].map((tab) => (
              <span
                key={tab}
                className={`cursor-pointer pb-1 ${
                  tab === "All Tickets"
                    ? "border-b-2 border-orange-500 font-semibold text-orange-500"
                    : "text-zinc-400"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* search + filter */}
          <div className="mb-3 flex items-center gap-2">
            <div className="flex flex-1 items-center gap-2 rounded-md border border-zinc-200 px-2 py-1.5">
              <span className="text-[10px] text-zinc-400">⌕</span>
              <span className="text-[11px] text-zinc-300">Search</span>
            </div>
            <button className="flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1.5 text-[11px] font-medium text-white">
              + Add filter
            </button>
          </div>

          {/* ticket grid */}
          <div className="grid grid-cols-2 gap-2">
            {tickets.map((t, i) => (
              <div
                key={i}
                className="rounded-lg border border-zinc-100 p-3 shadow-sm"
              >
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-[10px] text-zinc-400">{t.id}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[9px] font-bold ${t.tagColor}`}
                  >
                    {t.tag}
                  </span>
                </div>
                <p className="mb-1 text-[11px] font-semibold text-zinc-800">
                  Ticket Subject
                </p>
                <p className="text-[10px] leading-relaxed text-zinc-400">
                  User is unable to complete transactions and needs to sort this
                  out quick to avoi...
                </p>
                <p className="mt-1.5 text-[9px] text-zinc-300">
                  Created at 11/09/2027 7:04PM
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Mock UI: Chat takeover ─────────────────────────────────────────────────
function ChatUI() {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/60">
      {/* header */}
      <div className="flex items-center gap-3 border-b border-zinc-100 px-4 py-3">
        <div className="h-7 w-7 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500" />
        <div>
          <p className="text-[11px] font-semibold text-zinc-800">rusam1234</p>
          <p className="text-[10px] text-emerald-500">Online</p>
        </div>
        <span className="ml-auto text-zinc-300">···</span>
      </div>

      <div className="space-y-3 p-4">
        {/* user msg */}
        <div className="flex justify-end">
          <div className="max-w-[70%] rounded-2xl rounded-tr-sm bg-zinc-100 px-3 py-2 text-[11px] text-zinc-700">
            Got my account an shows new plan and can&apos;t access premium
            features
          </div>
        </div>

        {/* AI msg */}
        <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-indigo-50 px-3 py-2 text-[11px] leading-relaxed text-zinc-700">
          Hi welcome to our support center
          <br />
          <br />
          I sincerely apologize for the inconvenience with your subscription.
          <br />
          <br />
          To resolve this quickly, I&apos;ll need:
          <ul className="mt-1 list-disc pl-4 text-[11px]">
            <li>Payment reference number</li>
            <li>Amount charged</li>
            <li>Date and time of payment</li>
            <li>Screenshot of debit notification</li>
          </ul>
        </div>

        {/* user reply with attachment */}
        <div className="flex justify-end">
          <div className="max-w-[70%] space-y-1">
            <div className="rounded-2xl rounded-tr-sm bg-zinc-100 px-3 py-2 text-[11px] text-zinc-700">
              Payment reference: TRN-8843V001
              <br />
              Amount: ₦11,000
              <br />
              Account subscription.png 🖼
            </div>
          </div>
        </div>

        {/* AI reply */}
        <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-indigo-50 px-3 py-2 text-[11px] leading-relaxed text-zinc-700">
          Thank you for sharing the details. I&apos;ve verified your payment and
          can confirm that the ₦11,000 was posted to your account...
        </div>

        {/* takeover btn */}
        <div className="pt-2">
          <button className="w-full rounded-xl bg-zinc-900 py-2.5 text-[12px] font-semibold text-white transition hover:bg-zinc-700">
            Take over
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────
export default function FeatureSections() {
  return (
    <main className="bg-white px-6 py-20 font-sans text-zinc-800 antialiased lg:px-20">
      <div className="mx-auto max-w-6xl space-y-32">
        {/* ── Feature 1: Unified Conversation Management ── */}
        <FeatureRow
          textContent={
            <div className="space-y-6">
              <AnimatedBlock>
                <h2 className="text-4xl font-black leading-tight tracking-tight lg:text-5xl">
                  <span className="text-zinc-900">Unified </span>
                  <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                    Conversation
                  </span>
                  <br />
                  <span className="text-zinc-900">Management</span>
                </h2>
              </AnimatedBlock>

              <AnimatedBlock delay={0.1}>
                <p className="max-w-md text-base leading-relaxed text-zinc-500">
                  A customer starts on email, follows up on WhatsApp, then
                  tweets publicly. The Helpdesk shows this as one continuous
                  conversation. Full context, complete history, zero switching
                  between platforms. Your team sees the whole picture, always.
                  Context is everything in support. Unified conversations mean
                  no question gets asked twice and no customer repeats
                  themselves.
                </p>
              </AnimatedBlock>
            </div>
          }
          imageContent={
            <AnimatedBlock delay={0.2}>
              <HelpdeskUI />
            </AnimatedBlock>
          }
        />

        {/* ── Feature 2: Real-Time AI Monitoring & Human Takeover ── */}
        <FeatureRow
          reverse
          textContent={
            <div className="space-y-6">
              <AnimatedBlock>
                <h2 className="text-4xl font-black leading-tight tracking-tight lg:text-5xl">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Real-Time AI Monitoring
                  </span>
                  <br />
                  <span className="text-zinc-900">&amp; Human Takeover</span>
                </h2>
              </AnimatedBlock>

              <AnimatedBlock delay={0.1}>
                <p className="max-w-md text-base leading-relaxed text-zinc-500">
                  Get real-time visibility into SATE conversations and calls
                  with your customers. The helpdesk shows active chats with
                  customer and SATE. AI needs verification, but monitoring
                  builds confidence. Agents can take over seamlessly, with full
                  context and history, ensuring a smooth customer experience.
                </p>
              </AnimatedBlock>
            </div>
          }
          imageContent={
            <AnimatedBlock delay={0.2}>
              <ChatUI />
            </AnimatedBlock>
          }
        />
      </div>
    </main>
  );
}
