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
 cities: Array<any> = [];
 floors!: any;
 columns!: any;
 seats!: any;
 selectedCity : any = {

  id: 0,
  name: ''
 }




  constructor(private formService: FormService) {


    this.creatProfileForm = new FormGroup({
      cities: new FormControl(''),
      floor: new FormControl(''),
      column: new FormControl(''),
      seat: new FormControl(''),
      
     })
    
}
  ngOnInit(): void {
this.formService.getCities().subscribe((data:any)=>{
  this.cities = data;

  console.log(this.cities)
  
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