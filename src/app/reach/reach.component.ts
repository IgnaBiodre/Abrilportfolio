import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reach',
  templateUrl: './reach.component.html',
  styleUrls: ['./reach.component.css'],
})
export class ReachComponent implements OnInit {
  reachForm: FormGroup;
  /* name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);
  message: FormControl = new FormControl("", [
    Validators.required,
    Validators.maxLength(256),
  ]);
  honeypot: FormControl = new FormControl(""); */
  submitted: boolean = false;
  isloading: boolean = false;
  responseMessage: string;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }


  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.reachForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(256)]],
    });
  }

  onSubmit() {
    console.log(this.reachForm.value);
    if (this.reachForm.status == "VALID" /* && this.honeypot.value == "" */) {
      this.reachForm.disable();
      let formData = new FormData();
      
      formData.append("name", this.reachForm.get("name")?.value);
      formData.append("email", this.reachForm.get("email")?.value);
      formData.append("message", this.reachForm.get("message")?.value);
      this.isloading = true;
      this.submitted = false;

      this.http.post<HttpMailResponseDto>("https://script.google.com/macros/s/AKfycbzuDSIY_r-M32X5hMjEWw1qnSf_FxmgP_E6Y8b-Npn6b2fzRkmYwKznLFXSjrLZwtky/exec", formData).subscribe(
        (response) => {
          if (response.result == "success") {
            this.responseMessage = "Gracias por tu mensaje, me pondre en contacto pronto";
          } else {
            this.responseMessage = "Oops! Algo salió mal, intentá de nuevo.";
          }
          this.reachForm.enable();
          this.submitted = true;
          this.isloading = false;
          console.log(response);
        },
        error => {
          this.responseMessage = "Oops! Algo salió mal, intentá de nuevo";
          this.reachForm.enable();
          this.submitted = true;
          this.isloading = false;
          console.log(error);
        }
      );
    }
  }
}

interface HttpMailResponseDto {
  result: string;
  data : {
    name: string;
    email: string;
    message: string;
  }
}
