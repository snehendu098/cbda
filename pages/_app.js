import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <div className="bg-gray-100 min-h-screen max-w-screen">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
