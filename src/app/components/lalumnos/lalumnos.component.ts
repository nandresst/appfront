import { Component, ViewChild  } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/Interfaces/alumno';
import { ApialService } from 'src/app/services/apial.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-lalumnos',
  templateUrl: './lalumnos.component.html',
  styleUrls: ['./lalumnos.component.css'],
  providers:[ApialService]

})
export class LalumnosComponent 
{

            RelacionAlumnos: any=[];
            @ViewChild('dt') dt: any;

        //constructor 
        constructor(private api:ApialService){

        }

        ngOnInit(){
          
          this.ListarAlumnos();
        }



//variables 


        ListarAlumnos = () =>{
         
              this.api.getAlumnos().pipe(
                tap(
                  (data: Alumno[]) => {
                    this.RelacionAlumnos = data;
                    console.log('Alumnos obtenidos:', this.RelacionAlumnos);
                  },
                  (error) => {
                    console.error('Error al obtener los alumnos:', error);
                    // Maneja el error de acuerdo a tus necesidades
                  }
                )
              ).subscribe();
            }

            
            alumnoEliminado:any;
            EliminarAlumno(obj:any){
             

               const alumnoEliminado = {
                Nombres: obj.nombres,
                Apellidos: obj.apellidos,
                Email: obj.email,
                TipoDocumento: obj.tipoDocumento,
                NroDocumento: obj.nroDocumento,
                FechaNacimiento: obj.fechaNacimiento,
                Sexo:obj.sexo,
                Telefono: obj.telefono,
                Nacionalidad: obj.nacionalidad,
                Foto: obj.foto,
                Estado: '0' // Eliminando alumno
              };

              console.log(alumnoEliminado)
              //console.log(obj)
            
              this.api.putAlumnoEliminar(obj.idAlumno, alumnoEliminado).subscribe(
                response => {
                  console.log('Alumno eliminado:', response);
                  // Realizar acciones adicionales después de eliminar el alumno, como actualizar la lista de alumnos
                  this.ListarAlumnos(); 
                },
                error => {
                  console.error('Error al eliminar el alumno:', error);
                  // Manejar el error adecuadamente
                }
              );

              

            }



            exportarCSV() {
              console.log(this.RelacionAlumnos)
              this.dt.exportCSV(); 
            }

           

     
}
