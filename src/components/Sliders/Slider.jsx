import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
function Slider() {
  const [sliderImages, setSliderImages] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let url = "http://127.0.0.1:8000/tms_api/manage_slider";
        const result = await axios.get(url, {
          headers: {
            Authorization: "Token 3e6d228ed10d57a2061861cb109011aca43fb122",
          },
        });
        setSliderImages(result.data);
        console.log(result.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Carousel showArrows={true}>
        {sliderImages.map((item) => (
          <div key={item.SliderId}>
            <img src={item.SliderImage} alt={item.SliderId} />
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default Slider;
