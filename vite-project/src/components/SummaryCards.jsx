function SummaryCards({ totalCategories }) {
  return (
    <section className="stats-container">
      <div className="stat-card">
        <p>Total Categories</p>
        <h2>{totalCategories}</h2>
      </div>

      <div className="stat-card">
        <p>Recently Added</p>
        <h2>{totalCategories > 0 ? "1" : "0"}</h2>
      </div>

      <div className="stat-card">
        <p>System Status</p>
        <h2>Active</h2>
      </div>
    </section>
  );
}

export default SummaryCards;