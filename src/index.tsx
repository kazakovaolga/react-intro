import React from 'react';
import Button from './components/Button';
import Emblem from './components/Emblem';
import Navigation from './components/Navigation';
import List from './components/List';
import Paragraph from './components/Paragraph';
import Whitespace from './components/Whitespace';
import Header from './components/Header';
import Accordion from './components/Accordion';
// import logo from ''


import * as ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

//root.render(<div className='body'><Emblem></Emblem><Navigation><List></List></Navigation></div >);

root.render(<div className='app'>
    <Header level={2} text="React-Intro"></Header>
    <Paragraph text="Hello"></Paragraph>
    <Whitespace></Whitespace>
    <br></br>
    <Accordion text="This is accordion example"></Accordion>
    <br></br>
    <Emblem src='../assets/emblem.jpg'></Emblem>
</div >);
