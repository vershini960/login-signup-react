import "./Signup.css";

const Signup = () => {
  return (
  <div className="signup">
  <h1>Sign Up</h1>
  <form>
    <input type={"email"} placeholder={"Email"} />
    <input type={"password"} placeholder={"Password"} />
    <input type={"password"} placeholder={"Confirm password"} />
    <button type={"submit"}>Sign up</button>
    </form>
    </div>
  );
};

export default Signup