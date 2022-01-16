import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class DesignUtilityService {
  constructor() {}
  userData = new Subject<string>();

  products: any[] = [
    {
      name: 'laptop',
      id: 4545,
    },
    {
      name: 'mobile',
      id: 5454,
    },
    {
      name: 'tv',
      id: 7878,
    },
  ];

  // productNames:string[]=[];
  getProductNames: any[] = this.products.map((product) => product.name);
}
