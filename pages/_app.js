import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
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
        <Component {...pageProps} />

      </div>

      <Script src="https://kit.fontawesome.com/4e0b8e54bb.js" crossOrigin="anonymous" />
    </ThemeProvider>

  );
}
export default MyApp;
