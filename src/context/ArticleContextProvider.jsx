import React, { createContext, useState } from "react";

export const articleContext = createContext();

const ArticleContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([
    { id: 1, title: "Article 1", desc: "article desc 1" },
    { id: 2, title: "Article 2", desc: "article desc 2" },
  ]);

  const saveArticle = (article) => {
    setArticles((prevArticles) => [...prevArticles, article]);
  };

  return (
    <articleContext.Provider value={{ saveArticle, articles }}>
      {children}
    </articleContext.Provider>
  );
};

export default ArticleContextProvider;
