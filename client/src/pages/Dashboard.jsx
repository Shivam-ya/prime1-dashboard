import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const [role, setRole] = useState("Frontend Intern");
  const [editRole, setEditRole] = useState(false);

  const [tasks, setTasks] = useState([
    { id: 1, text: "Build Login Page", done: true, edit: false },
    { id: 2, text: "Create Dashboard UI", done: false, edit: false },
    { id: 3, text: "Improve UI Design", done: false, edit: false },
  ]);

  const toggleEditTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, edit: !t.edit } : t
    ));
  };

  const updateTaskText = (id, value) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, text: value } : t
    ));
  };

  const toggleDone = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  return (
    <div className="dashboard-root">

      {/* FIXED SIDEBAR */}
      <aside className="sidebar">
        <h2>Spacer</h2>
        <nav>
          <span>Dashboard</span>
          <span>Analytics</span>
          <span>Tasks</span>
          <span>Profile</span>
        </nav>
        <button className="logout" onClick={() => navigate("/login")}>
          Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="dashboard-main">

        {/* HEADER */}
        <div className="dashboard-header">
          <h1>Dashboard Overview</h1>
        </div>

        {/* INFO CARDS */}
        <div className="cards">
          <div className="card">
            <label>Email</label>
            <p>ny609301@gmail.com</p>
          </div>

          <div className="card">
            <label>Role</label>

            {editRole ? (
              <div className="inline-edit">
                <input
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
                <button onClick={() => setEditRole(false)}>Save</button>
              </div>
            ) : (
              <div className="inline-view">
                <p>{role}</p>
                <button onClick={() => setEditRole(true)}>Edit</button>
              </div>
            )}
          </div>

          <div className="card status">
            <label>Status</label>
            <p>Logged In ✅</p>
          </div>
        </div>

        {/* ASSIGNED WORK */}
        <section className="tasks">
          <h2>Assigned Work</h2>

          {tasks.map(task => (
            <div key={task.id} className="task-row">
              {task.edit ? (
                <input
                  value={task.text}
                  onChange={(e) => updateTaskText(task.id, e.target.value)}
                />
              ) : (
                <span className={task.done ? "done" : ""}>
                  {task.text}
                </span>
              )}

              <div className="actions">
                <button onClick={() => toggleEditTask(task.id)}>
                  {task.edit ? "Save" : "Edit"}
                </button>
                <button onClick={() => toggleDone(task.id)}>
                  {task.done ? "Done" : "Mark Done"}
                </button>
              </div>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}

