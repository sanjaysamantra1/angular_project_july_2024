export interface IEmployee {
    id: string
    firstName: string
    lastName: string
    sal: number
    email: string
}

export class Employee {
    constructor(
        public id: string,
        public firstName: string,
        public lastName: string,
        public sal: number,
        public email: string
    ) { }

    getFullName() {
        return this.lastName + " " + this.firstName;
    }
    getAnnualSal() {
        return this.sal * 12;
    }
}