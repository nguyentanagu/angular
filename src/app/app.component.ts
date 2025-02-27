import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nameBtn: string = 'Click Me';  // Khai báo biến nameBtn
  clickMessage: string = '';     // Khai báo biến clickMessage

  handleClickMe() {
    this.clickMessage = 'Button Clicked!';  // Thêm phương thức handleClickMe
  }
}

