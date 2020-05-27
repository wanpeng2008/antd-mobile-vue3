import CalendarBase from './calendar-base';
import Component from 'vue-class-component';

@Component({
  name: 'CalendarView'
})
export default class CalendarView extends CalendarBase {

  public render() {
    return this.renderCalendar();
  }
}
