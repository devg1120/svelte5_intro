import { g as getArticles } from "../../../chunks/articles.js";
const load = async () => {
  const { articles } = await getArticles();
  return { articles };
};
export {
  load
};
