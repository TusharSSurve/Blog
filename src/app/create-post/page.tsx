import { createPost } from "@/actions/actions";

export default async function Page() {

  return <main className="text-center pt-16">
    <h1 className="text-4xl md:text-5xl font-bold mb-5">Create post</h1>
    <form action={createPost} className="flex flex-col max-w-[400px] mx-auto space-x-2 gap-2 my-10">
      <input type="text" name="title" placeholder="Title for new post"
        required className="border rounded px-3 h-10" />
      <textarea name="body" placeholder="Body content for new post" className="border rounded px-3 py-2" required rows={6} />
      <button className="h-10 bg-blue-500 px-5 rounded text-white">Submit</button>
    </form>
  </main>
}