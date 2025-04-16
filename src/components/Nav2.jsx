import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {

  const categories = [
    {
      id: 1,
      name: "Html",
      slug: "html"
    },
    {
      id: 2,
      name: "Css",
      slug: "css"
    },
    {
      id: 3,
      name: "Javascript",
      slug: "javascript"
    },
    {
      id: 4,
      name: "React",
      slug: "react"
    },
    {
      id: 5,
      name: "Sanity",
      slug: "headless-cms"
    },
  ];


  return (
    <nav id="nav">
      <ul>
        {categories.map((category) => (
          <li key={category.id}> <button> 
            <Link to={`/category/${category.slug}`}>{category.name}</Link>
            </button>
            </li>
        ))}
      </ul>
    </nav>
  );
}