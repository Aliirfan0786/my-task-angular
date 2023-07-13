import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  
  postUser(data:any){
    return this.http.post<any>("https://future-tech.onrender.com/api/admin",data.payload)

    
    
  }
  // getUser(){
  //   return this.http.get<datamodel[]>("http://localhost:3000/firstname");
  // }
//   getEmploye(data:any){
//     return this.http.post<any>("http://localhost:3000/posts",data)
//     .pipe(map((res:any)=>{
//       return res;
//     }))
// }
// updateEmploye(data:any,id:number){
//   return this.http.post<any>("http://localhost:3000/posts",data)
//   .pipe(map((res:any)=>{
//     return res;
//   }))
// }
}