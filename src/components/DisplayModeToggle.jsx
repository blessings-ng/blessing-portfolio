import React, { useState } from "react";
import "../assets/css/DisplayMode.css";

const themes = [
  {
    value: "light",
    label: "Light Mode",
    icon: (
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
  {
    value: "dark",
    label: "Dark Mode",
    icon: (
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
  },
  {
    value: "blue",
    label: "Blue Theme",
    icon: (
      <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" fill="#3399ff" />
      </svg>
    ),
  },
  {
    value: "system",
    label: "System Theme",
    icon: (
      <svg aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 3v2M16.24 7.76l1.42 1.42M21 12h-2M16.24 16.24l1.42-1.42M12 19v2M7.76 16.24l-1.42 1.42M3 12h2M7.76 7.76L6.34 6.34" />
        <circle cx="12" cy="12" r="5" />
      </svg>
    ),
  },
];

export default function DisplayModeToggle({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  const current = themes.find((t) => t.value === theme);

  return (
    <div className="custom-dropdown-wrapper">
      <button className="dropdown-trigger" onClick={() => setOpen(!open)}>
        {current.icon}
      </button>

      {open && (
        <ul className="custom-dropdown">
          {themes.map(({ value, label, icon }) => (
            <li
              key={value}
              onClick={() => {
                setTheme(value);
                setOpen(false);
              }}
              className={`dropdown-item${theme === value ? " selected" : ""}`}
            >
              <span className="icon">{icon}</span>
              <span className="label">{label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
