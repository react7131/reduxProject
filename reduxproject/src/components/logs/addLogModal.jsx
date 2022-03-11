import React, { useEffect, useState } from "react";
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from "react-redux";
import { addLog } from "../../actions/logAction";


const AddLogModal = ({ addLog, techs }) => {

    
    const [message, setMessage] = useState('');
    const [tech, setTech] = useState('');
    const [attention, setAttention] = useState(false);
    
    const onAddBtn = () => {
        if(message === '' || tech === ''){
            M.toast({html: 'Please Enter a Message and Tech'})
        } else {
            const newLog = {
                message,
                attention,
                tech,
                date: new Date()
            }
            addLog(newLog);
            M.toast({ html: `Log added by ${tech}`})

            setMessage('');
            setTech('');
            setAttention(false);
    }
    }


    console.log(techs)
    return (
        <div id="addLogModal" className="modal ">
           
            <div className="modal-content">
                <h4>Add New System Log</h4>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)} 
                                id="log" 
                                type="text" 
                                className="validate" 
                            />
                            <label htmlFor="log">Enter Log</label>
                        </div>
                    </div>
                    <div className="input-field col s12 ">
                        <select className="browser-default" value={tech} onChange={ (e) => setTech(e.target.value)}>
                            <option value="" >Choose Technesian</option>
                                {techs ? techs.map(t => (
                                    <option key={t.id} value={`${t.firstname} ${t.lastname}`}>{`${t.firstname} ${t.lastname}`}</option>
                                )) : ""}
                        </select>
                    </div>
                    <p className="col" style={{"marginTop": "2rem"}}>
                        <label>
                            <input 
                                type="checkbox" 
                                className="filled-in" 
                                checked={attention} 
                                value= {attention}
                                onChange={ () => setAttention(!attention)}
                            />
                            <span>Needs Attention</span>
                        </label>
                    </p>
                </form>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={ () => onAddBtn()} className="modal-close waves-effect waves-green btn">Add</a>
            </div>
  
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        techs: state.tech.techs
    })
}

export default connect(mapStateToProps, { addLog }) (AddLogModal);