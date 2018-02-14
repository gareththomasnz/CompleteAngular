import {
	AbstractControl,
	ValidationErrors
} from '@angular/forms';


export class UsernameValidators {
	static cannotContainSpace(control: AbstractControl): Promise < ValidationErrors | null > {
		if ((control.value as string).indexOf(' ') >= 0)
			return {
				cannotContainSpace: true
			};

		return null;
	}
	static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (control.value === 'mosh')
					resolve({  shouldBeUnique: true });
				else resolve(null);
				console.log('ok');
			}, 2000);
		});

	}
}