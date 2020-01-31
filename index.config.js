/* global React, ReactDOM, MaterialUI */

// user config
const externals = {}
/**@type { SystemJSLoader.ConfigMap} */

/** @type{ {[module: string] : { globalName:string, map:string`} }} */
const config = {
  'react': { globalName: 'React', map: '/node_modules/@material-ui/core/umd/material-ui.development.js' },
  'react-dom': { globalName: 'ReactDOM', map: '/node_modules/react-dom/umd/react-dom.development.js' },
  '@material-ui': { globalName: 'MaterialUI', map: '/node_modules/@material-ui/core/umd/material-ui.development.js' },
}

//system code
const map = {}
for (const [mod, v] in Object.entries(config)) {
  console.debug(mod, v)
}

if (window.React) externals['react'] = window.React; else map['react'] = '/node_modules/@material-ui/core/umd/material-ui.development.js'
if (window.ReactDOM) externals['react-dom'] = window.ReactDOM;
if (window.MaterialUI) externals['@material-ui/core'] = window.MaterialUI;

for (const m in externals) {
  console.debug('external: ', m, externals[m])
  if (externals[m].default)
    SystemJS.set(m, SystemJS.newModule(externals[m]))
  else
    SystemJS.set(m, SystemJS.newModule({ default: externals[m], __useDefault: true, ...externals[m] }))
  // System.set(m, System.newModule({ default: externals[m], __useDefault: true, }))
}

//SystemJS.config
SystemJS.config({
  paths: {
    api: '/api',
    src: '/src',
    node_modules: '/node_modules',
    'npm:': '/node_modules/',
    // '@material-ui/icons/*': '/node_modules/@material-ui/icons/*',
  },

  packages: {
    '.': { defaultExtension: 'js' },
    //'typescript': {  main: 'typescript.min.js', meta: { '*': { exports: 'ts' } } }, //getlibs original
    typescript: { meta: { '*': { exports: 'ts' } } }, //unpkg.com typescript no min
    api: {
      defaultExtension: 'tsx'
    },
    src: {
      defaultExtension: 'tsx'
    },
    'src/anychart-react': {
      defaultExtension: ''
    },

    'ag-grid-community': {
      "main": "./dist/ag-grid-community.cjs.js",
    },

  },
  map: {

    //'typescript': 'https://unpkg.com/typescript@3.7.2/lib/typescript.js',
    //'typescript': 'https://cdnjs.cloudflare.com/ajax/libs/typescript/2.6.2', //getlibs original
    // typescript: 'https://cdnjs.cloudflare.com/ajax/libs/typescript/3.7.2',
    typescript: 'npm:typescript/lib/typescript.js',
    // UMD packages
    'react-is': '/node_modules/react-is/umd/react-is.development.js',
    'prop-types': 'npm:prop-types/prop-types.js',

    'ag-grid-react': 'npm:ag-grid-react/umd/ag-grid-react.min.js',
    'ag-grid-community': 'npm:ag-grid-community',
    'ag-grid-enterprise': 'npm:ag-grid-enterprise',
    'css-properties.js': 'css-properties/index.js',
    // 'react': '/node_modules/@material-ui/core/umd/material-ui.development.js',
    // 'react-dom': '/node_modules/react-dom/umd/react-dom.development.js',
  },
  typescriptOptions: {
    jsx: 'react',
    // tsconfig: '/tsconfig.json',
  },
  transpiler: 'plugin-typescript', // 'plugin-typescript',
  meta: {

  },
  bundles: {},
});




window.addEventListener('DOMContentLoaded', event => {

});

