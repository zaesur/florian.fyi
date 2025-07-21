import Link from "next/link";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <article>{children}</article>
    </section>
  );
};

export default BlogLayout;
