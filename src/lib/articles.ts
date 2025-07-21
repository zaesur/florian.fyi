import fs from "fs";
import matter from "gray-matter";
import path from "path";

const ARTICLE_PATH = path.join(process.cwd(), "src/articles");

export const getArticleSlugs = () => {
  const articles = fs.readdirSync(ARTICLE_PATH);
  return articles.map((article) => article.replace(".mdx", ""));
};

export const getArticle = <T extends Record<string, unknown>>(slug: string) => {
  const articlePath = path.join(ARTICLE_PATH, `${slug}.mdx`);
  const articleContent = fs.readFileSync(articlePath, "utf8");
  return matter(articleContent) as unknown as { data: T; content: string };
};

export const getArticleMetadata = <T extends Record<string, unknown>>(
  slug: string
) => {
  return getArticle<T>(slug).data;
};

export const getArticleContent = (slug: string) => {
  return getArticle(slug).content;
};
