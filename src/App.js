import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchNews = async (query) => {
  setIsLoading(true);
  try {
    const proxyUrl = "https://api.allorigins.win/raw?url=";
    const targetUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=0ea2bdb2e0714ed0a010339f866ae4b0`;

    const res = await fetch(proxyUrl + encodeURIComponent(targetUrl));
    const data = await res.json();
    console.log(data);

    if (data.status === "ok") {
      setArticles(data.articles.slice(0, 100) || []);
      setError(false);
    } else {
      setError(true);
      console.error("Error fetching news: Invalid response");
    }
  } catch (error) {
    setError(true);
    console.error("Error fetching news:", error);
  } finally {
    setIsLoading(false);
  }
};

  useEffect(() => {
    fetchNews("technology");
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar fetchNews={fetchNews} />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorPage />
      ) : (
        <MainContainer articles={articles} />
      )}
      <Footer />
    </div>
  );
};

export default App;
