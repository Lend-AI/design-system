# DesignSystem

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

# Connecting @lendai-us/design-system to your app

1. make sure all dependencies on `package.json` are align to the design-system package.
2. run `npm i lodash`
3. run `npm i -D @types/lodash`
4. run `npm i @lendai-us/cdk`
5. run `npm i @lendai-us/design-system`
6. add this code to the `style.scss` in your app to define your app colors:

```scss
   @use '@angular/material' as mat;
   @use '@lendai-us/design-system' as lai;
   @use 'sass:map';

      $design-system-theme: (
        'primary': lai.$prebuilt-purple,
        'info': lai.$prebuilt-blue,
        'error': lai.$prebuilt-red,
        'warning': lai.$prebuilt-orange,
        'success': lai.$prebuilt-green,
      );

      :root {
      @include lai.applyTheme($design-system-theme);
      }

      $mat-primary: lai.createPalette(map.get(lai.$prebuilt-purple, 500));
      $mat-warn: lai.createPalette(map.get(lai.$prebuilt-red, 500));
      $mat-theme: mat.define-light-theme(
        (
          color: (
            primary: mat.define-palette($mat-primary),
            accent: mat.define-palette($mat-primary),
            warn: mat.define-palette($mat-warn),
          ),
        )
      );

      @include mat.all-component-themes($mat-theme);
      @include mat.all-component-typographies();
      @include mat.core();
```

7. add this code to the `index.html` in your app to add fonts:
```html
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
      rel="stylesheet"/>
```

8. add assets to `angular.json`:
  - under `architect` -> `assets` add:
    "input": "node_modules/@lendai-us/design-system/assets",
    "output": "/assets/"
  - under `architect` -> `styles` add:
    "node_modules/flag-icons/css/flag-icons.min.css"

## Code scaffolding

Run `ng generate component component-name --project design-system` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project design-system`.
> Note: Don't forget to add `--project design-system` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build design-system` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build design-system`, go to the dist folder `cd dist/design-system` and run `npm publish`.

## Running unit tests

Run `ng test design-system` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
