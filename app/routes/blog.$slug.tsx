import { data } from "react-router";
import type { Route } from "./+types/blog.$slug";

type PostMod = {
  attributes: { title: string; date: string; slug?: string; excerpt?: string };
  html: string;
};

const postModules = import.meta.glob<PostMod>("../../content/blog/*.md", { eager: true });

export function meta({ data }: Route.MetaArgs) {
  if (!data) return [{ title: "Post Not Found" }];
  
  return [
    { title: `${data.post.attributes.title} | Blog` },
    { name: "description", content: data.post.attributes.excerpt || "" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  const { slug } = params;
  
  const post = Object.entries(postModules).find(([path, mod]) => {
    const fileSlug = mod.attributes.slug ?? path.split("/").pop()?.replace(/\.md$/, "");
    return fileSlug === slug;
  });

  if (!post) {
    throw data({ message: "Post not found" }, { status: 404 });
  }

  return { post: post[1] };
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;

  return (
    <article className="prose mx-auto">
      <h1>{post.attributes.title}</h1>
      <time>{post.attributes.date}</time>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}