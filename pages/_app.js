import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { appWithTranslation } from 'next-i18next'; 
import Head from 'next/head'; 
import Home from '.';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import FAQ from './FAQ';  

import '../styles/globals.css';

function MyApp({ Component, pageProps, FAQ }) {
  return (
    <ThemeProvider
      attribute="class"
    >
      <div className="bg-meta-gray min-h-screen max-h-screen">
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="Beyoond" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
        <Component {...pageProps} />
      </div>
      <Script src="https://kit.fontawesome.com/4e0b8e54bb.js" crossOrigin="anonymous" />
    </ThemeProvider>
  );
}
export default appWithTranslation(MyApp);
