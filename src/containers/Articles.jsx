import React, { useState } from "react";
import AddArticle from "../components/Article/AddArticle";
import Article from "../components/Article/Article";

const Articles = () => {
  const [ articles, setArticles ] = useState([
    { id: 1, title: "Article 1", desc: "article desc 1" },
    { id: 2, title: "Article 2", desc: "article desc 2" },
  ]);

  const onSaveArticle = (article) => {
    setArticles(prevArticles => [
      ...prevArticles,
      article
    ])
  }
  
  return (
    <React.Fragment>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
      <AddArticle onSaveArticle={onSaveArticle}/>
    </React.Fragment>
  );
};

export default Articles;
