import { plusJakartaSans } from "@/assets/fonts";
import "@/styles/globals.css";
import { cls } from "@/utils/helpers";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cls("min-h-screen", plusJakartaSans.className)}>
      <Component {...pageProps} />
    </main>
  );
}
