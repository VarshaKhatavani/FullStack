// NOTE: In a real app, this would fetch the data
// over a network. Hardcoding it here for simplicity,
// since it isn't relevant to this lesson.
import format from "date-fns/format";

function useArticle(articleSlug) {
  if (!articleSlug) {
    return null;
  }

  const publishDate = format(new Date(), "MMMM do, yyyy");

  return {
    title: "Clever Otter Breaks Free From Local Community Zoo",
    subtitle: "Becomes a contributing member of society.",
    image: {
      src: "/Images/detective-otter.jpeg",
      alt: "AI-generated illustration of a detective otter",
    },
    byline: "By Lutrinae Musteli, " + publishDate,
    content: (
      <>
        <p>
          In a shocking turn of events, an otter has escaped from the San Marino
          zoo and has set up shop as a private detective, bewildering the local
          community.
        </p>
        <p>
          The otter, known as “Sleuth”, has made quite the name for itself since
          leaving the confines of the zoo. Sleuth's sharp wit and keen sense of
          smell have proven to be invaluable tools in solving a range of cases,
          from missing pets to corporate fraud.
        </p>
        <p>
          Animal rights groups are thrilled with Sleuth's newfound independence,
          as it represents a significant step forward in the fight for animal
          rights. The Center for Animal Treatment and Support has long advocated
          for animal independence in modern society, and point to Sleuth's
          entrepreneurial spirit as an excellent example of what could be
          possible.
        </p>
        <p>
          However, the escape and subsequent success of Sleuth has raised
          concerns among some of the more corporate-minded individuals in the
          community. Many worry that the precedent set by Sleuth's escape could
          encourage other animals to leave the zoo, thereby threatening the
          profitability of these family-friendly and community-orientated
          institutions.
        </p>
        <p>
          Some have even gone so far as to suggest that Sleuth's actions
          represent a challenge to the very foundations of our society, as it
          questions our treatment of animals and the moral implications of
          keeping them in captivity for our own entertainment.
        </p>
        <p>
          Despite the controversy surrounding Sleuth's escape, the otter remains
          hard at work. While activists and corporate fat cats engage in
          increasingly-philosophical debates, Sleuth has his snout down, solving
          cases.
        </p>
      </>
    ),
  };
}

export default useArticle;
