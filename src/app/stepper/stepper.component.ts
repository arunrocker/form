import { CdkStepper } from '@angular/cdk/stepper';
import { Component, DoCheck, Input, OnDestroy, inject } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers:[{provide:CdkStepper,useExisting:StepperComponent}]
})
export class StepperComponent extends CdkStepper implements DoCheck{
  @Input() linearModeSelected = true;
  data:DataTransferService = inject(DataTransferService);
  private triggerSubscription!: Subscription;
  ngDoCheck(): void {
    this.triggerSubscription = this.data.notifySibling$.subscribe(() => {
      this.onClick(1);
    });
  }
  onClick(index:number){
    this.selectedIndex = index;
  }


}
