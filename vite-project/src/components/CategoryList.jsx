function CategoryList({
  search,
  setSearch,
  filteredCategories,
  editCategory,
  deleteCategory,
}) {
  return (
    <div className="list-container">
      <div className="list-heading">
        <div>
          <h3>Income Categories</h3>
          <p>View and manage your registered categories.</p>
        </div>

        <div className="search-box">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Search categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {filteredCategories.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">▤</div>
          <h3>
            {search ? "No matching categories" : "No Categories Yet"}
          </h3>
          <p>
            {search
              ? "Try searching for another category."
              : "Start by adding your first income category above."}
          </p>
        </div>
      ) : (
        <div className="category-list">
          {filteredCategories.map((category, index) => (
            <div className="category-card" key={category.id}>
              <div className="category-info">
                <div className="category-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </div>

              <div className="category-actions">
                <button
                  className="edit-button"
                  onClick={() => editCategory(category)}
                >
                  ✎ Edit
                </button>

                <button
                  className="delete-button"
                  onClick={() => deleteCategory(category.id)}
                >
                  ✕ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryList;