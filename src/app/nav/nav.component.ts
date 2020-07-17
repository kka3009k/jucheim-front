import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../_services/applet.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  categories;
  showProducts;
  constructor( public router: Router,
               public app: AppletService,
               private route: ActivatedRoute
             ) {
  }

  ngOnInit() {
    this.getCategories();
    this.router.navigate(['/main']);
  }
  getCategories() {
    this.app.request('get','/core/categories/').subscribe(res => {
      this.categories = res.results;
      //console.log(res);
    }, error => {
      console.log(error);
    });
  }
  routLink(link) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate([link]));
  }

}
