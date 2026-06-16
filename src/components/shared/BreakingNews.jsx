import { Span } from "next/dist/trace";
import React from "react";
import Marquee from "react-fast-marquee";


export const breakingNews = [
  {
    id: 1,
    text: "🚨 Breaking News: Bangladesh launches new digital services for citizens.",
  },
  {
    id: 2,
    text: "📈 Stock markets show positive growth this week.",
  },
  {
    id: 3,
    text: "⚽ Sports Update: National team prepares for the upcoming tournament.",
  },
  {
    id: 4,
    text: "🌦️ Weather Alert: Heavy rainfall expected in several regions today.",
  },
  {
    id: 5,
    text: "💻 Tech News: AI continues to transform the future of software development.",
  },
  {
    id: 6,
    text: "🎓 Education: New scholarship opportunities announced for students.",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto">
      <button className="btn bg-red-500 text-white">Latest News</button>
      <Marquee pauseOnHover={true} speed={100}>
       {
        breakingNews.map(n=> ( <span key={n.id} className="mx-8" >{n.text}</span>))
       }
      </Marquee>
    </div>
  );
};

export default BreakingNews;
