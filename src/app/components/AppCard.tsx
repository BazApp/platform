import React from 'react';

export function AppCard({ app }) {
  return (
    <div className="app-card">
      <img src={app.icon} alt={app.name} />
      <h2>{app.name}</h2>
      <p>{app.description}</p>
      <a href={`/app/${app.id}`}>Подробнее</a>
    </div>
  );
}
