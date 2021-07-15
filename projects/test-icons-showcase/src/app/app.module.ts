import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  TestIconsComponent,
  TestIconsModule,
} from 'projects/test-icons/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TestIconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
