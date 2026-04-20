import { motion } from "motion/react";
import { ChatMessage } from "./types";

export const ChatBubble = ({
  msg,
  index,
}: {
  msg: ChatMessage;
  index: number;
}) => {
  if (msg.from === "system") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.08 }}
        className="self-center rounded-full bg-[#f0f0f0] px-2 py-0.5 text-center text-[10px] text-[#888]"
      >
        {msg.text}
      </motion.div>
    );
  }

  const isUser = msg.from === "user";

  return (
    <motion.div
      initial={{ opacity: 0, x: isUser ? 10 : -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08, duration: 0.3 }}
      className={`flex flex-col gap-1 ${isUser ? "items-end" : "items-start"}`}
    >
      <div
        className={`max-w-[85%] px-[11px] py-2 text-[11px] leading-[1.45] ${
          isUser
            ? "rounded-[14px_14px_4px_14px] bg-[#161616] text-white"
            : "rounded-[14px_14px_14px_4px] bg-[#f0f0f0] text-[#222]"
        }`}
      >
        {msg.text}
      </div>
      {!isUser && (
        <div className="flex items-center gap-1">
          <div className="h-[13px] w-[13px] rounded-full bg-[#f4a43a]" />
          <span className="text-[9px] text-[#aaa]">Sate AI 12:45PM</span>
        </div>
      )}
    </motion.div>
  );
};
