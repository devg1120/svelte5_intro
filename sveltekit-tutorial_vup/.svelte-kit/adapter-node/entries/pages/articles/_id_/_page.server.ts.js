import { a as getArticleById } from "../../../../chunks/articles.js";
import { e as error } from "../../../../chunks/index2.js";
const load = async ({ params }) => {
  const article = await getArticleById(Number(params.id));
  if (article === null) {
    error(404, {
      message: `Article with id ${params.id} not found`
    });
  }
  return { article };
};
export {
  load
};
