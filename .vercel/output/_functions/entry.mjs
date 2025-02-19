import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BToEtWM_.mjs';
import { manifest } from './manifest_ByzLw46I.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.3.0_jiti@2.4.2_ligh_62ee0c6d994e120ba32eb18414225db7/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "688313d7-7b68-47c6-9bf5-5f3e426d1d4d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
