import { Component, inject } from '@angular/core';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../houselocation';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  filteredLocationList: HousingLocation[] = [];



housingLocationList: HousingLocation[] = [];
housingService: HousingService = inject(HousingService);


constructor() {
  this.housingLocationList = this.housingService.getAllHousingLocations();


  this.filteredLocationList = this.housingLocationList;

}

//search

filterResults(text: string) {
  if (!text) {
    this.filteredLocationList = this.housingLocationList;
    return;
  }

  this.filteredLocationList = this.housingLocationList.filter(
    housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
  );
}


}
