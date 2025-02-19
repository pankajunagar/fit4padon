import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ServiceService } from '../service.service';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {

  first_name: '';
  last_name: '';
  email: '';
  mobile: '';
  logindata:any;

  constructor(
    public navCtrl: NavController,
    private service: ServiceService,
    private config: ConfigService
    
  ) {
    this.logindata = JSON.parse(localStorage.getItem("ccs_login"))
   }

  ngOnInit() {
    this.first_name = this.logindata.first_name;
      this.last_name = this.logindata.last_name;
    this.email = this.logindata.email;
    this.mobile = this.logindata.mobile;
  }
  backbutton() {
    this.navCtrl.pop()
  }

  submit(){
   
    if(!this.first_name){
      alert('Please enter first name');
    }else if(!this.last_name){
      alert('Please enter last name');
    }else if(!this.email){
      alert('Please enter email');
    }else if(!this.mobile){
      alert('Please enter mobile');
    }else{

      var param = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        mobile: this.mobile,
        user_id:this.logindata.id
      }
        console.log(param);
        this.service.updateprofile(param)
          .then((results) => this.handleupdateprofile(results))
      }
  }

  handleupdateprofile(res){
    console.log(res);
    if (res.ResponseCode == '1') {
      localStorage.setItem("ccs_login", JSON.stringify(res.data))
      this.config.refresh();
      alert('Successfully updated');
    }else{
      alert(res.ResponseMsg);
    }
  }
}
