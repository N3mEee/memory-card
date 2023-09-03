import { useEffect, useState } from "react";
import "./App.css";

const cardsList = [
    "https://static.wikia.nocookie.net/finalfantasy/images/d/d5/Alphinaud_from_Final_Fantasy_XIV_Heavensward.png",
    "https://static.wikia.nocookie.net/finalfantasy/images/9/99/Minfilia_NPC_Render.png",
    "https://static.wikia.nocookie.net/finalfantasy/images/9/9b/FFXIV_SH_Y%27shtola_%28Trust%29.png",
    "https://static.wikia.nocookie.net/finalfantasy/images/6/6b/FFXIV_SH_Thancred_%28Trust%29.png",
    "https://static.wikia.nocookie.net/finalfantasy/images/2/29/FFXIV_Lyse.png",
    "https://static.wikia.nocookie.net/finalfantasy/images/e/eb/FFXIV_SH_Urianger_%28Trust%29.png",
    "https://static.wikia.nocookie.net/finalfantasy/images/0/06/FFXIV_Yotsuyu.png",
    "https://static.wikia.nocookie.net/finalfantasy/images/6/66/Edmont_de_Fortemps.png",
];

function App() {
    const [cards, setCards] = useState<string[]>(cardsList);
    const [clickedCards, setClickedCards] = useState([""]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [winner, setWinner] = useState(false);

    useEffect(() => {
        shuffle();
    }, []);

    useEffect(() => {
        if (bestScore < score) {
            setBestScore(score);
        }

        if (bestScore === cards.length) {
            setWinner(true);
        }
    }, [score, bestScore]);

    const shuffle = () => {
        setCards([...cards.sort(() => Math.random() - 0.5)]);
    };

    const handleScore = (index: number) => {
        if (
            clickedCards.some((card) => {
                return card == cards[index];
            })
        ) {
            setScore(0);
            setClickedCards([""]);
        } else {
            setScore(score + 1);
            setClickedCards([...clickedCards, cards[index]]);
        }
        shuffle();
    };

    const handleReset = () => {
        setScore(0);
        setBestScore(0);
        setWinner(false);
        setClickedCards([""]);
    };

    return (
        <div className="App">
            <h2>
                Score: {score} / Best Score: {bestScore}
            </h2>
            {!winner ? (
                <div className="cards">
                    {cards.map((card, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => {
                                    handleScore(index);
                                }}
                                className="card"
                            >
                                <img src={card} alt="" />
                            </button>
                        );
                    })}
                </div>
            ) : (
                <div>
                    <p>Congratulations, You Won!</p>
                    <button onClick={handleReset}>Reset</button>
                </div>
            )}
        </div>
    );
}

export default App;
