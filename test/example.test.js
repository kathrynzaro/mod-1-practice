// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderHighscore } from '../render-utils.js';

const test = QUnit.test;

test('testing renderHighscore', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="highscore"><h4>lumpelstiltskin</h4><p>10020707</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderHighscore({ 
        username: 'lumpelstiltskin', 
        highscore: '10020707',
});

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
