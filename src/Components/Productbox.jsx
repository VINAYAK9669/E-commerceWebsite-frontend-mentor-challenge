import { useState } from "react";
import styles from "./Productbox.module.css";
import nextImage from "../images/icon-next.svg";
import prevImage from "../images/icon-previous.svg";
import deleteIcon from "../images/icon-close.svg";

// Importing all images thumbnails and images

// Images
import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";
// Thumbnails
import thumnail1 from "../images/image-product-1-thumbnail.jpg";
import thumnail2 from "../images/image-product-2-thumbnail.jpg";
import thumnail3 from "../images/image-product-3-thumbnail.jpg";
import thumnail4 from "../images/image-product-4-thumbnail.jpg";

// ==========================COMPONENT DETAILS===============

/*
This component is responsible to rener the images with the features like next and previous button.

Below props are called 
1) onBigImageClick        >>>>>>>> On clickingg big image we will open the lightbox.
2) intialValueOfLightBox, >>>>>>>> if this is true then we will render next and prev button
3) lightBoxButtons,       >>>>>>>> This will ensure that where to show prevIcon and nextIcon as we are renderig this component twice
*/

// to count image index
let IMAGE_COUNT = 0;
// to store all imported images
const ImageArray = [product1, product2, product3, product4];

export default function Productbox({
  onBigImageClick,
  intialValueOfLightBox,
  lightBoxButtons,
}) {
  const [image, setImage] = useState(product1);

  const [activeThumbnail, setActiveThumbnail] = useState("thumnail1");
  function ImageSlider(n) {
    IMAGE_COUNT += n;
    if (IMAGE_COUNT > 3 || IMAGE_COUNT < 0) {
      if (IMAGE_COUNT > 3) {
        IMAGE_COUNT = 0;
        setImage(ImageArray[IMAGE_COUNT]);
      } else {
        IMAGE_COUNT = 3;
        setImage(ImageArray[IMAGE_COUNT]);
      }
    } else {
      setImage(ImageArray[IMAGE_COUNT]);
    }
  }
  function handleThumbnails(e) {
    switch (e.target.id) {
      case "thumnail1":
        setImage(ImageArray[0]);
        setActiveThumbnail("thumnail1");
        break;
      case "thumnail2":
        setImage(ImageArray[1]);
        setActiveThumbnail("thumnail2");
        break;
      case "thumnail3":
        setImage(ImageArray[2]);
        setActiveThumbnail("thumnail3");
        break;
      case "thumnail4":
        setImage(ImageArray[3]);
        setActiveThumbnail("thumnail4");
        break;
    }
  }
  function handleLightBox() {
    const value = intialValueOfLightBox
      ? !intialValueOfLightBox
      : !intialValueOfLightBox;
    onBigImageClick(value);
  }
  return (
    <div className={styles["product-images"]}>
      <div
        className={`${styles.bigImage} ${
          intialValueOfLightBox ? styles.increaseSize : ""
        }`}
      >
        {lightBoxButtons ? (
          <div
            className={styles.closeButtton}
            onClick={() => onBigImageClick()}
          >
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="hsl(0, 0%, 100%)"
              />
            </svg>
          </div>
        ) : (
          ""
        )}

        <img
          src={image}
          onClick={() => (!intialValueOfLightBox ? handleLightBox() : {})}
        ></img>
        <span
          className={
            lightBoxButtons
              ? styles["left-move-activated"]
              : styles["left-move-deactivated"]
          }
          onClick={() => ImageSlider(-1)}
        >
          <img src={prevImage}></img>
        </span>
        <span
          className={
            lightBoxButtons
              ? styles["right-move-activated"]
              : styles["right-move-deactivated"]
          }
          onClick={() => ImageSlider(1)}
        >
          <img src={nextImage}></img>
        </span>
      </div>
      <div className={styles.imageThemes} onClick={(e) => handleThumbnails(e)}>
        <img
          src={thumnail1}
          id="thumnail1"
          style={
            activeThumbnail === "thumnail1"
              ? { opacity: 0.5, border: "3px solid hsl(26, 100%, 50%)" }
              : {}
          }
        ></img>
        <img
          src={thumnail2}
          id="thumnail2"
          style={
            activeThumbnail === "thumnail2"
              ? {
                  opacity: 0.5,
                  border: "3px solid hsl(26, 100%, 55%)",
                }
              : {}
          }
        ></img>
        <img
          src={thumnail3}
          id="thumnail3"
          style={
            activeThumbnail === "thumnail3"
              ? { opacity: 0.5, border: "3px solid hsl(26, 100%, 55%)" }
              : {}
          }
        ></img>
        <img
          src={thumnail4}
          id="thumnail4"
          style={
            activeThumbnail === "thumnail4"
              ? { opacity: 0.5, border: "3px solid hsl(26, 100%, 55%)" }
              : {}
          }
        ></img>
      </div>
    </div>
  );
}
