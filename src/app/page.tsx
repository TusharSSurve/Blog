import Image from "next/image";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "My Posts | Home",
  description: "Homepage",
};
export default function Home() {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Welcome to my blog</h1>
      <p className="max-w-[750px] mx-auto leading-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non voluptate aperiam distinctio maiores minima officiis magnam consequuntur praesentium at amet! Fugit commodi asperiores tenetur ab, accusamus magni soluta ut dolorum!</p>
    </main>
  );
}
