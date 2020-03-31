import { AbstractControl } from "@angular/forms";



export function passwordValidation(control: AbstractControl){
if(control && (control.value!= null || control.value != undefined)){
    const cnfpaassword = control.value;

    const passControl = control.root.get('password')
    
    if(passControl){
        const passValue = passControl.value;
        if (passValue != cnfpaassword){
            return{
                isError: true
                
                
            };
        }
    }
}
return null;
}