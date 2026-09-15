import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  p: ({ children, className, ...props }) => (
    <p
      {...props}
      className={["article-paragraph", className].filter(Boolean).join(" ")}
    >
      {children}
    </p>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
