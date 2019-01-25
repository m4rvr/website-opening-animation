# Website Opening Animation
> Coded version of the concept from [Alberto Conti](https://dribbble.com/shots/4822277-NYC).

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) [![node](https://img.shields.io/badge/node-%3E%3D%2010.15.0-brightgreen.svg?style=flat-square)](https://nodejs.org/en) [![webpack](https://img.shields.io/badge/webpack-%3E%3D%204.28.2-blue.svg?style=flat-square)](https://webpack.js.org/) [![babel](https://img.shields.io/badge/babel-%3E%3D%207.2.2-yellow.svg?style=flat-square)](https://babeljs.io/)

See the demo here: [Demo](https://marvinrudolph.github.io/website-opening-animation/)

## Usage
You can use the generated minified files OR your can setup the development environment and build things on your own.

### Option 1 (without development environment)
Open the `index.html` inside the `dist` folder OR include the CSS & JavaScript files into your website.

#### CSS (inside of your `<head>`)
`<link rel="stylesheet" type="text/css href="dist/main.css">`

#### JS (before the closing `</body>`)
`<script type="text/javascript href="dist/main.js">`


### Option 2 (with development environment)
#### Requirements
- [node >= 10.15.0](https://nodejs.org/en/)
- Package manager
  - npm (included in node)
  - OR
  - [yarn](https://yarnpkg.com/en/)

#### 1. Install dependencies
##### ...with Yarn
```shell
$ yarn
```
##### ...with npm
```shell
$ npm install
```

#### 2. Run development server
> While your are in the developement mode the `dist/` folder and files won't be created. All files are cached and loaded automatically by the webpack dev server.
##### ...with yarn
```shell
$ yarn dev
```
##### ...with npm
```shell
$ npm run dev
```

> The development server watches for your changes and reloads the browser automatically. 
> You can open it by visitting `http://localhost:8000/`

#### 3. Make changes to the code
##### Happy coding!

#### 4. Build minified files
> This creates the "real" & minified files.
> The `dist/` folder will be automatically removed and then created to start with a clean folder.

##### ...with yarn
```shell
$ yarn build
```
##### ...with npm
```shell
$ npm run build
```

## Folders & Files
> All of the source files are in the `src/` folder.
> The generated files are in the `dist/` folder.


### `src/index.html`
The entry and template of the website. The generated `index.html` inside the `dist/` folder has the `main.css` and `main.js` included.

### `src/js/`
Holds all JavaScript files which will be compiled into the `dist/main.js` file.

### `src/scss/`
Holds all SCSS files which will be compiled into the `dist/main.css` file.

### `src/fonts/`
Holds all fonts which will be compiled and included. The folder name is the Kebab Case name of the font (e.g. `open-sans` or `my-awesome-font`. Your can include the `.scss` files inside the folders in the `src/scss/_fonts.scss` file.

### `src/assets/`
Your can find all images, videos or other assets there.


## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details