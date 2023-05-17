import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 'auto', height: 'auto' }} cols={'auto'} rowHeight={'auto'}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img:
      "https://www.rollingstone.com/wp-content/uploads/2022/09/GettyImages-1243423503.jpg?w=1024&h=716&crop=1",
    title: "Breakfast"
  },
  {
    img:
      "https://keralakaumudi.com/web-news/en/2022/09/NMAN0360274/image/federer.1663416457.jpg",
    title: "Burger"
  },
  {
    img:
      "https://www.sportsnet.ca/wp-content/uploads/2020/01/Roger-Federer-Australia-Open.jpg",
    title: "Camera"
  },
  {
    img:
      "https://www.rollingstone.com/wp-content/uploads/2022/09/GettyImages-1243423234.jpg",
    title: "Coffee"
  },
  {
    img:
      "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/09/23/1093834-federernadal.jpg",
    title: "Hats"
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey"
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball"
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern"
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms"
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil"
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star"
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike"
  }
];
