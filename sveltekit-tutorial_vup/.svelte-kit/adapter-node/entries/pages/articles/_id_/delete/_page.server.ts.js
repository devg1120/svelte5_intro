import { d as deleteArticle } from "../../../../../chunks/articles.js";
import { r as redirect } from "../../../../../chunks/index2.js";
const actions = {
  default: async ({ params }) => {
    const id = params.id;
    await deleteArticle(Number(id));
    return redirect(303, "/articles");
  }
};
export {
  actions
};
