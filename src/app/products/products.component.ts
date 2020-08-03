import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../_services/applet.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  idCategory;
  products;
  constructor(private route: ActivatedRoute,
              public app: AppletService,
              public router: Router
              ) {
  }

  ngOnInit() {
    this.idCategory = this.route.snapshot.params['id'];
    this.getProducts(this.idCategory);
  }

  getProducts(id) {
    this.app.request('get','/core/products/', id).subscribe(res => {
      this.products = res.results;
    });
  }

  routLink(link) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate([link]));
  }
  addProduct(id) {
    /*if (!window.localStorage.getItem('userId')) {
      let userInfo = {
        userId: null
      };
      this.app.request_js('post','/core/guest/get_user/', null, userInfo).subscribe(res => {
        window.localStorage.setItem('userId', res.userId);
        this.add(id);
      });
    }
    else {
      this.add(id);
    }*/
    let orderInfo = {
      id: id,
      coockie: null,
      quantity: 1
    };
    orderInfo.coockie = window.localStorage.getItem('userId');
    this.app.request_js('post','/core/orders/', null, orderInfo).subscribe(res => {
      this.app.setProduct.emit(res.countOrders);
    });
 }

 add(id) {

 }
}
