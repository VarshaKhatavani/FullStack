/*

Note : 

By utilizing the <picture> element and multiple <source> tags, 
the component ensures that the most suitable image is delivered based on the user's device capabilities, 
leading to better performance and user experience.

The <source> tags within the <picture> element define different image formats 
and resolutions. The browser will choose the most appropriate source 
based on its capabilities and the user's device.

The <img> tag inside the <picture> element serves as a fallback.
*/

import React from "react";

import "./reset.css";
import "./styles.css";

function ImageApp() {
  return (
    <>
      <CaptionedImage
        image={
          <picture>
            <source
              type="image/avif"
              srcSet={`https://sandpack-bundler.vercel.app/img/meerkat.avif 1x, https://sandpack-bundler.vercel.app/img/meerkat@2x.avif 2x`}
            />
            <source
              type="image/jpeg"
              srcSet={`https://sandpack-bundler.vercel.app/img/meerkat.jpg 1x, https://sandpack-bundler.vercel.app/img/meerkat@2x.jpg 2x`}
            />
            <img
              src="https://sandpack-bundler.vercel.app/img/meerkat.jpg"
              alt="A meerkat looking curiosly at the camera"
            />
          </picture>
        }
        // alt="A meerkat looking curiously at the camera"
        // src="https://sandpack-bundler.vercel.app/img/meerkat.jpg"
        // caption="Photo by Manuel Capellari, shot in August 2019 and published on Unsplash."
        caption={
          <>
            Photo by <a href=" ">Manuel Capellari</a> shot in August 2019 and
            published on Unsplash.
          </>
        }
      />
    </>
  );
}

// can pass <picture> as a children as well & then here pass children as property
function CaptionedImage({ image, caption }) {
  return (
    <figure>
      {/* <img alt={alt} src={src} /> */}
      {image}
      <div className="divider" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default ImageApp;
