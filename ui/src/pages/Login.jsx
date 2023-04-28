const Link = ReactRouterDOM.Link;
const { useContext, useState, useEffect } = React;
import graphQLFetch from '../graphql.js';
import { AuthContext } from '../context/auth.js';
import jwt_decode from 'jwt-decode';



export function Login (props) {
  const context = useContext(AuthContext);
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  async function handleCallbackResponse(response){
    var userObject = jwt_decode(response.credential);
    setUserData({username:userObject.name});
    context.login(userData);
    console.log(userObject)
  }
  useEffect(() => {
  /* global google */
  google.accounts.id.initialize({
    client_id: "363026773777-eit7qfbecq2ei2pmdmp9o9ib81d46kqo.apps.googleusercontent.com",
    callback: handleCallbackResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {type:"icon", theme:"outline"}
  );
}, [userData])

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const user = { ...userData, }
    const query = `mutation login ($username: String!, $password: String!){
      login (username: $username, password: $password) {
        id
        email
        username
        createdAt
        token
      }
    }`
    const data = await graphQLFetch(query, user );
      if (!data) {
        console.log('user not logged in');
      } else {
        console.log('user logged in');
        context.login(userData);
        setUserData({...userData, username: '', email: ''})
        props.history.push('/');
      }
  }

  return (
    <form className="container">
      <div className="form-outline mb-4">
        <input type="text" id="form2Example1" name="username" onChange={handleInputs} className="form-control" />
        <label className="form-label" htmlFor="form2Example1">Username</label>
      </div>
      
      <div className="form-outline mb-4">
        <input type="password" id="form2Example2" name="password" onChange={handleInputs} className="form-control" />
        <label className="form-label" htmlFor="form2Example2">Password</label>
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

      <button type="button" onClick={handleSubmit} className="btn btn-primary btn-block mb-4">Sign in</button>

      <div className="text-center">
        <p>Not a member? <a href="/register">Register</a></p>
        <p>or sign in with:</p>
        
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="bi bi-facebook"></i>
        </button>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <div id = "signInDiv"></div>
        </button> 

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="bi bi-twitter"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="bi bi-github"></i>
        </button>
      </div>
    </form>
  );
   
  };
      