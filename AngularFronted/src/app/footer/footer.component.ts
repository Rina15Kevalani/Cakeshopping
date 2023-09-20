import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
em:any

constructor(private serv:MyserviceService){

}
  sendmail(){
    this.serv.sendemailid(this.em).subscribe(res=>console.log(res));
    window.alert("Email send succesfully");
  }
}
