import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/Interfaces/alumno';
import { ApialService } from 'src/app/services/apial.service';
import { tap } from 'rxjs';


@Component({
  selector: 'app-ralumno',
  templateUrl: './ralumno.component.html',
  styleUrls: ['./ralumno.component.css'],
  providers:[ApialService]
})
export class RalumnoComponent {

      //variables
      formAlumno:FormGroup 
      documentos: any[];
      sexos: any[];
      selectedFile?: File;

      constructor(private builder:FormBuilder, 
                  private api: ApialService,
                  private route: ActivatedRoute,
                  private router:Router
                )  {


                  this.documentos = [
                                { label: 'DNI', value: 'DNI' },
                                { label: 'Pasaporte', value: 'Pasaporte' },
                                { label: 'carnet_extranjeria', value: 'carnet_extranjeria' }
                              ];

                              this.sexos = [
                                { label: 'Masculino', value: 1 },
                                { label: 'Femenino', value: 0 },
                                
                              ];
                            this.formAlumno = this.builder.group({
                              IdAlumno:['',Validators.required],
                              Nombres:['',Validators.required],
                              Apellidos:['',Validators.required],
                              Email:['',Validators.required],
                              TipoDocumento:['',Validators.required],
                              NroDocumento:['',Validators.required],
                              FechaNacimiento:['',Validators.required],
                              Sexo:[1,Validators.required],
                              Telefono:['',Validators.required],                          
                              Nacionalidad:['',Validators.required],
                              Foto:['']
                              })

                              
                }


                
          public idAlumnoWeb = this.route.snapshot.paramMap.get('id');

          ngOnInit(){       

            if(this.idAlumnoWeb=='0'){
              this.NuevoAlumno();
            }


            this.CargdarDatosAlumno(this.idAlumnoWeb);
            
          }

          onFileSelected(event: any) {
            this.selectedFile = event.files[0];
          }

    

        NuevoAlumno(){
          this.formAlumno.patchValue({
            Nombres:'Nuevo Neno',
            Apellidos:'Apellidos nuevo neno',
            Email:'Emailcito@noob.com',
            TipoDocumento:'DNI',
            NroDocumento:'47746645',
            FechaNacimiento:'',
            Sexo:1,
            Telefono:'999999999',
            Nacionalidad:'inka',
            IdAlumno:0,
            Foto:"https://static.vecteezy.com/system/resources/previews/020/853/711/non_2x/illustration-of-airplane-aircraft-airplane-drawing-vector.jpg"
          });
        }

      // registro obtenido
      public objAlumno!:any
      CargdarDatosAlumno(id:any){

        

        this.api.getAlumno(id).pipe(
          tap(
            (data: Alumno) => {
              this.objAlumno = data;
              
              
              console.log('el Alumno seleccionado:', this.objAlumno);
              let dt =new Date(this.objAlumno.fechaNacimiento)
              //asignacion ...
             


              this.formAlumno.patchValue({
                Nombres: this.objAlumno.nombres,
                Apellidos: this.objAlumno.apellidos,
                Email: this.objAlumno.email,
                TipoDocumento: this.objAlumno.tipoDocumento, 
                NroDocumento: this.objAlumno.nroDocumento,
                FechaNacimiento: dt, 
                Sexo: this.objAlumno.sexo, 
                Telefono: this.objAlumno.telefono,
                Nacionalidad: this.objAlumno.nacionalidad,
                IdAlumno: this.objAlumno.idAlumno,
                Foto:this.objAlumno.foto
              });

              

            },
            (error) => {
              console.error('Error al obtener los alumnos:', error);
              // Maneja el error de acuerdo a tus necesidades
            }
          )
        ).subscribe();
      }










      GuardarAlumno(){
        console.log("Aholamsoas")
        let objgAlumno:any;
        let fr = this.formAlumno.getRawValue();

        let dt =new Date(fr.FechaNacimiento)//cogemos la fecha del form
        const dtISO = dt.toISOString();//convertimos a fecha de formato ISO 8601
        const dtnac = dtISO.substring(0,19);

        let Sexo=true
        if(fr.Sexo==1){Sexo = true} else { Sexo = false}


        objgAlumno = {           
          Nombres: fr.Nombres,
          Apellidos: fr.Apellidos,
          Email: fr.Email,
          TipoDocumento: fr.TipoDocumento,
          NroDocumento: fr.NroDocumento,
          FechaNacimiento: dtnac,
          Sexo:Sexo,
          Telefono: fr.Telefono,
          Nacionalidad: fr.Nacionalidad,
          Foto: fr.Foto,
          Estado:'1'
        }


        if(fr.IdAlumno==0){

                       
                this.api.postAlumno(objgAlumno).subscribe(
                  async (res)=>{
                    this.router.navigate([''])
                  },
                  (error) => {
                    // Manejo del error
                    console.error('Error al guardar el alumno:', error);
                    // Aquí puedes mostrar un mensaje de error al usuario, registrar el error, etc.
                  }
                )
                console.log(objgAlumno)


        }
        else
        {

                this.api.putAlumno(fr.IdAlumno,objgAlumno).subscribe(
                  async (res)=>{
                    this.router.navigate([''])
                  })

                  console.log(objgAlumno)
        }


        

      }













}
