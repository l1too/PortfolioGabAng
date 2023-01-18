import { Component, OnInit } from '@angular/core';
import { SobreMiService } from 'src/app/service/sobre-mi.service';
import { sobreMi } from 'src/app/model/sobremi.model';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  sobreMi: sobreMi = new sobreMi("","","");
  constructor(public sobreMiService: SobreMiService) { }

  ngOnInit(): void {
    this.sobreMiService.getSobreMi().subscribe(data =>{ this.sobreMi = data})
  }

}
