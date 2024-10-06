import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import {ProfileComponent} from '../profile/profile.component'
import { GithubDetailsComponent } from '../github-details/github-details.component';

@Component({
  selector: 'app-github-home',
  standalone: true,
  imports: [SearchComponent,ProfileComponent,GithubDetailsComponent],
  templateUrl: './github-home.component.html',
  styleUrl: './github-home.component.css'
})
export class GithubHomeComponent {

}
