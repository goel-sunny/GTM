import { Component } from '@angular/core';
import { FakeReqService } from './service/fake-req.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fleet Management System';
  
    constructor(private fs: FakeReqService){
  
    }
   setErrorCode(){
    this.fs.getRequest().subscribe(
      (response) => {
          },
      (error) => {
        let _window = window; 
        console.dir(window);
        (<any>window).dataLayer.push({'event': "APIFail","errorCode":"404"} );  
      }
  );

    }
}

