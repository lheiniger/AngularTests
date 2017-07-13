import { Component } from '@angular/core';
import {GrowlService} from 'ng2-growl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(private growlService: GrowlService) {  }

  growlError(){
	  this.growlService.addError(`OH GAD ! An error !!!`);	
	}

    growlInfo(){
	  this.growlService.addInfo(`did you know ?`);	
	}
}
