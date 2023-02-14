import { LightningElement, api } from "lwc";
const productData = {
	"Id": "ProductId",
	"ProductCode": "23L",
	"Name": "Backpack"
}
export default class ProductList extends LightningElement {

	@api searchable;
	@api recordId;
	@api objectApiName;
	products = productData;
}