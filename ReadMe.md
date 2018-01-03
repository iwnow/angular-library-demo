#### 🚀Demo for building angular5 library🚀
Exports an axample of HelloButtonComponent in umd, es5, es2015 (FESM) formats
#### Build library
```
npm run build
```
#### Install to project
```sh
npm i @iwnow/angular-ui-lib 
```
or
```bash
yarn add @iwnow/angular-ui-lib 
```
#### Use library
Import HelloButtonModule
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HelloButtonModule } from '@iwnow/angular-ui-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HelloButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```
Use tag in template
```html
<wm-hello-button name="Button works!"></wm-hello-button>
```
