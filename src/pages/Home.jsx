import React from 'react'
import { Link } from 'react-router-dom'
import posts from '../data/posts.json'

export default function Home() {
  return (
    <main>
      <h2>Blogg</h2>
      {posts.map(post => (
        <article key={post.id} className="post-card">
          <h3>{post.title}</h3>
          <small>{post.date}</small>
          <p>{post.excerpt}</p>
          {/* Här är den uppdaterade "Läs mer"-knappen */}
          <Link to={`/post/${post.id}`} className="post-card__readmore">
            Läs mer →
          </Link>
        </article>
      ))}
    </main>
  )
}

