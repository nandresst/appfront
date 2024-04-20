import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LalumnosComponent } from './components/lalumnos/lalumnos.component';
import { RalumnoComponent } from './components/ralumno/ralumno.component';


const routes: Routes = [

  {path: '', component:LalumnosComponent},
  {path:'alumno/:id', component:RalumnoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
