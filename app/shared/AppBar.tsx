"use client";

import ctl from "@netlify/classnames-template-literals";
import { useRouter, usePathname } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function AppBar() {
  // ---- HOOKS
  const router = useRouter();
  const pathName = usePathname();

  // ---- FUNCTIONS
  const goBack = () => {
    router.back();
  };

  // ---- STYLES
  const s = {
    header: ctl(`
      z-40
      h-16
      bg-white
      flex
      items-center
      p-4
      shadow
      fixed
      top-0
      left-0
      w-full
      justify-center
    `),
    title: ctl(`
      text-xl
      tracking-wider
      text-center
      flex-1
      capitalize
      font-bold
    `),
  };

  // ---- JSX
  if (pathName === "/") return null;
  return (
    <header className={s.header}>
      <button onClick={goBack}>
        <MdKeyboardArrowLeft size="24px" />
      </button>
      <p className={s.title}>{pathName?.slice(1)}</p>
    </header>
  );
}
