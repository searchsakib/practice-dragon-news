import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto w-1/2 ">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="font-medium text-center">
          Do not have an account{' '}
          <Link to="/register" className="font-semibold text-blue-500">
            Register
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default Login;
