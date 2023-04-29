const Route = ReactRouterDOM.Route;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const Routes = ReactRouterDOM.Routes;
const HashRouter = ReactRouterDOM.HashRouter;
const Link = ReactRouterDOM.Link;
const NavLink = ReactRouterDOM.NavLink;
const Redirect = ReactRouterDOM.Redirect;
const Switch = ReactRouterDOM.Switch;
const { useContext, useState, useEffect } = React;

import { AuthContext, AuthProvider } from "./context/auth.js";
import {Home} from "./pages/Home.jsx";
import {Designers} from "./pages/Designers.jsx";
import {Gallery} from "./pages/Gallery.jsx";
import {Contact} from "./pages/Contact.jsx";
import {Match} from "./pages/Match.jsx";
import {Login} from "./pages/Login.jsx";
import {Register} from "./pages/Register.jsx";
import graphQLFetch from './graphql.js';
import {ImgUpload } from "./components/ImgUpload.jsx";


function Chatmessage(props){
  const messages = props.messages;
  const email = props.email;
  return(
  <div className="msg-area" style={{"overflowY": "auto"}}>
  {
    messages.map((msg, i) => (
      msg.email == email ? (
      <p key={msg.id} className="right"><span>{ msg.message }</span></p>
      ) : (
        <p key={msg.id} className="left"><span>{ msg.message }</span></p>
      )
    ))
  }
  </div>
  )
}


const PopChat = (props) => {
  const username = props.user.username;
  const usercompany = props.user.company;
  const useremail = props.user.email;
  var messagesinfo = props.user.message;

  let hide = {
    display: 'none',
  }
  let show = {
    display: 'block'
  }
  
  let textRef = React.createRef();

  const [chatopen, setChatopen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [filteredMessages, setFilteredMessages] = useState([]);

  useEffect(() => {
    setFilteredMessages(messagesinfo.filter((msg)=>msg.email === selectedEmail || msg.receiveremail === selectedEmail));
  }, [selectedEmail, messagesinfo]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggle = e => {
    setChatopen(!chatopen)
  }

  const handleSend = async e => {
    e.preventDefault();
    const message = textRef.current.value;
    if (textRef.current) {
      textRef.current.value = '';
    }
    if (!selectedEmail) {
      console.log('No receiver selected');
      return;
    }
    var newMessage = {
      name: username,
      email: useremail,
      company: usercompany? usercompany: "",
      receiveremail: selectedEmail,
      message: message
    }

    const query = `mutation ($newMessage: InputMessage){
      sendMessage(newMessage: $newMessage){
        id
        name
        email
        company
        receiveremail
        message
        datetime
      }
    }`

    const variables = { newMessage: newMessage };
    const rsp = await fetch('http://localhost:8000/graphql',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({query, variables})
    });
    const body = await rsp.text();
    const result = JSON.parse(body);

    const newquery = `query{
      listMessage(email:"${useremail}"){
        id name email company receiveremail message datetime
      }
    }`;

    const newrsp = await fetch('http://localhost:8000/graphql',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({query: newquery})
    });

    const newbody = await newrsp.text();
    const newresult = JSON.parse(newbody);
    setFilteredMessages(newresult.data.listMessage.filter((msg)=>msg.email === selectedEmail || msg.receiveremail === selectedEmail))
    
  }

  const handleEmailClick = (email) => {
    setSelectedEmail(email === selectedEmail ? null : email);
  };

  const uniqueEmails = messagesinfo.reduce((acc, {email, name, company}) => {
    if (email !== useremail) {
      const found = acc.find(item => item.email === email);
      if (!found) {
        acc.push({email, name, company});
      }
    }
    return acc;
  }, []);

  return (
    <div className={isSticky ? 'sticky' : ''} id='chatCon' style={{position: "fixed", bottom: "0", right: "0", zIndex: 100}}>
      <div className="chat-box" style={chatopen ? show : hide}>
        <div className="header">Chat with me</div>
        <div className="row no-gutters">
          <div className="col-3" style={{"borderRight": "1px solid black", "height":"350px", "overflowY": "auto" }}>
            {uniqueEmails.map((uniqueEmail) => (
              <div className="indivchatbox" key={uniqueEmail.email} onClick={() => handleEmailClick(uniqueEmail.email)}>
                <div>{uniqueEmail.name}</div>
                <div>({uniqueEmail.company})</div>
              </div>
            ))}
          </div>
          <div className="col-9">
            {selectedEmail && (<Chatmessage messages={filteredMessages} email={useremail}/>
            )}
          </div>
        </div>
        <div className="footer">
            <input type="text"  ref={textRef} style={{ width: "700px" }}onKeyDown={(event) => {
              if (event.keyCode === 13) {
                handleSend(event);
              }
            }} />
            <button onClick={handleSend}><i className="fa fa-paper-plane"></i></button>
          </div>
      </div>
      <div className="pop">
        <p><img onClick={toggle} src="https://p7.hiclipart.com/preview/151/758/442/iphone-imessage-messages-logo-computer-icons-message.jpg" alt="" style={{width: "100px", height: "100px"}}/></p>
      </div>
    </div>
  )
}

function Chat(props){
  const {user} = useContext(AuthContext);
  
  return user ? (
    <PopChat user={user} />
  ) : (
    <div></div>
  )
}

function LoginStatus(props) {
  const { user, logout } = useContext(AuthContext);
  
  return user ? (
    <li className="h6 nav-item dropdown show">
      <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" id="navbardropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "rgb(0,0,0)" }}>
        <i className="bi bi-person-circle" style={{ color: "rgb(0,0,0)" }}></i>
      </a>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <p className="dropdown-item disabled" style={{ color: "rgb(0,0,0)" }}>
          <i className="bi bi-person-circle" style={{ color: "rgb(0,0,0)" }}></i>
          <span> {user.username}</span>
        </p>
        <Link to="/" className="dropdown-item" href="#">My Profile (only designers)</Link>
        <Link to="/" className="dropdown-item" href="#" onClick={logout}>Logout</Link>
      </ul>
    </li>
  ) : (
    <li className="h6 nav-item">
      <Link to="/login" className="nav-link" style={{ color: "rgb(0,0,0)" }}>
        Login/Sign up
      </Link>
    </li>
  );
}

class Homey extends React.Component {
  constructor() {
    super();
    this.state = { designPortfolio: []};
  }

  componentDidMount() {
    this.loadData();
  }
  

  loadData() {
    setTimeout(() => {
      this.setState({ designPortfolio: []}); //to be replaced with database
    }, 500);
  }


  render() {
    const currentLocation = window.location.pathname;
    const isHome = currentLocation === "/";
    return (
      <div className = "container-fluid p-0">
        <div className="container-fluid item-align-center p-0" style={{position: "sticky", top: "0", zIndex: 100 }}>
          <div className="row no-gutters align-items-center" style={{backgroundColor: "rgba(255,255,255)"}}>
            <div className="col-3">
              <img className="image-rounded p-2"  width="80px" height="80px" id="homeyLogo" src="/homey.png" alt="Homey" />
            </div>
            <div className="col-6">
              <ul className="nav justify-content-center text-center">
                <li className="h4 nav-item">
                  <NavLink to="/home" className="nav-link" style={{color: "rgb(0,0,0)"}}>
                    Home
                  </NavLink>
                </li>
                <li className="h4 nav-item">
                  <Link to="/designers" className="nav-link" style={{color: "rgb(0,0,0)"}}>
                    Our Designer
                  </Link>
                </li>
                <li className="h4 nav-item">
                  <Link to="/gallery" className="nav-link" style={{color: "rgb(0,0,0)"}} >
                    Gallery
                  </Link>
                </li>
                <li className="h4 nav-item">
                  <Link to="/contacts" className="nav-link" style={{color: "rgb(0,0,0)"}}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className ="col-3">
              <ul className="nav justify-content-center text-center">
                  <li className="h6 nav-item">
                    <Link to="/matchDesigner" className="nav-link" style={{color: "rgb(0,0,0)"}}>
                      Find My Designer!
                    </Link>
                  </li>
                  <LoginStatus/>
              </ul>
            </div>
          </div>
        </div>
        {isHome && <Home />}
          <div>
          <Chat style={{position: "absolute", bottom: "0", right: "0", zIndex: 100}}/>
          </div>
        </div>
    );
  }
}

function AuthRoute({ component: Component, ...rest }) {
  const {user} = useContext(AuthContext)
  return (
    <Route
     {...rest}
     render={(props) =>
      user ? <Redirect to="/" /> : <Component {...props} />
    }
    />
  )
}

function App() {
  return (
  <AuthProvider><BrowserRouter>
    <Route path="/" component={Homey}/>
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/designers" component={Designers}/>
      <Route path="/contacts" component={Contact}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/matchDesigner" component={Match}/>
      <AuthRoute path="/login" component={Login}/>
      <AuthRoute path="/register" component={Register}/>
      <Route path="/imgUpload" component={ImgUpload}/>
    </Switch>
  </BrowserRouter></AuthProvider>);
}

const app = <App/>; 

ReactDOM.render(app, document.getElementById('contents'));

