import React from "react";
import Button from "./Button";
import withClickTracking from "./withClickTracking";
const HOC = () => {
    const ButtonWithTracking=withClickTracking(Button);
    return (<>
    <h1>04/08/2025</h1>
    <h1>HOC</h1>
    <ButtonWithTracking  
    label="pay Now" 
    trackingInfo={{amount:"2000", user:"jack"}}
    />
{/* <button label="pay Now" trackingInfo={{amount:"2000",
     user:"Jack"}}/> */}
</>
);
};
export default HOC;