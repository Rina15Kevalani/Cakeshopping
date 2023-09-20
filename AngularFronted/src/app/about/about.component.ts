import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  showFullContent: boolean = false;// Initially, the list is hidden
 


  messages: string[] = [

   " Quality: Using only the finest ingredients, ensuring every bite is a taste of perfection",
   " Creativity: Pushing the boundaries of cake design, offering unique and customized creations for all occasions",

    "Community: Supporting our local community through partnerships and giving back",

    "Customer Satisfaction: Ensuring that every customer leaves our shop with a smile and a craving for more",

   " Innovation: Continuously improving and expanding our menu to surprise and delight our customers",

   " Experience: Providing a warm and inviting atmosphere where customers can savor our treats and create lasting memories",
  ];

  toggleList() {
    this.showFullContent = !this.showFullContent;
  }


  showLearnMore: boolean = false; // Initially, show only a portion of the content

  // Define a message to display when the button is clicked
  showmessage: string = 'Thank you for reading our story!';

  toggleLearnMore() {
    this.showLearnMore = !this.showLearnMore;
  }


}


