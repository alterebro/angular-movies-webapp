# [Angular Movies WebApp](https://alterebro.github.io/angular-movies-webapp/)

- **Live Demo URL**: [https://alterebro.github.io/angular-movies-webapp/](https://alterebro.github.io/angular-movies-webapp/)

---

**Test Single Page Web Application built using Angular**.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

```sh
npm install -g @angular/cli # Requires Node 6.9.0 or higher, together with NPM 3 or higher.
npm install # Install dependencies
```

## Development server

```sh
$ ng serve # `--open` flag to open the browser
# Serves to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
```

## Build

```sh
# The build artifacts will be stored in the `dist/` directory.
$ ng build

# Use the `-prod` flag for a production build.
$ ng build --prod

# Use the `--output-path` option to change the build directory target.
$ ng build --prod --output-path=docs
```

## Deployment

```sh
# Deployment on GitHub Pages via `angular-cli-ghpages`
$ npm i -g angular-cli-ghpages # Globally installation

# Usage :
$ ng build --prod --base-href "/angular-movies-webapp/" # Build
$ angular-cli-ghpages # Publish on gh-pages branch

# Alternatively (different target folder i.e: docs)
$ ng build --prod --base-href "/angular-movies-webapp/" --output-path=docs
$ angular-cli-ghpages --dir docs
```

## Tests
```sh
# Before running the tests make sure you are serving the app via `ng serve`.
$ ng test 	# execute the unit tests via Karma.
$ ng e2e 	# execute the end-to-end tests via Protractor.
```

---
