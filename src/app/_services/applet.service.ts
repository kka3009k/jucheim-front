import {EventEmitter, Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions, ResponseContentType} from '@angular/http';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppletService {
	//API_URL = 'http://kka3009kka.pythonanywhere.com/';
  API_URL = 'http://localhost:3008';
  setProduct: EventEmitter<number> = new EventEmitter();
  showCart: EventEmitter<boolean> = new EventEmitter();
	constructor(private http: Http,
              	private httpClient: HttpClient,
              	public router: Router) {
  	}

	/*authenticate(user): Observable<any> {
	    const headers = new Headers();
    	headers.append('Content-Type', 'application/json');
	    return this.http
	      	.post(this.API_URL+'/auth/authentication/login/', user,
	        	{headers: headers})
	      	.map(res => {
		        let resp = res.json();

	      		window.localStorage.setItem('auth_key', resp.data.token);
		        window.localStorage.setItem('user', JSON.stringify(resp.data.user));

		        return resp;
	      	})
	      	.catch(this.handleError);
	}

	getUser(){
		const parsedUser = JSON.parse(window.localStorage.getItem('user'));
	    if (parsedUser) {
	      return parsedUser;
	    }
	    return null;
	}

	checkAuth() {
	    return window.localStorage.getItem('auth_key') && window.localStorage.getItem('user');
	}*/

	getAPIUrl() {
		return this.API_URL;
	}

	/*logout() {
	    window.localStorage.removeItem('auth_key');
	    window.localStorage.removeItem('user');
	    this.router.navigate(['/']);
  	}

  	getUserByToken(){
		const headers = new Headers();
    	headers.append('Content-Type', 'application/json');
    	headers.append('Authorization', 'JWT ' + this.getToken());
	    return this.http
	      	.get(this.API_URL+'/auth/user/get/',
	        	{headers: headers})
	      	.map(res => {
		        let resp = res.json();
		        window.localStorage.setItem('user', JSON.stringify(resp.data.user));
		        return resp.data.user;
	      	})
	      	.catch(this.handleError);
	}



	getToken() {
	    if (window.localStorage.getItem('auth_key')) {
	      return window.localStorage.getItem('auth_key');
	    }
	    return null;
  	}*/

	isEmptyObject(obj) {
	  return (obj && (Object.keys(obj).length === 0));
	}

	/*downloadFile(url){
		const headers = new Headers();
		    headers.append('Content-Type', 'application/json');
		    headers.append('Authorization', 'JWT ' + this.getToken());

	    let options = new RequestOptions({headers: headers, responseType: ResponseContentType.Blob});

	    return this.http
	      .get(this.API_URL + url,options)
	      .map((res: Response) => {
	        return res;
	      })
	      .catch(this.handleError);

	}*/

  	request(method, url, id = null, data = {}, customHeader = {}) {
	    const headers = new Headers();
    	headers.append('Content-Type', 'application/json');
    	if (id) {
	      url = url + id + '/';
	    }

    	if(this.isEmptyObject(data)){
		    return this.http[method](this.API_URL + url,
		        	{headers: headers})
		      	.map(res => {
		      		if(method !== 'delete'){
			      		let resp = res.json();
				        return res.json();
		      		}else{
		      			return true;
		      		}
		      	})
		      	.catch(this.handleError);
    	}else{
    		return this.http[method](this.API_URL + url, data,
		        	{headers: headers})
		      	.map(res => {
		      		let resp = res.json();
			        return res.json().data;
		      	})
		      	.catch(this.handleError);
    	}
  	}

  request_js(method, url, id = null, data = {}, customHeader = {}) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if (id) {
      url = url + id + '/';
    }

    if(this.isEmptyObject(data)){
      return this.http[method](this.API_URL + url,
        {headers: headers})
        .map(res => {
          if(method !== 'delete'){
            //let resp = res.json();
            return res.json();
          }else{
            return true;
          }
        })
        .catch(this.handleError);
    }else{
      return this.http[method](this.API_URL + url, data,
        {headers: headers})
        .map(res => {

          let resp = res.json();
          //this.msg.addToast(resp.base64, 'error');
          return res.json();
        })
        .catch(this.handleError);
    }
  }

  addUser() {
    let userInfo = {
      userId: null
    };
    this.request_js('post','/core/guest/get_user/', null, userInfo).subscribe(res => {
      window.localStorage.setItem('userId', res.userId);
    });
  }


  getAllOrders(cookie) {
    this.request('get','/core/orders/', cookie).subscribe(res => {
      return res.results;
    });
  }


	private handleError(error: any): Promise<any> {
		if(JSON.parse(error._body)){
			let msg = JSON.parse(error._body);
			if( msg.message === 'Signature has expired.'){
				window.localStorage.removeItem('auth_key');
			    window.localStorage.removeItem('user');
			    location.pathname = '/';
			    return Promise.reject(JSON.parse(error._body));
			}else{
		    	return Promise.reject(JSON.parse(error._body));
			}
		}else{
			return error;
		}
  	}

}
