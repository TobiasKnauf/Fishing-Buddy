'use client'

import { useEffect, useState } from "react";
import { GetStations } from "../lib/RetrieveData";
import { Station } from "../lib/StationData";
import { Searchbar } from "./Searchbar";
import { StationList } from "./StationList";

export default function Page() {
    const [stations, setStations] = useState<Station[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchStations = async () => {
            setStations(await GetStations(searchTerm));
        };

        fetchStations();
    }, [searchTerm]);

    return (
        <div>
            <Searchbar onSearchChange={setSearchTerm} />
            <StationList stations={stations} />
        </div>
    )
}