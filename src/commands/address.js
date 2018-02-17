const { OOPS_TEXT } = require('../messages')

const ADDRESS_TEXT = 'You can send ich to this address : '

function address (message, instacashNode) {
  var account = message.author.tag.replace('#', '')

  // Will create a new account if doesn't exist... ? Should we allow this ?
  // Yes
  instacashNode.getAccountAddress(account, function (err, address) {
    if (err) {
      console.log(err)
      message.channel.send(OOPS_TEXT)
      return
    }

    message.channel.send(ADDRESS_TEXT + address)
  })
}

module.exports = address
