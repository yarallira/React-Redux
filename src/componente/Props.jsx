import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

let VerdadeiroFalso = true

export default (props) =>
<div>
<h1>{props.valor}</h1>
<p>{VerdadeiroFalso ? 'Sim' : 'Não'}</p>
<p>{Math.random()}</p>

<h2>{props.aBcD}</h2>
</div>