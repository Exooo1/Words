import React, {useState} from "react";
import {SortElement} from "../SortElements/SortElement";
import {SortChoice} from "../../../../API/wordAPI";

type SortElementsType = {
  id: number;
  name: string;
  isActive: boolean;
  sort: SortChoice;
};
type SortTypeItems = {
  isLoading: boolean;
  fetchSort: (typeSort: SortChoice) => void;
  fetchSortReset: () => void;
};

export const SortElementComponents: React.FC<SortTypeItems> = React.memo(
  ({ isLoading, fetchSortReset, fetchSort }) => {
    const [sortElements, setSortElements] = useState<Array<SortElementsType>>([
      { id: 2, name: "Description", isActive: false, sort: "DESCRIPTION" },
      { id: 3, name: "Added", isActive: false, sort: "ADDED" }
    ]);
    const handlerSort = (name: string, sort: SortChoice) => {
      setSortElements(
        sortElements.map(item =>
          item.name === name
            ? { ...item, isActive: !item.isActive }
            : {
                ...item,
                isActive: false
              }
        )
      );
      fetchSort(sort);
    };
    const handlerSortReset = () => {
      setSortElements(sortElements.map(item => ({ ...item, isActive: false })));
      fetchSortReset();
    };
    return (
      <>
        <div>
          {sortElements.map(item => {
            return (
              <SortElement
                sortElem={() => handlerSort(item.name, item.sort)}
                key={item.id}
                isLoading={isLoading}
                {...item}
              />
            );
          })}
        </div>
        <button
          className="button_reset_filters"
          onClick={handlerSortReset}
          disabled={isLoading}
        >
          X
        </button>
      </>
    );
  }
);
