let char = 'X';
let turn = 1;
let area = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];


document.querySelector('button').onclick = function () {
    let row = document.querySelector('.row').value;
    let column = document.querySelector('.column').value;

    if (area[row][column] == '') {

        let rows = document.querySelectorAll('tr');
        let cells = rows[row].querySelectorAll('td');
        let cell = cells[column];
        cell.innerHTML = char;
        area[row][column] = char;
        turn += 1;
        changeChar();
        document.querySelector('span').innerHTML = char;

        if (checkWinner() == "X") {
            setTimeout(() => {
                alert("victory X");
                newGame();
            }, 200);
        }

        if (checkWinner() == "O") {
            setTimeout(() => {
                alert("victory O");
                newGame();
            }, 200);
        }
    }
};

function checkWinner() {
    if (area[0][0] == 'X' && area[0][1] == 'X' && area[0][2] == 'X') {
        return 'X';
    }
    if (area[1][0] == 'X' && area[1][1] == 'X' && area[1][2] == 'X') {
        return 'X';
    }
    if (area[2][0] == 'X' && area[2][1] == 'X' && area[2][2] == 'X') {
        return 'X';
    }

    if (area[0][0] == 'X' && area[1][0] == 'X' && area[2][0] == 'X') {
        return 'X';
    }
    if (area[0][1] == 'X' && area[1][1] == 'X' && area[2][1] == 'X') {
        return 'X';
    }
    if (area[0][2] == 'X' && area[1][2] == 'X' && area[2][2] == 'X') {
        return 'X';
    }

    if (area[0][0] == 'X' && area[1][1] == 'X' && area[2][2] == 'X') {
        return 'X';
    }
    if (area[0][2] == 'X' && area[1][1] == 'X' && area[2][0] == 'X') {
        return 'X';
    }
    if (area[0][0] == 'O' && area[0][1] == 'O' && area[0][2] == 'O') {
        return 'O';
    }
    if (area[1][0] == 'O' && area[1][1] == 'O' && area[1][2] == 'O') {
        return 'O';
    }
    if (area[2][0] == 'O' && area[2][1] == 'O' && area[2][2] == 'O') {
        return 'O';
    }

    if (area[0][0] == 'O' && area[1][0] == 'O' && area[2][0] == 'O') {
        return 'O';
    }
    if (area[0][1] == 'O' && area[1][1] == 'O' && area[2][1] == 'O') {
        return 'O';
    }
    if (area[0][2] == 'O' && area[1][2] == 'O' && area[2][2] == 'O') {
        return 'O';
    }

    if (area[0][0] == 'O' && area[1][1] == 'O' && area[2][2] == 'O') {
        return 'O';
    }
    if (area[0][2] == 'O' && area[1][1] == 'O' && area[2][0] == 'O') {
        return 'O';
    }
}

function changeChar() {

    if (turn % 2 == 1) {
        char = 'X';
    } else {
        char = 'O';
    }

}

function newGame() {
    let rows = document.querySelectorAll('tr');

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].querySelectorAll('td');

        for (let j = 0; j < cells.length; j++) {
            cells[j].innerHTML = '';
            area[i][j] = '';
        }
    }
    turn = 1;
    char = 'X';
}