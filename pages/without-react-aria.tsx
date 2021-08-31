import React from "react";


const WithoutReactAriaPage: React.FC = ()=>{
    return <main>
        <h1>Accessibility without React Aria</h1>
        <section className="section">
            <h2>Buttons</h2>
            <div className="flex-row evenly">
                <button className="btn" type="button" onClick={()=> console.log("Simple button pressed")}>Simple button</button>
                <button className="btn" type="submit" onClick={()=> console.log("Submit button pressed")}>Submit button</button>
                <div className="btn" role="button" tabIndex={0} onClick={()=> console.log("Div button pressed")}>Div button</div>
            </div>
        </section>
        <section className="section">
            <h2>Links</h2>
            <div className="flex-row evenly">
                <a href="https://google.com" className="link">Going to Google</a>
                <a href="#" className="link">Going nowhere</a>
            </div>
        </section>
    </main>
}

export default WithoutReactAriaPage;