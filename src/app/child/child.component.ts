import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor(private _designUtil: DesignUtilityService) {}

  ngOnInit() {}
  @Input() boxColor: string;
  @Input() placeHolderText: string = 'user';
  @Input() btnVal: string;
  @Output() userData = new EventEmitter<string>();
  sendUserName(data) {
    this.userData.emit(data.value);
    this._designUtil.userData.next(data.value);
  }
}
