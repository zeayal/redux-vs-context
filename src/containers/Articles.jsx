import React, { useState } from "react";
import Article from "../components/Article/Article";

const Articles = () => {
  const [ articles, setArticles ] = useState([
    { id: 1, title: "Article 1", desc: "article desc 1" },
    { id: 2, title: "Article 2", desc: "article desc 2" },
  ]);
  
  return (
    <React.Fragment>
      {articles.map((article) => (
        <Article article={article} />
      ))}
    </React.Fragment>
  );
};

export default Articles;
