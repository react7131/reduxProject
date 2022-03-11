import React from "react";
import { connect } from 'react-redux';
import { logDelete, setCurrent } from "../../actions/logAction";
import M from "materialize-css/dist/js/materialize.min.js";
import Moment from 'react-moment';
import moment from "moment";

const LogItem = ( {log, logDelete, setCurrent} ) => {

    const onDelete = (id) => {
        logDelete(id);
        M.toast({ html: 'Log Deleted'})
    }
    return (
        <li className="collection-item ">
            <h6><a href="#editLogModal" onClick={() => {setCurrent(log)}} className={`modal-trigger ${log.attention?"red-text": "black-text"}`}>{log.message}</a></h6>
            <div className="grey-text text-darken-1">
                log has been made by <span className='teal-text text-darken-2'>{log.tech}</span> on <Moment format="Do MMMM YYYY, h:mm:ss a">{log.date}</Moment>
                <a href="#!" className="secondary-content" onClick={() => onDelete(log.id)}>
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
            
        </li>
    )
}

export default connect(null, { logDelete, setCurrent }) (LogItem);