import * as alt from "alt-server";

// Fires if a player connects
alt.on("playerConnect", (player) => {
  alt.log(`${player.name} connected`);
  alt.emitClient(player, "server:startHandshake");

  //console.log(player.authToken, player.socialId)
});
