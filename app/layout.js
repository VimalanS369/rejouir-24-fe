import '../styles/globals.css';
import { Footer, Navbar } from '../components';
const RootLayout = ({ children }) => (
  <html lang="en" className="bg-primary-black">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
