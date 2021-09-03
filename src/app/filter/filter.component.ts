import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {
  @Input() filterProperties: any;

  ngOnInit() {
    console.log("Filter Properties: ", this.filterProperties);
  }
}
