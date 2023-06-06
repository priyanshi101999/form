import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
// apiBaseUrl = 'https://dev-deskbook-userapi.1rivet.com:9443';

apiBaseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCities() {
    return this.http.get(' http://localhost:3000/cities');
  }
  
    

  

  
  getFloors(cityId: number) {
    return this.http.get(`${this.apiBaseUrl}//api/deskbook/floors/{cityId}`)
    ;
  }



// getcolumns(floorId : number){
//   return this.http.get(`${this.apiBaseUrl}//api/deskbook/floors/{floorId}`)
// }
// getSeats(columnId : number){
//   return this.http.get(`${this.apiBaseUrl}//api/deskbook/floors/{columnId}`)

// }

}