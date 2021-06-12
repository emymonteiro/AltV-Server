import * as rpc from 'altv-rpc'
import * as alt from 'alt-client'
import * as game from 'natives'

//const defaultTimer = 900
//let isDead = false
//let deathTimer = defaultTimer

rpc.register('playerDeath', (pos) => {
    const localPlayer = alt.Player.local.scriptID
    const heading = game.getEntityHeading(localPlayer)
    //isDead = true
    game.networkResurrectLocalPlayer(pos.x,pos.y,pos.z,heading,true,true,false)
    game.setEntityHealth(localPlayer,100,0)

})