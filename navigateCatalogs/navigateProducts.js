import { LightningElement, api } from "lwc";
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateProducts extends NavigationMixin(LightningElement) {
    @api invoke() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ProductCatalog',
                actionName: 'home',
            },
        });
    }
}