import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  persona: persona = new persona(1,"","","","");
 
  constructor(public personaService: PersonaService) { }

  ngOnInit() {
    this.personaService.getPersona().subscribe(async data => {
      this.persona = data;

    });
   
    
  }


}
