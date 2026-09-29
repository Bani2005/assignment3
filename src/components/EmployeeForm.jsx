import { useState } from "react";

function EmployeeForm({ onAddEmployee }) {
  const [employee, setEmployee] = useState({
    name: "",
    id: "",
    department: "",
    gender: "",
    phone: "",
    localAddress: "",
    permanentAddress: ""
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !employee.name ||
      !employee.id ||
      !employee.department ||
      !employee.gender ||
      !employee.phone ||
      !employee.localAddress ||
      !employee.permanentAddress
    ) {
      alert("Please fill all fields");
      return;
    }

    onAddEmployee(employee);

    setEmployee({
      name: "",
      id: "",
      department: "",
      gender: "",
      phone: "",
      localAddress: "",
      permanentAddress: ""
    });
  };

  return (
    <div className="employee-form">
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={employee.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="id"
          placeholder="Employee ID"
          value={employee.id}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
        />

        <select
          name="gender"
          value={employee.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={employee.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="localAddress"
          placeholder="Local Address"
          value={employee.localAddress}
          onChange={handleChange}
        />

        <input
          type="text"
          name="permanentAddress"
          placeholder="Permanent Address"
          value={employee.permanentAddress}
          onChange={handleChange}
        />

        <button type="submit">+ Add Employee</button>
      </form>
    </div>
  );
}

export default EmployeeForm;