import Link from "next/link";
import React from "react";

const CreateButton = () => {
  return (
    <Link
      href={"/post/create"}
      className="fixed bottom-24 right-6 h-20 w-20 flex justify-center items-center bg-white shadow-md text-5xl rounded-full"
    >
      +
    </Link>
  );
};

export default CreateButton;
