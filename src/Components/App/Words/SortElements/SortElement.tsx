import React from "react";

type SortElementType = {
  name: string;
  isActive: boolean;
  sortElem: () => void;
  isLoading: boolean;
};
export const SortElement = ({
  name,
  isActive,
  sortElem,
  isLoading
}: SortElementType) => {
  return (
    <div>
      <button onClick={sortElem} disabled={isLoading}>
        {name}
        <span
          className={`${
            isActive ? "container_words_sort_buttons_active" : "some"
          }`}
        >
          &#10607;
        </span>
      </button>
    </div>
  );
};
