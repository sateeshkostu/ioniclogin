import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import{HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  public SigninPage!: FormGroup;
  router: any;
  constructor(private formBuilder : FormBuilder, private http: HttpClient,private route:Router) { }

  ngOnInit() {
    this.SigninPage= this.formBuilder.group({
      Name:new FormControl(""),
      Email: new FormControl(""),
      Password:new FormControl(""),
      Confirmpassword:new FormControl(""),
      phoneNo: new FormControl("")
    })
  }

   signup(){
    console.log(this.SigninPage.value)
    this.http.post<any>("http://localhost:2002/ionic/signupdetails/",this.SigninPage.value)
  .subscribe(res=>{
    alert("signup successfull");
    this.SigninPage.reset();
    window.location.href='/login'
  })
}
}
