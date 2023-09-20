import { auth, provider } from '../config/firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/expense-tracker");
  };

  return (
    <div className="container mx-auto px-4 pt-10">
      <h2 className='mb-6 font-bold text-4xl'>Sign in with Google to Continue</h2>
      <button onClick={signInWithGoogle} className="border border-[#333] px-6 py-2">Sign in with Google</button>
    </div>
  )
}

export default Home