import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 
export class AppComponent implements OnInit{
  randomText = faker.person.jobTitle(); // Rowan Nikolaus
  enteredText = '';

 
  ngOnInit(): void {
   
  }
  onInput(event : Event){   
    const target = event.target as HTMLInputElement;
    const value = target.value; 
    this.enteredText = value;
    console.log("abc", this.enteredText);       
  }

  compare(randomLetter:string, enteredLetter:string){    
    if(!enteredLetter){
              return 'pending';
    }    
    return enteredLetter===randomLetter ? 'correct' : 'incorrect';   
   
  }
}
