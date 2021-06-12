import * as alt from "alt-server";
import * as rpc from 'altv-rpc'

alt.on('playerDeath', (player, killer, weaponHash)=>{
    rpc.callClient(player, 'playerDeath' , player.pos)
})