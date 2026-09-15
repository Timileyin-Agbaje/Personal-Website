import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  p: ({ children }) => <p className="article-paragraph">{children}</p>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
