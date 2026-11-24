// Copyright (c) 2024-2026 Testsmith. All rights reserved.
// See LICENSE for details.

import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn, FormControl} from '@angular/forms';

export class PasswordValidators {
  static readonly MIN_LENGTH = 8;

  static minLength(min: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isValid = (control.value || '').length >= min;
      return isValid ? null : { minLength: { requiredLength: min } };
    };
  }

  static mixedCase(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasUpperCase = /[A-Z]/.test(control.value || '');
      const hasLowerCase = /[a-z]/.test(control.value || '');
      return hasUpperCase && hasLowerCase ? null : { mixedCase: true };
    };
  }

  static hasNumber(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasNumber = /\d/.test(control.value || '');
      return hasNumber ? null : { hasNumber: true };
    };
  }

  static hasSymbol(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasSymbol = /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/.test(control.value || '');
      return hasSymbol ? null : { hasSymbol: true };
    };
  }

  static passwordsMatch(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as FormGroup;
      const newPassword = formGroup.get('new_password')?.value;
      const confirmPassword = formGroup.get('new_password_confirmation')?.value;
      return newPassword === confirmPassword ? null : { passwordsMismatch: true };
    };
  }

  static strength(password: string): string {
    const value = password || '';
    const control = new FormControl(value);

    let strength = 0;

    if (!this.minLength(this.MIN_LENGTH)(control)) strength++;
    if (/[a-z]/.test(value)) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (!this.hasNumber()(control)) strength++;
    if (!this.hasSymbol()(control)) strength++;

    switch (strength) {
      case 1: return 'Weak';
      case 2: return 'Moderate';
      case 3: return 'Strong';
      case 4: return 'Very Strong';
      case 5: return 'Excellent';
      default: return 'Invalid';
    }
  }
}