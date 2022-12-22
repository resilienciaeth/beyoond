import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { appWithTranslation } from 'next-i18next'; 
import Head from 'next/head'; 
import Home from '.';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import FAQ from './FAQ';  
import { useSyncExternalStore } from 'react';

import '../styles/globals.css';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps, FAQ }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
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
    </ThirdwebProvider>
  );
}
export default appWithTranslation(MyApp);
