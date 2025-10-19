import { useEffect, useState } from "react";
import { api } from "./api";
import UserForm from "./components/UserForm";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <UserForm onSuccess={fetchUsers} />

      <ul>
        {users.map((u) => (
          <li key={u._id}>
            {u.name} {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;