import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../../_services/applet.service';
@Component({
  selector: 'app-products-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewProductComponent implements OnInit {

  infoProduct;
  id;
  constructor( public router: Router,
               public route: ActivatedRoute,
               public app: AppletService,
  ) {
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params['id']);
    this.getInfoProduct(this.id);
  }

  getInfoProduct(id) {
    this.app.request('get','/core/product_info/', id).subscribe(res => {
      this.infoProduct = res;
    });
  }
  routLink(link) {
    this.router.navigateByUrl('/products/' + link, );
      //this.router.navigate([link]));
  }
}
