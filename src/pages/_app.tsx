import { plusJakartaSans } from "@/assets/fonts";
import "@/styles/globals.css";
import { cls } from "@/utils/helpers";
import type { AppProps } from "next/app";
import { Slide, ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
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
