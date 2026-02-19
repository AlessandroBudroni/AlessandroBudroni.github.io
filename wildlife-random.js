const panel = document.getElementById("random-panel");
const image = document.getElementById("random-wildlife-image");
const caption = document.getElementById("random-wildlife-caption");
const nextButton = document.getElementById("next-random-photo");

const photos = [
  { src: "photos/photo_s01.jpg", caption: "Sardinia, Italy" },
  { src: "photos/photo_28.jpg", caption: "Borneo, Malaysia" },
  { src: "photos/photo_001.jpg", caption: "Borneo, Malaysia" },
  { src: "photos/photo_002.jpg", caption: "Borneo, Malaysia" },
  { src: "photos/photo_037.jpg", caption: "Borneo, Malaysia" },
  { src: "photos/photo_00.jpg", caption: "Nakuru, Kenya" },
  { src: "photos/photo_01.jpg", caption: "Nakuru, Kenya" },
  { src: "photos/photo_04.jpg", caption: "Masai Mara, Kenya" },
  { src: "photos/photo_05.jpg", caption: "Masai Mara, Kenya" },
  { src: "photos/photo_08.jpg", caption: "Masai Mara, Kenya" },
  { src: "photos/photo_09.jpg", caption: "Masai Mara, Kenya" },
  { src: "photos/photo_13.jpg", caption: "Masai Mara, Kenya" },
  { src: "photos/photo_14.jpg", caption: "Yala, Sri Lanka" },
  { src: "photos/photo_15.jpg", caption: "Weligama, Sri Lanka" },
  { src: "photos/photo_16.jpg", caption: "Weligama, Sri Lanka" },
  { src: "photos/photo_17.jpg", caption: "Weligama, Sri Lanka" },
  { src: "photos/photo_18.jpg", caption: "Weligama, Sri Lanka" },
  { src: "photos/photo_24.jpg", caption: "Taipei, Taiwan" },
  { src: "photos/photo_25.jpg", caption: "Tarangiri, Tanzania" },
  { src: "photos/photo_27.jpg", caption: "Tarangiri, Tanzania" },
  { src: "photos/photo_m01.jpg", caption: "Madeira, Portugal" },
  { src: "photos/photo_003.jpg", caption: "Borneo, Malaysia" },
  { src: "photos/photo_035.jpg", caption: "Borneo, Malaysia" },
  { src: "photos/photo_036.jpg", caption: "Borneo, Malaysia" },
  { src: "photos/photo_004.jpg", caption: "Borneo, Malaysia" },
  { src: "photos/photo_02.jpg", caption: "Nakuru, Kenya" },
  { src: "photos/photo_03.jpg", caption: "Nakuru, Kenya" },
  { src: "photos/photo_06.jpg", caption: "Masai Mara, Kenya" },
  { src: "photos/photo_07.jpg", caption: "Masai Mara, Kenya" },
  { src: "photos/photo_10.jpg", caption: "Masai Mara, Kenya" },
  { src: "photos/photo_101.jpg", caption: "Campo, Cameroon" },
  { src: "photos/photo_11.jpg", caption: "Douala-Edea, Cameroon" },
  { src: "photos/photo_12.jpg", caption: "Douala-Edea, Cameroon" },
  { src: "photos/photo_125.jpg", caption: "Douala-Edea, Cameroon" },
  { src: "photos/photo_19.jpg", caption: "Yala, Sri Lanka" },
  { src: "photos/photo_20.jpg", caption: "Yala, Sri Lanka" },
  { src: "photos/photo_21.jpg", caption: "Yala, Sri Lanka" },
  { src: "photos/photo_22.jpg", caption: "Rambukkana, Sri Lanka" },
  { src: "photos/photo_23.jpg", caption: "Yala, Sri Lanka" },
  { src: "photos/photo_26.jpg", caption: "Tarangiri, Tanzania" }
];

let lastIndex = -1;

function pickRandomIndex(max) {
  if (max <= 1) {
    return 0;
  }

  let index = Math.floor(Math.random() * max);
  if (index === lastIndex) {
    index = (index + 1 + Math.floor(Math.random() * (max - 1))) % max;
  }
  return index;
}

function showRandomPhoto() {
  if (!photos.length) {
    return;
  }

  const index = pickRandomIndex(photos.length);
  const photo = photos[index];
  image.src = photo.src;
  image.alt = `Wildlife photo - ${photo.caption}`;
  caption.textContent = photo.caption;
  lastIndex = index;
}

if (panel && image && caption && nextButton) {
  panel.hidden = false;
  showRandomPhoto();
  nextButton.addEventListener("click", showRandomPhoto);
}
