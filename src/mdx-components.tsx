import { MDXComponents } from "mdx/types";
import Link from "next/link";

const components: MDXComponents = {
  // Custom components
  h1: ({ children }) => (
    <h1 className="text-2xl font-bold text-red-500">{children}</h1>
  ),
  a: ({ children, href }) => {
    const className = "text-blue-500";

    // If the link is a relative link, use the Link component
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      );
    } else {
      return (
        <a href={href} className={className}>
          {children}
        </a>
      );
    }
  },
};

export function useMDXComponents(
  otherComponents: MDXComponents
): MDXComponents {
  return {
    ...otherComponents,
    ...components,
  };
}
