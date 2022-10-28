import { useState } from "react";

export default function(name) {
    const [player, setPlayer] = useState(name);
    const result = {
        instance : player,
        setPlayer : setPlayer
    }
    return result;
}