import {useState} from "react";
import {useDispatch} from 'react-redux'
import "./Login.css";
import {login} from './features/userSlice'
import logo from "./img/LinkedIn_Logo.svg.png";
import { auth } from "./firebase";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');

    const dispatch = useDispatch()

    const register = async () => {
        try {
            if(!name) {
                return alert("Please enter a full name")
            }
    
            const userAuth =  await auth.createUserWithEmailAndPassword(email, password);
            const {user} = userAuth;
            user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            });
    
            dispatch(login({
                email: user.email,
                uid: user.uis,
                displayName: name,
                photoURL: profilePic,
            }));
        } catch (error) {
            alert(error)
        }
    };

    const loginToApp = async (e) => {
        e.preventDefault()

        try {
            const userAuth = await auth.signInWithEmailAndPassword(email, password);
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
            }))
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className="login">
            <img src={logo} alt="linkin logo" />

            <form>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name (required if registering)"
                />
                <input
                    type="text"
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    placeholder="Profile picture URL (optional)"
                />
                <input 
                    type='email'
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                />
                <input 
                    type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                />
                <button type="submit" onClick={loginToApp}>
                Sign In
                </button>
            </form>
            <p>
                Not a member? {" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    );
}

export default Login;
