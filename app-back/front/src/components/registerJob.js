import useSignUpForm from "../../hooks/signupHook";

function Signup() {
    const { handleSubmit, handleInputChange } = useSignUpForm();
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">name</label>
            <input
              type="name"
              id="name"
              name="name"
              autoComplete="name"
              onChange={handleInputChange}
            />
          </div>
  
          <div>
            <label htmlFor="company">company</label>
            <input
              type="company"
              id="company"
              name="company"
              autoComplete="company"
              onChange={handleInputChange}
            />
          </div>
  
          <div>
            <label htmlFor="salary">salary</label>
            <input
              type="salary"
              id="salary"
              name="salary"
              autoComplete="salary"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="city">salary</label>
            <input
              type="city"
              id="city"
              name="city"
              autoComplete="city"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
  
  export default Signup;