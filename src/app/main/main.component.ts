import {Component, OnInit} from '@angular/core';
import {AppletService} from '../_services/applet.service';

import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  ind = 0;
  constructor(
              public app: AppletService
  ) { }
  ngOnInit() {

   // this.app.setProduct.emit(1);

  }

}
