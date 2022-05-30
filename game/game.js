import { logout, checkAuth, saveGame } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const form = document.getElementById('game');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const newGame = { 
        username: data.get('username'),
        highscore: data.get('highscore'),
    };
    const response = await saveGame(newGame);
    console.log(response);
    window.location.href = '/';
});

logoutButton.addEventListener('click', async () => {
    await logout();
    console.log('clicking logout');
});

