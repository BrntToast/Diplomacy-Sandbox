import { useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
	navigate,
	useNavigate
} from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

let passwordType = 'password';

function Signup() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			const user = userCredential.user;

			await setDoc(doc(db, 'users', user.id), {
				username,
				email
			});

			console.log(
				'User registered succesfully',
				userCredential
			);
			navigate('/main');
		} catch (error) {
			console.error(
				'Error in Registration: ',
				error.message
			);
		}
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Username</label>
				<br />
				<input
					placeholder="Enter Username"
					type="text"
					value={username}
					onChange={(e) =>
						setUsername(e.target.value)
					}
				/>
				<br />
				<label>Email</label>
				<br />
				<input
					placeholder="Enter Email"
					type="email"
					value={email}
					onChange={(e) =>
						setEmail(e.target.value)
					}
				/>
				<br />
				<label>Password</label>
				<br />
				<input
					placeholder="Password"
					type={passwordType}
					value={password}
					onChange={(e) =>
						setPassword(e.target.value)
					}
				/>
				<br />
				<button>Register</button>
			</form>
		</div>
	);
}

export default Signup;
