import React from 'react';

function Stories() {
  return (
    <section className="stories">
      {DATA.map(({ id, title, cover, content }) => (
        <article key={id}>
          <img
            src={cover.src}
            alt={cover.alt}
          />
          <h2>{title}</h2>
          <p>{content}</p>
        </article>
      ))}
    </section>
  );
}

const DATA = [
  {
    id: 'investors',
    title: 'Investors Brace For Another Week Of Turmoil As Interest Rates Soar',
    cover: {
      src: 'https://sandpack-bundler.vercel.app/img/waves.jpg',
      alt: 'Dramatic photo of a wave cresting',
    },
    content: `NEW YORK — Global financial markets are poised for another week of turmoil, as traders close out a dizzying month in which the Federal Reserve announced a surprise interest rate hike, triggering a massive sell-off in stocks and bonds. The announcement sent shockwaves through markets around the world, as investors scrambled to assess the impact of the move on the global economy. The Fed's decision to raise interest rates by half a percentage point caught many traders off guard, as most had expected a much smaller increase.`
  },
  {
    id: 'art',
    title: 'Artful Resurgence: Small Businesses Crafting Physical Artwork Flourish',
    cover: {
      src: 'https://sandpack-bundler.vercel.app/img/art-studio.jpg',
      alt: 'A messy art studio',
    },
    content: `AUSTIN — In an era where screens dominate our daily lives, a surprising renaissance of tangible artwork is taking shape. Small businesses that create and sell physical art pieces, ranging from paintings to sculptures, are experiencing a remarkable surge in success. This unexpected revival of traditional art forms has captured the attention of both collectors and casual enthusiasts alike, reflecting a growing desire for tangible connections in a digital world.`
  },
]

export default Stories;