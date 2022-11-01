import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import Home from '.';
import Main from '../components/Main';
import Navbar from '../components/Navbar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
    >
      <div className="bg-meta-gray min-h-screen max-h-screen">
        <Home />

      </div>

      <Script src="https://kit.fontawesome.com/4e0b8e54bb.js" crossOrigin="anonymous" />
      <Script src="https://unpkg.com/ionicons@latest/dist/ionicons.js" />
    </ThemeProvider>

  );
}
export default MyApp;
