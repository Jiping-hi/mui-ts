SystemJS.config({
  defaultJSExtensions: false,
  paths: {
    api: '/api',
    src: '/src',
    node_modules: '/node_modules',
  },

  packages: {
    '.': { defaultExtension: 'tsx', format: 'esm' },
    //'typescript': {  main: 'typescript.min.js', meta: { '*': { exports: 'ts' } } }, //getlibs original
    typescript: { main: 'typescript.js', meta: { '*': { exports: 'ts' } } }, //unpkg.com typescript no min
    // '@material-ui/core': { format: 'amd' },
    api: {
      defaultExtension: 'tsx'
    },
    src: {
      defaultExtension: 'tsx'
    },
    'src/anychart-react': {
      defaultExtension: ''
    },
    '@material-ui/icons/': {
      defaultExtension: 'js',
      format: 'cjs',
    },
    '@material-ui/core/': {
      defaultExtension: '',
      format: 'cjs',
    },
    // 'css-properties': {
    //   defaultExtension: '',
    //   main: 'index.js',
    // },
  },
  map: {
    react: '/node_modules/react/umd/react.development.js',
    'react-dom': '/node_modules/react-dom/umd/react-dom.development.js',
    'anychart': '/node_modules/anychart/dist/js/anychart-bundle.min.js',
    'anychart-react': '/src/anychart-react/src/anychart-react.jsx',
    //'typescript': 'https://unpkg.com/typescript@3.7.2/lib/typescript.js',
    //'typescript': 'https://cdnjs.cloudflare.com/ajax/libs/typescript/2.6.2', //getlibs original
    typescript: 'https://cdnjs.cloudflare.com/ajax/libs/typescript/3.7.2',
    '@material-ui/core': '/node_modules/@material-ui/core/umd/material-ui.development.js',
    '@material-ui/core/': '/node_modules/@material-ui/core/',
    // '@material-ui/': '/node_modules/@material-ui/core/',
    'css-properties.js': 'css-properties/index.js',
  },
  typescriptOptions: {
    jsx: 'react'
  },
  transpiler: 'plugin-typescript',
  meta: {
    //'/node_modules/@material-ui/core/*': {format: 'cjs', }
  },
  bundles: {},
});
