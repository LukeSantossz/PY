import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  togglePassword(inputId: string): void {
    const passwordInput = document.getElementById(inputId) as HTMLInputElement;
    const icon = inputId === 'passwordInput' ? document.getElementById('togglePasswordIcon1') : document.getElementById('togglePasswordIcon2');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      icon?.classList.remove('bi-lock');
      icon?.classList.add('bi-unlock');
    } else {
      passwordInput.type = 'password';
      icon?.classList.remove('bi-unlock');
      icon?.classList.add('bi-lock');
    }
  }
  
}
