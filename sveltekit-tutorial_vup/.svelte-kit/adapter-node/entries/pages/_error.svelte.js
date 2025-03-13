import { F as getContext, G as store_get, I as unsubscribe_stores, E as pop, B as push } from "../../chunks/index.js";
import "../../chunks/client.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _error($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<div class="mt-4 flex flex-col items-center"><h1 class="text-6xl font-bold italic tracking-wide">`;
  if (store_get($$store_subs ??= {}, "$page", page).status === 404) {
    $$payload.out += "<!--[-->";
    $$payload.out += `404 Not Found`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `500 Internal Server Error`;
  }
  $$payload.out += `<!--]--></h1> <p class="mb-6 mt-4 max-w-2xl font-light leading-relaxed text-gray-500 md:text-lg lg:mb-8 lg:text-xl">`;
  if (store_get($$store_subs ??= {}, "$page", page).status === 404) {
    $$payload.out += "<!--[-->";
    $$payload.out += `お探しのページが見つかりませんでした。`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `予期せぬエラーが発生しました。`;
  }
  $$payload.out += `<!--]--></p> <div class="mt-16"><a href="/" class="flex items-center text-opacity-80 hover:underline">トップに戻る</a></div></div>`;
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  pop();
}
export {
  _error as default
};
