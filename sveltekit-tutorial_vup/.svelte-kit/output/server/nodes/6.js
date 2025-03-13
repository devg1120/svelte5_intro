import * as server from '../entries/pages/articles/new/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/new/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/new/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.BEpkMBC4.js","_app/immutable/chunks/B4nvuYTy.js","_app/immutable/chunks/CJlLnzGF.js","_app/immutable/chunks/BpTnGrrI.js","_app/immutable/chunks/Bn7vJT4X.js","_app/immutable/chunks/JPRR9ya2.js","_app/immutable/chunks/CSBOTBi8.js","_app/immutable/chunks/CzEnNwtA.js","_app/immutable/chunks/CTZx8DGO.js","_app/immutable/chunks/Bz3NVuBy.js","_app/immutable/chunks/280SkVX7.js"];
export const stylesheets = ["_app/immutable/assets/6.C649u9Wq.css"];
export const fonts = [];
