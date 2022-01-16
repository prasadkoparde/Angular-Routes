import { Component, VERSION, OnInit } from '@angular/core';
import { DesignUtilityService } from './design-utility.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  uname: string;
  constructor(private _designUserData: DesignUtilityService) {}
  ngOnInit() {
    this._designUserData.userData.subscribe((res) => {
      alert(res);
      this.uname = res;
    });
  }
  value: string = 'My string';
  proName: any[] = [];
  onClickProNames() {
    this.proName = [...this._designUserData.getProductNames];
    console.table(this.proName);
  }
}
