import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../Interfaces/alumno';


@Injectable({
  providedIn: 'root'
})
export class ApialService {

  
  private URl_API= 'https://localhost:7016/'

  constructor(private http: HttpClient) { }


  getAlumnos():Observable<any>{
    return this.http.get<any>(this.URl_API+'alumnos');
    
  }

  postAlumno(newAlumnito:any):Observable<any>{
    return this.http.post(this.URl_API+'alumno', newAlumnito)
  }

  getAlumno(id:any):Observable<any>{
    return this.http.get<any>(this.URl_API+'alumno/'+id)
  }

  putAlumno(id:any, acAlumno:any):Observable<any>{ //actualizar info
    return this.http.put(this.URl_API+'alumno/'+id,acAlumno)
  }

  putAlumnoEliminar(id:any, elAlumno:any):Observable<any>{
    return this.http.put(this.URl_API+'alumno/'+id,elAlumno)
  }

}
