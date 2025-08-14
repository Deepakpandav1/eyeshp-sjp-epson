// utils/appUtils/galleryData.ts

export interface GalleryItem {
  image: string;
  title: string;
  description: string;
  dept: string;
}

export const galleryItems: GalleryItem[] = [
  {
    image: "/R-A.jpg",
    title: "Reception & Waiting Area",
    description: "A spacious and welcoming area for patient comfort.",
    dept: "Reception",
  },
  {
    image: "/WA.jpg",
    title: "Waiting Area",
    description: "A spacious and welcoming area for patient comfort.",
    dept: "Reception",
  },
  {
    image: "/WA2.jpg",
    title: "Waiting Area",
    description: "A spacious and welcoming area for patient comfort.",
    dept: "Reception",
  },
  {
    image: "/WA3.jpg",
    title: "Waiting Area",
    description: "A spacious and welcoming area for patient comfort.",
    dept: "Reception",
  },
  {
    image: "/OT.jpg",
    title: "Advanced Operation Theater",
    description: "Equipped with modern surgical instruments and technology.",
    dept: "Operation Theater",
  },
  {
    image: "/OT1.jpg",
    title: "Advanced Operation Theater",
    description: "Equipped with modern surgical instruments and technology.",
    dept: "Operation Theater",
  },
  {
    image: "/OT2.jpg",
    title: "Advanced Operation Theater",
    description: "Equipped with modern surgical instruments and technology.",
    dept: "Operation Theater",
  },
  {
    image: "/0_Medicine-shortages.webp",
    title: "In-House Pharmacy",
    description: "All essential medicines available under one roof.",
    dept: "Pharmacy",
  },
  {
    image: "/pharmacy.jpg",
    title: "In-House Pharmacy",
    description: "All essential medicines available under one roof.",
    dept: "Pharmacy",
  },

  {
    image: "/DIAGNOSTIC-1.jpg",
    title: "Diagnostic Room",
    description: "Equipped with modern lab equipment for accurate reports.",
    dept: "Diagnostics",
  },
  {
    image: "/OPTOMETRIST.jpg",
    title: "Lab Facilities",
    description: "Equipped with modern lab equipment for accurate reports.",
    dept: "Lab Facilities",
  },
  {
    image: "/OPTOMETRIST1.jpg",
    title: "Lab Facilities",
    description: "Equipped with modern lab equipment for accurate reports.",
    dept: "Lab Facilities",
  },
  {
    image: "/LAB.jpg",
    title: "Lab Facilities",
    description: "Equipped with modern lab equipment for accurate reports.",
    dept: "Lab Facilities",
  },
  {
    image: "/lab2.png",
    title: "Lab Facilities",
    description: "Equipped with modern lab equipment for accurate reports.",
    dept: "Lab Facilities",
  },
  {
    image: "/DOCTOR ROOM.jpg",
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

  "Lab Facilities",
];
