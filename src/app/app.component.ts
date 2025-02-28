import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLayoutComponent, FormsModule],  // Đảm bảo FormsModule được import
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {
  nameBtn= 'Click Me!';
  clickMessage =' ';  

  bindingMessage = ' ';  // Đảm bảo khai báo bindingMessage là một object

  handleClickMe() {
    this.clickMessage = 'Button Clicked!';
  }

  updateField(): void {
    console.log('Hello World');
  }
}
