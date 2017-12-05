import moment from 'moment-timezone'
moment.tz.setDefault('US/Eastern')

const getCountdown = (date, time) => {
  // Getting timestamps
  const now = moment().format('X')
  const event = moment(`${date} ${time}`).format('X')

  // Calculating moment difference
  const remaining = moment.duration((event - now) * 1000)

  return {
    days: remaining.days(),
    hours: remaining.hours(),
    minutes: remaining.minutes()
  }
}

export default (model) => {
  let countdown = null
  if (model.showCountdown && model.countdownDate && model.countdownTime) {
    countdown = getCountdown(model.countdownDate, model.countdownTime)
  }

  return {
    title: model.title,
    url: model.url,
    time: model.time,
    dek: model.dek,
    imageUrl: model.imageUrl,
    countdown
  }
}
