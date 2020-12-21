import React, {useState} from 'react';

export default function Hello(props) {
    return <div>
        <p>Имя: {props.name}</p>
        <p>Возраст: {props.age}</p>
    </div>;
}

Hello.defaultProps={};
Hello.defaultProps.name="Hello, World!";
Hello.defaultProps.age=33;