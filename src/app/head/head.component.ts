import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

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
