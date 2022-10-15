import moment from 'moment'

import 'moment/locale/nb'

export function getFormattedDate(date) {
  moment.locale('nb')
  return moment(date).format('D. MMMM YYYY')
}

export const getFormattedReadingTime = (milliseconds) =>
  Math.ceil(moment.duration(milliseconds).asMinutes())
