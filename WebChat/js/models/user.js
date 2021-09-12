export async function register(name, email, password) {
    let reponse = await auth.createUserWithEmailAndPassword(email, password); //xay RA HIEN TUONG BAT DONG BO
    console.log(reponse)
    console.log('Register successfully');

    console.log(auth.currentUser);

}

export function login(email, password) {

}