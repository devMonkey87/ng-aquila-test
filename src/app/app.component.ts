import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NxDialogService, NxModalRef } from '@aposin/ng-aquila/modal';

@Component({
  // tslint:disable-next-line
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  dialogRef: NxModalRef<any, any> | undefined;
  formGroup: FormGroup;

  constructor(public dialogService: NxDialogService) {
    this.formGroup = new FormBuilder().group({
      name: ['', Validators.required],
      items: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      consent: [false, Validators.requiredTrue],
    });
  }

  public test(x: number, y: number) {
    return x * y;
  }

  public test2() {
    let x = this.test(2, 5);
    console.log(x);

  }
}

/**  Copyright APOSIN 2021 */
