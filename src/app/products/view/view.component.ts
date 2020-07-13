import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-products-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor( public router: Router,
               public route: ActivatedRoute,
  ) {
  }
  ngOnInit() {
      console.log(this.route.snapshot.params['id']);
  }
}
