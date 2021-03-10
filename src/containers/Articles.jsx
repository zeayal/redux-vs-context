import React, { useContext } from "react";
import AddArticle from "../components/Article/AddArticle";
import Article from "../components/Article/Article";
import { articleContext } from "../context/ArticleContextProvider";

const Articles = () => {

  const { articles } = useContext(articleContext);

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
