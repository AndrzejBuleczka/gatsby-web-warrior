import React from 'react'

export default function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <p>Sorry, that page doesn't exist</p>
      <iframe 
        width="453"
        height="280"
        src={`https://www.youtube.com/embed/t3otBjVZzT0?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )
}
