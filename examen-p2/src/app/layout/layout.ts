import { Component } from '@angular/core';
import { RouterOutlet } from "../../../node_modules/@angular/router/router_module.d";

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
