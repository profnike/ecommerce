import { DefaultLayout } from "@/components";
import "../app/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="">
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
      </div>
    </>
  );
}

// export default MyApp;
