import { useState } from "react";
import { api } from "../api";

export default function UserForm({ onSuccess }) {
  const [form, setForm] = useState({ name: "", email: "", age: "", city: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/users", form);
    setForm({ name: "", email: "", age: "", city: "" });
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="Age"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />
      <input
        placeholder="City"
        value={form.city}
        onChange={(e) => setForm({ ...form, city: e.target.value })}
      />
      <button type="submit">Add User</button>
    </form>
  );
}

