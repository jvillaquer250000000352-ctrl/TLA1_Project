function CategoryForm({
  categoryName,
  setCategoryName,
  categoryDescription,
  setCategoryDescription,
  addCategory,
  editingId,
  cancelEdit,
}) {
  return (
    <div className="form-container">
      <h3>
        {editingId ? "✎ Edit Category" : "+ Add New Category"}
      </h3>

      <form onSubmit={addCategory}>
        <div className="input-group">
          <label>Category Name</label>
          <input
            type="text"
            placeholder="e.g. Salary, Business, Freelance"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Category Description</label>
          <input
            type="text"
            placeholder="Enter category description"
            value={categoryDescription}
            onChange={(e) => setCategoryDescription(e.target.value)}
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="primary-button">
            {editingId ? "Update Category" : "+ Add Category"}
          </button>

          {editingId && (
            <button
              type="button"
              className="cancel-button"
              onClick={cancelEdit}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CategoryForm;