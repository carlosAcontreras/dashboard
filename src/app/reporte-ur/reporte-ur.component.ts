import { Component, OnInit } from '@angular/core';
import {} from 'jquery';
import {} from 'materialize-css';
import {} from 'jquery.datatables';
import { ServicesUrService } from '../servicios/services-ur.service';


@Component({
  selector: 'app-reporte-ur',
  templateUrl: './reporte-ur.component.html',
  styleUrls: ['./reporte-ur.component.css'],
  providers: [ServicesUrService]
})
export class ReporteUrComponent implements OnInit {
  txtFechaInicio: JQuery<HTMLElement>;
  txtFechaFin: JQuery<HTMLElement>;
  txtComite: JQuery<HTMLElement>;
  strOGE: String = 'OGE Cambio';
  cursos: String[];
  constructor(private _servicesUrService: ServicesUrService) {

  }

  ngOnInit() {
     this.inicializarControles();
  }
  clickConsulta() { 
   
  }

  inicializarControles() {
   let that: ReporteUrComponent = this;
   $(document).ready(function(){
      /*Inicializo lo botones de picker */
     $('.datepicker').pickadate({
       selectMonths: true,
       selectYears: 15,
       today: 'Today',
       clear: 'Clear',
       close: 'Ok',
       closeOnSelect: false,
       format: 'yyyy-mm-dd'
     });
     /*Cargo los elementos de fecha y fecha*/
     that.txtFechaInicio = $('#txtFechaInicio');
     that.txtFechaFin = $('#txtFechaFin');

     /*Consulto los comites y creo el elemento */
     /*that._servicesUrService.getComite().subscribe(
       result => {
          var data = {};
          var dataTotal = {};
          $.each(result, function(indx, value){
             data[value.name] = null
             dataTotal[value.name] = value;
          });
         that.txtComite = $('#txtComite').autocomplete({
           data: data
           ,
           limit: 20,
           onAutocomplete: function(val) {
              console.log(dataTotal[val]);
           },
           minLength: 1,
         });
       },
       error => {
         let mensajeError = <any> error;
         console.log(mensajeError);
       }
     );
     /*Fin de consulta de Comites */
    $('#btnConsultar').on('click', function(){
      that.clickConsulta();
    });
   });
  }

}
