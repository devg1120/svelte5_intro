import { J as head, O as escape_html, M as attr, E as pop, B as push } from "../../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  const { data } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(data.article.title)}</title>`;
    $$payload2.out += `<meta name="description"${attr("content", data.article.content)}>`;
  });
  $$payload.out += `<div class="mx-auto my-5 max-w-5xl"><a href="/articles" class="flex items-center text-opacity-80 hover:underline">← 記事一覧に戻る</a></div> <article class="p-4 mx-auto max-w-3xl"><div class="text-center"><h1 class="mt-4 text-2xl font-bold md:text-4xl">${escape_html(data.article.title)}</h1> <time class="text-sm text-gray-500 block mt-2"${attr("datetime", data.article.createdAt.toISOString())}>${escape_html(data.article.createdAt.toLocaleDateString())}</time></div> <div class="bg-white py-4 px-8 mt-8 shadow-md rounded-lg">${escape_html(data.article.content)}</div></article>`;
  pop();
}
export {
  _page as default
};
