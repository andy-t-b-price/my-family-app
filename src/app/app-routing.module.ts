import { NgModule } from '@angular/core';
import { GiftsComponent } from './gifts/gifts.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { BillsComponent } from './bills/bills.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FamilyTasksComponent } from './family-tasks/family-tasks.component';
import { HomeComponent } from './home/home.component';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'tasks', component: FamilyTasksComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'budget', component: BillsComponent},
    {path: 'shopping', component: ShoppingComponent},
    {path: 'gifts', component: GiftsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }