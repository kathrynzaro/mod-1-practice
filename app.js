import { fetchHighscores } from './fetch-utils.js';
import { renderHighscore } from './render-utils.js';

const insertToken = document.getElementById('token');

insertToken.addEventListener('click', () => {
    return window.location.href = '/auth';
});

async function onLoad() {
    const highscoresEl = document.getElementById('highscores');
    const highscores = await fetchHighscores();
    for (let highscore of highscores) {
        const highscoreElem = renderHighscore(highscore);
        highscoresEl.append(highscoreElem);
    }
}

onLoad();