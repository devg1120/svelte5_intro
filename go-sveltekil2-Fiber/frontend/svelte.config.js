//import adapter from "@sveltejs/adapter-static";
import adapter from "@sveltejs/adapter-node";
/** @type {import('@sveltejs/kit').Config} */

const config = {
  kit: {
    adapter: adapter({
      fallback: "index.html",
    }),
  },
};


export default config;

