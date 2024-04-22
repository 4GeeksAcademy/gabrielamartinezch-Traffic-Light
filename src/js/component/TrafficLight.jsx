import React, { useState } from "react";
import "../../styles/TrafficLight.css";

export const TrafficLight = () => {
    const [selectedColor, setSelectedColor] = useState("red");

    return (
        <div>
            <h2>Traffic Light</h2>
            <p>Click a color</p>
        <div className="traffic-light">
            <div onClick={() => setSelectedColor("red")}
            className={"light red" + ((selectedColor === "red") ? " glow" : "")}></div>
            <div onClick={() => setSelectedColor("yellow")} className={"light yellow" + ((selectedColor === "yellow") ? " glow" : "")}></div>
            <div onClick={() => setSelectedColor("green")} className={"light green" + ((selectedColor === "green") ? " glow" : "")}></div>
        </div>
        </div>
    )
}

