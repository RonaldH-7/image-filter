import { Component, Input, OnInit } from '@angular/core';
import * as filterProperties from '../../assets/filterProperties.json';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() imagePath: string = '../assets/sunflower.jpg';
  @Input() filter: any;
  filterValues: any[] = [];
  filterProperties: any = [];
  name: string;
  isDialogOpen: boolean = false;
  color: any = {};
  overlayStrength: number;


  constructor() {}

  ngOnInit() {
    this.filterProperties = filterProperties;

    for (const [key, value] of Object.entries(this.filter.filterValues)) {
      this.filterValues.push({
        property: key,
        value: value
      });
    }

    this.color.r = this.filter.overlayColor.r;
    this.color.g = this.filter.overlayColor.g;
    this.color.b = this.filter.overlayColor.b;
    this.overlayStrength = this.filter.overlayStrength;

    this.name = this.filter.name;
  }

  getFilters(): Object {
    let filterString = '';
    this.filterValues.forEach((item) => {
      const string = `${item.property}(${item.value}%) `;
      filterString += string;
    });

    return { filter: filterString };
  }

  getOverlayColor(): Object {
    const color = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.overlayStrength / 100})`;
    return { backgroundColor: color };
  }

  onClickFilter() {
    this.isDialogOpen = !this.isDialogOpen;
  }
}
