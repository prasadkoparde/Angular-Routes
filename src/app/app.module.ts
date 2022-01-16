import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { DesignUtilityService } from './design-utility.service';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ChildComponent, Child2Component],
  bootstrap: [AppComponent],
  providers: [DesignUtilityService],
})
export class AppModule {}
