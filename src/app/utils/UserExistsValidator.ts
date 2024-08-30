import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { map } from "rxjs";

export function userExistsValidator(user: any): AsyncValidatorFn {
    return (control: AbstractControl) => {
        return user.findUserByEmail(control.value).pipe(
            map((user: any) => user.length ? { userExists: true } : null)
        );
    }
}