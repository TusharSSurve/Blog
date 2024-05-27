import { useState } from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const data = await response.json();
  const [upvoteCount, setUpvoteCount] = useState(0);
  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{data.title}</h1>
      <p className="max-w-[700px] mx-auto">{data.body}</p>
      <button className="bg-blue-500 text-white p-2 mt-10" onClick={() => { setUpvoteCount(upvoteCount + 1) }}>Upvote</button>
    </main>
  );
}