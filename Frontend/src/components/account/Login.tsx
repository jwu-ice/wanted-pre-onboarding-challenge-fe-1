const Login = () => {
  return (
    <div className="hero h-screen bg-base-200">
      <div className="hero-content flex-col">
        <h1 className="mb-4 font-bold text-4xl text-primary-content">
          To Do List
        </h1>
        <div className="card w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <label className="label justify-center gap-2">
              <span className="label-text-alt text-primary">Not a member?</span>
              <a
                href="#"
                className="label-text-alt link-info link no-underline hover:underline text-primary-focus"
              >
                Signup now
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
