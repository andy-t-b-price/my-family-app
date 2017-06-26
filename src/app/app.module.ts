import { AppRoutingModule } from './app-routing.module';
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
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FamilyTasksComponent,
    CalendarComponent,
    ShoppingComponent,
    BillsComponent,
    GiftsComponent,
    HomeComponent,
    AuthComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
