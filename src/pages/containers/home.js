import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import RelatedLayout from '../components/related-layout';
import Categories from '../../categories/components/categories';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../errors/containers/handleError';
import VideoPlayer from '../../player/containers/video-player';

export default class Home extends Component{
    state={
        modalvisible:false,
    }
    
    handleCloseModalClick=(event)=>{
        this.setState({
            modalvisible: false,
        })
    }
    handleOpenModal=(media)=>{
        console.log(media.src);
        this.setState({
            modalvisible:true,
            media
        })
    }

    render(){
        if(this.state.handleError){
            return <p>OHH! Hay un error :( </p>
        }
        return(
            <HandleError>
                <HomeLayout>
                    <RelatedLayout/>
                   
                    <Categories 
                        categories={this.props.data.categories}
                        handleOpenModal={this.handleOpenModal}>
                    </Categories>
                    {
                    this.state.modalvisible &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModalClick}>
                            <VideoPlayer
                                autoplay
                                src={this.state.media.src}
                                title = {this.state.media.title}
                            />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

