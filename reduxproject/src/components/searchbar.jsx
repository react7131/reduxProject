import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { logSearch } from "../actions/logAction";

const Searchbar = ({logSearch}) => {

    const text = useRef('');
    const onSearch = (e) => {
        logSearch(text.current.value)
    }

    return (
        <nav className="teal lighten-2">
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input 
                            ref={text}
                            
                            onChange={onSearch} 
                            id="search" 
                            type="search" 
                            placeholder="Search Log ..." 
                        />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default connect(null, {logSearch}) (Searchbar);