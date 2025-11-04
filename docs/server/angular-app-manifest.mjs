
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/your_project_name/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/your_project_name"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PX475TEM.js"
    ],
    "route": "/your_project_name/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PX475TEM.js",
      "chunk-DYM3TJJ3.js"
    ],
    "route": "/your_project_name/**"
  },
  {
    "renderMode": 2,
    "route": "/your_project_name/forms"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CTTPWLXU.js",
      "chunk-ZH6VWAXI.js"
    ],
    "route": "/your_project_name/forms/login-form"
  },
  {
    "renderMode": 2,
    "route": "/your_project_name/pages"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 666, hash: '5bf0975bd2dc01dda987358a1deee8262b6c6683229a1e3b02301c04c3c3b3aa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1179, hash: '54c74d2f32fc04c8f6c51d5e73e4325f06f07e9c9cd7ef4e4f2a62b682658146', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14223, hash: '8c8ed6cb83ec92004e67e66a35a8d186292eaadc64b34e7d000c1509a73012d5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'forms/login-form/index.html': {size: 14356, hash: 'b98a8e74cbc2bbcf6cbf3f4d23e0979ecdbdc48564f10fc9e3e94f57c6ec25d0', text: () => import('./assets-chunks/forms_login-form_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 14303, hash: 'a0e88fdea2343b9d39d49aaf8c7915d57451598afce000d8d44ba4a54528bfaf', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'pages/index.html': {size: 14251, hash: 'cf49a6951661c471e070d47356cb154f0b44900df6a57734963a0c9beff02d49', text: () => import('./assets-chunks/pages_index_html.mjs').then(m => m.default)},
    'forms/index.html': {size: 14251, hash: 'cf49a6951661c471e070d47356cb154f0b44900df6a57734963a0c9beff02d49', text: () => import('./assets-chunks/forms_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
