import { package_variants } from './packages';

const single_events = [
  {
    name: 'Wedding',
    id: 'single_wedding',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 2111, label: 'One Photographer', status: true },
          { id: 2112, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 2121, label: 'One Funtion Photographer', status: true },
          { id: 2122, label: 'One Funtion Videographer', status: true },
          { id: 2123, label: 'One Candid Photographer', status: true },
          { id: 2124, label: 'One Candid Videographer', status: true },
          { id: 2125, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 2131, label: 'One Funtion Photographer', status: true },
          { id: 2132, label: 'One Funtion Videographer', status: true },
          { id: 2133, label: 'One Candid Photographer', status: true },
          { id: 2134, label: 'One Candid Videographer', status: true },
          { id: 2135, label: 'One Cinematic Videographer', status: true },
          { id: 2136, label: 'One Heli-Cam (drone)', status: true },
          {
            id: 2137,
            label: 'Instance Photo Sharing through AI Face Identification',
            status: true,
          },
          { id: 2138, label: 'Live Print', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 2141, label: 'One Funtion Photographer', status: true },
          { id: 2142, label: 'One Funtion Videographer', status: true },
          { id: 2143, label: 'Two Candid Photographer', status: true },
          { id: 2144, label: 'Two Candid Videographer', status: true },
          { id: 2145, label: 'One Cinematic Videographer', status: true },
          { id: 2146, label: 'One Heli-Cam (drone)', status: true },
          {
            id: 2147,
            label: 'Instance Photo Sharing through AI Face Identification',
            status: true,
          },
          { id: 2148, label: 'Live Print', status: true },
        ],
      },
    ],
  },
  {
    name: 'Wedding Eve (Groom)',
    id: 'single_wedding_eve_groom',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 2211, label: 'One Photographer', status: true },
          { id: 2212, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 2221, label: 'One Photographer', status: true },
          { id: 2222, label: 'One Videographer', status: true },
          { id: 2223, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 2231, label: 'One Photographer', status: true },
          { id: 2232, label: 'One Funtion Videographer', status: true },
          { id: 2233, label: 'One Candid Videographer', status: true },
          { id: 2234, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 2241, label: 'One Funtion Photographer', status: true },
          { id: 2242, label: 'One Funtion Videographer', status: true },
          { id: 2243, label: 'One Candid Photographer', status: true },
          { id: 2244, label: 'One Candid Videographer', status: true },
          { id: 2245, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Wedding Eve (Bride)',
    id: 'single_wedding_eve_bride',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 2311, label: 'One Photographer', status: true },
          { id: 2312, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 2321, label: 'One Photographer', status: true },
          { id: 2322, label: 'One Videographer', status: true },
          { id: 2323, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 2331, label: 'One Photographer', status: true },
          { id: 2332, label: 'One Funtion Videographer', status: true },
          { id: 2333, label: 'One Candid Videographer', status: true },
          { id: 2334, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 2341, label: 'One Funtion Photographer', status: true },
          { id: 2342, label: 'One Funtion Videographer', status: true },
          { id: 2343, label: 'One Candid Photographer', status: true },
          { id: 2344, label: 'One Candid Videographer', status: true },
          { id: 2345, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Engagement',
    id: 'single_engagement',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 2411, label: 'One Photographer', status: true },
          { id: 2412, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 2421, label: 'One Photographer', status: true },
          { id: 2422, label: 'One Funtion Videographer', status: true },
          { id: 2424, label: 'One Candid Videographer', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 2431, label: 'One Funtion Photographer', status: true },
          { id: 2432, label: 'One Funtion Videographer', status: true },
          { id: 2433, label: 'One Candid Photographer', status: true },
          { id: 2434, label: 'One Candid Videographer', status: true },
          { id: 2435, label: 'One Cinematic Videographer', status: true },
          { id: 2436, label: 'One Heli-Cam (drone)', status: true },
          {
            id: 2437,
            label: 'Instance Photo Sharing through AI Face Identification',
            status: true,
          },
          { id: 2438, label: 'Live Print', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 2441, label: 'One Funtion Photographer', status: true },
          { id: 2442, label: 'One Funtion Videographer', status: true },
          { id: 2443, label: 'Two Candid Photographer', status: true },
          { id: 2444, label: 'Two Candid Videographer', status: true },
          { id: 2445, label: 'One Cinematic Videographer', status: true },
          { id: 2446, label: 'One Heli-Cam (drone)', status: true },
          {
            id: 2447,
            label: 'Instance Photo Sharing through AI Face Identification',
            status: true,
          },
          { id: 2448, label: 'Live Print', status: true },
        ],
      },
    ],
  },
  {
    name: 'Reception (Bride)',
    id: 'single_reception_bride',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 2511, label: 'One Photographer', status: true },
          { id: 2512, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 2521, label: 'One Photographer', status: true },
          { id: 2522, label: 'One Videographer', status: true },
          { id: 2523, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 2531, label: 'One Photographer', status: true },
          { id: 2532, label: 'One Funtion Videographer', status: true },
          { id: 2533, label: 'One Candid Videographer', status: true },
          { id: 2534, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 2541, label: 'One Funtion Photographer', status: true },
          { id: 2542, label: 'One Funtion Videographer', status: true },
          { id: 2543, label: 'One Candid Photographer', status: true },
          { id: 2544, label: 'One Candid Videographer', status: true },
          { id: 2545, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Reception (Groom)',
    id: 'single_reception_groom',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 2611, label: 'One Photographer', status: true },
          { id: 2612, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 2621, label: 'One Photographer', status: true },
          { id: 2622, label: 'One Videographer', status: true },
          { id: 2623, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 2631, label: 'One Photographer', status: true },
          { id: 2632, label: 'One Funtion Videographer', status: true },
          { id: 2633, label: 'One Candid Videographer', status: true },
          { id: 2634, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 2641, label: 'One Funtion Photographer', status: true },
          { id: 2642, label: 'One Funtion Videographer', status: true },
          { id: 2643, label: 'One Candid Photographer', status: true },
          { id: 2644, label: 'One Candid Videographer', status: true },
          { id: 2645, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Save the Date',
    id: 'single_save_the_data',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [{ id: 2711, label: 'One Photographer', status: true }],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 2721, label: 'One Photographer', status: true },
          { id: 2722, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 2731, label: 'One Photographer', status: true },
          { id: 2732, label: 'One Videographer', status: true },
          { id: 2733, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 2741, label: 'One Photographer', status: true },
          { id: 2742, label: 'One Videographer', status: true },
          { id: 2743, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Pre Wedding Reception',
    id: 'single_pre_wedding_reception',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 2811, label: 'One Photographer', status: true },
          { id: 2812, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 2821, label: 'One Photographer', status: true },
          { id: 2822, label: 'One Videographer', status: true },
          { id: 2823, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 2831, label: 'One Photographer', status: true },
          { id: 2832, label: 'One Funtion Videographer', status: true },
          { id: 2833, label: 'One Candid Videographer', status: true },
          { id: 2834, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 2841, label: 'One Funtion Photographer', status: true },
          { id: 2842, label: 'One Funtion Videographer', status: true },
          { id: 2843, label: 'One Candid Photographer', status: true },
          { id: 2844, label: 'One Candid Videographer', status: true },
          { id: 2845, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Post Wedding',
    id: 'single_post_wedding',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 2911, label: 'One Photographer', status: true },
          { id: 2912, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 2921, label: 'One Photographer', status: true },
          { id: 2922, label: 'One Videographer', status: true },
          { id: 2923, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 2931, label: 'One Photographer', status: true },
          { id: 2932, label: 'One Funtion Videographer', status: true },
          { id: 2933, label: 'One Candid Videographer', status: true },
          { id: 2934, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 2941, label: 'One Funtion Photographer', status: true },
          { id: 2942, label: 'One Funtion Videographer', status: true },
          { id: 2943, label: 'One Candid Photographer', status: true },
          { id: 2944, label: 'One Candid Videographer', status: true },
          { id: 2945, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Haldi',
    id: 'single_haldi',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 21011, label: 'One Photographer', status: true },
          { id: 21012, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 21021, label: 'One Photographer', status: true },
          { id: 21022, label: 'One Videographer', status: true },
          { id: 21023, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 21031, label: 'One Photographer', status: true },
          { id: 21032, label: 'One Funtion Videographer', status: true },
          { id: 21033, label: 'One Candid Videographer', status: true },
          { id: 21034, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 21041, label: 'One Funtion Photographer', status: true },
          { id: 21042, label: 'One Funtion Videographer', status: true },
          { id: 21043, label: 'One Candid Photographer', status: true },
          { id: 21044, label: 'One Candid Videographer', status: true },
          { id: 21045, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Mehandi',
    id: 'single_mehandi',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 21111, label: 'One Photographer', status: true },
          { id: 21112, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 21121, label: 'One Photographer', status: true },
          { id: 21122, label: 'One Videographer', status: true },
          { id: 21123, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 21131, label: 'One Photographer', status: true },
          { id: 21132, label: 'One Funtion Videographer', status: true },
          { id: 21133, label: 'One Candid Videographer', status: true },
          { id: 21134, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 21141, label: 'One Funtion Photographer', status: true },
          { id: 21142, label: 'One Funtion Videographer', status: true },
          { id: 21143, label: 'One Candid Photographer', status: true },
          { id: 21144, label: 'One Candid Videographer', status: true },
          { id: 21145, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Sangeeth',
    id: 'single_sangeeth',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 21211, label: 'One Photographer', status: true },
          { id: 21212, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 21221, label: 'One Photographer', status: true },
          { id: 21222, label: 'One Videographer', status: true },
          { id: 21223, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 21231, label: 'One Photographer', status: true },
          { id: 21232, label: 'One Funtion Videographer', status: true },
          { id: 21233, label: 'One Candid Videographer', status: true },
          { id: 21234, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 21241, label: 'One Funtion Photographer', status: true },
          { id: 21242, label: 'One Funtion Videographer', status: true },
          { id: 21243, label: 'One Candid Photographer', status: true },
          { id: 21244, label: 'One Candid Videographer', status: true },
          { id: 21245, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Dekshina',
    id: 'single_dekshina',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 21311, label: 'One Photographer', status: true },
          { id: 21312, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 21321, label: 'One Photographer', status: true },
          { id: 21322, label: 'One Videographer', status: true },
          { id: 21323, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 21331, label: 'One Photographer', status: true },
          { id: 21332, label: 'One Funtion Videographer', status: true },
          { id: 21333, label: 'One Candid Videographer', status: true },
          { id: 21334, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 21341, label: 'One Funtion Photographer', status: true },
          { id: 21342, label: 'One Funtion Videographer', status: true },
          { id: 21343, label: 'One Candid Photographer', status: true },
          { id: 21344, label: 'One Candid Videographer', status: true },
          { id: 21345, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Bridal Shower',
    id: 'single_bride_shower',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 21411, label: 'One Photographer', status: true },
          { id: 21412, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 21421, label: 'One Photographer', status: true },
          { id: 21422, label: 'One Videographer', status: true },
          { id: 21423, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 21431, label: 'One Photographer', status: true },
          { id: 21432, label: 'One Funtion Videographer', status: true },
          { id: 21433, label: 'One Candid Videographer', status: true },
          { id: 21434, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 21441, label: 'One Funtion Photographer', status: true },
          { id: 21442, label: 'One Funtion Videographer', status: true },
          { id: 21443, label: 'One Candid Photographer', status: true },
          { id: 21444, label: 'One Candid Videographer', status: true },
          { id: 21445, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Chantham Charth',
    id: 'single_chantham_charth',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 21511, label: 'One Photographer', status: true },
          { id: 21512, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 21521, label: 'One Photographer', status: true },
          { id: 21522, label: 'One Videographer', status: true },
          { id: 21523, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 21531, label: 'One Photographer', status: true },
          { id: 21532, label: 'One Funtion Videographer', status: true },
          { id: 21533, label: 'One Candid Videographer', status: true },
          { id: 21534, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 21541, label: 'One Funtion Photographer', status: true },
          { id: 21542, label: 'One Funtion Videographer', status: true },
          { id: 21543, label: 'One Candid Photographer', status: true },
          { id: 21544, label: 'One Candid Videographer', status: true },
          { id: 21545, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Fixation',
    id: 'single_fixation',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 21611, label: 'One Photographer', status: true },
          { id: 21612, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 21621, label: 'One Photographer', status: true },
          { id: 21622, label: 'One Videographer', status: true },
          { id: 21623, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 21631, label: 'One Photographer', status: true },
          { id: 21632, label: 'One Funtion Videographer', status: true },
          { id: 21633, label: 'One Candid Videographer', status: true },
          { id: 21634, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 21741, label: 'One Funtion Photographer', status: true },
          { id: 21742, label: 'One Funtion Videographer', status: true },
          { id: 21743, label: 'One Candid Photographer', status: true },
          { id: 21744, label: 'One Candid Videographer', status: true },
          { id: 21745, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Temple Shoot',
    id: 'single_temple_shoot',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 21811, label: 'One Photographer', status: true },
          { id: 21812, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 21821, label: 'One Photographer', status: true },
          { id: 21822, label: 'One Videographer', status: true },
          { id: 21823, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 21831, label: 'One Photographer', status: true },
          { id: 21832, label: 'One Funtion Videographer', status: true },
          { id: 21833, label: 'One Candid Videographer', status: true },
          { id: 21834, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 21841, label: 'One Funtion Photographer', status: true },
          { id: 21842, label: 'One Funtion Videographer', status: true },
          { id: 21843, label: 'One Candid Photographer', status: true },
          { id: 21844, label: 'One Candid Videographer', status: true },
          { id: 21845, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
];

const duel_events = [
  {
    name: 'Wedding',
    id: 'duel_wedding',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 1110, label: 'One Funtion Photographer', status: true },
          { id: 1111, label: 'One Funtion Videographer', status: true },
          { id: 1112, label: 'One Candid Photographer', status: true },
          { id: 1113, label: 'One Candid Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 1121, label: 'One Funtion Photographer', status: true },
          { id: 1122, label: 'One Funtion Videographer', status: true },
          { id: 1123, label: 'One Candid Photographer', status: true },
          { id: 1124, label: 'One Candid Videographer', status: true },
          { id: 1125, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 1131, label: 'One Funtion Photographer', status: true },
          { id: 1132, label: 'One Funtion Videographer', status: true },
          { id: 1133, label: 'One Candid Photographer', status: true },
          { id: 1134, label: 'One Candid Videographer', status: true },
          { id: 1135, label: 'One Cinematic Videographer', status: true },
          { id: 1136, label: 'One Heli-Cam (drone)', status: true },
          {
            id: 1137,
            label: 'Instance Photo Sharing through AI Face Identification',
            status: true,
          },
          { id: 1138, label: 'Live Print', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 1141, label: 'One Funtion Photographer', status: true },
          { id: 1142, label: 'One Funtion Videographer', status: true },
          { id: 1143, label: 'Two Candid Photographer', status: true },
          { id: 1144, label: 'Two Candid Videographer', status: true },
          { id: 1145, label: 'One Cinematic Videographer', status: true },
          { id: 1146, label: 'One Heli-Cam (drone)', status: true },
          {
            id: 1147,
            label: 'Instance Photo Sharing through AI Face Identification',
            status: true,
          },
          { id: 1148, label: 'Live Print', status: true },
        ],
      },
    ],
  },
  {
    name: 'Wedding Eve (Groom)',
    id: 'duel_wedding_eve_groom',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 1211, label: 'One Photographer', status: true },
          { id: 1212, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 1221, label: 'One Photographer', status: true },
          { id: 1222, label: 'One Videographer', status: true },
          { id: 1223, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 1231, label: 'One Photographer', status: true },
          { id: 1232, label: 'One Funtion Videographer', status: true },
          { id: 1233, label: 'One Candid Videographer', status: true },
          { id: 1234, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 1241, label: 'One Funtion Photographer', status: true },
          { id: 1242, label: 'One Funtion Videographer', status: true },
          { id: 1243, label: 'One Candid Photographer', status: true },
          { id: 1244, label: 'One Candid Videographer', status: true },
          { id: 1245, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Wedding Eve (Bride)',
    id: 'duel_wedding_eve_bride',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 1311, label: 'One Photographer', status: true },
          { id: 1312, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 1321, label: 'One Photographer', status: true },
          { id: 1322, label: 'One Videographer', status: true },
          { id: 1323, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 1331, label: 'One Photographer', status: true },
          { id: 1332, label: 'One Funtion Videographer', status: true },
          { id: 1333, label: 'One Candid Videographer', status: true },
          { id: 1334, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 1341, label: 'One Funtion Photographer', status: true },
          { id: 1342, label: 'One Funtion Videographer', status: true },
          { id: 1343, label: 'One Candid Photographer', status: true },
          { id: 1344, label: 'One Candid Videographer', status: true },
          { id: 1345, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Engagement',
    id: 'duel_engagement',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 1411, label: 'One Funtion Photographer', status: true },
          { id: 1412, label: 'One Funtion Videographer', status: true },
          { id: 1413, label: 'One Candid Photographer', status: true },
          { id: 1414, label: 'One Candid Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 1421, label: 'One Funtion Photographer', status: true },
          { id: 1422, label: 'One Funtion Videographer', status: true },
          { id: 1423, label: 'One Candid Photographer', status: true },
          { id: 1424, label: 'One Candid Videographer', status: true },
          { id: 1425, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 1431, label: 'One Funtion Photographer', status: true },
          { id: 1432, label: 'One Funtion Videographer', status: true },
          { id: 1433, label: 'One Candid Photographer', status: true },
          { id: 1434, label: 'One Candid Videographer', status: true },
          { id: 1435, label: 'One Cinematic Videographer', status: true },
          { id: 1436, label: 'One Heli-Cam (drone)', status: true },
          {
            id: 1437,
            label: 'Instance Photo Sharing through AI Face Identification',
            status: true,
          },
          { id: 1438, label: 'Live Print', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 1441, label: 'One Funtion Photographer', status: true },
          { id: 1442, label: 'One Funtion Videographer', status: true },
          { id: 1443, label: 'Two Candid Photographer', status: true },
          { id: 1444, label: 'Two Candid Videographer', status: true },
          { id: 1445, label: 'One Cinematic Videographer', status: true },
          { id: 1446, label: 'One Heli-Cam (drone)', status: true },
          {
            id: 1447,
            label: 'Instance Photo Sharing through AI Face Identification',
            status: true,
          },
          { id: 1448, label: 'Live Print', status: true },
        ],
      },
    ],
  },
  {
    name: 'Reception (Bride)',
    id: 'duel_reception_bride',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 1511, label: 'One Photographer', status: true },
          { id: 1512, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 1521, label: 'One Photographer', status: true },
          { id: 1522, label: 'One Videographer', status: true },
          { id: 1523, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 1531, label: 'One Photographer', status: true },
          { id: 1532, label: 'One Funtion Videographer', status: true },
          { id: 1533, label: 'One Candid Videographer', status: true },
          { id: 1534, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 1541, label: 'One Funtion Photographer', status: true },
          { id: 1542, label: 'One Funtion Videographer', status: true },
          { id: 1543, label: 'One Candid Photographer', status: true },
          { id: 1544, label: 'One Candid Videographer', status: true },
          { id: 1545, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Reception (Groom)',
    id: 'duel_reception_groom',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 1611, label: 'One Photographer', status: true },
          { id: 1612, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 1621, label: 'One Photographer', status: true },
          { id: 1622, label: 'One Videographer', status: true },
          { id: 1623, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 1631, label: 'One Photographer', status: true },
          { id: 1632, label: 'One Funtion Videographer', status: true },
          { id: 1633, label: 'One Candid Videographer', status: true },
          { id: 1634, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 1641, label: 'One Funtion Photographer', status: true },
          { id: 1642, label: 'One Funtion Videographer', status: true },
          { id: 1643, label: 'One Candid Photographer', status: true },
          { id: 1644, label: 'One Candid Videographer', status: true },
          { id: 1645, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Save the Date',
    id: 'duel_save_the_data',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [{ id: 1711, label: 'One Photographer', status: true }],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 1721, label: 'One Photographer', status: true },
          { id: 1722, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 1731, label: 'One Photographer', status: true },
          { id: 1732, label: 'One Videographer', status: true },
          { id: 1733, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 1741, label: 'One Photographer', status: true },
          { id: 1742, label: 'One Videographer', status: true },
          { id: 1743, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Pre Wedding Reception',
    id: 'duel_pre_wedding_reception',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 1811, label: 'One Photographer', status: true },
          { id: 1812, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 1821, label: 'One Photographer', status: true },
          { id: 1822, label: 'One Videographer', status: true },
          { id: 1823, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 1831, label: 'One Photographer', status: true },
          { id: 1832, label: 'One Funtion Videographer', status: true },
          { id: 1833, label: 'One Candid Videographer', status: true },
          { id: 1834, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 1841, label: 'One Funtion Photographer', status: true },
          { id: 1842, label: 'One Funtion Videographer', status: true },
          { id: 1843, label: 'One Candid Photographer', status: true },
          { id: 1844, label: 'One Candid Videographer', status: true },
          { id: 1845, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Post Wedding',
    id: 'duel_post_wedding',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 1911, label: 'One Photographer', status: true },
          { id: 1912, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 1921, label: 'One Photographer', status: true },
          { id: 1922, label: 'One Videographer', status: true },
          { id: 1923, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 1931, label: 'One Photographer', status: true },
          { id: 1932, label: 'One Funtion Videographer', status: true },
          { id: 1933, label: 'One Candid Videographer', status: true },
          { id: 1934, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 1941, label: 'One Funtion Photographer', status: true },
          { id: 1942, label: 'One Funtion Videographer', status: true },
          { id: 1943, label: 'One Candid Photographer', status: true },
          { id: 1944, label: 'One Candid Videographer', status: true },
          { id: 1945, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Haldi',
    id: 'duel_haldi',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 11011, label: 'One Photographer', status: true },
          { id: 11012, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 11021, label: 'One Photographer', status: true },
          { id: 11022, label: 'One Videographer', status: true },
          { id: 11023, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 11031, label: 'One Photographer', status: true },
          { id: 11032, label: 'One Funtion Videographer', status: true },
          { id: 11033, label: 'One Candid Videographer', status: true },
          { id: 11034, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 11041, label: 'One Funtion Photographer', status: true },
          { id: 11042, label: 'One Funtion Videographer', status: true },
          { id: 11043, label: 'One Candid Photographer', status: true },
          { id: 11044, label: 'One Candid Videographer', status: true },
          { id: 11045, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Mehandi',
    id: 'duel_mehandi',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 11111, label: 'One Photographer', status: true },
          { id: 11112, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 11121, label: 'One Photographer', status: true },
          { id: 11122, label: 'One Videographer', status: true },
          { id: 11123, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 11131, label: 'One Photographer', status: true },
          { id: 11132, label: 'One Funtion Videographer', status: true },
          { id: 11133, label: 'One Candid Videographer', status: true },
          { id: 11134, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 11141, label: 'One Funtion Photographer', status: true },
          { id: 11142, label: 'One Funtion Videographer', status: true },
          { id: 11143, label: 'One Candid Photographer', status: true },
          { id: 11144, label: 'One Candid Videographer', status: true },
          { id: 11145, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Sangeeth',
    id: 'duel_sangeeth',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 11211, label: 'One Photographer', status: true },
          { id: 11212, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 11221, label: 'One Photographer', status: true },
          { id: 11222, label: 'One Videographer', status: true },
          { id: 11223, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 11231, label: 'One Photographer', status: true },
          { id: 11232, label: 'One Funtion Videographer', status: true },
          { id: 11233, label: 'One Candid Videographer', status: true },
          { id: 11234, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 11241, label: 'One Funtion Photographer', status: true },
          { id: 11242, label: 'One Funtion Videographer', status: true },
          { id: 11243, label: 'One Candid Photographer', status: true },
          { id: 11244, label: 'One Candid Videographer', status: true },
          { id: 11245, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Dekshina',
    id: 'duel_dekshina',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 11311, label: 'One Photographer', status: true },
          { id: 11312, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 11321, label: 'One Photographer', status: true },
          { id: 11322, label: 'One Videographer', status: true },
          { id: 11323, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 11331, label: 'One Photographer', status: true },
          { id: 11332, label: 'One Funtion Videographer', status: true },
          { id: 11333, label: 'One Candid Videographer', status: true },
          { id: 11334, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 11341, label: 'One Funtion Photographer', status: true },
          { id: 11342, label: 'One Funtion Videographer', status: true },
          { id: 11343, label: 'One Candid Photographer', status: true },
          { id: 11344, label: 'One Candid Videographer', status: true },
          { id: 11345, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Bridal Shower',
    id: 'duel_bride_shower',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 11411, label: 'One Photographer', status: true },
          { id: 11412, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 11421, label: 'One Photographer', status: true },
          { id: 11422, label: 'One Videographer', status: true },
          { id: 11423, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 11431, label: 'One Photographer', status: true },
          { id: 11432, label: 'One Funtion Videographer', status: true },
          { id: 11433, label: 'One Candid Videographer', status: true },
          { id: 11434, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 11441, label: 'One Funtion Photographer', status: true },
          { id: 11442, label: 'One Funtion Videographer', status: true },
          { id: 11443, label: 'One Candid Photographer', status: true },
          { id: 11444, label: 'One Candid Videographer', status: true },
          { id: 11445, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Chantham Charth',
    id: 'duel_chantham_charth',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 11511, label: 'One Photographer', status: true },
          { id: 11512, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 11521, label: 'One Photographer', status: true },
          { id: 11522, label: 'One Videographer', status: true },
          { id: 11523, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 11531, label: 'One Photographer', status: true },
          { id: 11532, label: 'One Funtion Videographer', status: true },
          { id: 11533, label: 'One Candid Videographer', status: true },
          { id: 11534, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 11541, label: 'One Funtion Photographer', status: true },
          { id: 11542, label: 'One Funtion Videographer', status: true },
          { id: 11543, label: 'One Candid Photographer', status: true },
          { id: 11544, label: 'One Candid Videographer', status: true },
          { id: 11545, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Fixation',
    id: 'duel_fixation',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 11611, label: 'One Photographer', status: true },
          { id: 11612, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 11621, label: 'One Photographer', status: true },
          { id: 11622, label: 'One Videographer', status: true },
          { id: 11623, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 11631, label: 'One Photographer', status: true },
          { id: 11632, label: 'One Funtion Videographer', status: true },
          { id: 11633, label: 'One Candid Videographer', status: true },
          { id: 11634, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 11741, label: 'One Funtion Photographer', status: true },
          { id: 11742, label: 'One Funtion Videographer', status: true },
          { id: 11743, label: 'One Candid Photographer', status: true },
          { id: 11744, label: 'One Candid Videographer', status: true },
          { id: 11745, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
  {
    name: 'Temple Shoot',
    id: 'duel_temple_shoot',
    status: false,
    image: null,
    services: [
      {
        id: 'silver',
        label: 'Silver',
        items: [
          { id: 11811, label: 'One Photographer', status: true },
          { id: 11812, label: 'One Videographer', status: true },
        ],
      },
      {
        id: 'golden',
        label: 'Golden',
        items: [
          { id: 11821, label: 'One Photographer', status: true },
          { id: 11822, label: 'One Videographer', status: true },
          { id: 11823, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'platinum',
        label: 'Platinum',
        items: [
          { id: 11831, label: 'One Photographer', status: true },
          { id: 11832, label: 'One Funtion Videographer', status: true },
          { id: 11833, label: 'One Candid Videographer', status: true },
          { id: 11834, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
      {
        id: 'diamond',
        label: 'Diamond',
        items: [
          { id: 11841, label: 'One Funtion Photographer', status: true },
          { id: 11842, label: 'One Funtion Videographer', status: true },
          { id: 11843, label: 'One Candid Photographer', status: true },
          { id: 11844, label: 'One Candid Videographer', status: true },
          { id: 11845, label: 'One Heli-Cam (drone)', status: true },
        ],
      },
    ],
  },
];

export const all_events = {
  single: single_events,
  duel: duel_events,
};

export const events_order = [
  'Fixation',
  'Save the Date',
  'Bridal Shower',
  'Chantham Charth',
  'Haldi',
  'Mehandi',
  'Sangeeth',
  'Temple Shoot',
  'Pre Wedding Reception',
  'Dekshina',
  'Engagement',
  'Wedding',
  'Wedding Eve (Groom)',
  'Wedding Eve (Bride)',
  'Reception (Bride)',
  'Reception (Groom)',
  'Post Wedding',
];
export const event_default_values = {
  groom_name: '',
  groom_father_name: '',
  groom_mother_name: '',
  groom_location: '',
  groom_community: '',
  bride_name: '',
  bride_father_name: '',
  bride_mother_name: '',
  bride_location: '',
  bride_community: '',
  customer_contact: '',
  customer_email: '',
  wedding_time: '',
  wedding_location: '',
  wedding_direction: '',
  package_type: 'duel',
  package_suggestions: package_variants,
  disable_whatsapp: false,
};
