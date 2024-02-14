import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  template: `

  <h3> Los juegos favoritos de {{username}}</h3>
    <ul> 
      @for(game of games; track game.id){
      <li>{{game.name}} </li>
      }
    </ul>
    `,

  styles: ``
})
export class GamesComponent {
  @Input() username ='';

  games =[
    {
      id: 1,
      name: 'Call of Duty'
    },
    {
      id: 2,
      name: 'Lol'
    },
    {
      id: 3,
      name: 'Fornite'
    }
  ]
}
