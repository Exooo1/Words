import React from "react";

type SortElementType = {
    name: string
    isActive: boolean
}
export const SortElement = ({name, isActive}: SortElementType) => {
    return (
        <div>
            <button>{name}</button>
            <span className={`${isActive ? 'container_words_sort_buttons_active' : ''}`}>&#10607;</span>
        </div>
    )
}