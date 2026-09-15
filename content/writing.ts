export type WritingPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
};

export const introduction: WritingPost = {
  slug: "introduction",
  title: "Introduction",
  description: "An introduction by Timileyin Agbaje.",
  publishedAt: "2026-09-15",
};

export const writing: WritingPost[] = [introduction];

export function formatPublishedDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
