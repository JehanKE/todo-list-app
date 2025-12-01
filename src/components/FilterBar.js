import React from 'react';

function FilterBar({ filter, setFilter }) {
    const filters = ['pending', 'completed', 'all'];

    return (
        <div className="filter-container">
            {filters.map(f => (
                <button
                    key={f}
                    className={`filter-btn ${filter === f ? 'active' : ''}`}
                    onClick={() => setFilter(f)}
                >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
            ))}
        </div>
    );
}

export default FilterBar;
