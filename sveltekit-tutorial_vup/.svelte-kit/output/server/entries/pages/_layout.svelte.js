import "clsx";
function _layout($$payload, $$props) {
  const { children } = $$props;
  $$payload.out += `<div class="bg-gray-200 min-h-screen flex flex-col"><header class="sticky top-0 z-50 bg-white shadow-md h-16"><nav class="container mx-auto flex justify-between items-center py-4"><a href="/" class="text-xl font-bold">Svelte Diary</a> <ul class="flex gap-4"><li><a href="/articles" class="text-gray-800">記事の一覧</a></li> <li><a href="/articles/new" class="text-gray-800">記事の投稿</a></li></ul></nav></header> <main class="container mx-auto mt-4 flex-grow">`;
  children($$payload);
  $$payload.out += `<!----></main> <footer class="bg-gray-800 text-white text-center py-4 h-16"><p>© 2024 Svelte Diary</p></footer></div>`;
}
export {
  _layout as default
};
