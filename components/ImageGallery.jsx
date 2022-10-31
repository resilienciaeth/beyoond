import React from 'react';
import Image from 'next/image';
import images from '../public/assets';

function ImageGallery() {
  return (
    <div className="coverflow">
      <div className="content">
        <div className="front">
          <Image src={images.gallery1} alt="gallery" />
          <div className="info">
            <p>Item 1</p>
          </div>
        </div>
        <div className="back">
          <h2>Details about Item 1</h2>
        </div>
      </div>
      <div className="content">
        <div className="front">
          <img src="/assets/gallery1.jpeg" alt="gallery" />
          <div className="info">
            <p>Item 2</p>
          </div>
        </div>
        <div className="back">
          <h2>Details about Item 2</h2>
        </div>
      </div>
      <div className="content">
        <div className="front">
          <img src="/assets/gallery1.jpeg" alt="gallery" />
          <div className="info">
            <p>Item 3</p>
          </div>
        </div>
        <div className="back">
          <h2>Details about Item 3</h2>
        </div>
      </div>
      <div className="content">
        <div className="front">
          <img src="/assets/gallery1.jpeg" alt="gallery" />
          <div className="info">
            <p>Item 4</p>
          </div>
        </div>
        <div className="back">
          <h2>Details about Item 4</h2>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
