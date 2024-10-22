import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { AdvertiseComponent } from '../../components/advertise/advertise.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LeftimagecardComponent } from '../../components/leftimagecard/leftimagecard.component';
import { RightimagecardComponent } from '../../components/rightimagecard/rightimagecard.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RightimagecardComponent,NavbarComponent,LeftimagecardComponent,CarouselComponent,AdvertiseComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
