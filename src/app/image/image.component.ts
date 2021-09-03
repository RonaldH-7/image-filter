import { Component, Input, OnInit } from '@angular/core';
import * as filterProperties from '../../assets/filterProperties.json';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() filter: any;
  filterValues: any[] = [];
  filterProperties: any = [];
  name: string;
  isDialogOpen: boolean = false;

  constructor() {}

  ngOnInit() {
    this.filterProperties = filterProperties;
    console.log(this.filterProperties);

    for (const [key, value] of Object.entries(this.filter.filterValues)) {
      this.filterValues.push({
        property: key,
        value: value
      });
    }

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

  onClickFilter() {
    this.isDialogOpen = !this.isDialogOpen;
  }
}
