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
    email: '',
    message: []
  });

  async function handleCallbackResponse(response){
    const userObject = jwt_decode(response.credential);
    const name = userObject.name;
    const email = userObject.email;
    
    const query = `query{
      listMessage(email:"${email}"){
        id name email company receiveremail message datetime
      }
    }`;

    const rsp = await fetch('http://localhost:8000/graphql',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({query})
    });

    const body = await rsp.text();
    const result = JSON.parse(body);
    setUserData({...userData, username: name, email: email, message:result.data.listMessage})
  }

  useEffect(() => {
  /* global google */
  google.accounts.id.initialize({
    client_id: "363026773777-eit7qfbecq2ei2pmdmp9o9ib81d46kqo.apps.googleusercontent.com",
    callback: handleCallbackResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {theme:"outline"}
  );
  }, [])
  useEffect(() => {
    if (userData.email!== ""){
      context.login(userData);
    }
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
        //console.log('user not logged in');
      } else {
        //console.log('user logged in');
        const name = data.login.username;
        const email = data.login.email;
        const id = data.login.id;
        const createdAt = data.login.createdAt;
        const token = data.login.token;
        const query = `query{
          listMessage(email:"${email}"){
            id name email company receiveremail message datetime
          }
        }`;
    
        const rsp = await fetch('http://localhost:8000/graphql',{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({query})
        });
    
        const body = await rsp.text();
        const result = JSON.parse(body);
        setUserData({...userData, id: id, username: name, email: email, createdAt:createdAt, token:token, message:result.data.listMessage})
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
          <div id = "signInDiv"></div>
        </button> 
      </div>
    </form>
  );
   
  };
      