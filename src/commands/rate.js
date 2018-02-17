const { rateICHEur } = require('../requests')

function rate (message) {
  rateICHEur().then((rate) => {
    message.channel.send('1 ICH = ' + rate + ' EUR')
  }).catch((error) => {
    message.channel.send(error)
  })
}

module.exports = rate
