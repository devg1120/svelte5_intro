import * as server from '../entries/pages/articles/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.C0wWw4wl.js","_app/immutable/chunks/B4nvuYTy.js","_app/immutable/chunks/CJlLnzGF.js","_app/immutable/chunks/BpTnGrrI.js","_app/immutable/chunks/Bn7vJT4X.js","_app/immutable/chunks/Bz3NVuBy.js","_app/immutable/chunks/CSBOTBi8.js","_app/immutable/chunks/CzEnNwtA.js","_app/immutable/chunks/CTZx8DGO.js","_app/immutable/chunks/DgOb3btL.js"];
export const stylesheets = [];
export const fonts = [];
