import Character from "../component/Player";
import Header from "../component/Header";
import Board from "../component/Board";

function Main() {
    return(
        <>
            <Header/>
            <main>
                <Board/>
                <Character/>
            </main>
        </>
    );
}
export default Main;