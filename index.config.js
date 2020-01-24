/* global React, ReactDOM, MaterialUI */
//SystemJS settings
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
  },
  typescriptOptions: {
    jsx: 'react'
  },
  transpiler: 'plugin-typescript',
  meta: {

  },
  bundles: {},
});


// globals
let externals = {
  "react": { default: React },
  "react-dom": ReactDOM,
  '@material-ui/core': MaterialUI,
};
for (const m in externals) {
  System.set(m, System.newModule(externals[m]))
  // System.set(m, System.newModule({ default: externals[m], __useDefault: true, }))

}

window.addEventListener('DOMContentLoaded', event => {

});

