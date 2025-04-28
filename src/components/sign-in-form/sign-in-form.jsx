import {useState, useContext} from 'react';
import {signInWithGooglePopup, createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button";
import { UserContext } from '../../contexts/user';
import "./sign-in-form.scss";
// import "../button/button.scss";
import { signInWithEmailAndPassword } from 'firebase/auth';


const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignInForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;

    console.log(formFields)
    const{setCurrentUser} = useContext(UserContext)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
       const{user}= await signInWithGooglePopup();
       setCurrentUser(user)
      createUserDocumentFromAuth(user)
       
        
     
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
        const{user} = await signInAuthUserWithEmailAndPassword(email,password);
          
           resetFormFields(); 
           setCurrentUser(user)
        }catch(error) {
            if(error.code === "auth/invalid-credential"){
                alert("Incorrect email or password")
            }
            console.log(error)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]:value})
    }
    return (
        <div class="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
            <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
            <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
            <div className="buttons-container">
            <Button type="submit">Sign In</Button>
            <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} >Google sign in</Button>
            </div>
            </form>
        </div>
    )
}


export default SignInForm;