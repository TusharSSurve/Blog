import prisma from "@/lib/db";
import Link from "next/link"
export default async function PostsList() {
  const data = await prisma.post.findMany();
  return <ul>
    {
      data.map((post) => (
        <li key={post.id} className="mb-3">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))
    }
  </ul>
}