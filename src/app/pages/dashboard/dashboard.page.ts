import { Component, OnInit } from '@angular/core'
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import{HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public DashboardPage!: FormGroup;
  constructor(private formBuilder : FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.DashboardPage= this.formBuilder.group({
      name:new FormControl(""),
      useremail: new FormControl(""),
      Enddate:new FormControl(""),
      Startdate:new FormControl(""),
      Duration: new FormControl("")
    })
  }
  addTask() {
    console.log(this.DashboardPage.value)
    this.http.post<any>("http://localhost:2002/ionictodos/newtodos/",this.DashboardPage.value)
  .subscribe(res=>{
    alert("todo addded successfull");
    console.log(res)
    this.DashboardPage.reset();
  })
    // if (this.taskName) {
    //   this.taskList.push(this.taskName);
    //   this.taskName = ''; // Clear the input field
    // }
  }
}
