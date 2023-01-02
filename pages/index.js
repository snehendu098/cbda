import Head from "next/head";
import useSWR from "swr";
import About from "../components/Home/About";
import Intro from "../components/Home/Intro";
import Location from "../components/Home/Location";
import Services from "../components/Home/Services";

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>CBDA | Chakdaha</title>
        <meta
          name="description"
          content="Comprehensive healthcare services under one roof"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <About />
      <Services />
      <Location />
    </div>
  );
}
