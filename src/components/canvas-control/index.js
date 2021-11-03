import React,{useState,useEffect, createRef, useRef } from 'react'

const WIDTH = 466;
const HEIGHT = 326;

const imgInfo = {
    lableBottom: "492",
    lableLeft: "342",
    lableRight: "353",
    lableTop: "470",
    position: "03",
    src: 'https://parts-images.cassmall.com/bmw_test/322664.jpg?version=16',
  }
function CanvasControl() {

    const [imgElement, setImgElement] = useState(new Image());
    const canvasRef = useRef(null);
    const initImg = () => {
        const img = new Image();
        img.onload = () => {
            const ctx = canvasRef.current?.getContext('2d') ;
            const { naturalWidth, height, naturalHeight } = img;
            const imgScale = height / naturalHeight;
            //Set the width of the picture
            const width = naturalWidth * imgScale;
            const left = WIDTH / 2 - width / 2;
            const top = HEIGHT / 2 - height / 2;
            ctx.drawImage(img, left, top, width, height);
            setImgElement(img);
        }
        img.height = HEIGHT;
        img.src = imgInfo.src;
    }
    useEffect(() => {
        /**Initialize picture*/
        initImg();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <div>
            <canvas 
            ref={canvasRef} 
            width={WIDTH} 
            height={HEIGHT} 
        ></canvas>
        </div>
    )
}

export default CanvasControl
