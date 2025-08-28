import { Link } from "@heroui/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex flex-col gap-3 items-center justify-center py-6 text-default-500">
        <span className="text-sm">© {new Date().getFullYear()} Виктория Малыхина. Все права защищены.</span>
      </footer>
    </div>
  );
}
