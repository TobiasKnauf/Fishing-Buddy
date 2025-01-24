'use client'

//libraries
import { ChangeEvent, FC, useState } from "react";

//-------------------------------------------------------------------

interface Props {
    onSearchChange: (searchTerm: string) => void;
}

//-------------------------------------------------------------------

export const Searchbar: FC<Props> = ({ onSearchChange }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
        onSearchChange(newSearchTerm);
    };

    return <input
        type="text"
        placeholder="Search stations..."
        value={searchTerm}
        onChange={handleInputChange} />
}