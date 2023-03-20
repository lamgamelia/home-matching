export class Register extends React.Component {
    constructor() {
    super();
    }
    render(){
    return (
	    <form className="container">
        <h2 class="fw-bold mb-5">Sign up now</h2>

        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="form-outline">
              <input type="text" id="form3Example1" class="form-control" />
              <label class="form-label" for="form3Example1">First name</label>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="form-outline">
              <input type="text" id="form3Example2" class="form-control" />
              <label class="form-label" for="form3Example2">Last name</label>
            </div>
          </div>
        </div>

        <div className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control" />
          <label className="form-label" htmlFor="form2Example1">Email address</label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" />
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

        <button type="button" className="btn btn-primary btn-block mb-4">Sign up</button>

        <div className="text-center">
          
          <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="bi bi-facebook"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="bi bi-google"></i>
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
   }
  };
