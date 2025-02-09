import React, { useState } from "react";
import "../styles/PhotoGallery.css";

const PhotoGallery = ({ photos: initialPhotos }) => {
  const [photos, setPhotos] = useState(initialPhotos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files).map(file => URL.createObjectURL(file));
    setPhotos([...photos, ...newFiles]);
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photo-gallery">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`갤러리 사진 ${index + 1}`}
          onClick={() => handlePhotoClick(photo)}
        />
      ))}
      {selectedPhoto && (
        <div className="photo-modal" onClick={handleCloseModal}>
          <div className="photo-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>X</button>
            <img src={selectedPhoto} alt="확대된 사진" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;