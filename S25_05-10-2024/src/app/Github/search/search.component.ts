import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
username:string = ""

  getUsersInfo(){
      fetch(`https://api.github.com/users/${this.username}`)
      .then((res)=>{
         return res.json()
      })
      .then((data)=>{
    console.log(data)
      })
      .catch(()=>{
        alert("Something went wrong")
      })
  }
}
