import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  products = [];
  showProducts;
  constructor( public router: Router,
             ) {
  }

  ngOnInit() {
    let product = {
      id: null,
      name: null
    }
    this.router.navigate(['/main']);
    product.id = 1;
    product.name = 'Байбай';
    this.products.push(product);
    product.id = 2;
    product.name = 'Канапур';
    this.products.push(product);
  }
  routLink(link){
    this.router.navigate(['/main']);
  }

}
