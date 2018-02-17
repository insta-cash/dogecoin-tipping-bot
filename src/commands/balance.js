const { OOPS_TEXT } = require('../messages')
const { rateICHEur } = require('../requests')

const BALANCE_TEXT = 'Balance : '

function balance (message, instacashNode) {
  var account = message.author.tag.replace('#', '')

  instacashNode.getBalance(account, function (err, balance) {
    if (err) {
      console.log(err)
      message.channel.send(OOPS_TEXT)
      return
    }

    rateICHEur().then((rate) => {
      message.channel.send(BALANCE_TEXT + (balance).toFixed(2) + ' DOGE ( ' + (balance * rate).toFixed(2) + ' EUR )')
    }).catch((error) => {
      message.channel.send(error)
    })
  })
}

module.exports = balance
