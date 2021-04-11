import { useState } from "react";


const useSignUpForm = (schema) => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const { error } = validate();
      if (!error) {
        const url = "/offers";
        /* fetch(url, {
            method: "POST",
            body: JSON.stringify({
                title: "foo",
                body: "bar",
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }) */
      } else {
        console.log(error);
        setErrors(error);
      }
    };
  
    const handleInputChange = (event) => {
      setInputs({ ...inputs, [event.target.name]: event.target.value });
    };
  
    const validate = () => {
      return schema.validate(inputs);
    };
  
    return { handleSubmit, handleInputChange, errors };
  };
  
  export default useSignUpForm;