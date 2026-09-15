type ArticleHeaderProps = {
  title: string;
  publishedAt: string;
};

export function ArticleHeader({ title, publishedAt }: ArticleHeaderProps) {
  return (
    <header className="article-header">
      <h1 className="article-title">{title}</h1>
      <p className="article-meta">Timileyin Agbaje · {publishedAt}</p>
    </header>
  );
}
