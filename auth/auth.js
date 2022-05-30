import { signupUser, signinUser, redirectIfLoggedIn } from '../fetch-utils.js';

const signupForm = document.getElementById('sign-up');
const signinForm = document.getElementById('sign-in');

redirectIfLoggedIn();

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signupForm);
    console.log({ email: data.get('email'), password: data.get('password') });
    const user = await signupUser(data.get('email'), data.get('password'));
    console.log(user);
    if (user) {
        location.replace('../game');
    }
});

signinForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signinForm);
    const user = await signinUser(data.get('email'), data.get('password'));
    console.log(user);
    if (user) {
        location.replace('../game');
    }
});