import React, { useContext } from "react";
import AddArticle from "../components/Article/AddArticle";
import Article from "../components/Article/Article";
import { ArticleContext } from "../context/ArticleProvider";

const Articles = () => {

  const { articles } = useContext(ArticleContext);

  return (
    
      <React.Fragment>
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
        <AddArticle />
      </React.Fragment>
  );
};

export default Articles;
