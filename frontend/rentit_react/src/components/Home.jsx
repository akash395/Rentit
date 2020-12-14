import React from "react";
import MainPage from "./MainPage";

function Home() {
    return (
        <React.Fragment>
            <div
                className="w3-container w3-center w3-blue"
                style={{ padding: "2rem" }}>
                <h1 className="w3-jumbo">Rentit - we find you your new home</h1>
                <button
                    className="w3-button w3-pink"
                    style={{ marginRight: "1rem" }}>
                    Login
                </button>
                <button className="w3-button w3-pink">Register</button>
            </div>
        </React.Fragment>
    );
}

export default Home;