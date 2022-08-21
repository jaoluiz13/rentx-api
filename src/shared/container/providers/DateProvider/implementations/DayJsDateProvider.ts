import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";

import { IDateProvider } from "../IDateProvider";

dayjs.extend(utc);

class DayJsDateProvider implements IDateProvider {
  compareInHours(start_date: Date, end_date: Date): number {
    const end_date_utc = this.convertToUTC(end_date);
    const start_date_utc = this.convertToUTC(start_date);
    return dayjs(end_date_utc).diff(dayjs(start_date_utc), "hours");
  }
  convertToUTC(date: Date): string {
    const expectedReturnDateFormat = dayjs(date).utc().local().format();
    return expectedReturnDateFormat;
  }
  dateNow(): Date {
    return dayjs().toDate();
  }
}

export { DayJsDateProvider };