import { Component ,OnInit} from '@angular/core';
import { WelcomeService } from '../service/data/welcome.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  msgfromApi:string='';

  userNameq:string='';

  constructor(private service:WelcomeService,
    private route:ActivatedRoute
  ) { }

  callApi(){
    console.log(this.service.callApli());
    this.service.callApli().subscribe(
      response=>this.response(response),
      error=>this.handleresponse(error)
    );
    
  }
  callApiWithName(){
    this.service.callApi(this.msgfromApi).subscribe(
      response => this.response(response),
      error=>this.handleresponse(error)
    )
  }


  response(response:any){
    this.msgfromApi=response.rmessage;
    console.log(response.rmessage);
  }
  handleresponse(error:any){
    this.msgfromApi=error.error.message;
  }

  ngOnInit(){
    this.userNameq=this.route.snapshot.params['name']
  }
}
