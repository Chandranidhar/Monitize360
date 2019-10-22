import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchasedata',
  templateUrl: './purchasedata.component.html',
  styleUrls: ['./purchasedata.component.css']
})
export class PurchasedataComponent implements OnInit {


  public dataType:any = '';
  constructor() { }

  

  ngOnInit() {
  }
  openConsumerPanel(){
    console.log('consumer');
  }

  openBusinessPanel(){
    console.log('business')

  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
