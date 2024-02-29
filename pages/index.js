import Image from "next/image";
import { Inter } from "next/font/google";
import Tables from "./Tables";
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Tables/>
    <Footer/>
    </>
  );
}
