"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const LangSwitch: React.FC = () => {
  const router = useRouter();
  const isEn = router.pathname.startsWith("/en");
  return (
    <div className="no-print flex items-center gap-2 text-sm">
      <Link href={isEn ? "/" : "/en"} className="px-2 py-1 rounded-md border border-default-200/50 hover:bg-default-200">
        {isEn ? "RU" : "EN"}
      </Link>
    </div>
  );
};

export default LangSwitch;


