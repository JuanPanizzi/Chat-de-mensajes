[33mcommit d801b83614ecce6015c42040c639960b4bb91692[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmain[m[33m, [m[1;31morigin/main[m[33m)[m
Author: Juan <juanpanizzi@hotmail.com>
Date:   Sat Apr 13 00:20:19 2024 -0300

    first commit

[1mdiff --git a/backend b/backend[m
[1mnew file mode 160000[m
[1mindex 0000000..a3b134a[m
[1m--- /dev/null[m
[1m+++ b/backend[m
[36m@@ -0,0 +1 @@[m
[32m+[m[32mSubproject commit a3b134a87eefab416062d16bde448175fc86e354[m
[1mdiff --git a/frontend/.eslintrc.cjs b/frontend/.eslintrc.cjs[m
[1mnew file mode 100644[m
[1mindex 0000000..3e212e1[m
[1m--- /dev/null[m
[1m+++ b/frontend/.eslintrc.cjs[m
[36m@@ -0,0 +1,21 @@[m
[32m+[m[32mmodule.exports = {[m
[32m+[m[32m  root: true,[m
[32m+[m[32m  env: { browser: true, es2020: true },[m
[32m+[m[32m  extends: [[m
[32m+[m[32m    'eslint:recommended',[m
[32m+[m[32m    'plugin:react/recommended',[m
[32m+[m[32m    'plugin:react/jsx-runtime',[m
[32m+[m[32m    'plugin:react-hooks/recommended',[m
[32m+[m[32m  ],[m
[32m+[m[32m  ignorePatterns: ['dist', '.eslintrc.cjs'],[m
[32m+[m[32m  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },[m
[32m+[m[32m  settings: { react: { version: '18.2' } },[m
[32m+[m[32m  plugins: ['react-refresh'],[m
[32m+[m[32m  rules: {[m
[32m+[m[32m    'react/jsx-no-target-blank': 'off',[m
[32m+[m[32m    'react-refresh/only-export-components': [[m
[32m+[m[32m      'warn',[m
[32m+[m[32m      { allowConstantExport: true },[m
[32m+[m[32m    ],[m
[32m+[m[32m  },[m
[32m+[m[32m}[m
[1mdiff --git a/frontend/.gitignore b/frontend/.gitignore[m
[1mnew file mode 100644[m
[1mindex 0000000..a547bf3[m
[1m--- /dev/null[m
[1m+++ b/frontend/.gitignore[m
[36m@@ -0,0 +1,24 @@[m
[32m+[m[32m# Logs[m
[32m+[m[32mlogs[m
[32m+[m[32m*.log[m
[32m+[m[32mnpm-debug.log*[m
[32m+[m[32myarn-debug.log*[m
[32m+[m[32myarn-error.log*[m
[32m+[m[32mpnpm-debug.log*[m
[32m+[m[32mlerna-debug.log*[m
[32m+[m
[32m+[m[32mnode_modules[m
[32m+[m[32mdist[m
[32m+[m[32mdist-ssr[m
[32m+[m[32m*.local[m
[32m+[m
[32m+[m[32m# Editor directories and files[m
[32m+[m[32m.vscode/*[m
[32m+[m[32m!.vscode/extensions.json[m
[32m+[m[32m.idea[m
[32m+[m[32m.DS_Store[m
[32m+[m[32m*.suo[m
[32m+[m[32m*.ntvs*[m
[32m+[m[32m*.njsproj[m
[32m+[m[32m*.sln[m
[32m+[m[32m*.sw?[m
[1mdiff --git a/frontend/README.md b/frontend/README.md[m
[1mnew file mode 100644[m
[1mindex 0000000..f768e33[m
[1m--- /dev/null[m
[1m+++ b/frontend/README.md[m
[36m@@ -0,0 +1,8 @@[m
[32m+[m[32m# React + Vite[m
[32m+[m
[32m+[m[32mThis template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.[m
[32m+[m
[32m+[m[32mCurrently, two official plugins are available:[m
[32m+[m
[32m+[m[32m- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh[m
[32m+[m[32m- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh[m
[1mdiff --git a/frontend/index.html b/frontend/index.html[m
[1mnew file mode 100644[m
[1mindex 0000000..0627781[m
[1m--- /dev/null[m
[1m+++ b/frontend/index.html[m
[36m@@ -0,0 +1,14 @@[m
[32m+[m[32m<!doctype html>[m
[32m+[m[32m<html lang="en">[m
[32m+[m[32m  <head>[m
[32m+[m[32m    <meta charset="UTF-8" />[m
[32m+[m[32m    <link rel="icon" type="image/svg+xml" href="/vite.svg" />[m
[32m+[m[32m    <meta name="viewport" content="width=device-width, initial-scale=1.0" />[m
[32m+[m[32m    <title>Vite + React</title>[m
[32m+[m[32m    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"> -->[m
[32m+[m[32m  </head>[m
[32m+[m[32m  <body>[m
[32m+[m[32m    <div id="root"></div>[m
[32m+[m[32m    <script type="module" src="/src/main.jsx"></script>[m
[32m+[m[32m  </body>[m
[32m+[m[32m</html>[m
[1mdiff --git a/frontend/package-lock.json b/frontend/package-lock.json[m
[1mnew file mode 100644[m
[1mindex 0000000..40bb81b[m
[1m--- /dev/null[m
[1m+++ b/frontend/package-lock.json[m
[36m@@ -0,0 +1,5145 @@[m
[32m+[m[32m{[m
[32m+[m[32m  "name": "frontend",[m
[32m+[m[32m  "version": "0.0.0",[m
[32m+[m[32m  "lockfileVersion": 3,[m
[32m+[m[32m  "requires": true,[m
[32m+[m[32m  "packages": {[m
[32m+[m[32m    "": {[m
[32m+[m[32m      "name": "frontend",[m
[32m+[m[32m      "version": "0.0.0",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "react": "^18.2.0",[m
[32m+[m[32m        "react-dom": "^18.2.0",[m
[32m+[m[32m        "socket.io-client": "^4.7.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "devDependencies": {[m
[32m+[m[32m        "@types/react": "^18.2.66",[m
[32m+[m[32m        "@types/react-dom": "^18.2.22",[m
[32m+[m[32m        "@vitejs/plugin-react": "^4.2.1",[m
[32m+[m[32m        "autoprefixer": "^10.4.19",[m
[32m+[m[32m        "eslint": "^8.57.0",[m
[32m+[m[32m        "eslint-plugin-react": "^7.34.1",[m
[32m+[m[32m        "eslint-plugin-react-hooks": "^4.6.0",[m
[32m+[m[32m        "eslint-plugin-react-refresh": "^0.4.6",[m
[32m+[m[32m        "postcss": "^8.4.38",[m
[32m+[m[32m        "tailwindcss": "^3.4.3",[m
[32m+[m[32m        "vite": "^5.2.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@aashutoshrathi/word-wrap": {[m
[32m+[m[32m      "version": "1.2.6",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@alloc/quick-lru": {[m
[32m+[m[32m      "version": "5.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=10"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://github.com/sponsors/sindresorhus"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@ampproject/remapping": {[m
[32m+[m[32m      "version": "2.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@jridgewell/gen-mapping": "^0.3.5",[m
[32m+[m[32m        "@jridgewell/trace-mapping": "^0.3.24"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/code-frame": {[m
[32m+[m[32m      "version": "7.24.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.24.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-y5+tLQyV8pg3fsiln67BVLD1P13Eg4lh5RW9mF0zUuvLrv9uIQ4MCL+CRT+FTsBlBjcIan6PGsLcBN0m3ClUyQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/highlight": "^7.24.2",[m
[32m+[m[32m        "picocolors": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/compat-data": {[m
[32m+[m[32m      "version": "7.24.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.24.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-vg8Gih2MLK+kOkHJp4gBEIkyaIi00jgWot2D9QOmmfLC8jINSOzm