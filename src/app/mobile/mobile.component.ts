import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../data-access.service';
import { MobilePlan } from '../mobile-plan';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {


  mobilePlanList: MobilePlan[];
  mobilePlan: MobilePlan;
  show: boolean;
  srchString: string;

  constructor(private service: DataAccessService) { }

  ngOnInit() {
    this.show = false;
    this.service.getMobileData().subscribe(resp => this.mobilePlanList = resp, err => console.log(err));
  }

  getMobilePlan(id: number) {
    this.show = true;
    this.service.getMobilePlanById(id).subscribe(resp => this.mobilePlan = resp, err => console.log(err))
  }

  submit(frmData) {
    console.log(frmData);
    this.service.onPostData(frmData).subscribe(data => console.log(data), err => console.log(err));
  }

}
