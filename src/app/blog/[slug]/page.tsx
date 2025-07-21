import { getArticleContent, getArticleSlugs } from "@/lib/articles";
import { MDXRemote } from "next-mdx-remote-client/rsc";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const content = getArticleContent(slug);
  return <MDXRemote source={content} />;
}
