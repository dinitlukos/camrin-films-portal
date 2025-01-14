import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { GallaryImages } from "../../../constants/gallaryImages";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];


const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (<Grid>
    <MasonryPhotoAlbum
    photos={GallaryImages.map(({src,height,width})=>({
      src,
      width,
      height,
      srcSet:  breakpoints.map((breakpoint) => ({
        src: src,
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    }))}
    onClick={({ index }) => {
      return setIndex(index);
    }}
    />
    <Lightbox
              slides={GallaryImages}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Download]}
            />
  </Grid>);
};

export default Gallery