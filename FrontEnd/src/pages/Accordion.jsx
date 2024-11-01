import { useState } from "react";
import propTypes from "prop-types";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Accordion({ title, description, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <div className="bg-priamry dark:bg-gray-700 text-gray-700 dark:text-primary border-[1px] border-black px-8 py-5">
        <div className="flex justify-between">
          <h3 className="text-2xl font-[700]">{title}</h3>
          {!open ? (
            <FaPlus size={24} onClick={() => setOpen(true)} />
          ) : (
            <FaMinus size={24} onClick={() => setOpen(false)} />
          )}
        </div>
        <p className="text-xl pt-2">{description}</p>
        {open && (
          <>
            <div className="h-[2px] bg-gray-500 w-1/3 mt-5"></div>
            <p className="text-xl text-gray-700 pt-2 dark:text-primary">{answer}</p>
          </>
        )}
      </div>
    </div>
  );
}

Accordion.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  answer: propTypes.string,
};
