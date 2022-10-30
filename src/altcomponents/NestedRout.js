import React from "react";
import { Route, Routes } from "react-router-dom";

const FirstRout = () => {

    return (
        <div>
            <h3>This is a Nested Route</h3>
        </div>
    )
}

const SecondRout = () => {

    return (
        <div>
            <h3>This is another Nested Route</h3>
        </div>
    )
}

function NestedRoute() {

    return (
        <div>
            <Routes>
                <Route path="/route1" element={<FirstRout />} />
                <Route path="/route2" element={<SecondRout />} />
            </Routes>
        </div>
    )
}
export default NestedRoute;