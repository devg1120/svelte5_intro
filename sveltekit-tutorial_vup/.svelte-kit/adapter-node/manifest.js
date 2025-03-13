export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.CpZjOcLk.js",app:"_app/immutable/entry/app.DqLIM_vq.js",imports:["_app/immutable/entry/start.CpZjOcLk.js","_app/immutable/chunks/CzEnNwtA.js","_app/immutable/chunks/CJlLnzGF.js","_app/immutable/chunks/CTZx8DGO.js","_app/immutable/entry/app.DqLIM_vq.js","_app/immutable/chunks/CJlLnzGF.js","_app/immutable/chunks/BpTnGrrI.js","_app/immutable/chunks/Bn7vJT4X.js","_app/immutable/chunks/B4nvuYTy.js","_app/immutable/chunks/JPRR9ya2.js","_app/immutable/chunks/280SkVX7.js","_app/immutable/chunks/DgOb3btL.js","_app/immutable/chunks/CVjGwcnt.js","_app/immutable/chunks/CTZx8DGO.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/articles",
				pattern: /^\/articles\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/articles/new",
				pattern: /^\/articles\/new\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/articles/[id]",
				pattern: /^\/articles\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/articles/[id]/delete",
				pattern: /^\/articles\/([^/]+?)\/delete\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const base = "";