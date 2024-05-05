import React from 'react'

const genres = [
  "Drama",
  "Crime",
  "Action",
  "Fantasy",
  "Western",
  "Science Fiction",
  "Thriller",
  "War",
  "Animation",
];

const GenreFilter = ({ setSelectedGenre }) => {
  const handleBtnClick = (genre) => {
    setSelectedGenre(genre);
    console.log("Filtering by", genre);
  };

  return (
    <div className="flex flex-col items-center bg-gray-200 my-6 h-24  rounded">
      <div className='mt-2 text-xl'><h2 className='font-bold '>Filter by Genre</h2></div>
      <div className="btns-container mt-3 ">
        {genres.map((genre) => {
          return (
            <button
              key={genre}
              className="filter-btn mx-1 text-base  h-8 w-18 bg-zinc-400 hover:bg-zinc-500 hover:text-white px-4   rounded-md"
              onClick={() => handleBtnClick(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GenreFilter