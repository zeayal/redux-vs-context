import { nanoid } from "nanoid";
import { ADD_ARTICLE } from './constant';

export const aticleReducer = (state, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [
        ...state,
        {
          id: action.article?.id ?? nanoid(),
          title: action.article.title,
          desc: action.article.desc,
        },
      ];
    default:
      return state;
  }
};
