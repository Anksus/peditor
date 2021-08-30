import "../styles/globals.css";
import "../styles/style.css";
import { Provider } from "next-auth/client";
import Head from "next/head";
import "quill/dist/quill.snow.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
