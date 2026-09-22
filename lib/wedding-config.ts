// WEDDING CONFIGURATION

export const weddingConfig = {
  // Maintenance
  maintenanceMode: false,

  // Couple
  bride: "Afrah",
  groom: "Safwan",
  coupleNames: "Safwan & Afrah",
  hashtag: "#SafwanAndAfrah2026",

  // Date & Time — countdown targets the first event (the Nikah)
  weddingDate: new Date("2026-10-22T18:30:00"),
  weddingDateFormatted: "Thursday, 22 October 2026",
  weddingDateShort: "22 October 2026",
  weddingTime: "6:30 PM",

  // The Nikah
  ceremony: {
    name: "The Nikah",
    address: "Tennis Pavilion, Bengaluru Palace, 1/21, Palace Road, Vasanth Nagar, Bengaluru, Karnataka 560006",
    time: "6:30 PM",
    mapsUrl:
      "https://www.google.com/maps?q=Bengaluru+Palace,+Palace+Road,+Vasanth+Nagar,+Bengaluru,+Karnataka+560006&output=embed",
    openMapsUrl:
      "https://www.google.com/maps?q=Tennis+Pavilion,+Bengaluru+Palace,+1/21,+Palace+Rd,+Vasanth+Nagar,+Bengaluru,+Karnataka+560006&ftid=0x3bae16447c8f44d5:0x9e5a5f22251abe34&entry=gps&shh=CAE",
    openAppleMapsUrl:
      "https://maps.apple.com/?q=Bengaluru+Palace+Palace+Road+Vasanth+Nagar+Bengaluru+Karnataka+560006",
  },

  // The Reception — same venue, the following evening
  reception: {
    name: "The Reception",
    address: "Tennis Pavilion, Bengaluru Palace, 1/21, Palace Road, Vasanth Nagar, Bengaluru, Karnataka 560006",
    time: "7:00 PM",
    dressCode: "Traditional & Formal Attire",
  },

  // Schedule for the two days
  schedule: [
    { time: "6:30 PM", event: "The Nikah", icon: "heart", description: "Thursday, 22 October 2026 — Dinner follows" },
    { time: "7:00 PM", event: "The Reception", icon: "sparkles", description: "Friday, 23 October 2026 — Dinner follows" },
  ],

  // Our Story — placeholder, not currently shown on the live page
  story: [
    {
      year: "",
      title: "",
      text: "Add your story here.",
      image: "/images/story-1.jpg",
    },
  ],

  // Gallery
  gallery: [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg",
  ],

  // Music
  music: {
    title: "",
    artist: "",
    src: "/audio/wedding-music.mp3",
  },

  // Venue highlights
  venueHighlights: [
    {
      icon: "landmark",
      title: "Heritage Landmark",
      description:
        "Built in 1887 in a Tudor-style inspired by England's Windsor Castle, Bengaluru Palace is one of the city's most iconic heritage venues.",
    },
    {
      icon: "sparkles",
      title: "The Tennis Pavilion",
      description:
        "Set on the palace grounds, the Tennis Pavilion offers a timeless, regal backdrop for our celebrations.",
    },
    {
      icon: "camera",
      title: "Storied Grounds",
      description:
        "Manicured lawns and historic architecture make every corner of the palace grounds a beautiful backdrop.",
    },
  ],

  // Social sharing
  whatsappMessage:
    "Join us for the wedding of Safwan & Afrah! Nikah: Thu, 22 Oct 2026 · Reception: Fri, 23 Oct 2026 — Tennis Pavilion, Bengaluru Palace. Open your invitation here: ",
  siteUrl: "https://safwan-and-afrah.vercel.app",
};

export type WeddingConfig = typeof weddingConfig;
