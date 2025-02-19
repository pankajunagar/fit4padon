import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  user: any;
  constructor(
    public http: HttpClient,
    private config: ConfigService,
  ) { }


  signup(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'signup.php', params)
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }


  verifyotp(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'verifyotp.php', params)
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }
  reotp(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'resendotp.php', params)
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  login(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'login.php', params)
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  socialsignup(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'socialsignup.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  adddemographicdata(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'adddemographicdata.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }
  getdemographicdata(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'getdemographicdata.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }
  getdownloads() {
    return new Promise(resolve => {
      this.http.get(this.config.api + 'getdownloads.php')
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }
  getcategory() {
    return new Promise(resolve => {
      this.http.get(this.config.api + 'getcategory.php')
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }
  getimagesvideos() {
    return new Promise(resolve => {
      this.http.get(this.config.api + 'getimagesvideos.php')
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }
  getcanfig() {
    return new Promise(resolve => {
      this.http.get(this.config.api + 'getcanfig.php')
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }
}
