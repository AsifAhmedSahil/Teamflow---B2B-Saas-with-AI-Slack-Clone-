
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";
import { HeroHeader } from "./_components/header";
import HeroSection from "./_components/hero-section";

export default function Home() {
  return (
    <div>
     <HeroHeader/>

     <HeroSection/>
    </div>
  );
}
