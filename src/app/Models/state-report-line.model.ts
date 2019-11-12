import { StateLine } from './state-line.model';
import { StateTotalLine } from './state-total-line.model';

export class StateReportLine {
    project : string;
    lines : StateLine[];
    totals : StateTotalLine;
}
