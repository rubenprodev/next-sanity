import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";
import { styles } from "@/app/(site)/styles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Sanity",
  description: "Next + Sanity + Tailwind CSS = 💖",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className={`${inter.className} max-w-3xl mx-auto py-10`}>
        <header className="flex items-center justify-between">
          <Link href="/" className={`${styles.gradientText} text-lg font-bold`}>
            Home
          </Link>
          <div className="flex items-center gap-5 text-sm text-black font-bold">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`}>
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
