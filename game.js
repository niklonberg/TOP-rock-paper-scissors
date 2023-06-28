class game {
    constructor(gameType, resultMessenger, context) {
        this.gameType = gameType;
        this.playerPoints = 0;
        this.computerPoints = 0;
        this.roundsPlayed = 0;
        this.startGameBtn;
        this.resultMessenger = resultMessenger;
        this.context = context;
    }

    startGame() {
        this.playerPoints = 0;
        this.computerPoints = 0;

        if (this.startGameBtn) {
            const main = document.querySelector('main');
            main.removeChild(this.startGameBtn)
        }

        this.resultMessenger.startGameReset()
    }

    updatePoints(resultObj) {
        this.roundsPlayed += 1;
        this.playerPoints += resultObj.playerPoints;
        this.computerPoints += resultObj.computerPoints;
    }

    disableButtons(...buttonElements) {
        buttonElements.forEach(button => {
            button.disabled = true;
        })
    }

    createResetGameBtn() {
        const btn = document.createElement('button');
        btn.textContent = 'Play again'
        btn.id = 'startGame'
        btn.addEventListener('click', this.startGame.bind(this));
        
        const main = document.querySelector('main');
        main.appendChild(btn);

        this.startGameBtn = btn
    }

    endGame(resultMessenger) {
        let message;
        if (this.playerPoints > this.computerPoints) {
            message = `You won! You got ${this.playerPoints} points. The computer got ${this.computerPoints} points`;
            resultMessenger.endResultMsg(this, message)
        } else if (this.playerPoints === this.computerPoints) {
            message = `It's a tie! You got ${this.playerPoints} points. The computer got ${this.computerPoints} points. Time for a rematch?`;
            resultMessenger.endResultMsg(this, message)
        } else {
            message = `You lost! You got ${this.playerPoints} points. The computer got ${this.computerPoints} points`;
            resultMessenger.endResultMsg(this, message)
        }

        this.createResetGameBtn();
    }
}

export default game