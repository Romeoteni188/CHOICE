// import React, { ChangeEvent, FormEvent, useState } from 'react';
// import axios from 'axios';

// interface SignInState {
//   email: string;
//   password: string;
// }

// const SignIn: React.FC = () => {
//   const [state, setState] = useState<SignInState>({
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState<string | null>(null);

//   const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
//     const value = evt.target.value;
//     setState({
//       ...state,
//       [evt.target.name]: value,
//     });
//   };

//   const handleOnSubmit = async (evt: FormEvent) => {
//     evt.preventDefault();
//     const { email, password } = state;

//     try {
//       const response = await axios.post('http://localhost:5000/login', { email, password });
//       alert(`Login exitoso: ${response.data.message}`);
//       setState({
//         email: '',
//         password: '',
//       });
//     } catch (err: any) {
//       setError(err.response?.data?.message || 'Error al iniciar sesión');
//     }
//   };

//   return (
//     <div className="form-container sign-in-container">
//       <form onSubmit={handleOnSubmit}>
//         <h1>Iniciar Sesión</h1>
//         {error && <p className="error">{error}</p>}
//         <div className="social-container">
//           <a href="https://facebook.com" className="social">
//             <i className="fab fa-facebook-f" />
//           </a>
//           <a href="#" className="social">
//             <i className="fa-brands fa-square-instagram" />
//           </a>
//           <a href="#" className="social">
//             <i className="fab fa-linkedin-in" />
//           </a>
//         </div>
//         <span>or use your account</span>
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={state.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={state.password}
//           onChange={handleChange}
//           required
//         />
//         <a href="#">Forgot your password?</a>
//         <button type="submit">Iniciar Sesion</button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;

// SignIn.tsx
import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';

interface SignInState {
  email: string;
  password: string;
}

interface SignInProps {
  onLoginSuccess: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onLoginSuccess }) => {
  const [state, setState] = useState<SignInState>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = async (evt: FormEvent) => {
    evt.preventDefault();
    const { email, password } = state;

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      alert(`Login exitoso: ${response.data.message}`);
      onLoginSuccess(); // Llama a la función de callback
      setState({
        email: '',
        password: '',
      });
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Iniciar Sesión</h1>
        {error && <p className="error">{error}</p>}
        <div className="social-container">
          <a href="https://facebook.com" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fa-brands fa-square-instagram" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          required
        />
        <a href="#">Forgot your password?</a>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default SignIn;
