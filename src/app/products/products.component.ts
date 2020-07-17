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
}
