import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataTransferService } from '../data-transfer.service';
import { animateChild } from '@angular/animations';

@Component({
  selector: 'app-speaker-details1',
  templateUrl: './speaker-details1.component.html',
  styleUrls: ['./speaker-details1.component.css']
})
export class SpeakerDetails1Component {
  speakerDetails: any;
  constructor(private data:DataTransferService) {
    this.speakerDetails = new FormGroup({
      state : new FormControl(''),
      city : new FormControl(''),
      street : new FormControl(''),
      houseNo: new FormControl('')
      
    })
  }
    submit(data:any){
      this.data.formData[1] = data.value;
      console.log(this.data.formData);
      
      this.data.notifySiblingMethod();
    }

}
