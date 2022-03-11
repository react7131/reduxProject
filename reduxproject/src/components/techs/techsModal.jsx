import React, { useState, useEffect } from "react";
import TechItem from "./techItem";
import Loading from "../loading";
import { connect } from 'react-redux';
import { getTechs } from "../../actions/techAction";

const TechsModal = ({getTechs, tech:{techs, loading}}) => {

    useEffect ( () => {
        getTechs()
    }, [])

    return (
        <div id="techsModal" className="modal ">
            <div className="modal-content">
                <h4>List of Technesians</h4>
    
                <ul className="collection with-header">
                    { !loading && techs &&  
                    
                    techs.map( tech => <TechItem key={tech.id} tech= {tech} />) 
                    } 
                </ul>


            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn">OK</a>
            </div>
  
        </div>
    )
}

const mapStateToProps = (state) => ({
        tech: state.tech
})

export default connect(mapStateToProps, {getTechs}) (TechsModal);