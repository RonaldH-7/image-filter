import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    CardModule,
    DialogModule,
    InputNumberModule,
    InputSwitchModule,
    SliderModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
