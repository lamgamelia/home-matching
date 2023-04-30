const { useState, useEffect } = React;
import graphQLFetch from '../graphql.js';

export function Contact() {
    
  const [userData, setUserData] = useState({name:"", email:"", subject:"", message:""});
  
  const userContact = () => {
    // REPLACE WITH LOGIN INFO FOR LOGGED IN USERS
    const data = {name:"", email:""};
    setUserData({ ...userData, name: data.name, email: data.email});
  }

  useEffect(() => {
    //userContact();
  }, [userData]);

  //Store data in states
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]:value});
  }

  //Send the data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = { ...userData, datetime: new Date(), }
    const query = `mutation addMessage ($message: InputMessage!){
      addMessage (newMessage: $message) {
        id
        name
        email
        subject
        message
        datetime
      }
    }`

    const data = await graphQLFetch(query, { message });
    if (!data) {
      console.log('message not sent');
    } else {
      alert('Message Sent');
      setUserData({...userData, message:''})
    }
  }

    return (
    
    <div className="container">    
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
        </p>

        <div className="row">  
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
              <div className="row">

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="name" name="name" onChange={handleInputs} className="form-control" />
                    <label htmlFor="name" className="">Your name</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="email" name="email" onChange={handleInputs} className="form-control" />
                    <label htmlFor="email" className="">Your email</label>
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input type="text" id="subject" name="subject" onChange={handleInputs} className="form-control" />
                    <label htmlFor="subject" className="">Subject</label>
                  </div>
                </div>
              </div>

              <div className="row">               
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea type="text" id="message" name="message" onChange={handleInputs} rows="2" className="form-control md-textarea"></textarea>
                    <label htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>
              
            </form>

            <div className="text-center text-md-left">
              <a className="btn btn-primary" style={{color:"white"}}>Send</a>
            </div>
            <div className="status"></div> 

          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li><i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Clementi, S 500000, Singapore</p>
              </li>

              <li><i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 65 6234 5349</p>
              </li>

              <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@homey.com</p>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </div>);
  };


