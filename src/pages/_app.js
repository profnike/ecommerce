import "../app/globals.css";
import DefaultLayout from "@/components/layouts/DefaultLayout";

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
