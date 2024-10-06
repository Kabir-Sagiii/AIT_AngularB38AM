import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent implements OnInit {
electronicsData:any = []

ngOnInit(): void {
  fetch(`https://fakestoreapi.com/products/category/electronics`)
  .then((res) => { return res.json() })
  .then((data) => {
    console.log(data)
    this.electronicsData = data
  })
  .catch((error) => {
    alert("Something went wrong")
    console.log(error)
  })
}

}
