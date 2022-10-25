function Character() {
    return(
        <div className="player">
            <div>
                <p>이름 : <strong>홍길동</strong></p>
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
    return(
        <div className="player-container">
            <Character/>
            <Character/>
            <Character/>            
        </div>
    );
}