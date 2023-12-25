import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { StepperComponent } from './stepper/stepper.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SpeakerDetails1Component } from './speaker-details1/speaker-details1.component';



@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponent,
    StepperComponent,
    SpeakerDetails1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    FileUploadModule,
    ToastModule,
    CdkStepperModule,
    RadioButtonModule
    
  ],
  exports:[CdkStepperModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
