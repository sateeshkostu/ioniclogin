import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import{HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public LoginPage!: FormGroup;
  router: any;
  constructor(private formBuilder : FormBuilder, private http: HttpClient,private route:Router) { }

  ngOnInit() {
    this.LoginPage= this.formBuilder.group({
      Email:new FormControl(""),
      Password:new FormControl(""),
    })
  }
  login(){
    if(this.LoginPage.value.Email==''||  //manam empty details eachinappudu login avvakudadhu
    this.LoginPage.value.Password==''){
      alert("Please Fill All details") //empty ga manam login click cheste alert message open avutundhi
    }else{
    console.log(this.LoginPage.value)
    this.http.post<any>("http://localhost:2002/ionic/logindetails/",this.LoginPage.value)
    .subscribe(res=>{
    if(res.status=='failed'){
      alert("Failed")
    }else{
      alert("Login successfully");
      this.LoginPage.reset();
      window.location.href='/dashboard'
    }
    })
  }
   }

}
