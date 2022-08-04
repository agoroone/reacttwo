import React, { useState } from "react";

const RecruitmentForm = () => {
  const [inputs, setInputs] = useState({});
  const [displayData, setDisplayData] = useState([]);
  const [select, setSelect] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setDisplayData((values) => [...values, inputs, select]);
  };
  const reverseDisplayData = displayData.reverse();

  return (
    <section>
      <form id="my-form" onSubmit={handleSubmit}>
        <label>
          Enter your First name:
          <input
            type="text"
            name="firstname"
            value={inputs.firstname || ""}
            onChange={handleChange}
          />
        </label>

        <label>
          Enter your Last name:
          <input
            type="text"
            name="lastname"
            value={inputs.lastname || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your age:
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>

        <label Htmlfor="gender">Gender</label>
        <select name="gender" id="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input type="submit" />
      </form>

      {displayData.map((item, index) => (
        <div key={index}>
          {" "}
          {item.firstname} {item.lastname} {item.age}
        </div>
      ))}
    </section>
  );
};

export default RecruitmentForm;
