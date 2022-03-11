import React, { useEffect } from "react";

import LogItem from "./logItem";
import Loading from "../loading";
import { getLogs } from "../../actions/logAction";
import { connect } from "react-redux";

const Logs = ( {log:{logs, loading}, getLogs}) => {  

    
    useEffect ( () => {
        getLogs()
    }, [])


    {if(loading || logs === null ) return <Loading />}

    return (
        
        <ul className="collection with-header">
            <li className="collection-header center-align"><h4>logs</h4></li>
            {!loading && logs.length === 0 ? 
                (<p className="center">No logs to show ...</p>):
                logs.map( log => <LogItem key={log.id} log= {log} />) 
            }   
        </ul>
        
    )
}

const mapStateToProps = state => ({
    log: state.log
})

export default connect(mapStateToProps, { getLogs })(Logs);