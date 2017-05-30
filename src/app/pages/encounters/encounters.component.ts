import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss']
})
export class EncountersComponent implements OnInit {

interval;
 message = 'Hello';
 listOfMessages = [
   'Hello',
   'Howdy',
   'Hola',
   'Aloha',
   'Hey'
 ];  
  

  ngOnInit() {
  this.interval = setInterval(() => {
    let index = Math.floor(Math.random() * this.listOfMessages.length);
    this.message = this.listOfMessages[index];
    this.listOfMessages.push('New Message');
    }, 1000);  
}

stopTheMadness(e){
  e.preventDefault();
  clearInterval(this.interval); 
  }
}
