import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase';
import SignUpForm from '../sign-up-form/sign-up-form';

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
        console.log(userDocRef);
    }

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn;