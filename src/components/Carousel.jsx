import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(){
        super()

        this.state={
            index:0
        }
    }

    handleBackArr=()=>{
        if(this.state.index==0){
            this.setState({
                index: images.length-1
            })
        }
        else{
            this.setState({ 
                index:this.state.index-1
            })
        }
        
    }

    handleForwardArr=()=>{
        if(this.state.index==images.length-1){
            this.setState({
                index:0
            })
        }else {
            this.setState({
                index:this.state.index+1
            })
        }
        
    }



    render(){
        return(
            <>
            <img className="image" src={images[this.state.index].img} alt="image " />
            <h1 className="heading text">{images[this.state.index].title}</h1>
            <h2 className="text subheading">{images[this.state.index].subtitle}</h2>
            
            <ArrowBackIosIcon className="button left-btn" onClick={this.handleBackArr}/>
            <ArrowForwardIosIcon className="button right-btn" onClick={this.handleForwardArr} />      
            
            </>
        ) 
    }
  
}

export default Carousel;
