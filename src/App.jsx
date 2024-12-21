import './App.css';
import { useState } from 'react';

function RandomElement(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const App = () => {
    const [count, setCount] = useState(0);

    const [comp_count, setCompCount] = useState(0);

    function rock_check() {
        let computer = RandomElement(1, 4);
        console.log(computer);
        switch (computer) {
            case 1:
                computer = "rock";
                break;
            case 2:
                computer = "paper";
                break;
            case 3:
                computer = "scissors";
                break;
            default:
                computer = "unknown";
        }
        console.log("Компьютер выбрал", computer);
        if (computer === "rock") {
            document.getElementById('result').innerText = 'Ничья';
        } else if (computer === "paper") {
            document.getElementById('result').innerText = 'Вы проиграли';
            setCompCount(comp_count + 1);
        } else if (computer === "scissors") {
            document.getElementById('result').innerText = 'Вы победили';
            setCount(count + 1);
        }
    }

    function scissors_check() {
        let computer = RandomElement(1, 4);
        console.log(computer);

        switch (computer) {
            case 1:
                computer = "rock";
                break;
            case 2:
                computer = "paper";
                break;
            case 3:
                computer = "scissors";
                break;
            default:
                computer = "unknown";
        }

        console.log("Компьютер выбрал", computer);

        if (computer === "rock") {
            document.getElementById('result').innerText = 'Вы проиграли';
            setCompCount(comp_count + 1);
        } else if (computer === "paper") {
            document.getElementById('result').innerText = 'Вы выйграли';
            setCount(count + 1);
        } else if (computer === "scissors") {
            document.getElementById('result').innerText = 'Ничья';
        }

    }

    function paper_check() {
        let computer = RandomElement(1, 4);
        console.log(computer);

        switch (computer) {
            case 1:
                computer = "rock";
                break;
            case 2:
                computer = "paper";
                break;
            case 3:
                computer = "scissors";
                break;
            default:
                computer = "unknown";
        }

        console.log("Компьютер выбрал", computer);

        if (computer === "rock") {
            document.getElementById('result').innerText = 'Вы победили';
            setCount(count + 1);
        } else if (computer === "paper") {
            document.getElementById('result').innerText = 'Ничья';
        } else if (computer === "scissors") {
            document.getElementById('result').innerText = 'Вы проиграли';
            setCompCount(comp_count + 1);
        }

    }

    return (
        <>
            <h1>Игра - камень ножницы бумага</h1>
            <h2>Выбери:</h2>
            <button className="rock_button" id="rock" onClick={rock_check}>Камень</button>
            <button className="paper-button" id="paper" onClick={paper_check}>Бумага</button>
            <button className="scissors-button" id="scissors" onClick={scissors_check}>Ножницы</button>
            <div className="result">
                <span id="result"><h1></h1></span>
            </div>
            <div className="counter1">
                <h2>Ваши победы</h2>
                {count}
            </div>
            <div className="counter2">
                <h2>Победы компьютера</h2>
                {comp_count}
            </div>
        </>
    );
}

export default App;
