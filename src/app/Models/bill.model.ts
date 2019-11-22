import { BillItem } from './bill-item.model';

export class Bill {
    idstage : number;
	provider : string;
	billphoto : string;
	billnumber : string;
	items: BillItem[];
}
