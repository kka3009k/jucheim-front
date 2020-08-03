import {Component, OnInit, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../_services/applet.service';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  activeLink;
  banners;
  activeBanner;
  countBanners;
  activeBannerIndex = 0;
  slideIndex = 1;
  showBanner = true;
  orders;
  showCart = false;

  constructor( public router: Router,
               public app: AppletService,
  ) {
   this.app.showCart.subscribe(cnt => this.showCartModal(cnt));
  }

  ngOnInit() {

  }
  showCartModal(cnt) {
    this.showCart = cnt;
    this.getOrders();
  }
  getOrders(){
    let cookie: any = -1;
    if (window.localStorage.getItem('userId')) {cookie = window.localStorage.getItem('userId');}
    this.app.request('get','/core/orders/', cookie).subscribe(res => {
      this.orders = res.results;
      $('#exampleModal').modal('show');
    }, error => {
      console.log(error);
    });
  }

  addProduct(ev, id) {
    let orderInfo = {
      id: id,
      coockie: null,
      quantity: ev
    };
    orderInfo.coockie = window.localStorage.getItem('userId');
    this.app.request_js('post','/core/orders/', null, orderInfo).subscribe(res => {
      this.app.setProduct.emit(res.countOrders);
      this.getOrders();
    });
  }

  removeOrder(id) {
    let orderInfo = {
      id: id,
      coockie: null,
      quantity: 0
    };
    orderInfo.coockie = window.localStorage.getItem('userId');
    this.app.request_js('post','/core/orders/', null, orderInfo).subscribe(res => {
      this.app.setProduct.emit(res.countOrders);
      this.getOrders();
    });
  }
}
