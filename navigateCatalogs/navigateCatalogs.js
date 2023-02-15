import { LightningElement, api } from "lwc";
import { NavigationMixin } from 'lightning/navigation';
import Id from '@salesforce/user/Id';

export default class NavigateProducts extends NavigationMixin(LightningElement) {
    userId = Id;
    hey = "Hello";
    @api invoke() {
        console.log("userId" + this.userId);

        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ProductCatalog',
                actionName: 'home',
            },
        });
        // console.log("hey - " + this.hey);
        // console.log("hey " + this.hey);
        // console.log("userId");
    }
}