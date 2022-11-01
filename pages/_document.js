import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

import Navbar from '../components/Navbar';
import Nav from '../components/Nav';

class MyDocument extends Document {
  render() {
    return (
      <Html className="bg-meta-gray">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <link
            href="../public/fonts/Integral/IntegralCFBold.woff2"
          />
          <link
            href="../public/fonts/sf/SFPRODISPLAYBOLD.OTF"
          />
          <link
            href="../public/fonts/sf/SFPRODISPLAYREGULAR.OTF"
          />
        </Head>
        <body>
          <Nav />
          <Main />
          <NextScript />
        </body>

      </Html>
    );
  }
}

export default MyDocument;
