import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {

form = {
  nombre: "",
  descripcion: "",
  guardar:"",
  cerrar:"",
  plataforma:""

}

coleccion: string
registros: any
proceso_agregar!: boolean
proceso_editar!: boolean
url: string
orden: string 
filtro! : string
campo!: string

  constructor( private crud: CrudService, private database: AngularFirestore, private storage: AngularFirestore) {
    this.coleccion = ""
    this.url = ""
    this.orden = ""
   }

  ngOnInit(): void {
    this.coleccion = 'ideas'
    this.crud.read(this.coleccion).then((response: any)=>{
      this.registros = response;
      console.log(this.registros)
    });
  }

  publicar(){
    
    this.crud.create(this.coleccion,this.form).then((Response:any)=>{
      if(Response){
        alert('se publico correctamente yeii')
      }
      else{
        alert('hubo un error qwq')
      }
      console.log(Response)
    })
  }
  
  almacenar(event: any){
    this.crud.upload(this.coleccion, event)
  }
  
  agregar(){
    this.proceso_agregar = true
    this.proceso_editar = false
    this.form = {
      nombre: "",
      descripcion: "",
      guardar:"",
      cerrar:"",
      plataforma:""
    }
    this.url = ""
  }

  editar(registro: any){
    this.proceso_agregar = false
    this.proceso_editar = true
    this.form = registro;
    this.url = registro.url
  }

  actualizar(){
    this.crud.update(this.coleccion, this.form).then((response:any)=>{
      if(response){
        alert('se actualizado correctamente! nwn/<3')
      }
      else{
        alert('Hubo un error qwq </3')
      }
      console.log(response)
      location.reload
    })
  }

  eliminar(registro: any){
    if (confirm('desea eliminar este registro?')) {
      this.crud.delete(this.coleccion, registro).then((response:any)=>{
        if(response){
          alert('se elimino correctamente')
        }
        else{
          alert('hubo un error')
        }
        console.log(response)
        location.reload()
      })
    }
  }

  ordenar(){
    this.crud.order(this.coleccion,this.orden).then((response:any)=>{
      this.registros = response
      console.log(this.registros)
    })
  }

  filtrar(){
    this.campo="plataforma"
    this.crud.filter(this.coleccion, this.campo, this.filtro).then((response: any)=>{
      this.registros = response
      console.log(this.registros)
    })
  }

}
