import Vue from 'vue'

const formatPrice = (value) => {
  if (!value) {
    return 0
  }
  const val = (value / 1).toFixed(0).replace('.', ',')
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

const formatPhoneNumber = (phoneNumberString) => {
  // console.log(phoneNumberString)
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  let matchCleaned = ''
  matchCleaned = cleaned.match(/^(7|)?(\d{3})(\d{3})(\d{2})(\d{2})$/)
  if (phoneNumberString.includes('+77172')) {
    matchCleaned = cleaned.match(/^(7|)?(\d{4})(\d{2})(\d{2})(\d{2})$/)
  }
  if (matchCleaned) {
    const intlCode = (matchCleaned[1] ? '+7 ' : '')
    return [intlCode, '(', matchCleaned[2], ') ', matchCleaned[3], '-', matchCleaned[4], '-', matchCleaned[5]].join('')
  }
  return phoneNumberString
}

const declOfNum = (number, words) => {
  return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]]
}

const nFormatter = (num, digits) => {
  const si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: ' тыс.' },
    { value: 1e6, symbol: ' млн' },
    { value: 1e9, symbol: ' млрд' },
    { value: 1e12, symbol: ' трлн' },
    { value: 1e15, symbol: '' },
    { value: 1e18, symbol: '' }
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  let i
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol
}
const dateFormat = (date, time) => {
  let dates = new Date(date).getTime()
  if (dates) {
    dates = Number(dates)
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    const day = new Date(dates).getDate()
    const month = months[new Date(dates).getMonth()]
    const year = new Date(dates).getFullYear()
    if (time) {
      const hours = new Date(dates).getHours() < 10 ? '0' + new Date(dates).getHours() : new Date(dates).getHours()
      const mins = new Date(dates).getMinutes() < 10 ? '0' + new Date(dates).getMinutes() : new Date(dates).getMinutes()
      const sec = new Date(dates).getSeconds() < 10 ? '0' + new Date(dates).getSeconds() : new Date(dates).getSeconds()
      return hours + ':' + mins + ':' + sec
    }
    return day + ' ' + month + ' ' + year
  } else {
    return 'Нет данных'
  }
}

const getSafe = (f) => {
  try { return f() } catch (e) { }
}

Vue.prototype.$dateFormat = dateFormat
Vue.prototype.$formatPhoneNumber = formatPhoneNumber
Vue.prototype.$formatPrice = formatPrice
Vue.prototype.$declOfNum = declOfNum
Vue.prototype.$nFormatter = nFormatter
Vue.prototype.$getSafe = getSafe
