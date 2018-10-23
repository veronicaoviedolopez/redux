import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './media.css';

class Media extends Component{
    constructor(props){
        super(props);
        this.state = {
            author: props.author
        }
        //this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick = () => {
        /*this.setState({
            author:'Pecho Thor'
        })
        */
       this.props.openModal(this.props);
    }

    render(){
        const {title, cover} = this.props
        const {author} = this.state
        return (
            <div className="Media" onClick={this.handleClick} >
                <div className="Media-cover" >
                    <img
                        src={cover}
                        alt=""
                        width={240}
                        height={120}
                        className = "Media-image"
                    />
                    <h3 className="Media-title">{title}</h3>
                    <p className="Media-author">{author}</p>
                </div>   
            </div>
        )
    }
}

Media.propTypes ={
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    cover: PropTypes.string,
    type: PropTypes.oneOf(['video','audio'])
}

export default Media;
