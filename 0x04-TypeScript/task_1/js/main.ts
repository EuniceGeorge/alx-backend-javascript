interface Teacherinterface {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key:string]:any;
};

class Teacher implements Teacherinterface {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key:string]:any;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string) {
	  this.firstName = firstname;
	  this.lastName = lastname;
	  this.fullTimeEmployee = fullTimeEmployee;
	  this.location = location;
  }
}

interface Directors extends Teacher {
  numberOfReports: number;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, numberOfReports: number) {
  	this.numberOfReports = numberOfReports;
  }
}
