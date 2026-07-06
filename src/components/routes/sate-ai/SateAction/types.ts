import { InternalPath } from "@/utils/types";

export type MessageFrom = "ai" | "user" | "system";

export type ChatMessage = {
  from: MessageFrom;
  text: string;
};

export type Card = {
  num: string;
  title: string;
  desc: string;
  imgSrc: InternalPath;
  chat: ChatMessage[];
};
