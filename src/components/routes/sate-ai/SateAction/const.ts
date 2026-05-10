import { Card } from "./types";

export const CARDS: Card[] = [
  {
    num: "01",
    title: "Understand What Customers Actually Mean",
    imgSrc: "/sate-ai/images/help-pop-out.webp",
    desc: "SATE understands intent. It analyzes context, asks clarifying questions, and comprehends what customers are actually trying to accomplish.",
    chat: [
      {
        from: "ai",
        text: "Hi, welcome to Eusate help center. What can I help you with today?",
      },
      { from: "user", text: "I need help understanding my invoice." },
      {
        from: "ai",
        text: "Sure! Are you referring to the charge from April 10th, or a different invoice?",
      },
    ],
  },
  {
    num: "02",
    title: "Adapt to Emotional State",
    imgSrc: "/sate-ai/images/help-pop-out.webp",
    desc: "SATE reads emotional cues and adjusts its tone — staying calm, empathetic, and supportive when customers need it most.",
    chat: [
      {
        from: "ai",
        text: "Hi, welcome to Eusate help center. What can I help you with today?",
      },
      {
        from: "user",
        text: "I'm really frustrated, this is the third time this has happened!",
      },
      {
        from: "ai",
        text: "I completely understand your frustration. Let me prioritize this for you right now.",
      },
    ],
  },
  {
    num: "03",
    title: "Chat and Calls with Customers",
    imgSrc: "/sate-ai/images/help-pop-out.webp",
    desc: "SATE handles both text and voice conversations, routing to the right channel and escalating to a human agent seamlessly when needed.",
    chat: [
      {
        from: "ai",
        text: "Hi, welcome to Eusate help center. What can I help you with today?",
      },
      { from: "user", text: "Can I speak to someone directly?" },
      { from: "system", text: "Human agent has taken over" },
      {
        from: "ai",
        text: "Connecting you now — estimated wait time is under 2 minutes.",
      },
    ],
  },
  {
    num: "04",
    title: "Actually Solve Problems 🎉",
    desc: "SATE goes beyond answering questions — it takes action, processes requests, and resolves issues end-to-end without unnecessary hand-offs.",
    imgSrc: "/sate-ai/images/help-pop-out.webp",
    chat: [
      {
        from: "ai",
        text: "Hi, welcome to Eusate help center. What can I help you with today?",
      },
      { from: "user", text: "I'd like a refund for my last order please." },
      {
        from: "ai",
        text: "Done! Your refund of $49.99 has been processed and will appear in 3–5 business days.",
      },
    ],
  },
];
