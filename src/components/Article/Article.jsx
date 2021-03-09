import React from "react";

const Article = ({ article }) => {
  return (
    <React.Fragment>
      <h2>{article.title}</h2>
      <p>{article.desc}</p>
    </React.Fragment>
  );
};

export default Article;
