'use client'

import { ChangeEvent, FC, useState } from "react";

interface SearchbarProps {
    onSearchChange: (searchTerm: string) => void;
}

export const Searchbar: FC<SearchbarProps> = ({ onSearchChange }) => {
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