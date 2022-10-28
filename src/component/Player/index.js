import { useEffect, useState } from "react";
import usePlayer from "../../hook/usePlayer";

function Character(props) {
    return(
        <div className="player">
            <div>
                <p>이름 : <strong>{props.name}</strong></p>
            </div>
            <div>
                <p>LEVEL : <strong>50</strong></p>
            </div>
            <div>
                <p>HP : <strong>50</strong></p>
            </div>
            <div>
                <p>MP : <strong>50</strong></p>
            </div>
        </div>
    );
}
export default function() {
    const [players, setPlayer] = useState([]);
    return(
        <div className="player-container">
            asas
        </div>
    );
}