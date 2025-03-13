import { J as head, M as attr, O as escape_html, Q as attr_class, E as pop, B as push } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  const { form } = $$props;
  let content = form?.fields.content ?? "";
  const count = (() => {
    const segmenter = new Intl.Segmenter("ja", { granularity: "grapheme" });
    return [...segmenter.segment(content)].length;
  })();
  const maxCount = 1e3;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>新規記事投稿</title>`;
  });
  $$payload.out += `<form method="POST"><div class="grid gap-6 mt-6"><div><label for="title" class="block mb-2 text-sm font-medium text-gray-900">タイトル</label> <input id="title" name="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required${attr("value", form?.fields.title ?? "")}${attr("aria-invalid", form?.errors.fieldErrors?.title ? "true" : void 0)}${attr("aria-describedby", form?.errors.fieldErrors?.title ? "title-error" : void 0)}> `;
  if (form?.errors.fieldErrors?.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p id="title-error" class="text-red-600 text-sm mt-1">${escape_html(form.errors.fieldErrors.title)}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div><label for="content" class="block mb-2 text-sm font-medium text-gray-900">本文</label> <textarea id="content" name="content" rows="10" class="border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 svelte-mp73rw" required${attr("aria-invalid", form?.errors.fieldErrors?.content ? "true" : void 0)}${attr("aria-describedby", form?.errors.fieldErrors?.content ? "content-error" : void 0)}>`;
  const $$body = escape_html(content);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea> <p${attr_class("text-sm text-gray-500 mt-1", void 0, { "text-red-600": count > maxCount })}>${escape_html(count)}/${escape_html(maxCount)}</p> `;
  if (form?.errors.fieldErrors?.content) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p id="content-error" class="text-red-600 text-sm mt-1">${escape_html(form.errors.fieldErrors.content)}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div><button type="submit" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300">投稿する</button></div></div></form>`;
  pop();
}
export {
  _page as default
};
