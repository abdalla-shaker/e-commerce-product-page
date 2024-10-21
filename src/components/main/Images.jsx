import { useState } from "react";
import { IMAGES } from "../../data.js";

let previewImages = IMAGES.product_1.preview_pictures;

export default function Images() {
  const [previewSection, setPreviewSection] = useState({
    activatedPhoto: previewImages[0].src,
    photoID: 0,
  });

  const setActivePhoto = (id) => {
    setPreviewSection({
      activatedPhoto: previewImages[id].src,
      photoID: id,
    });
  };

  return (
    <section>
      <div className="main-image">
        <img src={previewSection.activatedPhoto} alt="shoes image" />
      </div>
      <div className="side-images flex">
        <ul className="flex justify-between" id="thumbnail-images">
          {IMAGES.product_1.thumbnail.map((image) => {
            return (
              <li
                className={`list ${
                  previewSection.photoID == +image.id ? "active" : ""
                }`}
                key={image.id}
              >
                <button onClick={() => setActivePhoto(image.id)}>
                  <img src={image.src} alt="product image" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
