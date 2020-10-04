import { Component } from '@angular/core';

interface Client {
  name: string;
  email: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  submited = false;

  client: Client = {
    name: '',
    email: ''
  };

  onSubmit(form) {
    this.submited = true;

    console.log(form);
  }

}
