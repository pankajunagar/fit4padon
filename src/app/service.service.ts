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

  updateprofile(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'updateprofile.php', params)
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }
  editfood_details(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'editfood_details.php', params)
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }
  editdiet_history(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'editdiet_history.php', params)
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
      this.http.post(this.config.api + 'login.php', params).pipe(map(res => res))
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
  getnotification(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'getnotification.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  changepassword(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'changepassword.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  adddiet(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'adddiet.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }
  getanthropometrydata(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'getanthropometrydata.php', params).pipe(map(res => res))
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
  getfood(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'getfood.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }
  getdiet(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'getdiet.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }
  addfood_details(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'addfood_details.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }
  getdatewisefood(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'getdatewisefood.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }
  getfood_details(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'getfood_details.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }
  forgotpassword(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'forgotpassword.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }


  getneturition(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'getneturition.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  deletediet(params) {
    return new Promise(resolve => {
      this.http.post(this.config.api + 'deletediet.php', params).pipe(map(res => res))
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
  getparent_occupation() {
    return new Promise(resolve => {
      this.http.get(this.config.api + 'getparent_occupation.php')
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }
  getmonthly_income() {
    return new Promise(resolve => {
      this.http.get(this.config.api + 'getmonthly_income.php')
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }
  getdiganosis() {
    return new Promise(resolve => {
      this.http.get(this.config.api + 'getdiganosis.php')
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  getmenstrual_status() {
    return new Promise(resolve => {
      this.http.get(this.config.api + 'getmenstrual_status.php')
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  gettype_of_treatment() {
    return new Promise(resolve => {
      this.http.get(this.config.api + 'gettype_of_treatment.php')
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  



  geteducation_of_the_family() {
    return new Promise(resolve => {
      this.http.get(this.config.api + 'geteducation_of_the_family.php')
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }
}
