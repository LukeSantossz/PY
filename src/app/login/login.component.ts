import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  togglePassword(): void {
    const passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
    const icon = document.getElementById('togglePasswordIcon') as HTMLElement;
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      icon.classList.remove('bi-lock');
      icon.classList.add('bi-unlock');
    } else {
      passwordInput.type = 'password';
      icon.classList.remove('bi-unlock');
      icon.classList.add('bi-lock');
    }
  }  
}
