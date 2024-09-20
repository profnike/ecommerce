import Head from "next/head";

export default function  Meta ({ title }) {
const metaTitle =  title? `Perrez - ${title} ` : "Perrez - Where Style Meets Taste"

   return (
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content={"fashion, online, food, shein, thrift wears"
        }
      />
      <meta
        name="description"
        content={"Where fashion meets flavor, elevate your style and satisfy your cravings in one place"}
      />
      <meta charSet="utf-8" />
      <link rel="icon" href="/icons/favicon.png" />
      <title>{metaTitle}</title>
      <meta property="og:title" content={metaTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ "/images/Plogo.png"} />
      </Head>
   );
};


