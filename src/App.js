import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ErrorPage from "./components/ErrorPage";

const API_KEY = "0ea2bdb2e0714ed0a010339f866ae4b0";
const API_URL = "https://newsapi.org/v2/everything?q=";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Corrected default value to `false`
  const [error, setError] = useState(false);

  const fetchNews = async (query) => {
    setIsLoading(true); // Start loader
    try {
      const res = await fetch(`${API_URL}${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);

      // Check for response status and handle edge cases
      if (data.status === "ok") {
        setArticles(data.articles.slice(0, 100) || []);
        setError(false); // Clear any previous error state
      } else {
        setError(true);
        console.error("Error fetching news: Invalid response");
      }
    } catch (error) {
      setError(true); // Set error to true in case of fetch failure
      console.error("Error fetching news:", error);
    } finally {
      setIsLoading(false); // Stop loader
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
