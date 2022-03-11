import React, { useState } from "react";
import { connect } from 'react-redux';
import { addTech } from "../../actions/techAction";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = ({addTech}) => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const onAddTech = () => {
        if(firstname === '' || lastname === ''){
            M.toast({html: 'Please Enter a Message and Tech'})
        } else {
            const newTech = {
                firstname,
                lastname
            }
            addTech(newTech);
            M.toast({html: `Technesian added`})
        }
    }

    return (
        <div id="addTechModal" className="modal ">
           
            <div className="modal-content">
                <h4>Add Technesian</h4>
      
                <div className="row">
                    <div className="input-field col s12">
                    <input 
                        id="firstname" 
                        type="text" 
                        className="validate" 
                        value={firstname}
                        onChange = {e => setFirstname(e.target.value)}
                    />
                    <label htmlFor="firstname">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input 
                        id="lastname" 
                        type="text" 
                        className="validate" 
                        value={lastname}
                        onChange = {e => setLastname(e.target.value)}
                    />
                    <label htmlFor="lastname">Last Name</label>
                    </div>
                </div>
      
            </div>
                <div className="modal-footer">
                <a href="#!" onClick={onAddTech} className="modal-close waves-effect waves-green btn">Add</a>
            </div>
  
        </div>
    )
}

export default connect(null, {addTech}) (AddTechModal);