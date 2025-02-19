import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  api: string;
  logindata: any;
  imgapi: string;
  imgpdf:string;
  constructor() {
    console.log('config service...')
    this.refresh()

    this.api= 'https://www.fit4pedon.in/api/';
    this.imgapi= 'https://www.fit4pedon.in/api/';
    this.imgpdf = 'https://www.fit4pedon.in/admin/'

    // this.api='https://demo204.amrithaa.com/ccs/api/'
    // this.imgapi='https://demo204.amrithaa.com/ccs/admin/'
  }
  refresh(){
    this.logindata = JSON.parse(localStorage.getItem("ccs_login"));
    console.log(this.logindata)
  }
}
