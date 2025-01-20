const NewsCard = ({ article }) => {
  if (!article) return null; // Handle null article gracefully
  
  const { urlToImage, title, source, description, publishedAt, url } = article || {};

  if (!urlToImage) return null;

  return (
    <div
      className="bg-white shadow rounded overflow-hidden cursor-pointer transition transform hover:scale-105"
      onClick={() => window.open(url, "_blank")}
    >
      {urlToImage ? (
        <img
          src={urlToImage}
          alt="news"
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 flex items-center justify-center bg-gray-200">No Image</div>
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">
          {title?.slice(0, 60)}...
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          {source?.name} · {publishedAt ? new Date(publishedAt).toLocaleString("en-US", { timeZone: "Asia/Jakarta" }) : 'Unknown Date'}
        </p>
        <p className="text-gray-700 mt-4">
          {description ? (description.slice(0, 70) + '...') : 'No description available'}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
