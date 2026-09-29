import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeCard from "./components/EmployeeCard";
import Footer from "./components/Footer";

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const editEmployee = (employee) => {
    alert("Edit: " + employee.name);
  };

  return (
    <>
      <Header />

      <main>
        <EmployeeForm onAddEmployee={addEmployee} />

        <div className="employee-list">
          {employees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onDelete={deleteEmployee}
              onEdit={editEmployee}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;