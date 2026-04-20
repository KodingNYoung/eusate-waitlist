import { ChatMessage } from "./types";
import { ChatBubble } from "./ChatBubble";
import { AnimatePresence, motion } from "motion/react";

type PhoneFrameProps = {
  messages: ChatMessage[];
};

export const PhoneFrame = ({ messages }: PhoneFrameProps) => {
  return (
    <div className="md:w-[370px] w-full flex-shrink-0 overflow-hidden rounded-lg border-2 border-black bg-black">
      {/* Header */}
      <div className="flex items-center gap-2 bg-black px-6 pt-4 pb-6">
        <span className="text-lg leading-none text-[#888]">←</span>
        <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#f4a43a] text-[13px] font-semibold text-white">
          E
        </div>
        <span className="flex-1 text-[13px] font-medium text-white">
          Eusate
        </span>
        <span className="rounded-full bg-[#2a2a2a] px-2 py-0.5 text-[11px] text-[#aaa]">
          00:05
        </span>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e03a3a]">
          <svg width="10" height="10" viewBox="0 0 10 10">
            <line
              x1="2"
              y1="2"
              x2="8"
              y2="8"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="8"
              y1="2"
              x2="2"
              y2="8"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="grid">
        {/* Chat area */}
        <div className="flex min-h-[400px] rounded-t-3xl -translate-y-[8px] flex-col gap-2 bg-white px-2.5 py-3">
          <div className="self-center rounded-full bg-[#f2f2f2] px-2 py-0.5 text-center text-[10px] text-[#aaa]">
            An agent has taken over this conversation
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={messages.map((m) => m.text).join("|")}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex flex-col gap-2"
            >
              {messages.map((msg, i) => (
                <ChatBubble key={i} msg={msg} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 border-t border-[#eee] bg-[#fafafa] px-3 py-2">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="5.5" stroke="#bbb" strokeWidth="1" />
          </svg>
          <span className="flex-1 text-[11px] text-[#bbb]">Type a message</span>
          <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#161616]">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M2 9L9 5.5 2 2v3l5 .5-5 .5V9z" fill="#fff" />
            </svg>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white py-1.5 text-center text-[10px] text-[#aaa]">
          Powered by&nbsp;<strong className="text-[#555]">Eusate</strong>
        </div>
      </div>
    </div>
  );
};
