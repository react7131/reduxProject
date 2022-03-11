import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { clearCurrent, editLog } from "../../actions/logAction";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = ({ current, clearCurrent, editLog, techs }) => {

    const [message, setMessage] = useState('');
    const [tech, setTech] = useState('');
    const [attention, setAttention] = useState(false);

    useEffect(() => {
        if(current) {
            setMessage(current.message);
            setTech(current.tech);
            setAttention(current.attention);
        }
    },[current])

    const onSubmit = () => {
        if(message === '' || tech === ''){
            M.toast({html: 'Please Enter a Message and Tech'})
        } else {
            const newLog = {
                id: current.id,
                message,
                tech,
                attention,
                date: new Date()
            }
            editLog(newLog)
            clearCurrent();
            M.toast({ html: `log updated by ${tech}` });
            setMessage('');
            setTech('');
            setAttention(false);
        }
    }
    return (
        <div id="editLogModal" className="modal ">
           
            <div className="modal-content">
                <h4>Edit Log</h4>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input 
                                id="log" 
                                type="text" 
                                className="validate" 
                                value= {message}
                                onChange= {(e) => setMessage(e.target.value)}
                            />
                            <label htmlFor="log">Enter Log</label>
                        </div>
                    </div>
                    <div className="input-field col s12">
                        
                            <select className="browser-default" value={tech} onChange={ (e) => setTech(e.target.value)}>
                            <option value="" >Choose Technesian</option>
                                { techs && techs.map(t => (
                                    <option key={t.id} value={`${t.firstname} ${t.lastname}`}>{`${t.firstname} ${t.lastname}`}</option>
                                ))}
                        </select>
                      
                    </div>
                    <p className="col" style={{"marginTop": "2rem"}}>
                        <label>
                            <input 
                                type="checkbox" 
                                className="filled-in" 
                                checked={attention} 
                                value={attention}
                                onChange={ () => setAttention(!attention)}
                            />

                            <span>Needs Attention</span>
                        </label>
                    </p>
                </form>
            </div>
                <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-green btn-flat">Edit</a>
            </div>
  
        </div>
    )
}

const mapStateToProps = (state) => {

    return ({ 
        current: state.log.current,
        techs: state.tech.techs
    })
}

export default connect(mapStateToProps, {clearCurrent, editLog}) (EditLogModal);