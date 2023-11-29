import { NavLink } from "react-router-dom";

function TrainVideos() {
    return ( <div style={{textAlign: "center",  marginTop: "30px"}}>
      
        <NavLink  to="/education" className="education" >  Məşq videoları üçün tıklayın </NavLink>
    </div> );
}

export default TrainVideos;