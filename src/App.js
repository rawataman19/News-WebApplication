import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const API_KEY = "0ea2bdb2e0714ed0a010339f866ae4b0";
const API_URL = "https://newsapi.org/v2/everything?q=";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading , setisLoading]= useState([false]); 

  const fetchNews = async (query) => {
    setisLoading(true);
    try {
      const res = await fetch(`${API_URL}${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setArticles(data.articles.slice(15,25) || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    finally{
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchNews("technology");
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar fetchNews={fetchNews} />
      {isLoading? (<Loader/>):
      (<MainContainer articles={articles} />)}
      <Footer/>
    </div>
  );
};

export default App;
