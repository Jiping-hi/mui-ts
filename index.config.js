/* global React, ReactDOM, MaterialUI */

// user config

/** @type{ {[moduleName: string] : { globalName:string, mapPath:string`} }} */
const externals = {
  // react: { globalName: 'React', mapPath: '/node_modules/react/umd/react.development.js' },
  // 'react-dom': { globalName: 'ReactDOM', mapPath: '/node_modules/react-dom/umd/react-dom.development.js' },
  // '@material-ui/core': {
  //   globalName: 'MaterialUI',
  //   mapPath: '/node_modules/@material-ui/core/umd/material-ui.development.js'
  // },
  // 'ag-grid-community': { globalName: 'agGrid', mapPath: 'npm:ag-grid-community' },
  // 'ag-grid-react': { globalName: 'AgGridReact', mapPath: 'npm:ag-grid-react', main: '/umd/ag-grid-react.min.js' },
};

//system code
/**@type { SystemJSLoader.ConfigMap} */
const mapList = {};
for (let [moduleName, { globalName, mapPath }] of Object.entries(externals)) {
  console.debug(moduleName, globalName, mapPath);
  let globalObject = window[globalName];
  if (globalObject) {
    globalObject = globalObject.default
      ? globalObject
      : {
          default: globalObject,
          // __useDefault: true,
          ...globalObject
        };
    SystemJS.set(moduleName, SystemJS.newModule(globalObject));
  } else if (mapPath) {
    mapList[moduleName] = mapPath;
  } else {
    console.warn(`module '${moduleName}' not valid`);
  }
}
console.debug('mapList', mapList);

//SystemJS.config
SystemJS.config({
  paths: {
    api: '/api',
    src: '/src',
    node_modules: '/node_modules',
    'npm:': '/node_modules/'
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
    react: {
      'main': './umd/react.development.js',
    },
    'react-dom': {
      'main': './umd/react-dom.development.js',
    },
    '@material-ui/core': {
      main: './umd/material-ui.development.js',
      // 'format': 'global',
    },
    'ag-grid-community': {
      main: './dist/ag-grid-community.js'
    },
    'ag-grid-enterprise': {
      main: './dist/ag-grid-enterprise.js'
    },
    'ag-grid-react': {
      main: './umd/ag-grid-react.min.js'
    }
  },
  map: {
    ...mapList,
    'react': 'npm:react',
    'react-dom': 'npm:react-dom',
    //'typescript': 'https://unpkg.com/typescript@3.7.2/lib/typescript.js',
    //'typescript': 'https://cdnjs.cloudflare.com/ajax/libs/typescript/2.6.2', //getlibs original
    // typescript: 'https://cdnjs.cloudflare.com/ajax/libs/typescript/3.7.2',
    typescript: 'npm:typescript/lib/typescript.js',

    'react-is': '/node_modules/react-is/umd/react-is.development.js',
    'prop-types': 'npm:prop-types/prop-types.js',
    '@material-ui/core': 'npm:@material-ui/core',

    'ag-grid-react': 'npm:ag-grid-react',
    'ag-grid-community': 'npm:ag-grid-community',
    'ag-grid-enterprise': 'npm:ag-grid-enterprise',
    'css-properties.js': 'css-properties/index.js'
  },
  typescriptOptions: {
    jsx: 'react'
    // tsconfig: '/tsconfig.json',
  },
  transpiler: 'plugin-typescript', // 'plugin-typescript',
  meta: {},
  bundles: {}
});

window.addEventListener('DOMContentLoaded', event => {});
