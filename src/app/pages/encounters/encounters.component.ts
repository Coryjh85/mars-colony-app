import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss']
})
export class EncountersComponent implements OnInit {

 message = 'Hello';
 listOfMessages = [
   'Hello',
   'Howdy',
   'Hola',
   'Aloha',
   'Hey'
 ];  
  
  constructor() { }

  ngOnInit() {
   setInterval(() => {
    let index = Math.floor(Math.random() * this.listOfMessages.length);
    this.message = this.listOfMessages[index];
    this.listOfMessages.push('New Message');

    }, 1000);  
}

}
