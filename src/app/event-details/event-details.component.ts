import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataTransferService } from '../data-transfer.service';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
  providers: [MessageService]
})
export class EventDetailsComponent {
  events!:any[];
  selectedEvent: any;
  date!:Date;
  timings!:any[];
  selectedTime!:number;
  periods!:any[];
  selectedPeriod:any;
  meetingTypes!:any[];
  selectedType!:any;
  eventDetails!:FormGroup;
  display!:boolean;
  constructor(private messageService: MessageService,private data:DataTransferService) {
      this.eventDetails = new FormGroup({
        selectedEvent : new FormControl(''),
        eventTopic : new FormControl(''),
        eventDate : new FormControl(''),
        fromTime : new FormControl(''),
        fromPeriod : new FormControl(''),
        toTime : new FormControl(''),
        toPeriod : new FormControl(''),
        selectedType : new FormControl(''),
        vendorName : new FormControl('')
        
      })
  }
    ngOnInit() {
        this.events = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
        this.timings = [
            { name: '1', code: 1 },
            { name: '2', code: 2 },
            { name: '3', code: 3 },
            { name: '4', code: 4 },
            { name: '5', code: 5 }
      ];
      this.periods = [
        { name: 'AM', code: 1 },
        { name: 'PM', code: 2 }

  ];
    this.meetingTypes = [
      {name:'vendor',code:"VN"},
      {name:'others',code:"OT"}
    ]
    }
    onUpload(event: UploadEvent) {
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }
  submit(data:any){
    this.data.formData.push(data.value);
    console.log(this.data.formData);
    
    this.data.notifySiblingMethod();
  }
}
