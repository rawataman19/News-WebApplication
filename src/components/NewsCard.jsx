import React from "react";

const NewsCard = ({ article }) => {
  const { urlToImage, title, source, description, publishedAt, url } = article;

  if (!urlToImage) return null;

  const date = new Date(publishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });

  return (
    <div
      className="bg-white shadow rounded overflow-hidden cursor-pointer transition transform hover:scale-105"
      onClick={() => window.open(url, "_blank")}
    >
      <img
        src={urlToImage}
        alt="news"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{title.slice(0, 60)}...</h3>
        <p className="text-sm text-gray-500 mt-2">
          {source.name} · {date}
        </p>
        <p className="text-gray-700 mt-4">
          {description.slice(0, 150)}...
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
