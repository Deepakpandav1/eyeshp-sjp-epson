// utils/appUtils/galleryData.ts

export interface GalleryItem {
  image: string;
  title: string;
  description: string;
  dept: string;
}

export const galleryItems: GalleryItem[] = [
  {
    image: "../../../public/GalleryItem/R-A.jpg",
    title: "Reception & Waiting Area",
    description: "A spacious and welcoming area for patient comfort.",
    dept: "Reception",
  },
  {
    image: "../../../public/GalleryItem/WA.jpg",
    title: "Waiting Area",
    description: "A spacious and welcoming area for patient comfort.",
    dept: "Reception",
  },
  {
    image: "../../../public/GalleryItem/WA2.jpg",
    title: "Waiting Area",
    description: "A spacious and welcoming area for patient comfort.",
    dept: "Reception",
  },
  {
    image: "../../../public/GalleryItem/WA3.jpg",
    title: "Waiting Area",
    description: "A spacious and welcoming area for patient comfort.",
    dept: "Reception",
  },
  {
    image: "../../../public/GalleryItem/OT.jpg",
    title: "Advanced Operation Theater",
    description: "Equipped with modern surgical instruments and technology.",
    dept: "Operation Theater",
  },
  {
    image: "../../../public/GalleryItem/OT1.jpg",
    title: "Advanced Operation Theater",
    description: "Equipped with modern surgical instruments and technology.",
    dept: "Operation Theater",
  },
  {
    image: "../../../public/GalleryItem/OT2.jpg",
    title: "Advanced Operation Theater",
    description: "Equipped with modern surgical instruments and technology.",
    dept: "Operation Theater",
  },
  {
    image: "../../../public/GalleryItem/0_Medicine-shortages.webp",
    title: "In-House Pharmacy",
    description: "All essential medicines available under one roof.",
    dept: "Pharmacy",
  },
  {
    image: "../../../public/GalleryItem/pharmacy.jpg",
    title: "In-House Pharmacy",
    description: "All essential medicines available under one roof.",
    dept: "Pharmacy",
  },

  {
    image: "../../../public/GalleryItem/DIAGNOSTIC-1.jpg",
    title: "Diagnostic Room",
    description: "Equipped with modern lab equipment for accurate reports.",
    dept: "Diagnostics",
  },
  {
    image: "../../../public/GalleryItem/OPTOMETRIST.jpg",
    title: "Optometrist Room",
    description: "Equipped with modern lab equipment for accurate reports.",
    dept: "Diagnostics",
  },
  {
    image: "../../../public/GalleryItem/OPTOMETRIST1.jpg",
    title: "Optometrist Room",
    description: "Equipped with modern lab equipment for accurate reports.",
    dept: "Diagnostics",
  },
  {
    image: "../../../public/GalleryItem/LAB.jpg",
    title: " Diagnostics Lab",
    description: "Equipped with modern lab equipment for accurate reports.",
    dept: "Diagnostics",
  },
  {
    image: "../../../public/GalleryItem/DOCTOR ROOM.jpg",
    title: "Optometrist Room",
    description: "Equipped with modern lab equipment for accurate reports.",
    dept: "Diagnostics",
  },
];

export const departments: string[] = [
  "Reception",
  "Operation Theater",
  "Pharmacy",

  "Diagnostics",
];
