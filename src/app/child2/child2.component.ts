import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component implements OnInit {
  uname: string;
  constructor(private _designUtil: DesignUtilityService) {}
  _products = [];
  ngOnInit() {
    this._products = this._designUtil.products;
    this._designUtil.userData.subscribe((res) => {
      this.uname = res;
    });
  }
}
