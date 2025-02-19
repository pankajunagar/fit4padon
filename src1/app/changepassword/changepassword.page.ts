import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ServiceService } from '../service.service';
import { LoaderService } from '../loader.service';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

  old_password: '';
  cpassword: '';
  new_password: '';
  logindata: any;

  constructor(
    public navCtrl: NavController,
    private service: ServiceService
    
  ) {
    this.logindata = JSON.parse(localStorage.getItem("ccs_login"))
   }

  ngOnInit() {
  }
  backbutton() {
    this.navCtrl.pop()
  }

  submit(){
   
    if(!this.old_password){
      alert('Please enter old password');
    }else if(!this.new_password){
      alert('Please enter new password');
    }else if(!this.cpassword){
      alert('Please Confirm password');
    }else if(this.cpassword != this.new_password){
      alert('New password and confirm password must be same');
    }else{

      var param = {
        old_password: this.old_password,
        new_password: this.new_password,
        user_id:this.logindata.id
      }
        console.log(param);
        this.service.changepassword(param)
          .then((results) => this.handlechangepassword(results))
      }
  }

  handlechangepassword(res){
    if (res.ResponseCode == '1') {
      alert('Your password successfully changed');
      this.navCtrl.pop()
    }else{
      alert('Your old password not matched');
    }
  }
}