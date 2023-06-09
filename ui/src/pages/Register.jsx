const { useContext,useState, useEffect } = React;
import graphQLFetch from '../graphql.js';
import { AuthContext } from '../context/auth.js';

export function Register() {
    const context = useContext(AuthContext);
    //const[errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    const handleInputs = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setUserData({ ...userData, [name]: value});
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      const user = { ...userData, }
      const query = `mutation register ($user: RegisterInput!){
        register (registerInput: $user) {
          id
          email
          username
          createdAt
          token
        }
      }`

      const data = await graphQLFetch(query, { user });
      if (!data) {
        alert('user not created');
      } else {
        alert('user created, please proceed to login');
        //context.login(userData);
      }
    }

    return (
	    <form className="container">
        <h2 className="fw-bold mb-5">Sign up now</h2>

        <div className="form-outline mb-4">
          <input type="text" id="form2Example1" name="username" onChange={handleInputs} className="form-control" />
          <label className="form-label" htmlFor="form2Example1">Username</label>
        </div>

        <div className="form-outline mb-4">
          <input type="email" id="form2Example2" name="email" onChange={handleInputs} className="form-control" />
          <label className="form-label" htmlFor="form2Example1">Email address</label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="form2Example3" name="password" onChange={handleInputs} className="form-control" />
          <label className="form-label" htmlFor="form2Example2">Password</label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="form2Example4" name="confirmPassword" onChange={handleInputs} className="form-control" />
          <label className="form-label" htmlFor="form2Example2">Confirm Password</label>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">

            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form2Example31" defaultChecked />
              <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>
          Sign up</button>
      </form>
    );
   
  };
