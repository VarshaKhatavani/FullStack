/** Implemented the strategy of lifting content up to eliminate props drilling  */

import React from "react";

import Header from "./Header";
import SocialSharingWidget from "./SocialSharingWidget";
import useArticle from "./use-article.js";

function ArticlePage({ articleSlug }) {
  return (
    <>
      <Header />
      <MainContent>
        {/** deleted prop from here and passed article component */}
        <Article articleSlug={articleSlug} />
      </MainContent>
      <footer>Copyright “The News” Inc.</footer>
    </>
  );
}

function MainContent({ children }) {
  return (
    <main>
      <aside>
        <SocialSharingWidget />
      </aside>
      {children} {/** <Article articleSlug={articleSlug} /> */}
    </main>
  );
}

function Article({ articleSlug }) {
  // custom hook getting data
  const article = useArticle(articleSlug);

  if (!article) {
    return <p>No Article found</p>;
  }

  return (
    <article>
      <h2>{article.title}</h2>
      <p className="subtitle">{article.subtitle}</p>

      <img
        className="article-img"
        src={article.image.src}
        alt={article.image.alt}
        width="200"
        height="200"
      />

      <div className="article-content">{article.content}</div>

      <div className="article-content p" style={{ float: "right" }}>
        {" "}
        <strong> {article.byline}</strong>
      </div>
    </article>
  );
}

export default ArticlePage;
