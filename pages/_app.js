import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-100 min-h-screen max-w-screen">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
