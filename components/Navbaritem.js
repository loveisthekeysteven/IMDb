"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Navbaritem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`m-4 hover:text-red-700 font-semibold p-2 ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4  decoration-red-700 rounded-lg"
        } `}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default Navbaritem;
