import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  title = 'mail';
  mail = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    console.log('test>>>', this.mail);
  }
  mailJSON() {
    const maildata = {
      name: this.mail.value.name,
      email: this.mail.value.email,
      subject: this.mail.value.subject,
      message: this.mail.value.message,
    };
    return maildata;
  }
  sendMail() {
    console.log('>>data', this.mailJSON());
    this.http
      .post('http://localhost:3500/user/sendmail', this.mailJSON())
      .subscribe((res: any) => {
        console.log(res);
      });
    alert('message sent successfully ');
  }
}
