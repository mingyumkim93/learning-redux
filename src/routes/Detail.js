import React from "react";
import { connect } from "react-redux";

function Detail({toDo}) {
    return <>
        <h1>{toDo?.text}</h1>
        <h5>createdAt {toDo?.id}</h5>
    </>
};

function mapStateProps(state, ownProps){
    const {match: {
        params : {id}
    }} = ownProps;
    return { toDo : state.find(toDo => toDo.id === parseInt(id))};
};

export default connect(mapStateProps)(Detail);