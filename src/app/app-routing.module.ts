import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakerDetails1Component } from './speaker-details1/speaker-details1.component';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
