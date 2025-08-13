import { plusJakartaSans } from "@/assets/fonts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={plusJakartaSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
