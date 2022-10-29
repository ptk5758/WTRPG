import { useState } from "react";

interface IPlayer {
    name : string
}
export default function(name : string) {
    const [players, setPlayers] = useState([{name: "Master"}]);
    function addPlayer(player : IPlayer) {
        setPlayers([...players, player]);
    }
    return {
        players : players,
        setPlayers : setPlayers,
        addPlayer : addPlayer
    }
}