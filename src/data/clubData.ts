import { Member, FacultyMentor, ClubEvent, GalleryItem, ReferenceLink } from '../types';

export const CLUB_META = {
  name: "The Aerospace Club",
  institution: "Madhav Institute of Technology & Science (MITS), Gwalior",
  founded: "18th October 2018",
  membersCount: "250+",
  tagline: "Exploring the cosmos and measuring the vastness of the universe.",
  vision: "To inspire students to consider the aerospace industry as a potential career opportunity, fostering innovation and creativity in aerospace engineering and space technology.",
  logo: "/assets/logo.png",
  fallbackLogo: "/assets/08d83c34-8936-4fc7-b437-688c889f9822.png",
  email: "aerospaceclub@mitsgwalior.in",
  youtube: "https://www.youtube.com/@AEROSPACECLUB",
  instagram: "https://www.instagram.com/aerospace.mits",
  web3formsKey: "19de58a8-c581-4023-80a1-7dfbb087edcd"
};

export const CONTACT_PERSONS = [
  {
    name: "Ocean Agarwal",
    role: "President",
    phone: "+91 63071 47033",
    tel: "+916307147033"
  },
  {
    name: "Shreya Goyal",
    role: "Technical Lead",
    phone: "+91 95890 72048",
    tel: "+919589072048"
  },
  {
    name: "Varenyam Joshi",
    role: "Social Media Manager",
    phone: "+91 70899 76257",
    tel: "+917089976257"
  }
];

export const HERO_SLIDES = [
  {
    src: "/assets/dfcd986e-c64a-4c7d-a2d1-f96792d8f96f.png",
    alt: "Aerospace Club Members - Group photo of passionate aerospace enthusiasts at MITS",
    tag: "AEROSPACE CREW",
    title: "Passionate Community of Innovators"
  },
  {
    src: "/assets/953f19b5-7c91-4aef-b14d-86e9b1370eab.png",
    alt: "Creative Event - Club members with colorful floor art celebrating aerospace innovation",
    tag: "CREATIVE CELEBRATIONS",
    title: "Aerospace Art & Innovation"
  },
  {
    src: "/gallery/gallery10.jpg",
    alt: "Achievement Recognition - Faculty and students celebrating aerospace club accomplishments",
    tag: "ACHIEVEMENTS",
    title: "Faculty & Student Excellence"
  },
  {
    src: "/assets/ebde7c0d-1d23-4e67-ac4d-ad7b76309c1a.png",
    alt: "Knowledge Session - Expert lecture session for aerospace club members",
    tag: "KNOWLEDGE CONCLAVE",
    title: "Expert Aerospace Lecture Series"
  },
  {
    src: "/assets/286e07d8-5828-4eaa-9e46-399c039a8712.png",
    alt: "Team Bonding - Aerospace club members enjoying social time together",
    tag: "TEAM CULTURE",
    title: "Collaboration & Camaraderie"
  },
  {
    src: "/assets/IMG_4921.jpg",
    alt: "Aerospace Club Members - Group photo of passionate aerospace enthusiasts at MITS",
    tag: "CORE CONCLAVE",
    title: "Shaping Tomorrow's Aerospace Pioneers"
  },
  {
    src: "/assets/gallery25.jpeg",
    alt: "SkyWatch 2.0 - Day 1 Diving into the deep space with school students",
    tag: "OUTREACH MISSION",
    title: "SkyWatch 2.0 Community Outreach"
  }
];

export const FACULTY_MENTORS: FacultyMentor[] = [
  {
    name: "Nitin Upadhyay",
    role: "Club Coordinator",
    department: "Mechanical, Assistant Professor",
    image: "/faculty/nitinSir.png"
  },
  {
    name: "Neeraj Mishra",
    role: "Club Mentor",
    department: "AIR, Assistant Professor",
    image: "/faculty/neerajSir.png"
  }
];

export const CLUB_MEMBERS: Member[] = [
  {
    "id": 1,
    "name": "Shreya Goyal",
    "post": "President",
    "image": "/members/shreya-goyal.jpg",
    "introduction": "The universe is full of mysteries waiting to be explored. As the president of Aerospace Club, I aim to spark that curiosity and create an environment where members can discover their interests in the vast world of aerospace, inspiring each other to look beyond what we know, keep asking What if? Why this? How?, and turn that curiosity into something worth building, and taking our club to new heights...",
    "category": "leadership"
  },
  {
    "id": 2,
    "name": "Ananya Dubey",
    "post": "Vice President",
    "image": "/members/ananya-dubey.jpg",
    "introduction": "As Vice President, I want to make our club a place where aerospace enthusiasts find their people, their ideas, and the space to dream bigger. I want to build the kind of Aerospace Club I would have wanted to find.",
    "category": "leadership"
  },
  {
    "id": 3,
    "name": "Mahima Sutrakar",
    "post": "Secretary",
    "image": "/members/mahima-sutrakar.jpg",
    "introduction": "As the Secretary of the Aerospace Club, I aspire to turn curiosity into action, ideas into innovation, and teamwork into meaningful achievements, while creating opportunities for every member to explore, learn, and grow across the vast realms of Aerospace. Looking forward to researching, experimenting, building, and reaching beyond the horizon together!",
    "category": "leadership"
  },
  {
    "id": 4,
    "name": "Abhinav Cheepa",
    "post": "Treasurer",
    "image": "/members/abhinav-cheepa.jpg",
    "introduction": "As the treasurer of the Aerospace Club, I will ensure that all our projects and events are fully funded and run without financial constraints.",
    "category": "leadership"
  },
  {
    "id": 5,
    "name": "Soumya Singh Kushwah",
    "post": "Astronomy Head",
    "image": "/members/soumya-singh-kushwah.jpg",
    "introduction": "As the Astronomy Head of the Aerospace Club, I aim to foster curiosity about the universe through meaningful discussions, observations, and research-oriented projects. I want to build a collaborative environment where members can explore astronomy, develop scientific thinking, and turn their curiosity about space into impactful work.",
    "category": "head"
  },
  {
    "id": 6,
    "name": "Shridhar Sharma",
    "post": "Aeronautics Head",
    "image": "/members/shridhar-sharma.jpg",
    "introduction": "As the Aeronautics Head of the Aerospace Club, I aim to work with space technologies and design some cool projects with new members.",
    "category": "head"
  },
  {
    "id": 7,
    "name": "Himanshu Pippal",
    "post": "Aeronautics Co-Head",
    "image": "/members/himanshu-pippal.jpg",
    "introduction": "As the Co-Head of the Aeronautics Club, I am determined to turn theoretical ideas into practical, well-researched projects. My focus is on developing precise blueprints and designs backed by proper research, analysis, and engineering principles, with the aim of creating projects that have a strong chance of successful execution. My primary areas of interest lie in designing, development, aeromodelling, and building innovative systems that can actually fly.",
    "category": "head"
  },
  {
    "id": 8,
    "name": "Akshat Soni",
    "post": "Event Lead",
    "image": "/members/akshat-soni.jpg",
    "introduction": "As the Event Lead of the Aerospace Club, my vision is to create an environment where curiosity turns into innovation and ideas take flight. I aim to organize engaging events, workshops, competitions, and interactive sessions. My role is to lead the planning and execution of events, coordinate with the team, encourage collaboration, and ensure that every activity becomes memorable.",
    "category": "head"
  },
  {
    "id": 9,
    "name": "Akmal Khan",
    "post": "Event Lead",
    "image": "/members/akmal-khan.jpg",
    "introduction": "As the Event Head, I'm here to make sure all the crazy, exciting ideas actually happen and, most importantly, that we have a lot of fun along the way!",
    "category": "head"
  },
  {
    "id": 10,
    "name": "Shahid Ansari",
    "post": "Event Co-Lead",
    "image": "/members/shahid-ansari.jpg",
    "introduction": "As the Event Co Lead of the Aerospace Club, I will capture all the beautiful and precious memories of all the events of my club and after so many years when people see all these memories they remember our beautiful Club.",
    "category": "head"
  },
  {
    "id": 11,
    "name": "Love Mishra",
    "post": "Event Co-Lead",
    "image": "/members/love-mishra.jpg",
    "introduction": "As an Event Co-Lead of the Aerospace Club, I help turn creative ideas into engaging experiences. I enjoy bringing people together, supporting smooth event execution, and creating memorable moments for our community.",
    "category": "head"
  },
  {
    "id": 12,
    "name": "Mahi Gupta",
    "post": "Website Head",
    "image": "/members/mahi-gupta.jpg",
    "introduction": "As the Website Head of the Aerospace Club, I aim to turn ideas into engaging digital experiences that strengthen our club's presence. I'm passionate about building, designing, and collaborating to create a website that reflects our team's creativity, innovation, and vision.",
    "category": "head"
  },
  {
    "id": 13,
    "name": "Anusha Anu Prasad",
    "post": "Website Co-Head",
    "image": "/members/anusha-anu-prasad.jpg",
    "introduction": "As the Website Co-Head of the Aerospace Club, I aim to build a strong digital presence for the club through creative, accessible, and engaging web experiences. I hope to make our website more than just a platform - a place that reflects the spirit of our club and celebrates our journey while making the club's work easier to discover and connect with.",
    "category": "head"
  },
  {
    "id": 14,
    "name": "Pragya Singh",
    "post": "Core Member",
    "image": "/members/pragya-singh.jpg",
    "introduction": "A curious aerospace enthusiast exploring the fields of aviation, astronomy, and space technology.",
    "category": "core"
  },
  {
    "id": 15,
    "name": "Vikash Dhakad",
    "post": "Core Member",
    "image": "/members/vikash-dhakad.jpg",
    "introduction": "As a member of the Aerospace Club, I am passionate about exploring aerospace technology, innovation, and real-world engineering. I aim to contribute to impactful projects, learn from fellow enthusiasts, and inspire others to explore the limitless possibilities of aviation and space.",
    "category": "core"
  },
  {
    "id": 16,
    "name": "Guru Tiwari",
    "post": "Core Member",
    "image": "/members/guru-tiwari.jpg",
    "introduction": "Serving as a Web Development Core Member, I contribute to building interactive web applications while guiding team members in video editing and graphic design. I aim to leverage both software development and visual media to amplify our club's projects, support all club initiatives, and inspire the next generation of space enthusiasts.",
    "category": "core"
  },
  {
    "id": 17,
    "name": "Pragati Chauhan",
    "post": "Core Member",
    "image": "/members/pragati-chauhan.jpg",
    "introduction": "As a member of astronomy research domain, my aim this year is to work on building the research environment in the club especially among freshers and contribute to the club's achievements and events.",
    "category": "core"
  },
  {
    "id": 18,
    "name": "Swadesh Kumar",
    "post": "Core Member",
    "image": "/members/swadesh-kumar.jpg",
    "introduction": "As a core member of the Club, I'm driven by the belief that great ideas grow through collaboration, and I work to build a space where every member can contribute, learn, and lead.",
    "category": "core"
  }
];

export const CLUB_EVENTS: ClubEvent[] = [
  {
    name: "SkyWatch",
    iconName: "Telescope",
    category: "Observation",
    description: "Night-sky observation program exploring constellations and planets.",
    report: "skywatch.pdf"
  },
  {
    name: "ISRO Exhibition",
    iconName: "Satellite",
    category: "Exhibition",
    description: "Showcase of India’s space tech with real models and prototypes.",
    report: "isro-exhibition.pdf"
  },
  {
    name: "Sheldons Round Table",
    iconName: "Rocket",
    category: "Technical",
    description: "Technical brainstorming sessions on future aerospace tech.",
    report: "sheldons-round-table.pdf"
  },
  {
    name: "Galactic Pi-rates",
    iconName: "Code",
    category: "Competition",
    description: "Technical competitions testing aerospace knowledge and coding.",
    report: "galactic-pi-rates.pdf"
  },
  {
    name: "ITAP",
    iconName: "Globe",
    category: "International",
    description: "International Program featuring guest lectures and seminars.",
    report: "itap.pdf"
  },
  {
    name: "Space Day Quiz 2k24",
    iconName: "Award",
    category: "Quiz",
    description: "Quiz challenging students on space history and technology.",
    report: "space-day-quiz-2k24.pdf"
  },
  {
    name: "Space Day 2k25",
    iconName: "Calendar",
    category: "Celebration",
    description: "Annual celebration with technical talks and cultural events.",
    report: "space-day-celebration-2k25.pdf"
  },
  {
    name: "Galactic Horizon",
    iconName: "Compass",
    category: "Exhibition",
    description: "Research exhibitions exploring future aerospace frontiers.",
    report: "galactic-horizon.pdf"
  },
  {
    name: "Celestial Frames",
    iconName: "Film",
    category: "Screening",
    description: "Space Documentary Screening.",
    report: "Celestial Frames.pdf"
  },
  {
    name: "All India Seminar",
    iconName: "BookOpen",
    category: "Seminar",
    description: "Prioritizing Safety Culture Across Aviation, Aeronotics, Astronomy and Space technology.",
    report: "all india seminar.pdf"
  },
  {
    name: "Info Session",
    iconName: "Radio",
    category: "Orientation",
    description: "Info Session on Aerospace blends precision, logistics, and sustainability.",
    report: "Info session.pdf"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { src: "/gallery/gallery0.jpg", alt: "Skywatch", title: "Skywatch" },
  { src: "/gallery/gallery10.jpg", alt: "Core Members", title: "Core Members" },
  { src: "/gallery/gallery2.jpg", alt: "India Space Week", title: "India Space Week" },
  { src: "/gallery/gallery3.jpg", alt: "Galactic pirates team", title: "Galactic pirates team" },
  { src: "/gallery/gallery4.jpg", alt: "Recruitment 2k24", title: "Recruitment 2k24" },
  { src: "/gallery/gallery5.jpg", alt: "GP Game", title: "GP Game" },
  { src: "/gallery/gallery6.jpg", alt: "Poster Making Competition", title: "Poster Making Competition" },
  { src: "/gallery/gallery7.jpg", alt: "Essay Writing", title: "Essay Writing" },
  { src: "/gallery/gallery8.jpg", alt: "CFun Time", title: "CFun Time" },
  { src: "/gallery/gallery9.jpg", alt: "Space Seminar", title: "Space Seminar" },
  { src: "/gallery/gallery1.jpg", alt: "All Members", title: "All Members" },
  { src: "/gallery/gallery11.jpg", alt: "Seminar", title: "Seminar" },
  { src: "/gallery/gallery12.jpg", alt: "SkyWatch event", title: "SkyWatch event" },
  { src: "/gallery/gallery13.jpg", alt: "SAC,Ahemdabad Scientist", title: "SAC,Ahemdabad Scientist" },
  { src: "/gallery/gallery14.jpeg", alt: "SkyWatch 2.0", title: "SkyWatch 2.0" },
  { src: "/gallery/gallery15.jpeg", alt: "SkyWatch 2.0", title: "SkyWatch 2.0" },
  { src: "/gallery/gallery16.jpeg", alt: "SkyWatch 2.0", title: "SkyWatch 2.0" },
  { src: "/gallery/gallery17.jpeg", alt: "Aarunya", title: "Aarunya" },
  { src: "/gallery/gallery18.jpeg", alt: "Aarunya", title: "Aarunya" },
  { src: "/gallery/gallery19.jpeg", alt: "Aarunya", title: "Aarunya" }
];

export const COSMOS_CORNER_DATA = {
  article: {
    title: "Did you know?",
    highlight: "For decades, astronomers believed that the earliest galaxies formed slowly, hundreds of millions of years after the Big Bang, taking long periods to grow, organize, and shine brightly. Early telescopes could only detect relatively mature galaxies, reinforcing the idea that the young universe was a dark and quiet place.However, observations from the James Webb Space Telescope (JWST) have transformed this understanding. JWST has detected galaxies whose light began its journey when the universe was only a few hundred million years old. These ancient systems already show surprising structure and brightness, indicating that galaxy formation started much earlier and progressed far more rapidly than previously thought.",
    content: "Because light takes time to travel across space, observing these galaxies is equivalent to looking back in time. The images captured by JWST are effectively cosmic baby photos of the universe, revealing what galaxies looked like shortly after the Big Bang. These discoveries are pushing astronomers to rethink existing models of cosmic evolution, star formation, and the role of dark matter in shaping the early universe.Rather than a slow and simple beginning, the universe now appears to have been a highly active and dynamic place from its earliest moments, filled with rapidly forming galaxies that laid the foundation for everything we see today.",
    additionalInfo: ""
  },
  references: [
    {
      title: "NASA – James Webb Space Telescope: Early Universe Discoveries",
      url: "https://www.nasa.gov/webb",
      description: "Official NASA discoveries documentation on the earliest stars and cosmic dawn."
    },
    {
      title: "ESA – Webb reveals galaxies from the cosmic dawn",
      url: "https://www.esa.int/Science_Exploration/Space_Science/Webb",
      description: "European Space Agency insights on deep universe infrared observations."
    },
    {
      title: "Wikipedia – James Webb Space Telescope discoveries",
      url: "https://en.wikipedia.org/wiki/James_Webb_Space_Telescope",
      description: "Comprehensive timeline of JWST cosmological observations."
    },
    {
      title: "📡 Space.com – Cosmic miracle! Webb discovers the earliest galaxy ever seen (MoM-z14)",
      url: "https://www.space.com/astronomy/cosmic-miracle-james-webb-space-telescope-discovers-the-earliest-galaxy-ever-seen",
      description: "Detailed report on candidate high-redshift early galaxy detection."
    }
  ] as ReferenceLink[],
  credits: "Content sourced from NASA, ESA, and peer-reviewed astrophysical releases."
};

export const QUIZ_DATA = {
  topic: "Saturn's rings",
  weekNumber: 1,
  question: "If Saturn's rings are so massive and bright, will they stay the same forever?",
  options: [
    {
      id: "a",
      text: "Yes, Saturn's magnetic field locks them permanently in gravitational equilibrium.",
      isCorrect: false
    },
    {
      id: "b",
      text: "No, they are slowly dissolving and falling into the planet via 'ring rain' and external disturbances.",
      isCorrect: true
    },
    {
      id: "c",
      text: "Yes, because new meteoroids constantly replenish the exact mass lost every year.",
      isCorrect: false
    },
    {
      id: "d",
      text: "No, they will freeze solid into a single rigid moon within the next century.",
      isCorrect: false
    }
  ],
  explanationParagraphs: [
    "Saturn's rings are not permanent structures. They are made mostly of ice particles mixed with dust and rock, and over time these particles are slowly pulled toward Saturn by its strong gravity. This process, often called ring rain, causes material from the rings to fall into the planet's atmosphere, making the rings gradually thinner.",
    "In addition, small moons, meteoroid impacts, and solar radiation constantly disturb the rings. These interactions break particles apart or push them out of their original orbits. Because of this continuous loss of material, scientists believe Saturn's rings are temporary on cosmic timescales and may largely disappear in the distant future."
  ],
  source: "Encyclopedia Britannica",
  instagramUrl: "https://www.instagram.com/aerospace.mits"
};

export const SKYWATCH_DATA = {
  year: "2026",
  eventName: "SKY WATCH 2.0",
  subtitle: "An immersive astronomy experience by the Aerospace Club",
  description: "SkyWatch brings the wonders of the universe to the MITS community through technical workshops and deep-sky observation. Featuring a special collaboration with the Aryabhat Foundation, this multi-day event aims to ignite scientific curiosity and inspire the next generation of space enthusiasts.",
  aboutText1: "SkyWatch is an immersive outreach program by the Aerospace Club, designed to bring the wonders of the universe to the MITS community through a blend of technical workshops and deep-sky observation. Whether you are a seasoned astrophotographer or someone experiencing the night sky for the first time, this multi-day event—featuring a special collaboration with the Aryabhat Foundation—aims to ignite scientific curiosity and inspire the next generation of space enthusiasts.",
  aboutText2: "With five professional-grade telescopes brought to campus, participants will embark on a journey beyond the atmosphere, demystifying the cosmos and replacing myths with scientific wonder.",
  whoCanAttend: "This event is completely free and open to all students of the college.",
  quickDetails: [
    {
      label: "Date & Time",
      value: "January 24-25",
      subvalue: "2026",
      icon: "Calendar"
    },
    {
      label: "Location",
      value: "Main Campus Ground",
      subvalue: "Open Sky Area",
      icon: "MapPin"
    },
    {
      label: "Participants",
      value: "Free for All",
      subvalue: "All MITS Students",
      icon: "Users"
    },
    {
      label: "Equipment",
      value: "5 Professional Telescopes",
      subvalue: "Expert Volunteers",
      icon: "Telescope"
    }
  ],
  collaboration: {
    partnerName: "Aryabhat Foundation, Bhopal",
    tagline: '\"Inculcating a Science-Based Temperament since 1995\"',
    description: "We are proud to partner with the Aryabhat Foundation, a premier non-profit organization dedicated to popularizing Astronomy and Basic Science. Based in Bhopal, the Foundation has spent over 25 years demystifying the cosmos for the younger generation, moving society away from superstition through authentic scientific engagement.",
    achievements: [
      {
        icon: "🌍",
        title: "Global Excellence",
        desc: "Groomed students who have secured 4 Gold and 1 Silver Medal at the International Astronomy Olympiads."
      },
      {
        icon: "🇮🇳",
        title: "National Outreach",
        desc: "Famous for the Aryabhat Astronomy Quiz, which has engaged thousands of students and sent winners to world-class observatories like Kodaikanal and Udaipur."
      },
      {
        icon: "🔭",
        title: "Hands-on Learning",
        desc: "Specialized in telescope-aided sky observations, solar workshops, and NASA-recognized research projects."
      }
    ]
  },
  scheduleDay: [
    {
      title: "Solar Activity Workshop",
      description: "A 30-minute expert presentation at the Conclave Hall followed by a 60-minute live solar observation session under the open sky."
    },
    {
      title: "Space Movie Show",
      description: "20-minute screenings of captivating space-science films."
    },
    {
      title: "School Outreach",
      description: "Special sessions hosted specifically for visiting school students."
    }
  ],
  scheduleNight: [
    {
      title: "The Stargazing Session",
      description: "Experience the cosmos through 5 professional telescopes guided by expert volunteers."
    },
    {
      title: "Observe Celestial Targets",
      description: "Observe the Moon, Jupiter, Saturn, Venus, the Pleiades, and the Orion constellation."
    },
    {
      title: "Visual Learning",
      description: "Live explanations using projectors to showcase star maps, constellation diagrams, and educational clips."
    },
    {
      title: "Cosmic Storytelling",
      description: "Engaging narratives that bring the history and mythology of the stars to life."
    }
  ],
  faqs: [
    {
      question: "Is the event free?",
      answer: "Yes, it is free for all students of our college."
    },
    {
      question: "Do I need a telescope?",
      answer: "No! We provide five high-quality telescopes for all participants."
    },
    {
      question: "What if it's cloudy?",
      answer: "We have indoor technical sessions and film screenings planned as backup."
    },
    {
      question: "Can I bring my own camera?",
      answer: "Absolutely. We encourage lunar and solar photography!"
    }
  ]
};
