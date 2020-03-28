import React from "react";
import {Link} from "react-router-dom";
import './Navigation.css'
function Navigation(){
    return(
        <div className="nav">
            {/* a tag -> Link 로 변경할 것. css 에서 Link를 a를 이용하여 스타일 설정 */}
            <Link to="/">home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navigation;