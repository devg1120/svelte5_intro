import { J as head, K as bind_props } from "../../chunks/index.js";
function _page($$payload, $$props) {
  const prerender = true;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Svelte Diary</title>`;
    $$payload2.out += `<meta name="description" content="Svelte Diary は、ユーザーが日々の思いや出来事をシンプルで使いやすいインターフェースで記録し、共有するための記事投稿サービスです。">`;
  });
  $$payload.out += `<div class="py-12 px-12 mt-8 text-center bg-white max-w-screen-xl mx-auto"><h1 class="mb-4 text-6xl font-extrabold tracking-tight leading-none text-gray-90">Svelte Diary</h1> <p class="mb-8 text-lg font-normal text-gray-500 px-48">Svelte Diary
		は、ユーザーが日々の思いや出来事をシンプルで使いやすいインターフェースで記録し、共有するための記事投稿サービスです。直感的なデザインとスムーズな操作性により、ユーザーは簡単に自分の日常を記録し、思い出を保存することができます。</p> <div class="flex flex-row justify-center sm:space-y-0 sm:space-x-4"><a href="/articles" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">記事を読む</a> <a href="/articles/new" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300">記事を投稿</a></div></div>`;
  bind_props($$props, { prerender });
}
export {
  _page as default
};
