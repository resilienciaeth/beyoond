import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import Navbar from '../components/Navbar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
    >
      <div className="bg-meta-gray min-h-screen max-h-screen">
        <Navbar />
        <Component {...pageProps} />

      </div>

      <Script src="https://kit.fontawesome.com/4e0b8e54bb.js" crossOrigin="anonymous" />
    </ThemeProvider>
  );
}
export default MyApp;
