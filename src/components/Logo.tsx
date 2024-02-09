import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition hidden md:flex items-center justify-center gap-x-2">
        <Image src={"/logo.svg"} width={30} height={30} alt="Logo"></Image>
        <p className={cn("text-lg text-neutral-700", headingFont.className)}>
          Taskify
        </p>
      </div>
    </Link>
  );
};
export default Logo;
