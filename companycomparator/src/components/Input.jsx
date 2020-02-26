import React from 'react';

// import { Container } from './styles';

export default function Input(props) {
    return (
        <input
            name={props.name}
            type={props.type}
            onChange={props.onChange}
            placeholder={props.placeholder}
            minLength={props.minLength}
            maxLength={props.maxLength}
            onClick={props.handleClick}
            value={props.value}
            id={props.value}
        ></input>);
}
