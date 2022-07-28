import React from "react";

const PictureGallery = ({ props, authorName, location }) => {
  const imgUrl = "https://test-front.framework.team" + props.imageUrl;

  return (
    <div className="picture">
      <img src={imgUrl} alt={props.name} className="picture__image" />
      <div className="description">
        <h2 className="description-header">{props.name}</h2>

        <p className="description-paragraph">
          <span className="description-paragraph__bold">Author:</span>
          {authorName}
        </p>

        <p className="description-paragraph">
          <span className="description-paragraph__bold">Created:</span>
          {props.created}
        </p>

        <p className="description-paragraph">
          <span className="description-paragraph__bold">Location:</span>
          {location}
        </p>
      </div>
    </div>
  );
};

export default React.memo(PictureGallery);
