import React, { useState } from 'react';
import './gllry.css';
import CloseIcon from '@material-ui/icons/Close';
import img1 from '../Assets/1.jpeg';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/3.jpg';
import img4 from '../Assets/4.webp';
import img5 from '../Assets/5.jpg';
import img6 from '../Assets/6.jpg';
import img7 from '../Assets/7.jpg';
import img8 from '../Assets/8.webp';
import img9 from '../Assets/9.jpeg';
import img10 from '../Assets/10.jpg';
import img11 from '../Assets/11.jpg';
import img12 from '../Assets/12.jpg';
import img13 from '../Assets/13.jpg';
import img14 from '../Assets/14.jpg';
import img15 from '../Assets/15.jpg';

const Gllry = () => {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
    {
      id: 11,
      imgSrc: img11,
    },
    {
      id: 12,
      imgSrc: img12,
    },
    {
      id: 13,
      imgSrc: img13,
    },
    {
      id: 14,
      imgSrc: img14,
    },
    {
      id: 15,
      imgSrc: img15,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  

  return (
    <>
      <div className="heading">
            <h1>Gallery Page</h1>
      </div>
      <div className={model ? 'model open' : 'model'}>
        <img src={tempimgSrc} alt="" />
              <CloseIcon onClick={() => setModel(false)}/>
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gllry;
