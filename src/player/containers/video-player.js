import React, {Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Tittle from '../components/tittle';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls-layout';
import {formattedTime} from '../../utilities/util.js';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volumen from '../components/Volume';
import FullScreen from '../components/fullScreen';
import {ExitFullScreen, RequestFullScreen, isDocumentFullScreen} from '../../utilities/util'


export default class VideoPlayer extends Component{
    state={
        pause: true,
        duration: 0,
        currentTime:0,
        loadding: false,
        currentVolume :1,
    }
    tooglePlay=(event)=>{
        this.setState(prevState => ({ pause: !prevState.pause })) 
    }
    componentDidMount(){
        this.setState({ pause: !this.props.autoplay})
    }

    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration,
        });
    }
    handleTimeUpdate = event =>{
        this.setState({
            currentTime: this.video.currentTime,
        });
    }
    handleProgressChange = event=>{
        console.log(event.target.value);
        this.video.currentTime = event.target.value;
    }

    handleSeeking = event =>{
        this.setState({
           loadding: true, 
        });
    }

    handeSeeked = event =>{
        this.setState({
            loadding:false,
        })
    
    }

    handleVolumeChange = event => {
       this.video.volume = event.target.value
       this.setState({currentVolume : event.target.value,})
    }

    handleMuteChange = event => {
        this.video.volume= this.video.volume == 0 ? this.state.currentVolume : 0;
    }

    handleClickFullScreen = event =>{
        if(!isDocumentFullScreen){
            RequestFullScreen(this.player);
        }
        else{
            //document.webkitExitFullscreen();
            ExitFullScreen();
        }
        
    }
    setRef = element => {
        this.player = element;
    }

    render(){
        return(
            <VideoPlayerLayout
              setRef={this.setRef}>
                <Tittle tittle={this.props.title}/>
                <Controls>
                    <PlayPause
                        pause={this.state.pause}
                        handleClick={this.tooglePlay}
                    />
                    <Timer
                        duration={formattedTime(this.state.duration)}
                        currentTime={formattedTime(this.state.currentTime)}
                    />
                    <ProgressBar 
                         duration={this.state.duration}
                         value = {this.state.currentTime}
                         handleProgressChange = {this.handleProgressChange}/>
                    <Volumen handleVolumeChange = {this.handleVolumeChange} handleMuteChange= {this.handleMuteChange}/>
                    <FullScreen handleClickFullScreen = {this.handleClickFullScreen}/>
                </Controls>
                {this.state.loadding &&  
                    <Spinner/>
                }
               <Video 
                    pause={this.state.pause}
                    autoplay={this.props.autoplay}
                    src={this.props.src}
                    handleLoadedMetadata = {this.handleLoadedMetadata}
                    handleTimeUpdate = {this.handleTimeUpdate}
                    handleSeeking = {this.handleSeeking}
                    handeSeeked= {this.handeSeeked}/>
                </VideoPlayerLayout>
        )
    }
}