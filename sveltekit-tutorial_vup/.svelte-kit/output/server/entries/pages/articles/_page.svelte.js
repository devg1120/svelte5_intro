import { M as attr, N as stringify, O as escape_html, E as pop, B as push, P as ensure_array_like } from "../../../chunks/index.js";
import "../../../chunks/client.js";
function DeleteModal($$payload, $$props) {
  const { id } = $$props;
  $$payload.out += `<button type="button" class="bg-red-500 text-white px-4 py-2 rounded-lg">削除</button> <dialog class="p-4 w-96 backdrop:backdrop-blur-sm backdrop:bg-black/40 bg-white rounded-lg" aria-labelledby="modal-title"><form><h2 id="modal-title" class="text-xl font-bold">記事の削除</h2> <p>本当に削除しますか？</p> <div class="mt-4 flex justify-end"><button class="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg" formmethod="dialog">キャンセル</button> <button class="bg-red-500 text-white px-4 py-2 rounded-lg ml-2" formmethod="post"${attr("formaction", `/articles/${stringify(id)}/delete`)}>OK</button></div></form></dialog>`;
}
function Card($$payload, $$props) {
  push();
  const { id, title, createdAt } = $$props;
  $$payload.out += `<div class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out flex justify-between"><div><a${attr("href", `/articles/${stringify(id)}`)} class="hover:underline"><h2 class="text-lg font-bold">${escape_html(title)}</h2></a> <time class="text-sm text-gray-500"${attr("datetime", createdAt.toISOString())}>${escape_html(createdAt.toLocaleDateString())}</time></div> <div>`;
  DeleteModal($$payload, { id });
  $$payload.out += `<!----></div></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  const { data } = $$props;
  const each_array = ensure_array_like(data.articles);
  $$payload.out += `<h1 class="text-3xl font-bold mt-4">記事一覧</h1> <ul class="mt-4 grid grid-cols-1 gap-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let article = each_array[$$index];
    Card($$payload, {
      id: article.id,
      title: article.title,
      createdAt: article.createdAt
    });
  }
  $$payload.out += `<!--]--></ul>`;
  pop();
}
export {
  _page as default
};
