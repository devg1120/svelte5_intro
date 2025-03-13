import * as server from '../entries/pages/articles/_id_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.a5GKQKRH.js","_app/immutable/chunks/B4nvuYTy.js","_app/immutable/chunks/CJlLnzGF.js","_app/immutable/chunks/BpTnGrrI.js","_app/immutable/chunks/Bn7vJT4X.js","_app/immutable/chunks/Bz3NVuBy.js"];
export const stylesheets = [];
export const fonts = [];
