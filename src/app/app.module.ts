import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RalumnoComponent } from './components/ralumno/ralumno.component';
import { LalumnosComponent } from './components/lalumnos/lalumnos.component';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';



import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { FileUploadModule } from 'primeng/fileupload';



@NgModule({
  declarations: [
    AppComponent,    
    RalumnoComponent, LalumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    PanelModule,
    InputTextModule,
    HttpClientModule,
    CalendarModule,
    DropdownModule,
    InputMaskModule,
    ReactiveFormsModule,
    FileUploadModule,
    TableModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
