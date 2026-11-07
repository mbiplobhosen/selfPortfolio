/* ==========================================================================
   content.js  —  আপনার ওয়েবসাইটের সব লেখা, লিংক ও ছবির তালিকা এই একটা ফাইলে।
   নিয়ম: শুধু " " (উদ্ধৃতি চিহ্ন) এর ভেতরের লেখা বদলাবেন। বাকি চিহ্নে হাত দেবেন না।
   যে জিনিস এখনো নেই সেটা "" (খালি) রাখুন — ওয়েবসাইট সেটা নিজে থেকে লুকিয়ে ফেলবে।
   ⚠ চিহ্নওয়ালা জায়গার লেখা Claude নিজে লিখেছে — আপনি পড়ে ঠিক করে নেবেন।
   বিস্তারিত: কীভাবে-বদলাবেন.md
   ========================================================================== */

window.SITE = {

  /* ---------- ১. মূল পরিচয় ---------- */
  name: "Md. Biplob Hosen",
  firstName: "Biplob",
  lastName: "Hosen",
  role: "Research Assistant",
  email: "mdbiplob9123@gmail.com",
  location: "Gazipur, Bangladesh",
  siteUrl: "https://biplob9123.github.io/self-portfolio/",

  /* মেনুর "Photography + Travel" গ্রুপের নাম — এখানে বদলালেই হবে */
  lens: { name: "Lens & Journeys", photography: "Photography", travel: "Travel blog" },

  /* যোগাযোগ ফর্ম: formspree.io বা web3forms.com থেকে পাওয়া লিংক এখানে বসান।
     খালি থাকলে ফর্ম "পাঠান" চাপলে ইমেইল অ্যাপ খুলবে (তাও কাজ করে)। */
  formEndpoint: "",

  /* লিংক: যেটা নেই সেটা "" রাখুন */
  links: {
    scholar:      "https://scholar.google.com/citations?user=9BasENkAAAAJ",
    researchgate: "https://www.researchgate.net/profile/Md-Biplob-Hosen-3",
    orcid:        "https://orcid.org/0009-0002-4502-288X",
    linkedin:     "https://www.linkedin.com/in/biplob-hosen-9aba1b254/",
    instagram:    "https://www.instagram.com/_biplob_/",
    facebook:     "https://www.facebook.com/Biplob.hosen.b/",
    facebookPage: "https://www.facebook.com/CapturedbyBiplob",
    github:       "https://github.com/biplob9123"
  },

  /* CV: cv.pdf নামে এই ফোল্ডারে রাখুন। না রাখলে "" দিন, বাটন লুকিয়ে যাবে */
  cv: "cv.pdf",

  /* ---------- ২. হোম পেজ ---------- */
  hero: {
    hello: "Welcome, I'm",
    kicker: "Water & environmental researcher  ·  Photographer",
    headline: "I read rivers — in data and in light.",
    sub: "I map floods, groundwater and heat with GIS, remote sensing and machine learning, and I photograph the landscapes and people of Bangladesh.",
    chips: ["GIS & Remote Sensing", "Hydrological Modelling", "AHP · Fuzzy AHP · ANN", "Photography"]
  },

  /* আপনার ছবি: হোমের জন্য photos/portrait.jpg, About-এর জন্য photos/about.jpg */
  portrait: "photos/portrait.jpg",
  aboutPhoto: "photos/about.jpg",

  /* সংখ্যায় আমি (ওয়েবসাইট নিজে গুনে দেখাবে) */
  stats: [
    { n: 9,  label: "Journal articles",         icon: "book" },
    { n: 17, label: "Conference papers",        icon: "mic" },
    { n: 2,  label: "Presenting-paper awards",  icon: "award" },
    { n: 9,  label: "Projects & tools",         icon: "folder" }
  ],

  /* ---------- ৩. আগ্রহের ক্ষেত্র (Home ও Research — প্রতিটায় ক্লিকে popup) ----------
     ⚠ popup-এর সাধারণ ব্যাখ্যাগুলো Claude লিখেছে। pubs = আপনার প্রকাশিত পেপারের id (নিচের publications থেকে) */
  interests: [
    { id: "gis-rs", art: "satellite", tone: "", title: "GIS & remote sensing in hydrology",
      short: "Satellite images and spatial layers that show how water moves across land.",
      text: ["Satellites and GIS let me see a whole river basin or district at once: land cover, elevation, rainfall, soil and surface temperature, layered on a single map.",
             "In hydrology they turn scattered measurements into continuous maps, so changes across space and time become visible and comparable."],
      points: ["Land use and land cover mapping", "Terrain and drainage analysis from elevation models", "Land surface temperature and vegetation indices", "Rainfall and climate data from satellite products"],
      tools: ["ArcGIS", "QGIS", "ERDAS Imagine", "Google Earth Engine"],
      pubs: ["gazipur", "ghorautra", "narshingdi", "sylhet"], work: [] },

    { id: "runoff", art: "river", tone: "sky", title: "Rainfall–runoff modelling",
      short: "How rain becomes runoff, streamflow and flood.",
      text: ["Rainfall–runoff modelling follows water from the sky to the river: how much soaks in, how much runs off and how fast it reaches the channel.",
             "It underpins flood forecasting, drainage design and basin-scale water resources planning."],
      points: ["Runoff estimation with the SCS-CN method", "Hydrological modelling with HEC-HMS and SWAT", "Flood hydraulics with HEC-RAS", "Streamflow response to land-use change (MSc thesis, Sangu River)"],
      tools: ["HEC-HMS", "HEC-RAS", "SWAT", "SCS-CN"],
      pubs: ["ghorautra"],
      work: ["Conference paper: future flood hazard in the Matamuhuri River Basin using HEC-HMS and HEC-RAS (RUET, 2025)", "Conference paper: runoff and potential soil erosion in the Dakatia river basin (RUET, 2025)"] },

    { id: "climate-water", art: "climate", tone: "rose", title: "Climate change impacts on water",
      short: "How shifting rainfall and temperature reshape hazards and water supply.",
      text: ["A changing climate alters rainfall, evaporation and temperature, and with them the water that rivers carry and aquifers store.",
             "I look at how those shifts could change hazards and water availability in the coming decades, using future scenarios rather than only past data."],
      points: ["Future rainfall scenarios (CMIP6; SSP-126, SSP-245, SSP-585)", "Projected groundwater potential for 2030, 2040 and 2050", "Future landslide susceptibility under climate and land-use change", "Drought monitoring with SPEI-12"],
      tools: ["CMIP6 scenarios", "SPEI", "Google Earth Engine", "Python"],
      pubs: ["gazipur", "landslide"],
      work: ["MSc thesis: land use and climate change impacts on streamflow in the Sangu River", "Paper in preparation: meteorological drought with SPEI-12 in Barisal and Khulna divisions"] },

    { id: "groundwater-erosion", art: "ground", tone: "gold", title: "Groundwater potential & soil erosion",
      short: "Where water is stored underground, and where topsoil is washing away.",
      text: ["Groundwater is the hidden half of Bangladesh's water supply, and topsoil is one of the land's most fragile assets.",
             "I map where groundwater is most likely to be recharged and stored, and where rain and runoff are stripping soil from a basin."],
      points: ["Groundwater potential zones from geology, lineaments, drainage, rainfall, soil and slope", "Soil loss estimation with RUSLE", "Accuracy checks against observed data (AUC / ROC)"],
      tools: ["AHP", "Frequency ratio", "RUSLE", "ArcGIS"],
      pubs: ["gazipur", "narshingdi", "ghorautra"],
      work: ["Conference paper: temporal changes in soil erosion in the Halda River Basin (IICASD 2024)"] },

    { id: "flood-risk", art: "flood", tone: "sky", title: "Flood susceptibility & risk",
      short: "Mapping where floods are most likely and who is most exposed.",
      text: ["Floods are Bangladesh's most familiar hazard, but not every place is equally exposed.",
             "I combine physical factors such as elevation, rainfall, drainage and land cover into maps that show where flooding is most likely, so planners can focus attention where it matters."],
      points: ["Flood susceptibility mapping with AHP", "Flood vulnerability with Fuzzy AHP (sixteen indicators in Sylhet)", "Multi-hazard assessment of flood, cyclone and landslide in the Halda River Basin", "Flood hazard modelling with HEC-HMS and HEC-RAS"],
      tools: ["AHP", "Fuzzy AHP", "HEC-HMS", "HEC-RAS"],
      pubs: ["tangail", "sylhet"],
      work: ["Under review: AHP-based multi-hazard susceptibility assessment of the Halda River Basin"] },

    { id: "ai-mcdm", art: "ai", tone: "gold", title: "AI & multi-criteria decision-making",
      short: "Weighing many factors at once, and letting data show the pattern.",
      text: ["Many planning questions have no single right answer: they balance several criteria at once. Multi-criteria methods such as AHP and Fuzzy AHP weigh those criteria in a transparent way.",
             "Neural networks learn patterns from data, so I often use them alongside AHP to compare, check and predict."],
      points: ["AHP and Fuzzy AHP weighting with consistency checks", "Artificial neural networks for prediction and comparison", "Site suitability for crops, solar hydrogen plants and EV charging stations", "Comparing methods against each other (AHP, Fuzzy AHP, frequency ratio, ANN)"],
      tools: ["AHP", "Fuzzy AHP", "ANN", "MATLAB"],
      pubs: ["dragonfruit", "hydrogen", "gazipur"],
      work: ["Research project: EV charging station siting in Dhaka District with AHP, Fuzzy AHP and ANN", "Conference paper: AHP and Fuzzy-AHP for solid waste disposal site selection in Barishal Division (Presenting Paper Award, IICASD 2024)"] },

    { id: "nbs", art: "nature", tone: "", title: "Nature-based solutions",
      short: "Working with wetlands, floodplains and vegetation instead of only concrete.",
      text: ["Wetlands, mangroves, floodplains and urban green space can soak up water, cool cities and buffer coasts.",
             "Nature-based solutions work with these natural systems instead of relying only on hard structures, and I want to build more of this thinking into planning studies."],
      points: ["Floodplains and wetlands as natural water storage", "Vegetation and mangroves as coastal buffers", "Urban green and blue space for cooling and stormwater"],
      tools: ["GIS", "Remote sensing"],
      pubs: [],
      work: ["Under review: strategic planning of urban green spaces for mitigating the urban heat island effect", "Conference paper: city-specific cooling thresholds of urban green and blue spaces in Bangladesh (ICSWER 2026)"] },

    { id: "green-infra", art: "city", tone: "sand", title: "Green infrastructure",
      short: "Trees, parks and permeable surfaces that make cities cooler and drier.",
      text: ["Green infrastructure brings trees, parks, green roofs and permeable surfaces into the way towns and cities are built.",
             "It manages stormwater, lowers heat and makes places more comfortable to live in."],
      points: ["Mapping land surface temperature and the urban heat island", "Finding where green space cools most", "Linking land-cover change with temperature"],
      tools: ["Landsat / Sentinel data", "Google Earth Engine", "ArcGIS"],
      pubs: [],
      work: ["Under review: land surface temperature response to land use land cover indices in Dhaka District", "Under review: LULC, land surface temperature and urban heat island dynamics in Gazipur District", "Conference paper: LST and LULC variability during summer in Narayanganj District (ICSWER 2026)"] }
  ],

  /* গবেষণার ক্ষেত্র (Research পেজের ৪টা বড় কার্ড) */
  areas: [
    { icon: "flood",  art: "flood",   tone: "",    title: "Flood & hazard risk",     text: "Flood, landslide and multi-hazard susceptibility mapping with AHP, Fuzzy AHP and hydrological models (HEC-HMS, HEC-RAS).", tags: ["Flood", "Landslide", "Multi-hazard"],
      more: ["Bangladesh sits on one of the world's busiest river deltas, so floods, landslides and cyclones shape daily life. I map where each hazard is most likely and how those hazards overlap.", "The maps feed into planning questions: where to build, where to protect and where to prepare first."],
      points: ["Flood susceptibility: Tangail", "Flood vulnerability with Fuzzy AHP: Sylhet", "Landslide susceptibility and projections: Hill Tracts", "Multi-hazard assessment: Halda River Basin (under review)"], pubs: ["tangail", "sylhet", "landslide"] },
    { icon: "water",  art: "ground",  tone: "sky", title: "Water resources",          text: "Groundwater potential, water quality, streamflow and blue–green water footprints at basin scale.", tags: ["Groundwater", "Streamflow", "Water quality"],
      more: ["Water is a resource before it is a hazard. I study where groundwater can be found and protected, how clean drinking water is, and how much water a river basin really has.", "At basin scale I look at streamflow and at blue and green water footprints to understand water security."],
      points: ["Groundwater potential zones: Gazipur and Narshingdi", "Drinking water quality and health risks: Modhumoti River, Paikgachha", "Water security in the Shitalakshya River Basin (research project)", "Streamflow of the Sangu River (MSc thesis)"], pubs: ["gazipur", "narshingdi", "dysona"] },
    { icon: "heat",   art: "climate", tone: "rose", title: "Climate & land surface",  text: "Land surface temperature, urban heat island, drought (SPEI) and air quality from satellite data.", tags: ["LST", "Drought", "Air quality"],
      more: ["Satellites record how hot the ground is, how green it is and how clear the air is. I use those records to follow heat, drought and air quality across towns and regions.", "Together with land-cover change, they show how cities and landscapes respond to a warming climate."],
      points: ["Land surface temperature and the urban heat island: Dhaka, Gazipur, Narayanganj", "Drought with SPEI-12: Barisal and Khulna", "Air quality from satellite data: industrial Gazipur"], pubs: [] },
    { icon: "target", art: "ai",      tone: "gold", title: "Spatial decision-making", text: "Site suitability for crops, solar hydrogen plants and EV charging stations with multi-criteria analysis and neural networks.", tags: ["AHP", "Fuzzy AHP", "ANN"],
      more: ["Where should a new crop be grown, a hydrogen plant built or a charging station placed? Questions like these depend on many factors at once.", "I use GIS with multi-criteria analysis and neural networks to turn those factors into suitability maps that decision-makers can read."],
      points: ["Dragon fruit suitability across Bangladesh", "Solar-powered green hydrogen sites", "EV charging stations in Dhaka (research project)", "Solid waste disposal sites in Barishal Division (conference paper)"], pubs: ["dragonfruit", "hydrogen"] }
  ],

  /* ---------- ৪. About ----------
     ⚠ নিচের লেখা Claude নতুন করে ব্যক্তিগত ভাষায় লিখেছে — আপনি পড়ে নিজের মতো করে নিন */
  story: {
    kicker: "About me",
    headline: "Water shapes the places I study; light shapes the places I photograph.",
    paragraphs: [
      "Hi, I'm Biplob. Most days I'm chasing one question: where does the water go, and who is standing in its way? I'm a water and environmental researcher based in Gazipur, currently completing my MSc in Water and Environmental Management at DUET, where I also work as a Research Assistant at the Institute of Water & Environment.",
      "Bangladesh is a delta, so water is never far from the story: floods in Sylhet and Tangail, groundwater beneath Gazipur and Narshingdi, landslides in the Hill Tracts, erosion along the Kuakata coast. I work with satellite images, GIS, field surveys and models to turn those stories into maps that people can actually use.",
      "I'm as happy in the field as at a screen. My undergraduate thesis took me to Gobra Union in Gopalganj to look at saline-water intrusion and farming, I worked through the Kuakata erosion project, and I fly a DJI Air 2S for aerial photography and surveys.",
      "The camera is the other half of me. I started the DUET Photographic Society, led its workshops as Chief Instructor and now advise it. I also made a video documentary for a GCA-funded coastal erosion project.",
      "What's next? A PhD, where I can keep working on climate-resilient water planning and flood-risk reduction with people who care about the same places."
    ],
    lines: [
      { icon: "layers", text: "I turn satellite data, field surveys and models into maps that planners can use." },
      { icon: "camera", text: "Behind the research is a camera: landscapes, wildlife and people of Bangladesh." },
      { icon: "users",  text: "I like building communities, from a photographic society to student organisations." }
    ],
    facts: [
      ["Based in",   "Gazipur, Bangladesh"],
      ["Position",   "Research Assistant, DUET · Lead Consultant, BGRC"],
      ["Degree",     "MSc, Water & Environmental Management (thesis ongoing)"],
      ["Looking for","PhD position (2026 →)"],
      ["Languages",  "Bangla, English"]
    ]
  },

  /* Education (About পেজে) */
  education: [
    { when: "2023 – present", art: "cert", title: "M.Sc. in Water and Environmental Management", org: "Dhaka University of Engineering & Technology (DUET)", note: "CGPA 3.92 / 4.00 (coursework). Thesis in progress.",
      text: ["Master's programme at the Institute of Water & Environment, DUET, in Gazipur.", "My thesis studies land use and climate change impacts on streamflow in the Sangu River."],
      points: ["CGPA 3.92 / 4.00 in coursework", "Thesis supervisor: Md. Rabiul Islam", "Thesis: Land use and climate change impacts on streamflow in the Sangu River (ongoing)"] },
    { when: "2018 – 2021", art: "cert", title: "B.Sc. (Honors) in Environmental Science and Disaster Management", org: "Gopalganj Science and Technology University", note: "CGPA 3.01 / 4.00",
      text: ["My undergraduate degree at Gopalganj Science and Technology University (GSTU).", "It is where I started with field surveys, student organisations and photography societies."],
      points: ["CGPA 3.01 / 4.00", "Final-year thesis: effect of saline-water intrusion on agriculture in Gobra Union, Gopalganj", "Active in the GSTU Photographic Society, RDSA and Green Voice"] }
  ],

  /* Beyond the lab (About পেজ — ক্লিকে popup). link = popup-এর নিচের বাটন */
  beyond: [
    { art: "camera",  tone: "gold", title: "Photography", short: "Landscapes, wildlife and people of Bangladesh.",
      text: ["Photography is how I look at the world beyond maps: rivers, fields, cities and the people who live in them.", "I shoot with a Canon EOS 77D, and a selection of favourite frames lives in the gallery."],
      link: { label: "Open the gallery", href: "photography.html" } },
    { art: "drone",   tone: "rose", title: "Drone & aerial", short: "Aerial photography and drone surveys.",
      text: ["A DJI Air 2S lets me see rivers, roads, campuses and farmland from above, both for photography and for survey work.", "Seeing a landscape from the air often explains what a map only hints at."],
      link: { label: "See aerial photos", href: "photography.html" } },
    { art: "film",    tone: "sky",  title: "Video & documentary", short: "A documentary for a GCA-funded erosion project.",
      text: ["After the GCA-funded Kuakata Sea Beach erosion project I made a video documentary for GCA.", "More about the documentary will be added here."],
      link: { label: "See the project", href: "project.html?p=kuakata-documentary-gca" } },
    { art: "people",  tone: "",     title: "Teaching", short: "Chief Instructor of the DUET Photographic Society.",
      text: ["I founded the DUET Photographic Society, served as its Chief Instructor in 2024–2025 and now advise it.", "Workshop sessions cover camera settings, composition and the basics of seeing light."],
      link: { label: "See workshop photos", href: "photography.html" } },
    { art: "compass", tone: "sand", title: "Travel", short: "Notes and photographs from trips around Bangladesh.",
      text: ["I like writing about places after I have been there. Patuakhali and Bogura are the first stories coming to the blog.", "Posts will appear in English and Bangla."],
      link: { label: "Open the travel blog", href: "travel.html" } }
  ],

  /* PhD / সম্ভাব্য সুপারভাইজারদের জন্য ব্লক (শুধু Home-এ) */
  phd: {
    title: "Looking for a PhD supervisor",
    text: "I'm applying for PhD positions in climate-resilient water resources planning, flood risk reduction and spatial environmental analysis. If your group works on related questions, I'd be glad to hear from you.",
    interests: ["Climate-resilient water resources", "Flood risk reduction", "GIS & remote sensing", "Machine learning for hydrology"]
  },

  /* How I got here — short = কার্ডের এক লাইন, text = popup-এর বিস্তারিত */
  journey: [
    { year: "2018", art: "cert",   title: "B.Sc. begins", short: "Environmental Science and Disaster Management at GSTU.",
      text: "Environmental Science and Disaster Management, Gopalganj Science and Technology University." },
    { year: "2018", art: "people", title: "Societies and student organisations", short: "Photographic society, RDSA and Green Voice.",
      text: "Active in the GSTU Photographic Society until 2023; Environmental and Photography Secretary of RDSA; photographer with Green Voice." },
    { year: "2022", art: "satellite", title: "GIS & remote sensing training", short: "Application of GIS and Remote Sensing in Research.",
      text: "Application of GIS and Remote Sensing in Research (Sept–Oct)." },
    { year: "2023", art: "lab",    title: "M.Sc. at DUET", short: "Water and Environmental Management, CGPA 3.92.",
      text: "Water and Environmental Management. CGPA 3.92 / 4.00 in coursework; thesis in progress." },
    { year: "2024", art: "medal",  title: "Research Assistant and first award", short: "Two DUET projects, Kuakata, a documentary and IICASD 2024 award.",
      text: "Carried out two DUET research projects (analysis, data collection, reporting); worked on the GCA-funded Kuakata erosion project and made a documentary; won a Presenting Paper Award at IICASD 2024; became Chief Instructor of the DUET Photographic Society (founded by me)." },
    { year: "2025", art: "chart",  title: "Papers in Q1 journals", short: "Co-authored papers, a second award and BGRC.",
      text: "Co-authored articles in Renewable Energy, Smart Agricultural Technology, Earth Systems and Environment and more. Second Presenting Paper Award (ICSHSD 2025). Advisor, DUET Photographic Society. Began work with BlueGreen Research and Consultancy (BGRC) as Lead Consultant, Environmental Research." },
    { year: "2026", art: "code",   title: "Flood paper published, Python course", short: "Sylhet paper in Discover Environment; Python at IICT.",
      text: "Fuzzy AHP flood vulnerability study of Sylhet published in Discover Environment. Completed a 60-hour Python course at IICT, DUET. Official Research Assistant at DUET's Institute of Water & Environment." },
    { year: "Next", art: "compass", title: "PhD", short: "Climate-resilient water resources planning.", now: true,
      text: "Climate-resilient water resources planning and flood risk reduction." }
  ],

  /* ---------- ৫. Experience পেজ ---------- */
  expIntro: {
    kicker: "Experience",
    headline: "Work that turns water questions into answers",
    sub: "Research assistantship, consulting, field surveys and student organisations: the places where I learned to turn questions about water into maps, models and decisions people can use."
  },

  experience: [
    { when: "2025 – present", art: "work", icon: "briefcase", title: "Lead Consultant, Environmental Research", org: "BlueGreen Research and Consultancy (BGRC)", now: true,
      points: ["Environmental research and consulting: IEE and EIA, flood and drought risk, GIS and remote sensing, hydrological modelling."],
      text: ["Since 2025 I have worked with BlueGreen Research and Consultancy (BGRC) as Lead Consultant, Environmental Research.", "The role brings research methods into consulting work for clients."],
      tags: ["IEE & EIA", "Flood & drought risk", "GIS & remote sensing", "Hydrological modelling"] },
    { when: "2024 – present", art: "lab", icon: "flask", title: "Research Assistant", org: "Institute of Water & Environment (IWE), DUET", now: true,
      points: ["Now an official Research Assistant at IWE.", "Did the complete analysis, data collection and final reporting for two UGC-funded teachers' research projects."],
      text: ["I joined DUET's Institute of Water & Environment as a research assistant and am now an official Research Assistant there.", "I did the complete analysis, data collection and final reporting for two UGC-funded teachers' research projects:"],
      list: ["EV charging station siting in Dhaka District with AHP, Fuzzy AHP and ANN (2024–25). Project Director: Md. Rabiul Islam.", "Water security in the Shitalakshya River Basin through multi-temporal blue and green water footprints (2025–26). Project Director: Dr. Mohammad Nazim Uddin."],
      tags: ["AHP", "Fuzzy AHP", "ANN", "Water footprint"],
      link: { label: "See the projects", href: "projects.html" } },
    { when: "2024 – 2025", art: "coast", icon: "video", title: "Researcher and documentary maker, Kuakata erosion project", org: "GCA-funded · observation at BUET IWFM",
      points: ["Research project on reducing erosion of Kuakata Sea Beach, observed at IWFM, BUET.", "Made a video documentary for GCA after the project."],
      text: ["A GCA-funded research project on reducing erosion of Kuakata Sea Beach, observed at the Institute of Water and Flood Management (IWFM), BUET.", "After the project I made a video documentary for GCA."],
      tags: ["Coastal erosion", "Kuakata", "Documentary"],
      link: { label: "See the project", href: "project.html?p=kuakata-erosion-gca" } }
  ],

  /* Organisations (Experience পেজ — ক্লিকে popup). ⚠ ছবি ও বিস্তারিত পরে আপনি দিলে বসাব।
     images: ["photos/org/xyz.jpg"] দিলে popup-এ ছবি দেখাবে */
  leadership: [
    { icon: "camera", art: "camera", tone: "gold", org: "DUET Photographic Society", when: "", text: "Started the society at DUET and trained members through photography workshops.",
      more: ["I founded the DUET Photographic Society and later served as its Chief Instructor and then its Advisor.", "The society runs workshops on camera settings, composition and light for students at DUET."],
      roles: [ { role: "Founder" }, { role: "Chief Instructor", when: "2024 – 2025" }, { role: "Advisor", when: "2025 – present" } ],
      images: [], link: { label: "See workshop photos", href: "photography.html" } },
    { icon: "users", art: "people", tone: "sky", org: "Rangpur Divisional Student Association (RDSA), GSTU", when: "", text: "Student organisation of Rangpur division at Gopalganj Science and Technology University.",
      more: ["RDSA is the student association of Rangpur division at Gopalganj Science and Technology University.", "I served on its executive side as Environmental Secretary and Photography Secretary."],
      roles: [ { role: "Environmental Secretary" }, { role: "Photography Secretary" } ], images: [] },
    { icon: "leaf", art: "nature", tone: "", org: "Green Voice", when: "", text: "Environmental volunteer organisation.",
      more: ["Green Voice is an environmental volunteer organisation.", "I was the photographer of its GSTU branch and convener of its Ranisankail Upazila branch."],
      roles: [ { role: "Photographer, GSTU branch" }, { role: "Convener, Ranisankail Upazila branch" } ], images: [] },
    { icon: "camera", art: "camera", tone: "rose", org: "GSTU Photographic Society", when: "2018 – 2023", text: "Part of the society through my undergraduate years.",
      more: ["I was part of the Photographic Society at Gopalganj Science and Technology University through my undergraduate years, from 2018 to 2023."],
      roles: [], images: [] }
  ],

  /* Learning on the ground — ⚠ involves/builds সাধারণভাবে Claude লিখেছে, আপনি নিজের অভিজ্ঞতা অনুযায়ী ঠিক করুন */
  fieldwork: [
    { icon: "leaf",  art: "leaf",  tone: "", title: "BSc thesis survey", text: "Effect of saline-water intrusion on agriculture in Gobra Union, Gopalganj.",
      involves: ["Field visits to the study area in Gobra Union, Gopalganj", "Collecting data on saline-water intrusion and its effect on agriculture", "Turning field observations into a thesis and a conference paper (Khulna University, 2024)"],
      builds: ["Designing a study from a research question", "Careful data recording in the field", "Connecting local conditions to the numbers"] },
    { icon: "flood", art: "coast", tone: "sky", title: "Kuakata coast", text: "Field work during the Kuakata Sea Beach erosion project.",
      involves: ["Field work during the GCA-funded Kuakata Sea Beach erosion project", "Observing a changing coastline first-hand", "Documenting the work on video for the GCA documentary", "Related conference paper: shoreline change at Kuakata with DSAS (IICASD 2024)"],
      builds: ["How coasts erode and recover", "Working in a team on a multi-partner project", "Telling a technical story on camera"] },
    { icon: "drone", art: "drone", tone: "rose", title: "Drone surveys", text: "Aerial surveys and photography with a DJI Air 2S.",
      involves: ["Flying a DJI Air 2S for aerial photography and survey work", "Capturing rivers, roads, campuses and farmland from above"],
      builds: ["Planning flights around weather and light", "Reading terrain and water from above", "Combining photography with spatial thinking"] },
    { icon: "chart", art: "chart", tone: "gold", title: "Survey data", text: "Water-quality and socio-economic surveys with KoboToolbox and SPSS.",
      involves: ["Digital questionnaires and field data collection with KoboToolbox", "Analysis of responses in SPSS", "Related work: socio-economic and water access study in southwestern Bangladesh (100 survey responses); drinking water quality studies on the Modhumoti River and in Paikgachha"],
      builds: ["Asking the right questions in the right way", "Cleaning and checking field data", "Linking people's experience with water measurements"] }
  ],

  referees: "Available on request.",

  /* ---------- ৬. Skills ----------
     tools = কোন টুল কী (সাধারণ বর্ণনা), uses = কীভাবে কাজে লাগাই, pubs = সংশ্লিষ্ট পেপারের id */
  skills: [
    { icon: "layers", art: "satellite", tone: "", group: "GIS & remote sensing", items: ["ArcGIS", "ArcGIS Pro", "QGIS", "ERDAS Imagine"], used: "Susceptibility and suitability mapping, land-cover and temperature analysis.",
      tools: [["ArcGIS", "Esri's desktop GIS for spatial analysis and map layouts."], ["ArcGIS Pro", "Esri's modern GIS application for analysis and cartography."], ["QGIS", "A free, open-source GIS."], ["ERDAS Imagine", "Software for processing and classifying satellite imagery."]],
      uses: ["Weighted overlay maps for flood, landslide and groundwater studies", "Land-cover classification and change", "Land surface temperature and vegetation analysis"], pubs: ["tangail", "narshingdi", "gazipur"] },
    { icon: "drop", art: "river", tone: "sky", group: "Hydrological modelling", items: ["SWAT", "HEC-HMS", "HEC-RAS", "Delft3D"], used: "Rainfall–runoff, streamflow, flood hazard and soil-erosion studies.",
      tools: [["SWAT", "Soil and Water Assessment Tool for basin-scale hydrology and water quality."], ["HEC-HMS", "Rainfall–runoff modelling from the US Army Corps of Engineers."], ["HEC-RAS", "River hydraulics and flood inundation modelling."], ["Delft3D", "A suite for flow, waves and sediment modelling."]],
      uses: ["Flood hazard modelling in the Matamuhuri River Basin", "Runoff and soil erosion studies", "Streamflow modelling for the MSc thesis"], pubs: ["ghorautra"] },
    { icon: "cpu", art: "ai", tone: "gold", group: "Decision analysis & AI", items: ["AHP", "Fuzzy AHP", "ANN", "MATLAB"], used: "Weighting criteria and predicting suitable sites and risk zones.",
      tools: [["AHP", "Analytic Hierarchy Process: weighting criteria by pairwise comparison."], ["Fuzzy AHP", "AHP with fuzzy numbers to handle uncertainty in expert judgement."], ["ANN", "Artificial neural networks for prediction and pattern learning."], ["MATLAB", "Numerical computing and modelling environment."]],
      uses: ["Site suitability for crops, hydrogen plants and charging stations", "Comparing AHP, Fuzzy AHP and neural networks", "Flood vulnerability weighting"], pubs: ["dragonfruit", "hydrogen", "sylhet"] },
    { icon: "chart", art: "chart", tone: "rose", group: "Statistics & field work", items: ["SPSS", "KoboToolbox"], used: "Water-quality and socio-economic surveys.",
      tools: [["SPSS", "Statistical software for survey and experimental data."], ["KoboToolbox", "Free tools for field surveys and data collection."]],
      uses: ["Questionnaire design and collection", "Statistical summaries of survey responses", "Water-quality data analysis"], pubs: ["dysona"] },
    { icon: "drone", art: "drone", tone: "sand", group: "Drone & field survey", items: ["DJI Air 2S", "Drone photography", "Field surveys"], used: "Aerial photography and drone surveys; field data collection.",
      tools: [["DJI Air 2S", "A compact camera drone with a 1-inch sensor."], ["Drone photography", "Aerial stills and video for landscapes and campuses."], ["Field surveys", "On-site data collection in rural and coastal areas."]],
      uses: ["Aerial photography of rivers, campuses and fields", "Survey support in the field"], pubs: [] },
    { icon: "code", art: "code", tone: "sky", group: "Programming & data", items: ["Python (intermediate)", "Google Earth Engine"], used: "Data analysis and building small tools.",
      tools: [["Python (intermediate)", "Data analysis and small tools; completed a 60-hour course at IICT, DUET in June 2026."], ["Google Earth Engine", "Cloud platform for analysing satellite data at scale."]],
      uses: ["Satellite-based air quality and temperature analysis", "Building the Raster Downscaling Tool"], pubs: [], link: { label: "See the Raster Downscaling Tool", href: "project.html?p=raster-downscaling-tool" } },
    { icon: "video", art: "camera", tone: "gold", group: "Photography & video", items: ["Photography", "Aerial photography", "Video documentary", "Teaching workshops"], used: "Shooting, editing and teaching; documentary for a GCA-funded project.",
      tools: [["Photography", "Landscapes, wildlife and people, shot on a Canon EOS 77D."], ["Aerial photography", "Photographs from a DJI Air 2S."], ["Video documentary", "A documentary for a GCA-funded erosion project."], ["Teaching workshops", "Chief Instructor of the DUET Photographic Society."]],
      uses: ["Photography workshops at DUET", "Documentary storytelling"], pubs: [], link: { label: "Open the gallery", href: "photography.html" } }
  ],

  gear: [
    { icon: "camera", art: "camera", tone: "gold", name: "Canon EOS 77D", note: "Photography",
      text: ["A 24.2-megapixel APS-C DSLR that I use for landscapes, wildlife, people and workshops."], link: { label: "Open the gallery", href: "photography.html" } },
    { icon: "drone", art: "drone", tone: "rose", name: "DJI Air 2S", note: "Aerial photography and drone surveys",
      text: ["A compact drone with a 1-inch sensor, 20-megapixel stills and 5.4K video, which I use for aerial photography and survey work."], link: { label: "See aerial photos", href: "photography.html" } },
    { icon: "code", art: "code", tone: "sky", name: "Python", note: "Intermediate: data analysis and building tools", level: 2,
      text: ["I use Python for data analysis and I am building small tools, such as a raster downscaling desktop app.", "In June 2026 I completed a 60-hour professional Python course at IICT, DUET."], link: { label: "See the Raster Downscaling Tool", href: "project.html?p=raster-downscaling-tool" } }
  ],

  training: [
    { when: "June 2026",      art: "code",      title: "Basic Python (60-hour professional course)", where: "IICT, DUET", text: "A 60-hour professional course on the basics of Python programming, held at the Institute of Information and Communication Technology (IICT), DUET." },
    { when: "July 2023",      art: "ai",        title: "Numerical Modeling, Artificial Intelligence, and GIS Technology", where: "", text: "Training on numerical modelling, artificial intelligence and GIS technology." },
    { when: "Sep – Oct 2022", art: "satellite", title: "Application of GIS and Remote Sensing in Research", where: "", text: "Training on using GIS and remote sensing in research work." }
  ],

  memberships: [
    "Member, Bangladesh Poribeshbid Society (BPS)",
    "Member, Research and Skill Development Society (RSDS)"
  ],

  awards: [
    { when: "October 2025",  title: "Presenting Paper Award", where: "1st International Conference on Science and Humanities for Sustainable Development (ICSHSD 2025), DUET", paper: "Evaluating drinking water quality and health risks in communities adjacent to the Modhumoti River, Bangladesh" },
    { when: "November 2024", title: "Presenting Paper Award", where: "1st International Conference on Recent Innovation in Civil Engineering and Architecture for Sustainable Development (IICASD 2024), DUET", paper: "A comparative study of AHP and Fuzzy-AHP approach in selecting solid waste disposal site in Barishal Division" }
  ],

  /* ---------- ৭. Research ---------- */
  research: {
    kicker: "Research",
    headline: "Mapping where water, climate and people meet.",
    statement: "My research uses GIS, remote sensing, multi-criteria decision analysis and machine learning to understand water-related risks in Bangladesh — floods, landslides, groundwater, drought, heat and soil erosion — and to point planners towards safer, more suitable places."
  },

  /* MSc থিসিস — ⚠ বিষয়টা সঠিক কি না নিশ্চিত করে নিন (CV অনুযায়ী লেখা) */
  thesis: {
    status: "Ongoing",
    title: "Land use and climate change impacts on streamflow in the Sangu River",
    supervisor: "Md. Rabiul Islam",
    where: "Institute of Water & Environment, DUET",
    question: "How do changes in land use and a changing climate alter the flow of the Sangu River?",
    area: "Sangu River basin, southeastern Bangladesh",
    methods: "",       /* যেমন: "SWAT model, CMIP6 scenarios" — চাইলে লিখুন */
    progress: ""       /* যেমন: "Model calibration underway" — চাইলে লিখুন */
  },

  /* ---------- ৫. জার্নাল পেপার ----------
     status: published | review | prep    doi = শুধু "10.xxxx/..." অংশ
     summary = ২ লাইনের সারকথা (খালি থাকলে দেখাবে না)   featured:true = হোমে দেখাবে
     "Under review" পেপারের জার্নালের নাম ওয়েবসাইটে দেখানো হয় না।                */
  publications: [
    { status: "published", year: 2026, featured: false, authors: "Kundu, S., Hosen, M. B., Popy, S., Tahera-Tun-Humayra, U., Rahman, M. M., Salauddin, M., et al.",
      title: "Application of the fuzzy analytical hierarchy process for flood vulnerability assessment in Sylhet District, Bangladesh",
      journal: "Discover Environment, 4(1), 588", doi: "10.1007/s44274-026-01031-5", q: "", summary: "Maps flood vulnerability across Sylhet District with sixteen physical indicators weighted by Fuzzy AHP. About 78% of the district falls in the high or very high vulnerability classes.",
      image: "maps/papers/sylhet.jpg",
      id: "sylhet", area: "Sylhet District, northeastern Bangladesh", method: "Fuzzy AHP with sixteen flood-conditioning indicators weighted in GIS. The pairwise comparison consistency ratio was 0.0592, which is acceptable.",
      keywords: ["Flood vulnerability", "Fuzzy AHP", "GIS", "Sylhet District"],
      findings: ["Low vulnerability: 4.48% of the district (149.5 km²) and moderate: 17.90%", "High is the largest class at 39.12% (1,306.8 km²)", "Together, high and very high classes cover about 78% of Sylhet District"] },
    { status: "published", year: 2026, featured: false, authors: "Kader, Z., Islam, M. R., Miah, M., Aziz, M. T., Haque, A., Tumon, M. S. H., Mamun, M. A. A., Hosen, M. B., Tahera-Tun-Humayra, U., Hasan, M., & Akanda, A. S.",
      title: "Performance assessment of multicriteria decision making techniques and artificial neural network to predict future groundwater potential zones",
      journal: "Ecological Indicators, 183, 114619", doi: "10.1016/j.ecolind.2026.114619", q: "Q1 · IF 7.7", summary: "Projects groundwater potential in Gazipur District for 2030, 2040 and 2050 under three climate scenarios, comparing AHP, frequency ratio and a neural network. Frequency ratio performed best (AUC 0.80). All three show moderate-to-high potential zones shrinking and low-potential zones growing.",
      image: "maps/papers/gazipur.jpg",
      id: "gazipur", area: "Gazipur District, central Bangladesh", method: "Thematic layers integrated with AHP, frequency ratio and an artificial neural network; future zones projected for 2030, 2040 and 2050 under three climate scenarios.",
      keywords: ["Analytic hierarchy process", "Frequency ratio", "Multi-criteria decision-making", "Groundwater potential zones"],
      findings: ["Frequency ratio gave the best accuracy (AUC 0.80)", "All three methods show moderate-to-high potential zones shrinking by 2050", "Low-potential zones are projected to grow"] },
    { status: "published", year: 2025, featured: true, authors: "Hosen, M. B., Islam, M. R., Tahera-Tun-Humayra, U., Sharker, R., Kader, Z., Aziz, M. T., Miah, M., Hasan, M., Pervin, R., Hossain, M. A., & Tofiquzzaman, M.",
      title: "Assessing land suitability for dragon fruit cultivation in Bangladesh: A GIS-based AHP approach",
      journal: "Smart Agricultural Technology, 12, 101241", doi: "10.1016/j.atech.2025.101241", q: "Q1 · IF 5.7",
      summary: "Combines ten criteria in a GIS-based AHP weighted overlay. About a third of Bangladesh's cultivable land (≈34%) comes out highly suitable, with the northwest the most favourable.",
      image: "maps/papers/dragonfruit.jpg",
      id: "dragonfruit", area: "Bangladesh, nationwide", method: "GIS-based weighted overlay of ten criteria weighted by AHP: temperature, pH, soil organic carbon, salinity, moisture, soil texture, slope, elevation, nutrients and precipitation.",
      keywords: ["Dragon fruit", "Land suitability", "GIS", "AHP"],
      findings: ["About 34% of cultivable land is highly suitable", "The northwest is the most favourable region", "Sensitivity analysis flagged temperature, soil pH, organic carbon, moisture and texture as the most critical factors"] },
    { status: "published", year: 2025, featured: false, authors: "Islam, M. R., Hosen, M. B., Hossain, M. M., Ayejoto, D. A., & Khan, M. Y. A.",
      title: "Future projections of landslide susceptibility in the Hill Tracts of Bangladesh: An AHP-based approach",
      journal: "Earth Systems and Environment, 9(4), 3017–3041", doi: "10.1007/s41748-025-00776-y", q: "Q1 · IF 4.7", summary: "Maps landslide susceptibility in the Hill Tracts with eleven factors and projects it to 2030, 2040 and 2050 under three climate pathways. About 47.55% of the area was highly or very highly susceptible in 2020; validation gave an AUC of 0.864.",
      image: "maps/papers/landslide.jpg",
      id: "landslide", area: "Hill Tracts, southeastern Bangladesh", method: "AHP in GIS with eleven causative factors; rainfall projections from the CNRM-CM6-1 model under SSP-126, SSP-245 and SSP-585 for 2030, 2040 and 2050.",
      keywords: ["AHP", "CMIP6", "Landslide susceptibility", "Projected land cover"],
      findings: ["In 2020, 47.55% of the area was highly or very highly susceptible", "The model was validated with an AUC of 0.864", "Susceptibility shifts across classes under each future scenario"] },
    { status: "published", year: 2025, featured: true, authors: "Aziz, M. T., Haque, A., Islam, M. R., Hosen, M. B., Kader, Z., Aziz, M. A., & Saha, O. R.",
      title: "Site suitability assessment for solar-powered green hydrogen production plants: A GIS-based AHP and Fuzzy AHP approach for Bangladesh",
      journal: "Renewable Energy, 254, 123675", doi: "10.1016/j.renene.2025.123675", q: "Q1 · IF 9.0", summary: "Finds the best places for solar-powered green hydrogen plants in Bangladesh using thirteen factors with AHP and Fuzzy AHP. The central region stands out, with about 42–43% of it rated very highly suitable.",
      image: "maps/papers/hydrogen.jpg",
      id: "hydrogen", area: "Bangladesh, nationwide", method: "GIS-based AHP and Fuzzy AHP combining thirteen factors that influence where a solar-powered green hydrogen plant should be built.",
      keywords: ["Green hydrogen", "Solar power", "AHP", "Fuzzy AHP"],
      findings: ["The central region stands out as most suitable", "About 42–43% of the central region is rated very highly suitable", "Fuzzy AHP and AHP results are compared side by side"] },
    { status: "published", year: 2025, featured: false, authors: "Tahera-Tun-Humayra, U., Islam, M. R., Hosen, M. B., Kader, Z., Sharker, R., Hasan, M., Aziz, M. T., Miah, M., & Pervin, R.",
      title: "Groundwater potential zone mapping using analytical hierarchy process (AHP) and GIS for Narshingdi District, Bangladesh",
      journal: "Environmental Challenges, 21, 101335", doi: "10.1016/j.envc.2025.101335", q: "Q1 · CiteScore 11.0", summary: "Maps groundwater potential in Narshingdi District from nine thematic layers weighted by AHP, validated at 88.5% accuracy. Most of the district (68.1%) has moderate potential, while high and very high zones are limited.",
      image: "maps/papers/narshingdi.jpg",
      id: "narshingdi", area: "Narshingdi District, central Bangladesh", method: "Nine thematic layers (including geology, land use, lineament density, drainage density, rainfall, soil, slope and roughness) weighted by AHP in GIS.",
      keywords: ["AHP", "Remote sensing", "GIS", "Groundwater potential zones"],
      findings: ["Validated at 88.5% accuracy", "Most of the district (68.1%) has moderate potential", "High and very high zones are limited"] },
    { status: "published", year: 2025, featured: false, authors: "Sharker, R., Islam, M. R., Hosen, M. B., Kader, Z., Aziz, M. T., Tahera-Tun-Humayra, U., Hossain, M. A., Pervin, R., Hasan, M., & Roy, A.",
      title: "GIS-based AHP approach to flood susceptibility assessment in Tangail district, Bangladesh",
      journal: "Journal of Earth System Science, 134(1), 26", doi: "10.1007/s12040-024-02480-3", q: "Q2 · IF 1.3", summary: "Combines ten flood-causing factors with AHP in GIS and classes Tangail into five risk levels. About 15.74% of the area (536.70 km²) falls in the very high-risk class and 11.79% in the very low class.",
      image: "maps/papers/tangail.jpg",
      id: "tangail", area: "Tangail District, central Bangladesh", method: "Ten flood-causing factors (elevation, topographic wetness index, land use, slope, soil, distance to rivers and roads, NDVI, drainage density, precipitation) weighted by AHP in GIS.",
      keywords: ["Flood susceptibility", "AHP", "GIS", "MCDA"],
      findings: ["Five risk classes from very low to very high", "15.74% of the area (536.70 km²) falls in the very high risk class", "11.79% is very low risk"] },
    { status: "published", year: 2025, featured: false, authors: "Miah, M., Islam, M. R., Imran, H. M., Kader, Z., Aziz, M. T., Mamun, M. A. A., Hosen, M. B., Islam, M. R., Tahera-Tun-Humayra, U., & Hasan, M.",
      title: "Assessing soil erosion in the Ghorautra River Basin of Bangladesh: Using SCS-CN and RUSLE methods within the GIS-RS framework",
      journal: "Journal of the Indian Society of Remote Sensing, 53(12), 4383–4403", doi: "10.1007/s12524-025-02276-y", q: "Q2 · IF 2.2", summary: "Estimates runoff and soil loss for 2010–2020 with SCS-CN and RUSLE. Average annual runoff was about 565 mm (21% of rainfall) and average soil loss 0.77 t/ha/yr, about 0.13 million tonnes of topsoil a year, with 2017 the worst year.",
      image: "maps/papers/ghorautra.jpg",
      id: "ghorautra", area: "Ghorautra River Basin, Bangladesh", method: "Runoff estimated with the SCS-CN model and soil loss with RUSLE, from rainfall, soil texture, hydrologic soil groups and land use, for 2010 to 2020.",
      keywords: ["Rainfall", "Runoff", "SCS-CN", "RUSLE", "GIS"],
      findings: ["Runoff peaked at 1,698 mm in 2017 and was lowest at 107 mm in 2012", "Average annual runoff was 564.90 mm, about 21% of rainfall", "Average soil loss was 0.77 t/ha/yr, about 0.13 million tonnes of topsoil a year; 2017 was the worst year (1.12 t/ha/yr)"] },
    { status: "published", year: 2025, featured: false, authors: "Bhowmik, D., Kader, Z., Hosen, M. B., & Hossain, S.",
      title: "Exploring socioeconomic vulnerability and natural disasters impacts on water access in Southwestern Bangladesh",
      journal: "DYSONA – Applied Science, 6(1), 186–199", doi: "10.30493/das.2024.483646", q: "",
      summary: "Looks at how salinity, cyclones and resource degradation add up in the southwest, and how poverty and limited water access make their impacts worse. Based on 100 survey responses in three sub-districts of southwestern Bangladesh; about 75% reported dry-season drinking water shortages.",
      image: "maps/papers/dysona.jpg",
      id: "dysona", area: "Mollahat, Fakirhat and Chitalmari sub-districts, southwestern Bangladesh", method: "Household surveys (100 responses), focus group discussions, participatory research and key informant interviews.",
      keywords: ["Socioeconomic vulnerability", "Water", "Natural disasters", "Bangladesh"],
      findings: ["40% of respondents described themselves as very poor", "About 40% used pond sand filters for drinking water", "75% reported drinking water shortages in the dry season (mid-March to mid-May)"] },

    { status: "review", year: 2025, authors: "Tahera-Tun-Humayra, U., Islam, M. R., Hosen, M. B., Sharker, R., Aziz, M. T., Kader, Z., Miah, M., Hasan, M., & Pervin, R.",
      title: "Projected land surface temperature response to land use land cover indices in Dhaka District, Bangladesh" },
    { status: "review", year: 2025, authors: "Mona, M. G., Tahera-Tun-Humayra, U., & Hosen, M. B.",
      title: "Hydro-chemical analysis of groundwater and river water for drinking in Paikgachha Upazila of Khulna District, Bangladesh" },
    { status: "review", year: 2025, authors: "Islam, M. R., Tahera-Tun-Humayra, U., Alam, M. A., Hosen, M. B., & Aziz, M. T.",
      title: "Strategic planning of urban green spaces for mitigating the urban heat island effect: A threshold-based perspective" },
    { status: "review", year: 2025, authors: "Sharker, R., Islam, M. R., Hosen, M. B., Tahera-Tun-Humayra, U., Aziz, M. T., Kader, Z., Hasan, M., Pervin, R., & Hossain, M. A.",
      title: "Spatiotemporal change dynamics in land use and land cover, land surface temperature, and urban heat island in Gazipur District, Bangladesh" },
    { status: "review", year: 2025, authors: "Sharker, R., Islam, M. R., Hosen, M. B., Kader, Z., Tahera-Tun-Humayra, U., Miah, M., Aziz, M. T., Pervin, R., & Hasan, M.",
      title: "AHP-based multi-hazard (flood, cyclone, and landslide) susceptibility assessment of Halda River Basin, Bangladesh" },
    { status: "review", year: 2025, authors: "Miah, M., Islam, M. R., Kader, Z., Aziz, M. T., Hosen, M. B., Tahera-Tun-Humayra, U., Haque, A., Pervin, R., Hossain, M. A., & Hasan, M.",
      title: "Delineating groundwater recharge potential zones: A geoinformatics-based spatial analysis" },

    { status: "prep", year: "", authors: "Hosen, M. B., et al.",
      title: "Spatiotemporal assessment of meteorological drought using SPEI-12 in Barisal and Khulna divisions, Bangladesh" }
  ],

  conferences: [
    { year: 2026, title: "Spatiotemporal assessment of LST and LULC variability during summer in Narayanganj District, Bangladesh", venue: "ICSWER 2026 · April 2026" },
    { year: 2026, title: "City-specific cooling thresholds of urban green and blue spaces for urban heat island mitigation in Bangladesh", venue: "ICSWER 2026 · April 2026" },
    { year: 2026, title: "Satellite-based assessment of air quality dynamics in the industrial city of Gazipur, Bangladesh", venue: "ICSWER 2026 · April 2026" },
    { year: 2026, title: "Assessing flood vulnerability in Sylhet District with an AHP-based GIS approach", venue: "8th International Conference on Civil Engineering for Sustainable Development · February 2026" },
    { year: 2026, title: "Spatial analysis of multi-hazard risks in the Halda River Basin through AHP-based modeling", venue: "8th International Conference on Civil Engineering for Sustainable Development · February 2026" },
    { year: 2025, title: "Assessing the future flood hazard in the Matamuhuri River Basin using HEC-HMS and HEC-RAS", venue: "Intl. Conf. on Civil Engineering Research & Innovations, RUET · December 2025" },
    { year: 2025, title: "Assessment of runoff and potential soil erosion in the Dakatia river basin, Bangladesh", venue: "Intl. Conf. on Civil Engineering Research & Innovations, RUET · December 2025" },
    { year: 2025, title: "Evaluating drinking water quality and health risks in communities adjacent to the Modhumoti River, Bangladesh", venue: "ICSHSD 2025, DUET · October 2025", award: true },
    { year: 2025, title: "Hydro-chemical assessment of groundwater and river water quality for drinking in Paikgachha Upazila, Khulna District", venue: "ICSHSD 2025, DUET · October 2025" },
    { year: 2025, title: "Assessment of heavy metal concentration and the physicochemical parameters of the outlet wastewater: industrial zone, Gazipur", venue: "ICSHSD 2025, DUET · October 2025" },
    { year: 2024, title: "A comparative study of AHP and Fuzzy-AHP approach in selecting solid waste disposal site in Barishal Division", venue: "IICASD 2024, DUET · November 2024", award: true },
    { year: 2024, title: "Shoreline change assessment using DSAS technique: A case study on the coast of Kuakata", venue: "IICASD 2024, DUET · November 2024" },
    { year: 2024, title: "Measuring land surface temperature (LST) response to LULC indices in Dhaka District, Bangladesh", venue: "IICASD 2024, DUET · November 2024" },
    { year: 2024, title: "Assessment of temporal changes in soil erosion at the Halda River Basin, Bangladesh", venue: "IICASD 2024, DUET · November 2024" },
    { year: 2024, title: "Evaluating the saline water impact on agriculture in Gobra Union, Gopalganj", venue: "2nd International Conference on Environment, Khulna University · March 2024" },
    { year: 2024, title: "An evaluation of socio-economic condition and water quality parameters of Kopotokkho River", venue: "2nd International Conference on Environment, Khulna University · March 2024" },
    { year: 2024, title: "Groundwater potential zone mapping using AHP and GIS for Narayanganj District, Bangladesh", venue: "2nd International Conference on Environment, Khulna University · March 2024" }
  ],

  /* ---------- ৮. Projects (প্রকাশনা নয়, আলাদা ট্যাব) ----------
     নতুন প্রজেক্ট যোগ করতে একটা { ... }, ব্লক কপি করুন। id হবে ছোট ইংরেজি নাম (স্পেস ছাড়া)।
     kind: research | consulting | tool | media   (ওপরের ফিল্টার ট্যাবের জন্য)
     art = ছবি না থাকলে যে ছবি-আঁকা দেখাবে (ev, river, coast, film, raster, climate, air, factory)
     photo = আপনার ছবি (projects ফোল্ডারে রাখুন)। ছবি না থাকলে art দেখায়।
     problem / method / results / materials — যেটা খালি সেটা পেজে দেখাবে না।                      */
  projects: [
    { id: "iee-etp-sirajganj", kind: "consulting", art: "factory", featured: true, status: "ongoing", statusLabel: "Ongoing project",
      title: "IEE and ETP design for a paper factory, Sirajganj", period: "Ongoing",
      role: "", lead: "", org: "",
      summary: "An Initial Environmental Examination (IEE) and the design of an Effluent Treatment Plant (ETP) for a paper factory in Sirajganj, Bangladesh.",
      tags: ["IEE", "ETP design", "Sirajganj", "Industrial wastewater"],
      problem: "Paper manufacturing uses large volumes of water and releases wastewater that must be treated before it reaches rivers. This project covers the environmental assessment and the treatment plant design for the factory.",
      method: "An IEE describes the factory's environmental setting, the likely impacts and the measures to reduce them. The ETP design sizes the treatment units for the factory's wastewater.",
      results: "", materials: [], photo: "photos/projects/sirajganj-etp.jpg", map: "" },

    { id: "ev-charging-dhaka", kind: "research", art: "ev", featured: true, status: "ongoing", statusLabel: "Research project",
      title: "EV charging station siting, Dhaka District", period: "2024 – 2025",
      role: "Research Assistant", lead: "Project Director: Md. Rabiul Islam", org: "Institute of Water & Environment, DUET",
      summary: "Choosing optimal sites for electric-vehicle charging stations in Dhaka by comparing AHP, Fuzzy AHP and ANN.",
      tags: ["AHP", "Fuzzy AHP", "ANN", "Dhaka"],
      problem: "Charging stations need to sit where demand, access and the power grid line up; a poor siting decision wastes money and slows adoption.",
      method: "Multi-criteria site suitability analysis in GIS, with weights from AHP and Fuzzy AHP, and an artificial neural network used for comparison.",
      results: "", materials: [], photo: "photos/projects/ev-charging-dhaka.jpg", map: "maps/evcs-dhaka.jpg" },

    { id: "shitalakshya-water", kind: "research", art: "river", featured: true, status: "ongoing", statusLabel: "Research project",
      title: "Water security in the Shitalakshya River Basin", period: "2025 – 2026",
      role: "Research Assistant", lead: "Project Director: Dr. Mohammad Nazim Uddin", org: "Institute of Water & Environment, DUET",
      summary: "Multi-temporal blue and green water footprints to understand water security across the Shitalakshya basin.",
      tags: ["Water footprint", "Basin", "Remote sensing"],
      problem: "", method: "Blue and green water footprint assessment across several time periods using remote-sensing and climate data.",
      results: "", materials: [], photo: "photos/projects/shitalakshya.jpg", map: "maps/shitalakshya.jpg" },

    { id: "msc-thesis", kind: "research", art: "river", featured: false, status: "thesis", statusLabel: "MSc thesis · ongoing",
      title: "Land use, climate change and streamflow in the Sangu River", period: "2023 – ongoing",
      role: "MSc student", lead: "Supervisor: Md. Rabiul Islam", org: "Institute of Water & Environment, DUET",
      summary: "How land-use change and a changing climate alter streamflow in the Sangu River basin.",
      tags: ["Streamflow", "Land use", "Climate"],
      problem: "", method: "", results: "", materials: [], photo: "photos/projects/sangu.jpg", map: "maps/sangu.jpg" },

    { id: "kuakata-erosion-gca", kind: "research", art: "coast", featured: true, status: "done", statusLabel: "Completed research project",
      title: "Kuakata Sea Beach erosion reduction", period: "2024 – 2025",
      role: "Researcher", lead: "", org: "Observation at BUET IWFM · funded by GCA",
      summary: "A GCA-funded research project on reducing erosion of Kuakata Sea Beach, observed at the Institute of Water and Flood Management (IWFM), BUET.",
      tags: ["Coastal erosion", "Kuakata", "Field work"],
      problem: "", method: "", results: "", materials: [], photo: "photos/projects/kuakata.jpg", map: "" },

    { id: "kuakata-documentary-gca", kind: "media", art: "film", featured: false, status: "done", statusLabel: "Video documentary",
      title: "Video documentary for GCA", period: "",
      role: "Videographer", lead: "", org: "Made for GCA after the Kuakata erosion project",
      summary: "A video documentary made for GCA about the Kuakata Sea Beach erosion reduction project.",
      tags: ["Documentary", "Videography", "Kuakata"],
      problem: "", method: "", results: "", video: "", materials: [], photo: "photos/projects/kuakata-documentary.jpg", map: "" },

    { id: "raster-downscaling-tool", kind: "tool", art: "raster", featured: false, status: "dev", statusLabel: "In development",
      title: "Raster Downscaling Tool", period: "2026",
      role: "Developer", lead: "", org: "",
      summary: "A desktop app that trains and compares machine-learning models on a coarse raster plus covariates, then downscales with the best one. GeoTIFF in, finer-resolution GeoTIFF out.",
      tags: ["Python", "Machine learning", "GeoTIFF"],
      problem: "Many climate and land-surface datasets are too coarse for local planning.",
      method: "Trains several ML models on a coarse raster and its covariates, checks accuracy, and downscales using the best model.",
      results: "", materials: [], photo: "maps/downscaling-tool.jpg", map: "" },

    { id: "drought-barisal-khulna", kind: "research", art: "climate", featured: false, status: "prep", statusLabel: "Paper in preparation",
      title: "Meteorological drought, Barisal & Khulna", period: "2025 – 2026",
      role: "Researcher", lead: "", org: "",
      summary: "Spatiotemporal drought assessment with SPEI-12, comparing two coastal divisions of Bangladesh.",
      tags: ["SPEI-12", "Drought", "Coastal"],
      problem: "", method: "Standardised Precipitation Evapotranspiration Index (SPEI-12) computed across both divisions over time.", results: "", materials: [], photo: "", map: "maps/drought.jpg" },

    { id: "air-quality-gazipur", kind: "research", art: "air", featured: false, status: "ongoing", statusLabel: "Presented · ICSWER 2026",
      title: "Air quality in industrial Gazipur", period: "2025 – 2026",
      role: "Researcher", lead: "", org: "",
      summary: "Satellite-based look at PM2.5 and PM10 patterns around the industrial city of Gazipur.",
      tags: ["PM2.5", "Google Earth Engine", "Gazipur"],
      problem: "", method: "Satellite-derived air-quality data processed in Google Earth Engine.", results: "", materials: [], photo: "", map: "maps/air-quality.jpg" }
  ],

  /* ---------- ৭. Photography ---------- */
  photography: {
    kicker: "Photography",
    headline: "Rivers, fields and faces of Bangladesh.",
    intro: "Photography is how I look at the world beyond maps: rivers, fields, cities and the people who live in them. These are some of my favourite frames.",
    /* ক্যামেরার নাম, যেমন "Shot on Canon EOS 200D". খালি রাখলে লাইনটা দেখাবে না */
    camera: "Canon EOS 77D · DJI Air 2S drone (aerial photography and drone surveys)",
    roles: [
      { role: "Advisor",          org: "DUET Photographic Society",    years: "2025 – present" },
      { role: "Chief Instructor", org: "DUET Photographic Society",    years: "2024 – 2025" },
      { role: "Founder",          org: "DUET Photographic Society",    years: "" },
      { role: "Member",           org: "GSTU Photographic Society",    years: "2018 – 2023" }
    ],
    albums: ["Aerial & Drone", "Wildlife", "Nature & Macro", "People & Life", "Sunsets & Skies", "DUET_ps"],
    /* ছবি যোগ: photos ফোল্ডারে রাখুন, তারপর একটা লাইন কপি করে বদলান।
       r = আকার: "3/2" আড়াআড়ি, "2/3" লম্বা, "1/1" চৌকো। place খালি রাখা যায় */
    photos: [
      { file: "photos/photo-01.jpg", title: "Aerial bridge and lake", place: "", album: "Aerial & Drone", r: "3/2" },
      { file: "photos/photo-05.jpg", title: "Sunset, sea and boat", place: "", album: "Sunsets & Skies", r: "3/2" },
      { file: "photos/photo-19.jpg", title: "Kingfisher", place: "", album: "Wildlife", r: "3/2" },
      { file: "photos/photo-18.jpg", title: "Bird at the sun", place: "", album: "Sunsets & Skies", r: "3/2" },
      { file: "photos/photo-02.jpg", title: "Boats along the road", place: "", album: "Aerial & Drone", r: "3/2" },
      { file: "photos/photo-03.jpg", title: "Campus from above", place: "", album: "Aerial & Drone", r: "3/2" },
      { file: "photos/photo-04.jpg", title: "Night from the sky", place: "", album: "Aerial & Drone", r: "3/2" },
      { file: "photos/photo-06.jpg", title: "Haze over the campus", place: "", album: "Aerial & Drone", r: "3/2" },
      { file: "photos/photo-07.jpg", title: "Seedling in the rain", place: "", album: "Nature & Macro", r: "3/2" },
      { file: "photos/photo-08.jpg", title: "Flowering branch", place: "", album: "Nature & Macro", r: "2/3" },
      { file: "photos/photo-09.jpg", title: "Bee-eater on a wire", place: "", album: "Wildlife", r: "3/2" },
      { file: "photos/photo-10.jpg", title: "Cyclist at dawn", place: "", album: "People & Life", r: "3/2" },
      { file: "photos/photo-11.jpg", title: "Man and cow in the fog", place: "", album: "People & Life", r: "3/2" },
      { file: "photos/photo-12.jpg", title: "Butterfly on a leaf", place: "", album: "Nature & Macro", r: "3/2" },
      { file: "photos/photo-13.jpg", title: "Plover", place: "", album: "Wildlife", r: "3/2" },
      { file: "photos/photo-14.jpg", title: "Sunbird on flowers", place: "", album: "Wildlife", r: "2/3" },
      { file: "photos/photo-15.jpg", title: "Two plovers", place: "", album: "Wildlife", r: "3/2" },
      { file: "photos/photo-16.jpg", title: "Father and child in the fog", place: "", album: "People & Life", r: "3/2" },
      { file: "photos/photo-17.jpg", title: "Cosmos", place: "", album: "Nature & Macro", r: "2/3" },
      { file: "photos/photo-20.jpg", title: "Behind the lens", place: "", album: "People & Life", r: "3/2" },
      { file: "photos/photo-21.jpg", title: "Colour-fest photographer", place: "", album: "People & Life", r: "2184/1687" },
      { file: "photos/dps/dps-01.jpg", title: "Photography workshop discussion", place: "DUET Photographic Society", album: "DUET_ps", r: "3/2" },
      { file: "photos/dps/dps-02.jpg", title: "Rule of thirds slide", place: "DUET Photographic Society", album: "DUET_ps", r: "3/2" },
      { file: "photos/dps/dps-03.jpg", title: "Laptop and camera between sessions", place: "DUET Photographic Society", album: "DUET_ps", r: "3/2" },
      { file: "photos/dps/dps-04.jpg", title: "Workshop classroom", place: "DUET Photographic Society", album: "DUET_ps", r: "1600/1202" },
      { file: "photos/dps/dps-05.jpg", title: "Explaining camera settings", place: "DUET Photographic Society", album: "DUET_ps", r: "3/4" },
      { file: "photos/dps/dps-06.jpg", title: "Workshop participants", place: "DUET Photographic Society", album: "DUET_ps", r: "16/9" },
      { file: "photos/dps/dps-07.jpg", title: "Camera key settings session", place: "DUET Photographic Society", album: "DUET_ps", r: "1600/1246" },
      { file: "photos/dps/dps-08.jpg", title: "Questions round", place: "DUET Photographic Society", album: "DUET_ps", r: "4/3" },
      { file: "photos/dps/dps-09.jpg", title: "Shutter speed lesson", place: "DUET Photographic Society", album: "DUET_ps", r: "1600/1205" }
    ]
  },

  /* ---------- ৯. Travel blog ----------
     নতুন ব্লগ যোগ করতে একটা { ... } ব্লক কপি করে সবার ওপরে বসান (নতুনটা আগে দেখাবে)।
       id      = ছোট ইংরেজি নাম (স্পেস ছাড়া)         date = "2026-11-05" (বছর-মাস-দিন)
       place   = জায়গার নাম                           tags = ["Coast", "Boat"]
       cover   = কভার ছবি (photos/travel ফোল্ডারে)      photos = ["photos/travel/a.jpg", ...] (লেখার শেষে গ্যালারি)
       title / summary / body এর en = ইংরেজি, bn = বাংলা (যেকোনো একটা ভাষা দিলেও চলবে)
     body হলো অনুচ্ছেদের তালিকা, প্রতিটা " " এর ভেতরে, কমা দিয়ে আলাদা। বিশেষ রূপ:
       "## উপশিরোনাম"            → ছোট হেডিং
       "> উক্তি বা বিশেষ লাইন"     → সুন্দর quote box
       "img:photos/travel/x.jpg|ক্যাপশন" → লেখার মাঝখানে ছবি
     soon: true দিলে কার্ডে "Story coming soon" দেখায়; লেখা শেষ হলে লাইনটা মুছে দিন।        */
  travel: {
    kicker: "Travel blog",
    headline: "Notes from the road, in English and Bangla.",
    intro: { en: "Stories and photographs from the places I travel to around Bangladesh. Every post comes in English and in Bangla.",
             bn: "বাংলাদেশের বিভিন্ন জায়গায় ভ্রমণের গল্প ও ছবি। প্রতিটা লেখা ইংরেজি ও বাংলা দুই ভাষাতেই থাকবে।" },
    posts: [
      { id: "patuakhali", soon: true, date: "", when: "Recently", place: "Patuakhali", region: { en: "Southern coast", bn: "দক্ষিণ উপকূল" }, tags: ["Coast", "Rivers"],
        title: { en: "Patuakhali", bn: "পটুয়াখালী" },
        cover: "photos/travel/patuakhali-1.jpg", photos: [],
        summary: { en: "A coastal district in southern Bangladesh, where rivers meet the Bay of Bengal.",
                   bn: "দক্ষিণ বাংলাদেশের একটি উপকূলীয় জেলা, যেখানে নদী গিয়ে বঙ্গোপসাগরে মিশেছে।" },
        body: { en: ["Notes and photographs from this trip are on their way."],
                bn: ["এই ভ্রমণের লেখা ও ছবি শিগগিরই যোগ হচ্ছে।"] } },
      { id: "bogura", soon: true, date: "", when: "Recently", place: "Bogura", region: { en: "Northern Bangladesh", bn: "উত্তরবঙ্গ" }, tags: ["North", "Heritage"],
        title: { en: "Bogura", bn: "বগুড়া" },
        cover: "photos/travel/bogura-1.jpg", photos: [],
        summary: { en: "A district in northern Bangladesh, in the Rajshahi division.",
                   bn: "রাজশাহী বিভাগের অন্তর্গত উত্তরবঙ্গের একটি জেলা।" },
        body: { en: ["Notes and photographs from this trip are on their way."],
                bn: ["এই ভ্রমণের লেখা ও ছবি শিগগিরই যোগ হচ্ছে।"] } }
    ]
  },

  /* ---------- ১০. Contact ---------- */
  contact: {
    kicker: "Contact",
    headline: "Let's start a conversation.",
    text: "I'm happy to hear about research collaborations, PhD opportunities, or anything else you'd like to discuss. I usually reply within a few days.",
    topics: [
      { key: "Research collaboration",   icon: "flask", text: "Joint studies, data, modelling or mapping work." },
      { key: "PhD / supervisor enquiry", icon: "grad",  text: "PhD positions and supervision in water and climate." },
      { key: "General message",          icon: "mail",  text: "Photography, projects or just saying hello." }
    ]
  }
};
