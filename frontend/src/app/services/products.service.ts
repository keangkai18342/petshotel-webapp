import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  mybookings:any;
  products: any;
  mypets: any;
  id: any;
  myfood:any;
  emp:any;
  getAllProducts(token: any){
    const headers = {'Authorization': token}
    return this.http.get<any>('http://localhost:3000/api/products',{headers})
    .pipe(map(data => {
      if(data){
        console.log(data);
        this.products = data;
      }
      return data;
    }))
  }

  AddPets(pets:any){
    return this.http.post<any>('http://localhost:3000/pets/addpets',pets)
    .pipe(map(data => {
      return data;
    }))
  }

  getPets(){
    return this.http.get<any>('http://localhost:3000/pets/getpets')
    .pipe(map(data => {
      if(data){
        this.mypets = data;
        console.log(this.mypets);
      }
      return this.mypets;
    }));
  }

  getbookings(){
    return this.http.get<any>('http://localhost:3000/bookings/getbookings')
    .pipe(map(data => {
      if(data){
        this.mybookings = data;
        console.log(this.mybookings);
      }
      return data
    }));
  }

  addbookings(bookings:any){
    return this.http.post<any>('http://localhost:3000/bookings/addbookings',bookings)
    .pipe(map(data => {
      return data;
    }))
  }

  deleteBookings(id:any){
    this.id=id;
    console.log(this.id)
    return this.http.delete<any>('http://localhost:3000/booking/deletee/'+this.id)
    .pipe(map(data => {
      if(data){
        console.log(data);
      }
      return ;
    }));
  }

  deletePets(id:any){
    this.id=id;
    console.log(this.id)
    return this.http.delete<any>('http://localhost:3000/pets/delete/'+this.id)
    .pipe(map(data => {
      if(data){
        console.log(data);
      }
      return ;
    }));
  }

  updatePets(id:any,update:any){
    this.id=id;
    console.log(this.id,update)
    return this.http.put<any>('http://localhost:3000/pets/update/'+this.id,update)
    .pipe(map(data => {
      if(data){
        console.log(data);
      }
      return ;
    }));
  }

  AddFood(food:any){
    console.log("in AddFood show ")
    return this.http.post<any>('http://localhost:3000/food/addfood',food)
  }

  getFood(){
    return this.http.get<any>('http://localhost:3000/food/getfood')
    .pipe(map(data => {
      if(data){
        this.myfood = data;
        console.log(this.myfood);
      }
      return this.myfood;
    }));
  }


  addEmp(food:any){
    console.log("in AddFood show ")
    return this.http.post<any>('http://localhost:3000/emp/addemp',food)
  }

  getemp(){
    return this.http.get<any>('http://localhost:3000/emp/getemp')
    .pipe(map(data => {
      if(data){
        this.emp = data;
        console.log(this.emp);
      }
      return this.emp;
    }));
  }

 


 

 

}
