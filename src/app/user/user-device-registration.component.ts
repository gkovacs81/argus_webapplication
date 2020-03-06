import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { User } from '../models';
import { AuthenticationService } from '../services';


@Component({
  selector: 'app-user-device-registration-dialog',
  templateUrl: 'user-device-registration.component.html',
  styleUrls: ['user-device-registration.component.scss'],
})
export class UserDeviceRegistrationDialogComponent implements OnInit {
  registrationForm: FormGroup;
  modes: any[];
  units: any[];
  registration_code: string;

  constructor(
    public dialogRef: MatDialogRef<UserDeviceRegistrationDialogComponent>, @Inject(MAT_DIALOG_DATA) public user: User,
    public authService: AuthenticationService,
    private fb: FormBuilder
  ) {
    console.log("User: ", this.user);
    this.modes = [
      {name: 'Unlimited time', value: 'no_expiry'},
      {name: 'With expiry', value: 'expiry'}
    ];
    this.units = [
      {value: 'hours', viewValue: 'Hours'},
      {value: 'days', viewValue: 'Days'},
    ];
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      mode: new FormControl('expiry'),
      counter: new FormControl(24, Validators.required),
      unit: new FormControl('hours', Validators.required)
    });
  }

  getNewCode() {
    let expiry = null;
    if (this.registrationForm.controls.mode.value == 'expiry') {
      if (this.registrationForm.controls.unit.value =='days') {
        expiry = this.registrationForm.controls.counter.value * 24 * 60 * 60;
      }
      else if (this.registrationForm.controls.unit.value =='hours') {
        expiry = this.registrationForm.controls.counter.value * 60 * 60;
      }
      else {
        console.error("Uknown time unit: ", this.registrationForm.controls.unit.value)
      }
    }
    else {
      console.error("Unknown expiry mode: ", this.registrationForm.controls.mode.value)
    }

    this.authService.generateRegistrationCode(this.user.id, expiry)
      .subscribe(code => {
        this.registration_code = code['code'];
      });
  }

  onClickClose(): void {
    this.dialogRef.close();
  }

  onModeChanged(event) {
    if (event.value == 'expiry') {
      this.registrationForm.controls.counter.setValidators(Validators.required);
      this.registrationForm.controls.unit.setValidators(Validators.required);
      this.registrationForm.controls.counter.enable();
      this.registrationForm.controls.unit.enable();
    }
    else {
      this.registrationForm.controls.counter.clearValidators();
      this.registrationForm.controls.counter.disable();
      this.registrationForm.controls.unit.disable();
    }
  }
}