import React from "react";

class ImageCard extends React.Component {
  render() {
    const image = this.props.image;
    return (
      <div>
        <img src={image.urls.regular} alt={image.description} />
      </div>
    );
  }
}

export default ImageCard;
