# click-edit

Let's user click on text to edit the contents only if there is a difference and thus reduce the number of unnecessary API calls.

# Installation

## npm
```js
npm install click-edit --save
```

# Usage

## Import `ClickEditModule`

You need to Import and add the `ClickEditModule` in the module of your app where you want to use it.

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClickEditModule} from 'click-edit';

// ..

@NgModule({
  // ..

  imports: [
    BrowserModule,
    ClickEditModule
  ],

  // ...
})
```

## Uses in component's view
Add the `clickEdit` directive to the element.

```js
<p clickEdit (onContentChange)="onChange($event)">
    Some text which will be edited.
</p>
```

## API

### Attributes

| Attribute      | Type      | Default   | Description                                                                                                                    |
| -------------- | --------- | --------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `canEdit`      | `boolean` | `true`    | Whether the text should be editable or not.                                                                                    |
| `multiline`    | `boolean` | `false`   | Whether pressing enter key should create a newline                                                                             |
|                |           |           | `true`: Enter key will not emit edited value (It will be emitted on blur).                                                   |                               |
| `contentId`    | `number`  |           | Whether need to reference the identifier of the change.                                                                        |
| `contentLabel` | `string`  |           | Whether need to indicate what field is being changed.                                                                          |
| `contentClass` | `string`  | `editing` | Style the element during editing using this class.                                                                              |



### Events

You can listen in on when the text field contents have changed.

| Event             | Type         | Description                                                                                                                    |
| ----------------- | -------------| ------------------------------------------------------------------------------------------------------------------------------ |
| `onContentChange` | `customEvent`| Fired only when the content has been successfully changed to a new value.                                                      |




---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<br/>
<br/>
<br/>
<br/>


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
