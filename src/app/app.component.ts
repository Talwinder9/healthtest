import { Component, OnInit } from '@angular/core';
import { GetdataService } from './getdata/getdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit { 
  title = 'healthtestspa';
  result: any;
  constructor(private getd: GetdataService) {}

  ngOnInit() {
    this.getd.getdata().subscribe(res => {
      this.result = res;
    });
  }
}

