import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormService } from '../form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  creatProfileForm!: FormGroup;
 cities!: any;
 floors!: any;
 columns!: any;
 seats!: any;




  constructor(private formService: FormService) {
}
  ngOnInit(): void {


    this.formService.getCities().subscribe((cities) => {
      this.cities = cities})
      ;


   this.creatProfileForm = new FormGroup({
    city: new FormControl(''),
    floor: new FormControl(''),
    column: new FormControl(''),
    seat: new FormControl(''),
    
   })
  }

  onChangeCity(event: Event){

    const cityId = parseInt((event.target as HTMLSelectElement).value);
    if(cityId){
    this.formService.getFloors(cityId).subscribe((floors) => {
      this.floors = floors
      this.columns = null;
      this.seats = null;
    })
      ;
  }else{
    this.floors = null;
    this.columns = null;
    this.seats = null;
  }
}


onChangeFloor(event: Event){

  const floorId = parseInt((event.target as HTMLSelectElement).value);
  if(floorId){
  this.formService.getFloors(floorId).subscribe((columns) => {
    this.columns = columns
    this.seats= null;
    
  })
    ;
}else{
 
  this.columns = null;
  this.seats = null;
}
}
}

onChangecolumn(event : Event) {

  const columnId = parseInt((event.target as HTMLSelectElement).value);
  if(columnId){
  this.formService.getseats(columnId).subscribe((seats) => {
    this.seats = seats
  
    
  })
    ;
}else{
 
  this.columns = null;
  this.seats = null;
}
}
}



  





// function onChangeColumn(event: Event | undefined, Event: { new(type: string, eventInitDict?: EventInit | undefined): Event; prototype: Event; readonly NONE: 0; readonly CAPTURING_PHASE: 1; readonly AT_TARGET: 2; readonly BUBBLING_PHASE: 3; }) {
//   throw new Error('Function not implemented.');
// }

// function onChangeFloor(event: Event | undefined, Event: { new(type: string, eventInitDict?: EventInit | undefined): Event; prototype: Event; readonly NONE: 0; readonly CAPTURING_PHASE: 1; readonly AT_TARGET: 2; readonly BUBBLING_PHASE: 3; }) {
//   throw new Error('Function not implemented.');
// }

