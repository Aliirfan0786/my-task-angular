import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface DataItem {
gender: any;
password: any;
contact: any;
firstname: any;
lastname: any;
email: any;
  
  id: number;
  name: string;
  
}

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent {

  data: DataItem[] | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<DataItem[]>('https://future-tech.onrender.com/api/admin')
      .subscribe(data => {
        this.data = data;
      });
  }

}
