

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.TEKmvMmv.js","_app/immutable/chunks/B4nvuYTy.js","_app/immutable/chunks/CJlLnzGF.js"];
export const stylesheets = ["_app/immutable/assets/0.BxMZtY0K.css"];
export const fonts = [];
