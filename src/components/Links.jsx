import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/images', text: '📸 Images' },
  { url: '/videos', text: '📺 Videos' },
];

export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-4">
    {links.map(({ url, text }) => (
      <NavLink
        to={url}
        activeClassName="text-purple-700 border-b-2 dark:text-purple-300 border-purple-700 pb-2"
      >
        {text}
      </NavLink>
    ))}
  </div>
);
