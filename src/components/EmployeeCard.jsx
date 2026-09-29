function EmployeeCard({ employee, onDelete, onEdit }) {

  function handleEdit() {
    onEdit(employee);
  }

  function handleDelete() {
    onDelete(employee.id);
  }

  return (
    <div className="employee-card">

      <div className="employee-avatar">
        {employee.name.charAt(0).toUpperCase()}
      </div>

      <h3>{employee.name}</h3>

      <p>
        <strong>Employee ID:</strong> {employee.id}
      </p>

      <p>
        <strong>Department:</strong> {employee.department}
      </p>

      <p>
        <strong>Gender:</strong> {employee.gender}
      </p>

      <p>
        <strong>Phone:</strong> {employee.phone}
      </p>

      <p>
        <strong>Local Address:</strong> {employee.localAddress}
      </p>

      <p>
        <strong>Permanent Address:</strong> {employee.permanentAddress}
      </p>

      <div className="card-buttons">

        <button onClick={handleEdit}>
          Edit
        </button>

        <button onClick={handleDelete}>
          Delete
        </button>

      </div>

    </div>
  );
}

export default EmployeeCard;