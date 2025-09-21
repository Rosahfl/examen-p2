import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ui',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './ui.html',
  styleUrl: './ui.scss'
})
export class Ui {

}
