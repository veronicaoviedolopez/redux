import React, {Component} from 'react';
import './video.css';

class Video extends Component{
    componentWillReceiveProps(nextProps){
        if(nextProps.pause !== this.props.pause){
            this.tooglePlay();
        }
    }
    tooglePlay() {
        if(this.props.pause){
            this.video.play();
        }
        else{
            this.video.pause();
        }
    }
    
    setRef=element =>{
        this.video= element;
    }
    render(){
        const {
            handleLoadedMetadata,
            handleTimeUpdate,
            handleSeeking, 
            handeSeeked
        } = this.props;

        return(
            <div className="Video">
            {this.props.src}
                <video className="Videovideo"
                    autoPlay={this.props.autoplay}
                    src={this.props.src}
                    ref={this.setRef}
                    onLoadedMetadata={handleLoadedMetadata}
                    onTimeUpdate={handleTimeUpdate}
                    onSeeking={handleSeeking}
                    onSeeked={handeSeeked}
                    />
            </div>
        )
    }
}
export default Video;