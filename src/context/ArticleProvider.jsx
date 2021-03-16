import React, { createContext, useReducer, useState } from "react";
import { aticleReducer } from "./reducer";
export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [articles, dispatch] = useReducer(aticleReducer, [
    { id: 1, title: "Article 1", desc: "article desc 1" },
    { id: 2, title: "Article 2", desc: "article desc 2" },
  ]);
  
  return (
    <ArticleContext.Provider value={{ dispatch, articles }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
