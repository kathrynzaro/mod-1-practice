export function renderHighscore(highscore) {
    const div = document.createElement('div');
    div.classList.add('highscore');
    const h4 = document.createElement('h4');
    h4.textContent = highscore.username;
    const p = document.createElement('p');
    p.textContent = highscore.highscore;
    
    div.append(h4, p);

    return div;
}