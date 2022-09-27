import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {
  singUpControl: FormGroup;
  private passEqual() {
    return (group: FormGroup) => {
      return (!group.dirty || !group.touched) ||
              group.get('pass').value === group.get('conf_pass').value ?
                 null : 
                 { custom: 'пароли не совпадают' };
    }
  }

  ngOnInit() {
    this.singUpControl = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      fullname: new FormControl('', Validators.required),
      pass: new FormControl('', [Validators.minLength(6),Validators.required]),
      confPass: new FormControl('', [Validators.minLength(6),Validators.required])
    })
  }
}
