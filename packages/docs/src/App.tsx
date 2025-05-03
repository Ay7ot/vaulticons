import React, { useState, useMemo } from 'react';
// Import *all* icons and the props type from the core package
import * as CoreIcons from '@vaulticons/core';
import type { IconProps } from '@vaulticons/core';

// Helper to get only icon components (assuming they end with 'Icon')
const iconsList = Object.entries(CoreIcons)
    .filter(([name]) => name.endsWith('Icon'))
    .map(([name, component]) => ({
        name,
        Component: component as React.ComponentType<IconProps>, // Type assertion
    }));

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIconName, setSelectedIconName] = useState<string | null>(null);

    // Basic filtering (we can improve this later)
    const filteredIcons = useMemo(() => {
        if (!searchTerm) {
            return iconsList;
        }
        return iconsList.filter(icon =>
            icon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const SelectedIconComponent =
        selectedIconName ? iconsList.find(icon => icon.name === selectedIconName)?.Component : null;

    return (
        <div className="app-container">
            <header>
                <h1>VaultIcons Library</h1>
                <input
                    type="text"
                    placeholder="Search icons..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </header>

            <main className="icon-grid">
                {filteredIcons.length > 0 ? (
                    filteredIcons.map(({ name, Component }) => (
                        <div
                            key={name}
                            className="icon-card"
                            onClick={() => setSelectedIconName(name)}
                            title={name}
                        >
                            <Component size="lg" /> {/* Use a consistent size for the grid preview */}
                            <span>{name}</span>
                        </div>
                    ))
                ) : (
                    <p>No icons found.</p>
                )}
            </main>

            <aside className="preview-area">
                {SelectedIconComponent ? (
                    <div>
                        <h2>{selectedIconName}</h2>
                        {/* Add interactive controls and code snippets here later */}
                        <SelectedIconComponent size="3xl" />
                        <p>Preview controls go here...</p>
                    </div>
                ) : (
                    <p>Click an icon to see details</p>
                )}
            </aside>
        </div>
    );
}

export default App; 