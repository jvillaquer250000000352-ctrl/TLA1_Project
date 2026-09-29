
import { useState, useEffect } from "react";
import "./App.css";
import SummaryCards from "./components/SummaryCards";
import CategoryForm from "./components/CategoryForm";
import CategoryList from "./components/CategoryList";

function App() {
  const [categories, setCategories] = useState(() => {
  const savedCategories = localStorage.getItem("incomeCategories");

  return savedCategories ? JSON.parse(savedCategories) : [];
});

useEffect(() => {
  localStorage.setItem(
    "incomeCategories",
    JSON.stringify(categories)
  );
}, [categories]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  
const addCategory = (e) => {
  e.preventDefault();

  if (!categoryName.trim() || !categoryDescription.trim()) {
    setMessage("Please complete all required fields.");
    setMessageType("error");
    return;
  }

  if (editingId) {
    setCategories(
      categories.map((category) =>
        category.id === editingId
          ? {
              ...category,
              name: categoryName.trim(),
              description: categoryDescription.trim(),
            }
          : category
      )
    );

    setMessage("Category successfully updated!");
    setMessageType("success");
    setEditingId(null);

  } else {
    const newCategory = {
      id: Date.now(),
      name: categoryName.trim(),
      description: categoryDescription.trim(),
    };

    setCategories([...categories, newCategory]);

    setMessage("New category successfully added!");
    setMessageType("success");
  }

  setCategoryName("");
  setCategoryDescription("");
};

  const editCategory = (category) => {
    setCategoryName(category.name);
    setCategoryDescription(category.description);
    setEditingId(category.id);
  };

  
const deleteCategory = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this category?"
  );

  if (!confirmDelete) return;

  setCategories(
    categories.filter((category) => category.id !== id)
  );

  if (editingId === id) {
    cancelEdit();
  }

  setMessage("Category successfully deleted!");
  setMessageType("success");
};

  const cancelEdit = () => {
    setEditingId(null);
    setCategoryName("");
    setCategoryDescription("");
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">✦</div>
          <h2>IncoTrack</h2>
        </div>

        <p className="menu-label">MENU</p>

        <div className="nav-item active">
          <span>▦</span> Dashboard
        </div>

        <div className="nav-item">
          <span>▤</span> Categories
        </div>

        <div className="nav-item">
          <span>◷</span> Activity
        </div>

        <div className="sidebar-bottom">
          <div className="profile">
            <div className="profile-avatar">U</div>
            <div>
              <strong>My Account</strong>
              <small>Administrator</small>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* TOP HEADER */}
        <header className="top-header">
          <div>
            <p className="breadcrumb">Pages / Dashboard</p>
            <h2>Dashboard</h2>
          </div>

          <div className="header-right">
            <span className="header-date">✦ Income Management</span>
            <div className="header-avatar">U</div>
          </div>
        </header>

        {/* WELCOME BANNER */}
        <section className="welcome-banner">
          <div>
            <span className="welcome-tag">WELCOME BACK!</span>
            <h1>Manage Your Income Categories</h1>
            <p>
              Organize and monitor your income sources in one place.
              Keep everything simple and organized!
            </p>
          </div>
          <div className="welcome-decoration">✦</div>
        </section>

        {/* SUMMARY CARDS */}
       <SummaryCards totalCategories={categories.length} />

        {/* CATEGORY MANAGEMENT */}
        <section className="management-section">
          {message && (
  <div className={`notification ${messageType}`} role="status">
    <span>
      {messageType === "success" ? "✓" : "!"}
    </span>

    <p>{message}</p>

    <button
      type="button"
      onClick={() => setMessage("")}
      aria-label="Close notification"
    >
      ×
    </button>
  </div>
)}
          <div className="section-heading">
            <div>
              <h2>Category Management</h2>
              <p>Add and organize your income categories.</p>
            </div>
            <span className="category-count">
              {categories.length} Categories
            </span>
          </div>

          {/* ADD CATEGORY FORM */}
<CategoryForm
  categoryName={categoryName}
  setCategoryName={setCategoryName}
  categoryDescription={categoryDescription}
  setCategoryDescription={setCategoryDescription}
  addCategory={addCategory}
  editingId={editingId}
  cancelEdit={cancelEdit}
/>

          {/* CATEGORY LIST */}
        {/* CATEGORY LIST */}
<CategoryList
  search={search}
  setSearch={setSearch}
  filteredCategories={filteredCategories}
  editCategory={editCategory}
  deleteCategory={deleteCategory}
/>
        </section>

        {/* FOOTER */}
        <footer className="dashboard-footer">
          <p>© 2026 IncoTrack | Income Category Management System</p>
          <p>Made with React JS ♡</p>
        </footer>

      </main>
    </div>
  );
}

export default App;