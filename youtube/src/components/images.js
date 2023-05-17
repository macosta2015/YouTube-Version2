import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function StandardImageList() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ImageList sx={{ width: '50%', height: '50%', overflow: 'hidden' }} cols={'3'} rowHeight={'100px'}>
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
    </div>
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
  }
];
