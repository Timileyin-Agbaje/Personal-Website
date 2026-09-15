import type { Metadata } from "next";
import Link from "next/link";
import { formatPublishedDate, writing } from "@/content/writing";

export const metadata: Metadata = {
  title: "Writing",
  description: "Writing by Timileyin Agbaje.",
  alternates: { canonical: "/writing" },
};

export default function WritingPage() {
  return (
    <main className="container writing-index">
      <h1 className="writing-index-title">Writing</h1>
      <ul className="writing-list">
        {writing.map((post) => (
          <li key={post.slug}>
            <article>
              <h2 className="writing-title">
                <Link href={`/writing/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="writing-date">{formatPublishedDate(post.publishedAt)}</p>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
