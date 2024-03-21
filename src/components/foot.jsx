import { Link } from "react-router-dom"

import { navLinks } from "../constants"

function Foot(){
    return(
        <>
        {navLinks.map(each=>{
            return(
                <Link to = {each.link} key={each.id}><li  >{each.id}</li></Link>
            )
        })}
        </>
    )
}
export default Foot