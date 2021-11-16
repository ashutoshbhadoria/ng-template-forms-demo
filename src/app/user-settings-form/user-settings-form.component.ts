import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css'],
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    userInterfaceStyle: null,
    subscriptionType: null,
    notes: null,
  };

  userSettings: UserSettings = { ...this.originalUserSettings };

  error = false;
  errorMessage = '';
  subscriptionTypes: Observable<string[]> = of([]);

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onError(err: any) {
    console.error(`Error Occured: ${err}`);
    this.error = true;
    this.errorMessage = 'A 400 error occured';
  }

  onSubmit(form: NgForm) {
    console.log(`Submitting form, valid: ${form.valid}`);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      (result) => console.log('SUCCESS: ', result),
      (err) => this.onError(err)
    );
  }

  onBlur(nameField: NgModel) {
    console.log(`onblur, errors: ${JSON.stringify(nameField.errors)}`);
  }
}
