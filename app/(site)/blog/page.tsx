import ListItem from "@/components/ListItem";
import { getPostsMeta } from "@/lib/posts";
import { Metadata } from "next";

export const revalidate = 10;

export default async function BlogPage() {
  const posts = await getPostsMeta();
  console.log('posts', posts);
  
  if (!posts) {
    return <p>Sorry, no posts are available.</p>;
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to navigate different types of loans with us.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
