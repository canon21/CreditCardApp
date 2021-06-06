import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {

    //override
    setValue(value: string, options: any) {

        if (value.match(/[^0-9|\/]/gi) || value.length > 5) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true });
            return;
        }

        if (value.length === 2 && this.value.length === 3) {
            super.setValue(value, { ...options, emitModelToViewChange: true });
            return;
        }

        if (value.length === 3 && value.charAt(2) !== '/') {
            let addSlash = value.substring(0,2) + '/' + value.substring(2,3);
            console.log(addSlash);
            super.setValue(addSlash, { ...options, emitModelToViewChange: true });
            return;
        }

        if (value.length === 2) {
            super.setValue(value + '/', { ...options, emitModelToViewChange: true });
            return;
        }

        //calling method of super class.
        super.setValue(value, { ...options, emitModelToViewChange: true });
    }
}
