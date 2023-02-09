import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

imagenes = [
  '../../../assets/imagenes/consejos1.png',
  '../../../assets/imagenes/IdeasDiseño1.png',
  '../../../assets/imagenes/tutoriales1.png',
  
]

  constructor() { }

  ngOnInit(): void {
  }

}