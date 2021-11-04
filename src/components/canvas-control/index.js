import React,{useState,useEffect, useRef } from 'react'

const WIDTH = 466*1.5;
const HEIGHT = 326*1.5;

const imgInfo = {
    lableBottom: "492",
    lableLeft: "342",
    lableRight: "353",
    lableTop: "470",
    position: "03",
    src: 'https://parts-images.cassmall.com/bmw_test/322664.jpg?version=16',
};

function CanvasControl() {

    const [imgElement, setImgElement] = useState(new Image());

    const [mouseDownFlag, setMouseDownFlag] = useState(false);
    const [mouseDownPos, setMouseDownPos] = useState({x: 0, y: 0});
    const [offsetDis, setOffsetDis] = useState({left: 0, top: 0});
    const [origin,setOrigin] = useState({x: 0, y: 0, width: WIDTH, height:HEIGHT});
    const [size, setSize] = useState({width: WIDTH, height: HEIGHT});//紀錄圖片當前大小

    const canvasRef = useRef(null);
    
    const initImg = () => {
        const img = new Image();
        img.onload = () => {
            const ctx = canvasRef.current?.getContext('2d') ;
            const { naturalWidth, height, naturalHeight } = img;
            const imgScale = height / naturalHeight; //取得倍率
            //Set the width of the picture
            const width = naturalWidth * imgScale;
            const left = WIDTH / 2 - width / 2;
            const top = HEIGHT / 2 - height / 2;
            setOrigin({...origin,x: left, y: top});
            //Record the image size
            setSize({width, height});
            setImgElement(img);
            //draw canvas
            ctx.drawImage(img, left, top, width, height);
        };
        img.height = HEIGHT;//326
        img.src = imgInfo.src;
        console.log(img)
    };

    const windowToCanvas = (canvas, x, y) => {
        //取得滑鼠座標後計算滑鼠相對canvas的座標
        var canvasBox = canvas.getBoundingClientRect();
        return {
            x: (x - canvasBox.left) * (canvas.width/canvasBox.width), // / Zoom when the size of the canvas element is inconsistent with the size of the drawing surface
            y: (y - canvasBox.top) * (canvas.height/canvasBox.height),//縮放時取得比例
        };
    };

    const handleMouseDown =(event)=>{
        event.stopPropagation();
        event.preventDefault(); //  Block browser default behavior, drag to open picture
        const { clientX, clientY } = event;//取得滑鼠第一次點的位置
        const canvas = canvasRef.current;
        const pos = windowToCanvas(canvas, clientX, clientY);
        canvas.style.cursor = 'move';// 更改鼠標樣式:移動樣式
        setMouseDownFlag(true); // 控制鼠標按住時在執行
        setMouseDownPos({ //紀錄鼠標初始座標
          x: pos.x,
          y: pos.y,
        });

    };
    const reset =(event)=>{
        event.preventDefault();
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        ctx.drawImage(imgElement, origin.x, origin.y, WIDTH, HEIGHT);
        setOffsetDis({left:0,top:0});
        setSize({width:WIDTH, height:HEIGHT});
    }
    const handleMouseMove = (event) => {
        event.stopPropagation();
        event.preventDefault();
        if (!mouseDownFlag) return;
        const { clientX, clientY } = event;
        const canvas = canvasRef.current;
        //Relative to canvas coordinates
        const pos = windowToCanvas(canvas, clientX, clientY)
        //Offset
        const diffX = pos.x - mouseDownPos.x;
        const diffY = pos.y - mouseDownPos.y;
        if ((diffX === 0 && diffY === 0)) return;
        //Coordinate positioning = last positioning + offset
        const offsetX = parseInt(`${diffX + offsetDis.left}`, 10);
        const offsetY = parseInt(`${diffY + offsetDis.top}`, 10);
        //Pan picture
        const ctx = canvas.getContext('2d') ;
        //Empty canvas
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        //Draw a picture
        const { naturalWidth, height, naturalHeight } = imgElement;
        //Scaling
        const imgScale = height / naturalHeight;
        //Set the width of the picture
        ctx.drawImage(imgElement, offsetX, offsetY, size.width, size.height);//size它記錄了最後放大的圖像的大小
        //Update the mouse down coordinates
        setMouseDownPos({
            x: pos.x,
            y: pos.y,
        });
        //Update the coordinates of the last picture painting
        setOffsetDis({
            left: offsetX,
            top: offsetY,
        })
    };

    const handleMouseUp = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const canvas = canvasRef.current;
        canvas.style.cursor = 'default';
        setMouseDownFlag(false);
    };

    const handleWheelImage =(event)=>{
        event.stopPropagation();
        const getLog=(x,y)=>Math.log(y) / Math.log(x)
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const bigger = event.deltaY > 0 ? -1 : 1; //確認滾輪方向是往前還往後
        const enlargeRate = 1.2;//放大倍率
        const shrinkRate = 0.8;//縮小倍率
        const { height:initHeight, naturalHeight, naturalWidth } = imgElement;
        const imgScale = initHeight / naturalHeight;
        const rate = bigger > 0 ? enlargeRate : shrinkRate;
        // Math.log(enlargeRate,(size.width/origin.width)
        const maxScale = 3;//限制放大和縮小倍率
        const currentScale = parseInt(getLog(rate,size.height/origin.height))

        const width = currentScale <= maxScale ? size.width * rate:size.width;
        const height =currentScale <= maxScale ? size.height * rate:size.height;
        //Empty canvas
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        ctx.drawImage(imgElement, offsetDis.left, offsetDis.top, width, height);
        //Record the image size
        setSize({width, height});
        return false;
    };

    useEffect(() => {
        /**Initialize picture*/
        initImg();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <div style={{marginTop:50}}>
            <p>圖片放大縮小移動功能</p>
            <canvas 
            ref={canvasRef} 
            width={WIDTH} 
            height={HEIGHT} 
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onWheel={handleWheelImage}
        ></canvas>
        <button onClick={reset}>reset</button>
        </div>
    )
}

export default CanvasControl
