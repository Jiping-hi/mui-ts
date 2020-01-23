/* global React, ReactDOM, MaterialUI */


//SystemJS settings
SystemJS.config({
  //defaultJSExtensions: 'js',
  paths: {
    api: '/api',
    src: '/src',
    node_modules: '/node_modules',
    'npm:': '/node_modules/',
    '@material-ui/icons/*': '/node_modules/@material-ui/icons/*',
  },

  packages: {
    '.': { defaultExtension: 'js' },
    //'typescript': {  main: 'typescript.min.js', meta: { '*': { exports: 'ts' } } }, //getlibs original
    typescript: { main: 'typescript.js', meta: { '*': { exports: 'ts' } } }, //unpkg.com typescript no min
    api: {
      defaultExtension: 'tsx'
    },
    src: {
      defaultExtension: 'tsx'
    },
    'src/anychart-react': {
      defaultExtension: ''
    },

    // '@material-ui/core/SvgIcon': {

    // },


    // 'css-properties': {
    //   defaultExtension: '',
    //   main: 'index.js',
    // },

    'ag-grid-community': {
      "main": "./dist/ag-grid-community.cjs.js",
    },

  },
  map: {

    //'typescript': 'https://unpkg.com/typescript@3.7.2/lib/typescript.js',
    //'typescript': 'https://cdnjs.cloudflare.com/ajax/libs/typescript/2.6.2', //getlibs original
    // typescript: 'https://cdnjs.cloudflare.com/ajax/libs/typescript/3.7.2',
    typescript: '/node_modules/typescript/lib',
    // UMD packages
    // react: '/node_modules/react/umd/react.development.js',
    // 'react-dom': '/node_modules/react-dom/umd/react-dom.development.js',
    // 'react-router-dom': '/node_modules/react-router-dom/umd/react-router-dom.js',
    'react-is': '/node_modules/react-is/umd/react-is.development.js',
    'prop-types': 'npm:prop-types/prop-types.js',

    // '@material-ui/core': 'npm:@material-ui/core/umd/material-ui.development.js',
    // '@material-ui/core/SvgIcon': 'npm:@material-ui/core/umd/material-ui.development.js',
    // '@material-ui/icons': 'npm:@material-ui/icons',

    'anychart': 'npm:anychart/dist/js/anychart-bundle.min.js',
    'anychart-react': '/src/anychart-react/src/anychart-react.jsx',
    // 'capitalize': 'npm:capitalize',
    // 'ag-grid-react': 'npm:ag-grid-react', //by umd
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

const process = {
  env: {
    NODE_ENV: 'production'
  }
}

// globals
let externals = {
  "react": { default: React },
  "react-dom": ReactDOM,
  // '@material-ui/core/SvgIcon': MaterialUI.SvgIcon,
  '@material-ui/core': MaterialUI,
};
for (const m in externals) {
  System.set(m, System.newModule(externals[m]))
  // System.set(m, System.newModule({ default: externals[m], __useDefault: true, }))

}

window.addEventListener('DOMContentLoaded', event => {

});

