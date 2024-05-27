'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/posts",
    label: "Posts"
  },
  {
    href: "/he",
    label: "Create post"
  }
]
export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image src="https://bytegrad.com/course-assets/youtube/example-logo.png" alt="Logo" width="35" height="35" className="w-[35px] h-[35px]" />
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-[14px] ">
          {
            navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={`${pathname === link.href ? "text-zinc-900" : "text-zinc-400"}`}>
                  {link.label}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}