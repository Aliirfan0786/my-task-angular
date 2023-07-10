import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'signinApp';
  

  constructor(private api : ApiService){}

ngOnInit(): void{
//   this.getAllUsers();
// }
//   getAllUsers(){
//     this.api.getUser()
//     .subscribe({
//       next : (res)=>{
//         console.log("response", res);
        
//       },
//       error:(_err)=>{
//         alert("error while fetching the records")
//       }
//     })

  }
}
