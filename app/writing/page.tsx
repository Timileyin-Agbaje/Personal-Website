import type { Metadata } from "next";
import Link from "next/link";

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
        <li>
          <article>
            <h2 className="writing-title">
              <Link href="/writing/introduction">Introduction</Link>
            </h2>
            <p className="writing-date">September 15, 2026</p>
          </article>
        </li>
      </ul>
    </main>
  );
}
