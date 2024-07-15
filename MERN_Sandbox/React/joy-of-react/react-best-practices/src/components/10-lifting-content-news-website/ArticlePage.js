import React from 'react';

import Header from './Header';
import SocialSharingWidget from './SocialSharingWidget';
import useArticle from './use-article.js';

function ArticlePage({ articleSlug }) {
  return (
    <>
      <Header />
      
      <MainContent articleSlug={articleSlug} />
      
      <footer>
        Copyright “The News” Inc.
      </footer>
    </>
  );
}

function MainContent({ articleSlug }) {
  return (
    <main>
      <aside>
        <SocialSharingWidget />
      </aside>
      <Article articleSlug={articleSlug} />
    </main>
  );
}

function Article({ articleSlug }) {
  const article = useArticle(articleSlug);
  
  if (!article) {
    return (
      <p>No Article found</p>
    )
  }
  
  return (
    <article>
      <h2>{article.title}</h2>
      <p className="subtitle">{article.subtitle}</p>

      <img
        className="article-img"
        src={article.image.src}
        alt={article.image.alt}
      />

      <div className="article-content">
        {article.content}
      </div>
    </article>
  );
}

export default ArticlePage;