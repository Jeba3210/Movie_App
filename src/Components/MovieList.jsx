import React from 'react'


function MovieList({movies , selectedGenre}) {
  return (
    <div>
    <table className='w-full border-collapse border border-gray-300 mb-10 rounded'>
      <thead>
        <tr className="bg-zinc-400">
          <th  className="bg-green  px-4 py-2 text-left">Title</th>
          <th  className="bg-green px-4 py-2 text-left">Genre</th>
          <th  className="bg-green px-4 py-2 text-left">Year</th>
        </tr>
      </thead>
      <tbody>
        {selectedGenre
          ? movies
              .filter((movie) => movie.genre === selectedGenre)
              .map((movie,index) => (
                <tr key={index} className={index % 2 !== 0 ? "bg-gray-200" : ""}>
                  <td  className="px-4 py-2">{movie.title}</td>
                  <td  className="px-4 py-2">{movie.genre}</td>
                  <td  className="px-4 py-2">{movie.year}</td>
                </tr>
              ))
          : movies.map((movie,index) => (
              <tr  key={index} className={index % 2 !== 0 ? "bg-gray-200" : ""}>
                <td  className="px-4 py-2">{movie.title}</td>
                <td  className="px-4 py-2">{movie.genre}</td>
                <td  className="px-4 py-2">{movie.year}</td>
              </tr>
            ))}
      </tbody>
    </table>
  </div>
  
  )
}

export default MovieList