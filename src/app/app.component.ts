import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppletService} from './_services/applet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JucheimCosmetics';
  constructor(private route: ActivatedRoute,
              public app: AppletService,
              public router: Router
  ) {
  }
  ngOnInit() {
    if (!window.localStorage.getItem('userId')) {
      let userInfo = {
        userId: null
      };
      this.app.request_js('post', '/core/guest/get_user/', null, userInfo).subscribe(res => {
        window.localStorage.setItem('userId', res.userId);
      });
    }
  }
}

