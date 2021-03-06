import {Component, OnInit, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AppletService} from '../_services/applet.service';

import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  styles: [
    `.imageBanner{ }`
  ]
})
export class HeadComponent implements OnInit {
  activeLink;
  banners;
  activeBanner;
  countBanners;
  activeBannerIndex = 0;
  slideIndex = 1;
  showBanner = true;
  countProducts;

  constructor( public router: Router,
               public app: AppletService,
  ) {
    this.app.setProduct.subscribe(cnt => this.countProducts = cnt);
  }

  ngOnInit() {
    this.getBanners();
    this.getOrders();
   // $('.carousel').carousel()
    //this.router.navigate(['/main']);
  }

  getBanners() {
    this.app.request('get','/core/banners/').subscribe(res => {
      this.banners = res.results;
    }, error => {
      console.log(error);
    });
  }
  getOrders() {
    let cookie: any = -1;
    if (window.localStorage.getItem('userId')) {cookie = window.localStorage.getItem('userId');}
    this.app.request('get','/core/orders/', cookie).subscribe(res => {
      this.countProducts = res.count;
    }, error => {
      console.log(error);
    });
  }

  counBanners() {
    let i = 0;
    for (let ban in this.banners) {
      i++;
    }
    this.countBanners = i;

    setInterval(this.moveBanners, 2000);
  }

  getBannerByIndex(index) {
    let banner = null;
    let i = 0;
    for (let ban in this.banners) {
      i++;
      if (i == index) {
        banner = ban;
      }
    }
    this.activeBanner = banner;
  }

  moveBanners() {
    if(this.activeBannerIndex == this.countBanners){
      this.activeBannerIndex = 0;
    }
    var div = document.getElementById("headId");
    let i = 0;
    for (let ban in this.banners) {
      i++;
      if (i == this.activeBannerIndex) {
        this.activeBanner = ban;
      }
    }
    //this.getBannerByIndex(this.activeBannerIndex);
    div.style.backgroundImage = this.activeBanner.photo_banner.toString();
    this.activeBannerIndex = this.activeBannerIndex + 1;
  }


  routLink(link){
    this.router.navigate(['/main']);
  }

  routeBanner() {
    /*const link = this.activeLink;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate([link]));*/
  }
  view() {
    window.open('google.com');
  }

  viewBasket(text) {
    console.log(text);
    try {


      this.app.showCart.emit(true);
    }
    catch (e) {
      console.log(e);
    }
  }

}
