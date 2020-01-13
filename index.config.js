SystemJS.config({
  //defaultJSExtensions: 'js',
  paths: {
    api: '/api',
    src: '/src',
    node_modules: '/node_modules',
    'npm:': '/node_modules/'
  },

  packages: {
    '*': { defaultExtension: 'js' },
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


    // 'css-properties': {
    //   defaultExtension: '',
    //   main: 'index.js',
    // },
  },
  map: {

    //'typescript': 'https://unpkg.com/typescript@3.7.2/lib/typescript.js',
    //'typescript': 'https://cdnjs.cloudflare.com/ajax/libs/typescript/2.6.2', //getlibs original
    typescript: 'https://cdnjs.cloudflare.com/ajax/libs/typescript/3.7.2',
    // UMD packages
    react: '/node_modules/react/umd/react.development.js',
    'react-dom': '/node_modules/react-dom/umd/react-dom.development.js',
    'react-router-dom': '/node_modules/react-router-dom/umd/react-router-dom.js',
    'react-is': '/node_modules/react-is/umd/react-is.development.js',
    'prop-types': 'npm:prop-types/prop-types.js',

    '@material-ui/core': 'npm:@material-ui/core/umd/material-ui.development.js',

    'anychart': 'npm:anychart/dist/js/anychart-bundle.min.js',
    'anychart-react': '/src/anychart-react/src/anychart-react.jsx',
    // 'capitalize': 'npm:capitalize',

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
