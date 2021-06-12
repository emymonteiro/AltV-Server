import * as alt from "alt-server";

const coords = new alt.Vector3(163.2083, -987.1030, 30.0919);

let gender = {
    female: 'mp_f_freemode_01',
    male: 'mp_m_freemode_01'
}

// Fires if a player connects
alt.on("playerConnect", (player) => {
  alt.log(`${player.name} connected`);
  alt.emitClient(player, "server:startHandshake");
  player.model = gender.female
  player.spawn(coords.x,coords.y,coords.z,100)
  //console.log(player.authToken, player.socialId)
});
