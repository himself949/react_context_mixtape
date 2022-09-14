import React, { useContext } from "react";
import { MixtapeContext } from './MixtapeContext'

export const Controls = () => {
    const { setGenre, sortOrder, setSortOrder } = useContext(MixtapeContext);

    function changeGenre(event) {
        setGenre(event.target.value);
    }

    function changeSortOrder() {

        if (sortOrder === "ascending") {

            setSortOrder("descending");

        } else if (sortOrder === "descending") {

            setSortOrder("ascending");

        }
    }

    return (
        <div className="controls">

            <select onChange={changeGenre}>
                <option value="all">All</option>
                <option value="hip hop">Hip Hop</option>
                <option value="rap">Rap</option>
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
            </select>

            <button onClick={changeSortOrder}>{sortOrder}</button>
        </div>
    );
};
