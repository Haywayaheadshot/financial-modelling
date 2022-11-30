import React from 'react';
import '../../styles/home-thumbnail.css';

export default function HomeSearch() {
  return (
    <div>
      <input type="search" className="search-btn" />
      <input type="submit" htmlFor="search" className="home-submit-btn" />
    </div>
  );
}
