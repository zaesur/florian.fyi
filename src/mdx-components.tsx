import { MDXComponents } from "mdx/types";
import Link from "next/link";

const components: MDXComponents = {
  // Custom components
  h1: ({ children }) => <h1 className="text-2xl font-bold">{children}</h1>,
  h2: ({ children }) => <h2 className="text-xl font-bold">{children}</h2>,
  h3: ({ children }) => <h3 className="text-lg font-bold">{children}</h3>,
  h4: ({ children }) => <h4 className="text-base font-bold">{children}</h4>,
  h5: ({ children }) => <h5 className="text-sm font-bold">{children}</h5>,
  h6: ({ children }) => <h6 className="text-xs font-bold">{children}</h6>,
  a: ({ children, href }) => {
    const className = "text-blue-500 hover:text-blue-600 hover:italic";

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
