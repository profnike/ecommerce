import { DefaultLayout } from "@/components";
import "../app/globals.css";
//import layout from "../app/layout";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="bg-red-500">
      <DefaultLayout>
        <Component {...pageProps} />
        {/* <ToastContainer theme="colored" /> */}
      </DefaultLayout>
      </div>
    </>
  );
}

// export default MyApp;
