import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent {

  wishlist(){
    alert('Your Item in wishlist💖');
  }
}
