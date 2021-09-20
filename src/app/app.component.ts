import { Component } from '@angular/core';
import * as data from '../assets/filters.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filters: any = data;
  imagePath: string = "../assets/sunflower.jpg";

  onUpload(event: any, reference: any) {
    let fileReader: FileReader = new FileReader();
    fileReader.onloadend = (e: any) => {
      this.imagePath = e.target.result;
    }
    fileReader.readAsDataURL(event.files[0]);
    reference.clear();
  }
}
