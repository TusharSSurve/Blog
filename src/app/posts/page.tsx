import PostsList from "@/components/posts-list";
import type { Metadata } from "next";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "My Posts | Posts",
  description: "Posts",
};
export default async function Page() {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>
      <Suspense fallback="Loading...">
        <PostsList />
      </Suspense>
    </main>
  );
}