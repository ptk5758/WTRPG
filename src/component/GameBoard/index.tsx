import Board from "../Board";
import Player from "../Player";

export default function() {
    const player = {
        players : [
            {
                name : "master"
            },
            {
                name : "developer"
            },
            {
                name : "ptk"
            }
        ]
    }
    return(
        <>
            <Board/>
            <Player/>
        </>
    );
}