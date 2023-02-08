import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public formSubmitted: boolean = false;
  public registerForm: FormGroup = this.fb.group(
    {
      name: ['test', [Validators.required, Validators.minLength(3)]],
      email: ['test@gmail.com', [Validators.required, Validators.email]],
      password: ['1234', Validators.required],
      password2: ['1234', Validators.required],
      terms: [false, Validators.required],
      google: [false],
    },
    {
      validators: this.samePasswords('password', 'password2'),
    }
  );

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  createUser() {
    this.formSubmitted = true;
    console.log(this.registerForm.value);
    Swal;

    if (this.registerForm.invalid) {
      return;
    }

    this.userService.createUser(this.registerForm.value).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'The mail is already registered',
        });
      },
    });
  }

  invalidField(field: string): boolean {
    if (this.registerForm.get(field)?.invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  invalidPasswords() {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if (pass1 !== pass2 && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  samePasswords(pass1Name: string, pass2Name: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if (pass1Control?.value === pass2Control?.value) {
        pass2Control?.setErrors(null);
      } else {
        pass2Control?.setErrors({ isnotSame: true });
      }
    };
  }

  acceptTerms(): boolean {
    return !this.registerForm.get('terms')?.value && this.formSubmitted;
  }
}
