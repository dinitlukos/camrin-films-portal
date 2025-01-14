export const all_events = [
  {
    name: "Wedding",
    id: "wedding",
    status: false,
    image: null,
    services: [
      {
        id: "classic",
        label: "Golden",
        items: [
          { id: 1, label: "One functional photographer", status: false },
          { id: 2, label: "One functional videographer", status: true },
          { id: 3, label: "One candid photographer", status: true },
          { id: 4, label: "One candid videographer", status: true },
        ],
      },
      {
        id: "premium",
        label: "Diamond",
        items: [
          { id: 1001, label: "One functional photographer", status: true },
          { id: 1002, label: "One functional videographer", status: true },
          { id: 1003, label: "One candid photographer", status: true },
          { id: 1004, label: "Two candid videographer", status: true },
          { id: 1005, label: "One cinematic videographer", status: true },
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
        id: "classic",
        label: "Golden",
        items: [
          { id: 11, label: "One functional photographer", status: true },
          { id: 12, label: "One functional videographer", status: true },
        ],
      },
      {
        id: "premium",
        label: "Diamond",
        items: [
          { id: 1011, label: "One functional photographer", status: true },
          { id: 1012, label: "One functional videographer", status: true },
          { id: 1013, label: "One candid videographer", status: true },
        ],
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
        id: "classic",
        label: "Golden",
        items: [
          { id: 21, label: "One functional photographer", status: true },
          { id: 22, label: "One functional videographer", status: true },
          { id: 23, label: "One candid photographer", status: true },
          { id: 24, label: "One candid videographer", status: true },
        ],
      },
      {
        id: "premium",
        label: "Diamond",
        items: [
          { id: 1021, label: "One functional photographer", status: true },
          { id: 1022, label: "One functional videographer", status: true },
          { id: 1023, label: "One candid photographer", status: true },
          { id: 1024, label: "Two candid videographer", status: true },
          { id: 1025, label: "One cinematic videographer", status: true },
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
        id: "classic",
        label: "Golden",
        items: [],
      },
      {
        id: "premium",
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
        id: "classic",
        label: "Golden",
        items: [],
      },
      {
        id: "premium",
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
        id: "classic",
        label: "Golden",
        items: [],
      },
      {
        id: "premium",
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
        id: "classic",
        label: "Golden",
        items: [],
      },
      {
        id: "premium",
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
        id: "classic",
        label: "Golden",
        items: [],
      },
      {
        id: "premium",
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
        id: "classic",
        label: "Golden",
        items: [],
      },
      {
        id: "premium",
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
        id: "classic",
        label: "Golden",
        items: [],
      },
      {
        id: "premium",
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
        id: "classic",
        label: "Golden",
        items: [],
      },
      {
        id: "premium",
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
        id: "classic",
        label: "Golden",
        items: [],
      },
      {
        id: "premium",
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
        id: "classic",
        label: "Golden",
        items: [],
      },
      {
        id: "premium",
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
        id: "classic",
        label: "Golden",
        items: [],
      },
      {
        id: "premium",
        label: "Diamond",
        items: [],
      },
    ],
  },
];

export const event_default_values = {
  groom_name: "",
  groom_father_name: "",
  groom_mother_name: "",
  groom_location: "Ernakulam",
  groom_community: "Christian",
  bride_name: "",
  bride_father_name: "",
  bride_mother_name: "",
  bride_location: "Ernakulam",
  bride_community: "Christian",
  guest_contact: "",
  wedding_time: "",
  wedding_location: "",
  wedding_direction: "",
  package_types: "Bride & Groom",
  gold_package_price: 200000,
  diamond_package_price: 300000,
};
