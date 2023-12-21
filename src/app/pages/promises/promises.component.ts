import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent {
  constructor(){

  }

 ngOnInit(){

  const promise = new Promise( (resolve, reject ) => {
    // resolve("Hola Mundo");
    if( false ){
      resolve('Hola Mundo');
    }else{
      reject('Somothing was wrong');
    }
  });

  promise.then(( result )=>{
    console.log(result);
  })
  .catch( error => console.log('Algo Salio Mal en mi promesa!', error)),
  console.log('Fin del Init');
 }

}
