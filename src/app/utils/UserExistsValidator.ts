import { inject } from "@angular/core";
import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { map } from "rxjs";
import { UserService } from "../services/user.service";
export function userExistsValidator(): AsyncValidatorFn {
    const userService = inject(UserService);
    return (control: AbstractControl) => {
        return userService.findUserByEmail(control.value).pipe(
            map((user: any) => user.length ? { userExists: true } : null)
        );
    }
}