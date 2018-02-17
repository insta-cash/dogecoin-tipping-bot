const HELP_TEXT = '```Below are the commands available \n \
Command list : \n \
  - **help** : Get help ! \n \
  - **tip** : Tip someone ICH \n \
  - **balance** : Get your balance \n \
  - **address** : Show an used wallet so you can refill your wallet \n \
  - **withdraw** : Move coins to an external address \n \
  - **qrcode** : Show your qrcode to receive ICH \n \


function help(message) {
  message.channel.send(HELP_TEXT)
}

module.exports = help
