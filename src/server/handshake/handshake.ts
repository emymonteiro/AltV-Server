import * as alt from "alt-server";

const coords = new alt.Vector3(163.2083, -987.1030, 30.0919);

let gender = {
    female: 'mp_f_freemode_01',
    male: 'mp_m_freemode_01'
}


alt.onClient("client:endHandshake", (player: alt.Player) => {
  alt.log(`Handshake complete, ${player.name} answered successfull`);
  player.model = gender.female
  player.spawn(coords.x,coords.y,coords.z,100)
});
