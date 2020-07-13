import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( public router: Router,
  ) {
  }

  ngOnInit() {
    this.router.navigate(['/main']);
  }
  routLink(link){
    this.router.navigate(['/main']);
  }

}
