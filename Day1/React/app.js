import React from "react"
import  ReactDOM  from "react-dom/client"
// const helloHeading = React.createElement('h1',{},'Hello Using ReactJS first time using parcel!!')
// const HelloHeading = ()=> {
//     return React.createElement('h1',{},'Hello Using ReactJS first time using parcel and component!!')
// }
const numOfMonths = 3.0
// const title = (
//     <div id = "title">
//             <h1 className="heading"> Hello TO bootcamp React </h1>
//             <h2> From zero to hero </h2>
//             <h3> Will take only {numOfMonths} month </h3>
//     </div>
//     );
const Title = () =>  (
    <div id = "title">
            <h1 className="heading"> Hello TO bootcamp React </h1>
            <h2> From zero to hero </h2>
            <h3> Will take only {numOfMonths} month </h3>
    </div>
    );
    
const rootElement = ReactDOM.createRoot(document.getElementById('root-id'))
// rootElement.render(<HelloHeading />);
// rootElement.render(title);
rootElement.render(<Title/>);