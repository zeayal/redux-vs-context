import React, { useState, useContext } from "react";
import { nanoid } from "nanoid";
import { articleContext } from "../../context/ArticleContextProvider";
const AddArticle = ({}) => {
  const [article, setArticle] = useState(null);
  const { saveArticle } = useContext(articleContext);
  const handleOnChange = (event) => {
    const { id, value } = event.target;
    setArticle({
      ...article,
      id: article?.id ?? nanoid(),
      [id]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (article && saveArticle) {
      saveArticle(article);
      setArticle(null);
    }
  };

  return (
    <div className="add-article-container">
      <form onSubmit={onSubmit}>
        <div>
          <input
            id="title"
            value={article?.title ?? ""}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <textarea
            id="desc"
            value={article?.desc ?? ""}
            onChange={handleOnChange}
          />
        </div>
        <button>提交</button>
      </form>
    </div>
  );
};

export default AddArticle;
