import { package_variants } from "./packages";

const single_events = [
  {
    name: "Wedding",
    id: "wedding",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [
          { id: 2111, label: "One Photographer", status: true },
          { id: 2112, label: "One Videographer", status: true },
        ],
      },
      {
        id: "golden",
        label: "Golden",
        items: [
          { id: 2121, label: "One Traditional Photographer", status: true },
          { id: 2122, label: "One Traditional Videographer", status: true },
          { id: 2123, label: "One Candid Photographer", status: true },
          { id: 2124, label: "One Candid Videographer", status: true },
          { id: 2125, label: "One Heli-Cam (drone)", status: true },
        ],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [
          { id: 2131, label: "One Traditional Photographer", status: true },
          { id: 2132, label: "One Traditional Videographer", status: true },
          { id: 2133, label: "One Candid Photographer", status: true },
          { id: 2134, label: "One Candid Videographer", status: true },
          { id: 2135, label: "One Cinematic Videographer", status: true },
          { id: 2136, label: "One Heli-Cam (drone)", status: true },
          {
            id: 2137,
            label: "Instance Photo Sharing through AI Face Identification",
            status: true,
          },
          { id: 2138, label: "Live Print", status: true },
        ],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [
          { id: 2141, label: "One Traditional Photographer", status: true },
          { id: 2142, label: "One Traditional Videographer", status: true },
          { id: 2143, label: "Two Candid Photographer", status: true },
          { id: 2144, label: "Two Candid Videographer", status: true },
          { id: 2145, label: "One Cinematic Videographer", status: true },
          { id: 2146, label: "One Heli-Cam (drone)", status: true },
          {
            id: 2147,
            label: "Instance Photo Sharing through AI Face Identification",
            status: true,
          },
          { id: 2148, label: "Live Print", status: true },
        ],
      },
    ],
  },
  {
    name: "Wedding Eve",
    id: "wedding_eve",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Engagement",
    id: "engagement",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [
          { id: 2311, label: "One Photographer", status: true },
          { id: 2312, label: "One Videographer", status: true }
        ],
      },
      {
        id: "golden",
        label: "Golden",
        items: [
          { id: 2321, label: "One Photographer", status: true },
          { id: 2322, label: "One Traditional Videographer", status: true },
          { id: 2324, label: "One Candid Videographer", status: true },
        ],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [
          { id: 2331, label: "One Traditional Photographer", status: true },
          { id: 2332, label: "One Traditional Videographer", status: true },
          { id: 2333, label: "One Candid Photographer", status: true },
          { id: 2334, label: "One Candid Videographer", status: true },
          { id: 2335, label: "One Cinematic Videographer", status: true },
          { id: 2336, label: "One Heli-Cam (drone)", status: true },
          {
            id: 2337,
            label: "Instance Photo Sharing through AI Face Identification",
            status: true,
          },
          { id: 2338, label: "Live Print", status: true },
        ],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [
          { id: 2341, label: "One Traditional Photographer", status: true },
          { id: 2342, label: "One Traditional Videographer", status: true },
          { id: 2343, label: "Two Candid Photographer", status: true },
          { id: 2344, label: "Two Candid Videographer", status: true },
          { id: 2345, label: "One Cinematic Videographer", status: true },
          { id: 2346, label: "One Heli-Cam (drone)", status: true },
          {
            id: 2347,
            label: "Instance Photo Sharing through AI Face Identification",
            status: true,
          },
          { id: 2348, label: "Live Print", status: true },
        ],
      },
    ],
  },
  {
    name: "Reception",
    id: "reception",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Save the Date",
    id: "save_the_data",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [{ id: 2511, label: "One Photographer", status: true }],
      },
      {
        id: "golden",
        label: "Golden",
        items: [
          { id: 2521, label: "One Photographer", status: true },
          { id: 2522, label: "One Videographer", status: true },
        ],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [
          { id: 1531, label: "One Photographer", status: true },
          { id: 2532, label: "One Videographer", status: true },
          { id: 3533, label: "One Heli-Cam (drone)", status: true },
        ],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Pre Wedding Reception",
    id: "pre_wedding_reception",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Post Wedding",
    id: "post_wedding",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Haldi",
    id: "haldi",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Mehandi",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Sangeeth",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Dekahina",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Bridal Shower",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Chantham Charth",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Fixation",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
];

const duel_events = [
  {
    name: "Wedding",
    id: "wedding",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [
          { id: 1110, label: "One Traditional Photographer", status: true },
          { id: 1111, label: "One Traditional Videographer", status: true },
          { id: 1112, label: "One Candid Photographer", status: true },
          { id: 1113, label: "One Candid Videographer", status: true },
        ],
      },
      {
        id: "golden",
        label: "Golden",
        items: [
          { id: 1121, label: "One Traditional Photographer", status: true },
          { id: 1122, label: "One Traditional Videographer", status: true },
          { id: 1123, label: "One Candid Photographer", status: true },
          { id: 1124, label: "One Candid Videographer", status: true },
          { id: 1125, label: "One Heli-Cam (drone)", status: true },
        ],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [
          { id: 1131, label: "One Traditional Photographer", status: true },
          { id: 1132, label: "One Traditional Videographer", status: true },
          { id: 1133, label: "One Candid Photographer", status: true },
          { id: 1134, label: "One Candid Videographer", status: true },
          { id: 1135, label: "One Cinematic Videographer", status: true },
          { id: 1136, label: "One Heli-Cam (drone)", status: true },
          {
            id: 1137,
            label: "Instance Photo Sharing through AI Face Identification",
            status: true,
          },
          { id: 1138, label: "Live Print", status: true },
        ],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [
          { id: 1141, label: "One Traditional Photographer", status: true },
          { id: 1142, label: "One Traditional Videographer", status: true },
          { id: 1143, label: "Two Candid Photographer", status: true },
          { id: 1144, label: "Two Candid Videographer", status: true },
          { id: 1145, label: "One Cinematic Videographer", status: true },
          { id: 1146, label: "One Heli-Cam (drone)", status: true },
          {
            id: 1147,
            label: "Instance Photo Sharing through AI Face Identification",
            status: true,
          },
          { id: 1148, label: "Live Print", status: true },
        ],
      },
    ],
  },
  {
    name: "Wedding Eve",
    id: "wedding_eve",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Engagement",
    id: "engagement",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [
          { id: 1311, label: "One Traditional Photographer", status: true },
          { id: 1312, label: "One Traditional Videographer", status: true },
          { id: 1313, label: "One Candid Photographer", status: true },
          { id: 1314, label: "One Candid Videographer", status: true },
        ],
      },
      {
        id: "golden",
        label: "Golden",
        items: [
          { id: 1321, label: "One Traditional Photographer", status: true },
          { id: 1322, label: "One Traditional Videographer", status: true },
          { id: 1323, label: "One Candid Photographer", status: true },
          { id: 1324, label: "One Candid Videographer", status: true },
          { id: 1325, label: "One Heli-Cam (drone)", status: true },
        ],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [
          { id: 1331, label: "One Traditional Photographer", status: true },
          { id: 1332, label: "One Traditional Videographer", status: true },
          { id: 1333, label: "One Candid Photographer", status: true },
          { id: 1334, label: "One Candid Videographer", status: true },
          { id: 1335, label: "One Cinematic Videographer", status: true },
          { id: 1336, label: "One Heli-Cam (drone)", status: true },
          {
            id: 1337,
            label: "Instance Photo Sharing through AI Face Identification",
            status: true,
          },
          { id: 1338, label: "Live Print", status: true },
        ],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [
          { id: 1341, label: "One Traditional Photographer", status: true },
          { id: 1342, label: "One Traditional Videographer", status: true },
          { id: 1343, label: "Two Candid Photographer", status: true },
          { id: 1344, label: "Two Candid Videographer", status: true },
          { id: 1345, label: "One Cinematic Videographer", status: true },
          { id: 1346, label: "One Heli-Cam (drone)", status: true },
          {
            id: 1347,
            label: "Instance Photo Sharing through AI Face Identification",
            status: true,
          },
          { id: 1348, label: "Live Print", status: true },
        ],
      },
    ],
  },
  {
    name: "Reception",
    id: "reception",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Save the Date",
    id: "save_the_data",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [{ id: 1511, label: "One Photographer", status: true }],
      },
      {
        id: "golden",
        label: "Golden",
        items: [
          { id: 1521, label: "One Photographer", status: true },
          { id: 1522, label: "One Videographer", status: true },
        ],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [
          { id: 1531, label: "One Photographer", status: true },
          { id: 1532, label: "One Videographer", status: true },
          { id: 1533, label: "One Heli-Cam (drone)", status: true },
        ],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Pre Wedding Reception",
    id: "pre_wedding_reception",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Post Wedding",
    id: "post_wedding",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Haldi",
    id: "haldi",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Mehandi",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Sangeeth",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Dekahina",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Bridal Shower",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Chantham Charth",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
  {
    name: "Fixation",
    status: false,
    image: null,
    services: [
      {
        id: "silver",
        label: "Silver",
        items: [],
      },
      {
        id: "golden",
        label: "Golden",
        items: [],
      },
      {
        id: "platinum",
        label: "Platinum",
        items: [],
      },
      {
        id: "diamond",
        label: "Diamond",
        items: [],
      },
    ],
  },
];

export const all_events = {
  single: single_events,
  duel: duel_events,
};
export const event_default_values = {
  groom_name: "",
  groom_father_name: "",
  groom_mother_name: "",
  groom_location: "",
  groom_community: "",
  bride_name: "",
  bride_father_name: "",
  bride_mother_name: "",
  bride_location: "",
  bride_community: "",
  customer_contact: "",
  customer_email:"",
  wedding_time: "",
  wedding_location: "",
  wedding_direction: "",
  package_type: "duel",
  package_suggestions: package_variants,
};
