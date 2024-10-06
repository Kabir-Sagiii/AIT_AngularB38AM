import { Component, OnInit } from '@angular/core';
import {Observable,of,from,map,filter} from 'rxjs'

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent implements OnInit {

   myData:any = []
   myObs_of:any
   myObs_from:any
   mapFilterRelatedObservable:any
   mapObservableData:any
   filterObservableData:any

         myobs = new Observable((obj)=>{
              setTimeout(()=>{
                obj.next(100)
              },0)

              setTimeout(()=>{
                obj.next(200)
              },2000)

              setTimeout(()=>{
                obj.next(300)
              },4000)

              setTimeout(()=>{
                obj.complete()
                obj.error("Error Triggered")
               
              },5000)

              setTimeout(()=>{
                obj.next(400)
              },6000)

              setTimeout(()=>{
                obj.next(500)
              },8000)
         })

         getObservableData(){
          this.myobs.subscribe({
            next:(data)=>{
              console.log(data)
              this.myData.push(data)
            },
            error:(errorData)=>{
console.log(errorData)
            },
            complete : ()=>{
              alert("All the Data Received")
            }
          })
         }

         getData_Of(){
            this.myObs_of   = of("Raj","Sneha","Harika","Aish","Sid")
            var count = 0
            this.myObs_of.subscribe({
              next:(data)=>{
                console.log(++count)
                console.log(data)
              },
              error:(error)=>{
                console.log(error)
              },
              complete:()=>{
                console.log("Completed")
              }
            })
         }

         getData_from(){
          this.myObs_from  = from([10,20,30,40,50,60,70,80])
         // invalid
          // this.myObs_from  = from(<any>{email:'s1',city:'s2'})
          var count = 0
          this.myObs_from.subscribe({
            next:(data)=>{
              console.log(++count)
              console.log(data)
            },
            error:(error)=>{
              console.log(error)
            },
            complete:()=>{
              console.log("Completed")
            }
          })
       }

       getData_map(){
        

        this.mapObservableData.subscribe({
          next:(data)=>{
            
            console.log(data)
          },
          error:(error)=>{
            console.log(error)
          },
          complete:()=>{
            console.log("Completed")
          }
         })
       }

       getData_filter(){
         this.filterObservableData.subscribe({
          next:(data)=>{
            
            console.log(data)
          },
          error:(error)=>{
            console.log(error)
          },
          complete:()=>{
            console.log("Completed")
          }
         })
       }

         ngOnInit(): void {
          //creates Observable using from
          this.mapFilterRelatedObservable = from([10,20,30,40,50,60])
  
          //mapping Observable to transform observable data
         this.mapObservableData= this.mapFilterRelatedObservable
         .pipe(map((obsData:any)=>{
            return obsData * 100
     }))

     //filter applied on the Observable Data
       this.filterObservableData  = this.mapFilterRelatedObservable.pipe(filter((observableData:any)=>{

             return observableData < 30
          }))

          // this.myobs.subscribe({
          //   next:(data)=>{
          //     console.log(data)
          //     this.myData.push(data)
          //   }
          // })
         }
}
