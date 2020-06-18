import {ClientDoseInfo} from './client-dose-info.model';
import {ClientDoseReport} from './client-dose-report.model';

export interface ClientInfoModel {
  info: ClientDoseInfo;
  report: ClientDoseReport[];
}
