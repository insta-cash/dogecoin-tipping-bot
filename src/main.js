const Discord = require('discord.js')
const dogecoin = require('node-instacash')()

const settings = require('./settings')
const Commands = require('./commands')

// Init the Discord client
const client = new Discord.Client()


// Set our dogecoin node IP and port
instacash.set('host', settings.RPC_HOST)
instacash.set('port', settings.RPC_PORT)

// Register auth value
instacash.auth(settings.RPC_USER, settings.RPC_PASSWORD)

client.on('ready', () => {
  console.log('I am ready!')
})

client.on('message', message => {
  // If message has been emitted by a bot do nothing
  if (message.author.bot) return

  if (message.content.startsWith('/wow')) {
    var args = message.content.substring(1).split(' ')
    var command = args[1]

    switch (command) {
      case 'help':
        Commands.help(message)
        break
      case 'tip':
        Commands.tip(message, dogecoin, args[2])
        break
      case 'balance':
        Commands.balance(message, dogecoin)
        break
      case 'rate':
        Commands.rate(message)
        break
      case 'address':
        Commands.address(message, instacash)
        break
      case 'withdraw':
        Commands.withdraw(message, instacash, args[2], args[3])
        break
      case 'adopt':
        message.reply('Wow wow')
        break
      case 'qrcode':
        Commands.qrcode(message, instacash, Discord)
        break
      default:
        message.reply('pong')
    }
  } else {
    // Special maxslayer44
    if (message.content.indexOf('wow') >= 0) {
      message.reply('To the MOOoooooooOOOOOOOOOOnnNNN !!')
    }
  }
})

client.login(settings.DISCORD_TOKEN)
