import React from "react";
import NewsCard from "./NewsCard";

const MainContainer = ({ articles }) => {
  return (
    <main className="container mx-auto mt-20 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </main>
  );
};

export default MainContainer;
