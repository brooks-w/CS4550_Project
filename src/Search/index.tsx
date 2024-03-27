import { useParams } from "react-router";
import ListEntryCard from "../ListEntryCard";

function Search() {
    const { query } = useParams();

    const results = [];


    return (
        <div>
            <h1>Search: query = "{query}"</h1>
                <div className="container-fluid">
                <ul>
                    <li>
                        <ListEntryCard />
                    </li>
                </ul>

                </div>

        </div>
    );
}

export default Search;
