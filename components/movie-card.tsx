"use client";

import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <div className="col-span-1 relative">
      {/* Image 부분  */}
      <img src={movie.image_url} className="w-full" />
      {/* ,"Follow the mythic journey of Paul Atreides as he unites
      with Chani and the Fremen while on a path of revenge against the
      conspirators who destroyed his family. Facing a choice between the love of
      his life and the fate of the known universe, Paul endeavors to prevent a
      terrible future only he can foresee.",8.3,3437.313,2024-02-27 */}

      {/* Title Dim */}
      <Link href={`/movies/${movie.id}`}>
        <div className="absolute flex items-center justify-center top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-0 hover:opacity-80 transition-opacity duration-300">
          <p className="text-xl font-bold text-white">{movie.title}</p>
        </div>
      </Link>
    </div>
  );
}
