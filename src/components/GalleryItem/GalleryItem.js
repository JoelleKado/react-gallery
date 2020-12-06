import React, { Component } from 'react';

class GalleryItem extends Component{

  state = ({
    likes  : 0,
    showPicture : false
  })
  
  togglePicture = () => {
      this.setState({
        showPicture: !this.state.showPicture // flip the boolean using ! NOT
      })
    }

    

  render(){
    let image = this.props.imageProp;
    
  return(
      <div>
          <h2>{image.title}</h2>
          

          
          
      
      
        
        {this.state.showPicture? <img src={image.path}/> :   <h4>{image.description}</h4>}

        {/*  <img src={this.state.showPicture && image.path }/> */}
        
          {/* <img src={image.path}/>  */}
        
        
        
          <h3>Likes: {image.likes}</h3>
          <h3>{image.id}</h3>
        <button onClick={(event)=>this.props.likePutExtensionProp(event, image.id)}>LIKE</button>
        <button onClick={this.togglePicture}>{ this.state.showPicture? `SEE DESCRIPTION` : `SEE IMAGE` }
        </button>
      </div>
      ) // end return
    } // end render
} // end class
















export default GalleryItem;