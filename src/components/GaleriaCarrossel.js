import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  { src: "/img/foto-1.jpg", altText: "Foto 1", caption: "Foto 1", key: 1 },
  { src: "/img/foto-2.jpg", altText: "Foto 2", caption: "Foto 2", key: 2 },
  { src: "/img/foto-3.jpg", altText: "Foto 3", caption: "Foto 3", key: 3 },
  { src: "/img/foto-4.jpg", altText: "Foto 4", caption: "Foto 4", key: 4 },
];

const GaleriaCarrossel = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
  };

  const previous = () => {
    if (animating) return;
    setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <img
        src={item.src}
        alt={item.altText}
        style={{
          width: "100%", // Para responsividade
          height: "400px", // Altura fixa para padronização
          objectFit: "cover", // Para cortar a imagem e manter o aspecto visual
          borderRadius: "10px",
        }}
      />
      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
  ));

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous} {...args}>
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default GaleriaCarrossel;
