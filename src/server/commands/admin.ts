import chat from '../scripts/chat/index'

chat.registerCmd('sethp', function(player,args){
    player.health = parseInt(args[0])
})