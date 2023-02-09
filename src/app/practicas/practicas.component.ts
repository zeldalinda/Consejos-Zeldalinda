import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-practicas',
  templateUrl: './practicas.component.html',
  styleUrls: ['./practicas.component.css']
})
export class PracticasComponent implements OnInit {

  //declaracion de variables
  texto: string
  nombre: string
  apellidos: string
  nombrecomb: string
  numero1: number
  numero2: number
  suma: number
  multi: number
  resta: number
  div: number
  arreg: Array<string>
  Estudiantes: string
  Sexo: string
  calificacion: number
  operaciones: string
  resultadO: number
  promedio:string
  calif1: number
  calif2: number
  calif3: number
  promedioFi: number
  orden: string 
  registros: any
  coleccion: string
  url: string
  registro: any

  constructor(private crud: CrudService, private database: AngularFirestore, private storage: AngularFirestore) { 
   //asignacion de valores
  this.coleccion = ""
  this.url = ""
  this.orden = ""
  this.texto = 'Hola Mundo'
  this.nombre = 'Eunice Abigail'
  this.apellidos = 'Cruz Espinoza'
  this.nombrecomb = this.nombre + ' ' + this.apellidos 
  this.numero1 = 0
  this.numero2 = 0
  this.suma = 0
  this.multi = 0
  this.resta = 0
  this.div = 0
  this.arreg = []
  this.Estudiantes = ''
  this.Sexo = ''
  this.calificacion = 0
  this.operaciones = ''
  this.promedio = ''
  this.resultadO= 0
  this.calif1 = 0
  this.calif2 = 0
  this.calif3 = 0
  this.promedioFi = 0
  this.registros = ''
  this.registro = ''
  }

  ngOnInit(): void {
    //iniciar los procesos

    //mostrar un texto en consola
    console.log(this.texto)
    //mostrar un texto en alerta
    alert(this.texto)

  }
agregar(){
  this.arreg.push(this.Estudiantes)
  console.log(this.Estudiantes)
}

verificar(){
  if (this.Sexo == 'hombre') 
  {
    alert('Bienvenido al curso')
  } else 
  {
    if (this.Sexo == 'mujer') 
    {
      alert('Bienvenida al curso')
    } else 
    {
      alert('selecione un genero')
    }
  }
}

Mostrar():void
{
  if (this.calificacion >=91 && this.calificacion <= 100) 
  {
    alert("sobresaliente")  
  } else 
    {
    if (this.calificacion <71 && this.calificacion >= 90) 
    {
      alert("notable")  
    } else 
      {
      if (this.calificacion >61 && this.calificacion >= 70) 
      {
       alert("bien") 
      } else 
        {
        if (this.calificacion <=51 && this.calificacion >=60 ) 
        {
          alert("suficiente")
        } else 
        {
          if (this.calificacion <= 31 && this.calificacion >=50) 
          {
           alert("Insuficiente")  
          } else 
          {
            if (this.calificacion <=0 && this.calificacion >= 30) 
            {
             alert("muy deficiente") 
            } else {
              alert("este valor no es valido")
            }
          } 
        }        
      }
    }
  }
}

resultado(){
  switch(this.operaciones){
    case 'suma':
      this.resultadO = this.numero1 + this.numero2
      break;
      case 'resta':
        this.resultadO = this.numero1 - this.numero2
        break;
        case 'multi':
          this.resultadO = this.numero1 * this.numero2
          break;
          case 'div':
            this.resultadO = this.numero1 / this.numero2
            break
    default:
      break;
  }
  alert('el resultado es: ' + this.resultadO)
}

verificar2(){
  this.promedioFi = this.calif1 + this.calif2 + this.calif3
  if (this.promedioFi >= 60) 
  {
   alert('Aprobo owo su promedio es: ' + this.promedioFi)  
  } else {
    if (this.promedioFi <= 60) 
    {
     alert(' Reprobado qwq su promedio fue: ' + this.promedioFi) 
    } else {
      alert('favor de ingresar las calificaciones')
    }
    
  }

}

ordenar(){
  this.crud.order(this.coleccion,this.orden).then((response:any)=>{
    this.registros = response
    console.log(this.registros)
  })
}

}
