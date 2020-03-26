import moment from 'moment'

import 'moment/locale/nb'

export function getFormattedDate(date) {
  moment.locale('nb')
  return moment(date).format('DD. MMMM YYYY')
}
