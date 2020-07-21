import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../_services/applet.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  styles: [
    `.imageBanner{ }`
  ]
})
export class FooterComponent implements OnInit {
  activeLink;
  banners;
  activeBanner;
  countBanners;
  activeBannerIndex = 0;
  slideIndex = 1;
  showBanner = true;
  constructor( public router: Router,
               public app: AppletService,
  ) {
  }

  ngOnInit() {

  }


}
