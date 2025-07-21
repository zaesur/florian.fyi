import * as components from "@/components";
import { getArticleContent, getArticleMetadata, getArticleSlugs } from "@/lib/articles";
import { MDXRemote } from "next-mdx-remote-client/rsc";

type Params = { slug: string };
type PageProps = { params: Promise<Params> };

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const metadata = getArticleMetadata<{ title: string }>(slug);
  return { title: metadata.title };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const content = getArticleContent(slug);
  return <MDXRemote source={content} components={components} />;
}
