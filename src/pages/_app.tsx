import { plusJakartaSans } from "@/assets/fonts";
import "@/styles/globals.css";
import { EUSATE_API_KEY } from "@/utils/constants";
import { cls } from "@/utils/helpers";
import Eusate from "@eusate/messenger-sdk";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Slide, ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Eusate.init({
      apiKey: EUSATE_API_KEY,
      onReady: () => {
        console.log("✅ Eusate chat is ready");
      },
      onError: (error) => {
        console.error("❌ Eusate initialization failed:", error);
      },
    });
    return () => {
      Eusate.destroy();
    };
  }, []);
  return (
    <main className={cls("min-h-screen", plusJakartaSans.className)}>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        theme="colored"
        closeButton={false}
        autoClose={3000}
        limit={1}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        transition={Slide}
      />
    </main>
  );
}
