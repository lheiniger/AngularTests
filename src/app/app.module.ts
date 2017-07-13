import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GrowlModule} from 'ng2-growl';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	GrowlModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
