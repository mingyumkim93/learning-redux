import React, { useState } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {toDos: state}
}

function Home({toDos}){

    const [text, setText] = useState("");

    function onChange(e) {
        setText(e.target.value);
    };

    function onSubmit(e) {
        e.preventDefault();
        setText("");
    };

    return <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange} />
            <button>Add</button>
        </form>
        <ul>
            {toDos.length}
        </ul>
    </>
}

export default connect(mapStateToProps)(Home);