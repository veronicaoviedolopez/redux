import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home'
//import Playlist from './src/playlist/components/playlist';
//import Clock from './src/playlist/components/clock';
//import Button from './src/playlist/components/button';
import data from '../../src/api.json';


const app = document.getElementById('home-container');

//ReactDOM.render(que voy a renderizar, donde lo hare);
//const holaMundo = <h1>Hola! desde el mundo de Veronica :) </h1>;
//render(holaMundo, app);
//const elementClock = <Clock date={new Date}/>;
//const elementPlaylist = <Playlist data={data} key={data.id}/>;
//const elementButton = <Button/>;
/*render(
    <div>
        {elementClock}
        <br/>
        {elementButton}
        <br/>
        {elementPlaylist}
    </div>, app);
*/
//render(element, app);

render(<Home data={data}/>, app)