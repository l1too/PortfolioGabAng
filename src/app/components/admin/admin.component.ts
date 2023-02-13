import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { SavePersonaService } from 'src/app/service/save-persona.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  persona: persona = new persona(1,"","","","");

  nombre: string = "";
  apellido: string = "";
  oficio: string = "";
  imgFondo: string = "";
  imgNueva: string = "";
  

  constructor(public personaService: PersonaService, 
    private savePersonaService: SavePersonaService ) { 
    
  }
  

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{ this.persona = data})
    
  }
  updateNombre(event: any) {
    this.nombre = event.target.value;
  
  }

  updateApellido(event: any) {
    this.apellido = event.target.value;
  
  }
  updateOficio(event: any) {
    this.oficio = event.target.value;
    
  }
  async updateImgFondo(event: any) {
    this.imgFondo = "./" + event.target.files[0].name;
    const file = event.target.files[0];
    const base64 = await this.toBase64(file);

    const imageElement = document.querySelector('img');
    if (imageElement) {
      imageElement.src = "" + base64;
      this.imgNueva = "" + base64;
    }
  }
  save(){
    this.persona.nombre = this.nombre;
    this.persona.apellido = this.apellido;
    this.persona.oficio = this.oficio;
    this.persona.imgFondo = this.imgNueva;
    this.savePersonaService.updateData(this.persona).subscribe(data => {
      alert("ok");
      setTimeout(() => {
        window.location.href="admin"
      }, 1000);
    }, error=> alert("Por favor ingrese un usuario y contraseña correcto"));
    
  }
  toBase64(file:any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
}
