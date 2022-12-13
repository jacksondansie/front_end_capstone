import "../../styles/HomePage.scss"
// import mountains from "../images/gray-mountains.jpg"

export default function HomePage() {
    return(
        <div className="page-container">
            <h1 className="header">GenericStore.com</h1>
            <p>Get your generic goods today.</p>
            {/* <img src={mountains} alt="mountains" style={{width: "100vw", height: "70vh"}}/> */}

            <div className="footer">
                <h6>Copyright 2020 - GenericStoreLLC</h6>
            </div>
        </div>
    )
}