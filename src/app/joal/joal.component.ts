import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joal',
  templateUrl: './joal.component.html',
  styleUrls: ['./joal.component.css']
})
export class JoalComponent implements OnInit {
  quoted = [
     new Quote(1, `Leo Tolstoy`, `Everyone thinks of changing the world but no one thinks of changing himself`,  'Tarick', 0, 0, 0),
     new Quote(2,  'Nelson Mandela ', 'Education is the most powerful weapon which you can use to change the world.',  'Joe', 0, 0, 0),
     new Quote(3,  'Mary Wollstonecraft Shelley, Frankenstein', 'Nothing is so painful to the human mind as a great and sudden change.',  'Kenny Mainah', 0, 0, 0),
     new Quote(4,  'Jay Asher', 'You cannot stop the future,You cannot rewind the past. The only way to learn the secret ...is to press play. ',  'Peter', 0, 0, 0),
     new Quote(5,  'Vivian Okullu', 'This is a new year. A new beginning. And things will change.',  'Wanyeki', 0, 0, 0),
     new Quote(6,  'Neil Gaiman', 'Google can bring you back 100,000 answers. A librarian can bring you back the right one.',  'Phoebe', 0, 0, 0),
   ];

  constructor() { }

  ngOnInit() {
  }

}
