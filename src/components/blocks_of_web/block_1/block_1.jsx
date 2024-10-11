import React, { useEffect } from "react";

const Block_1 = () => {
    return(
        <div className="block_1">
            <p>Меридиан тур</p>
            <p>В самом центре Японии</p>

            <button onClick={()=>link()}>
                Поехали!
            </button>

        </div>
    );
}
export default Block_1;