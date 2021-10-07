import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GuiGridModule } from '@generic-ui/ngx-grid';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GuiGridModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
