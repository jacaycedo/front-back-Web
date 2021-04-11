import useSignUpForm from "../hooks/signupHook";
import * as Joi from "joi";

const schema = Joi.object({
  name: Joi.string().required(),
  company: Joi.string().required(),
  salary: Joi.number().required(),
  city: Joi.string().required(),
}); 

function Signup() {
     const { handleSubmit, handleInputChange } = useSignUpForm(schema);
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="name"
              id="name"
              name="name"
              autoComplete="name"
              onChange={handleInputChange}
            />
          </div>
  
          <div>
            <label htmlFor="company">Company: </label>
            <input
              type="company"
              id="company"
              name="company"
              autoComplete="company"
              onChange={handleInputChange}
            />
          </div>
  
          <div>
            <label htmlFor="salary">Salary: </label>
            <input
              type="salary"
              id="salary"
              name="salary"
              autoComplete="salary"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="city">City: </label>
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