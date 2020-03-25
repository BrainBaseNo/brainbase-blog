import moment from 'moment'

export function getFormattedDate(date) {
  moment.locale('nb')
  return moment(date).format('DD.MM.YYYY')
}
