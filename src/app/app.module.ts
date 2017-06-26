import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FamilyTasksComponent } from './family-tasks/family-tasks.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { BillsComponent } from './bills/bills.component';
import { GiftsComponent } from './gifts/gifts.component';

@NgModule({
  declarations: [
    AppComponent,
    FamilyTasksComponent,
    CalendarComponent,
    ShoppingComponent,
    BillsComponent,
    GiftsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
