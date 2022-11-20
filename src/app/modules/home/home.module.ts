import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [HomeComponent, DetailComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
