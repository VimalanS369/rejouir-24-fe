import '../styles/globals.css';
import { Footer, Navbar } from '../components';
const RootLayout = ({ children }) => (
  <html lang="en" className="bg-primary-black">
    <head>
      
    </head>
    <body>
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
