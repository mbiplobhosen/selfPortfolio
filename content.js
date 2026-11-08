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
  siteUrl: "https://mbiplobhosen.github.io/selfPortfolio/",

  /* মেনুর "Photography + Travel" গ্রুপের নাম — এখানে বদলালেই হবে */
  lens: { name: "Lens & Journeys", photography: "Photography", travel: "Travel blog" },

  /* Web3Forms Access Key — মেসেজ সরাসরি আপনার ইনবক্সে আসে। ফাঁকা ("") রাখলে আগের মতো ইমেইল অ্যাপ খুলবে */
  formKey: "2c2fdbc5-40c5-4505-b19f-362ce2f5140e",

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
    kicker: "Water & environmental researcher  ·  Photographer  ·  Web developer",
    headline: "I read rivers — in data and in light.",
    sub: "I map floods, groundwater and heat with GIS, remote sensing and machine learning, and I photograph the landscapes and people of Bangladesh.",
    chips: ["GIS & Remote Sensing", "Hydrological Modelling", "MCDA", "Machine Learning", "Climate Analysis", "Photography", "Web Development"]
  },

  /* আপনার ছবি: হোমের জন্য photos/portrait.jpg, About-এর জন্য photos/about.jpg */
  portrait: "photos/portrait.jpg",
  aboutPhoto: "photos/about.jpg",

  /* সংখ্যায় আমি (ওয়েবসাইট নিজে গুনে দেখাবে) */
  stats: [
    { n: 9,  label: "Journal articles",         icon: "book" },
    { n: 17, label: "Conference papers",        icon: "mic" },
    { n: 2,  label: "Presenting-paper awards",  icon: "award" },
    { n: 11, label: "Projects & tools",         icon: "folder", auto: "projects" }
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
      "The camera is the other half of me. I started the DUET Photographic Society, led its workshops as Chief Instructor and now advise it. I also made a video documentary for the GCA–BUET Coastal Towns Climate Resilience Project.",
      "I also build websites. I designed, coded and host the website of BlueGreen Research and Consultancy (BGRC) myself, in plain HTML, CSS and JavaScript.",
      "What's next? A PhD, where I can keep working on climate-resilient water planning and flood-risk reduction with people who care about the same places."
    ],
    lines: [
      { icon: "layers", text: "I turn satellite data, field surveys and models into maps that planners can use." },
      { icon: "camera", text: "Behind the research is a camera: landscapes, wildlife and people of Bangladesh." },
      { icon: "users",  text: "I like building communities, from a photographic society to student organisations." },
      { icon: "code",   text: "I design, code and host websites too, from the first sketch to the live site." }
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
    { when: "2018 – 2021", art: "cert", title: "B.Sc. (Honors) in Environmental Science and Disaster Management", org: "Gopalganj Science and Technology University", note: "CGPA 3.01 / 4.00 · student life, societies and field work",
      text: ["My undergraduate degree at Gopalganj Science and Technology University (GSTU). It is where I started with field surveys, student organisations and photography societies.",
             "My time at GSTU gave me some of my best memories. I found a wonderful community of friends and seniors, learned a great deal inside and outside the classroom, and worked with several student and environmental organisations."],
      points: ["CGPA 3.01 / 4.00", "Final-year thesis: effect of saline-water intrusion on agriculture in Gobra Union, Gopalganj", "Active in student, photography and environmental organisations throughout"],
      badgesH: "Societies and organisations",
      badges: [ { t: "GSTU Photographic Society", icon: "camera", tone: "gold" }, { t: "RDSA · Rangpur Divisional Students Association", icon: "users", tone: "sky" }, { t: "Thakurgaon Students Association", icon: "users", tone: "rose" }, { t: "Green Voice", icon: "leaf", tone: "" } ],
      galleryH: "Campus memories", galleryAlbum: "GSTU · 2018 – 2021",
      gallery: [ { file: "photos/bsc/gstu-06.jpg", title: "On campus" }, { file: "photos/bsc/gstu-07.jpg", title: "At an event" }, { file: "photos/bsc/gstu-08.jpg", title: "At an event" }, { file: "photos/bsc/gstu-09.jpg", title: "On the field" }, { file: "photos/bsc/gstu-10.jpg", title: "Among the lotuses" }, { file: "photos/bsc/gstu-03.jpg", title: "Group on campus" }, { file: "photos/bsc/gstu-04.jpg", title: "My thesis" }, { file: "photos/bsc/gstu-01.jpg", title: "With friends" }, { file: "photos/bsc/gstu-02.jpg", title: "With friends" }, { file: "photos/bsc/gstu-05.jpg", title: "With friends on campus" } ] }
  ],

  /* Beyond the lab (About পেজ — ক্লিকে popup). link = popup-এর নিচের বাটন */
  beyond: [
    { art: "camera",  tone: "gold", title: "Photography", short: "Landscapes, wildlife and people of Bangladesh.",
      text: ["Photography is how I look at the world beyond maps: rivers, fields, cities and the people who live in them. I treat each frame as a small piece of fieldwork, noticing the light, the landscape and the context before I press the shutter.",
             "I shoot with a Canon EOS 77D, and a selection of my favourite frames lives in the gallery."],
      points: ["Landscapes, wildlife and people of Bangladesh", "Founder of the DUET Photographic Society; Chief Instructor 2024–2025, now its Advisor", "Photographer for Green Voice (GSTU) and Photography Secretary of RDSA", "I also train others, through workshops on framing, composition and manual camera settings"],
      chips: ["Landscape", "Wildlife", "People", "Field photography"],
      link: { label: "Open the gallery", href: "photography.html" } },
    { art: "drone",   tone: "rose", title: "Drone & aerial", short: "Aerial photography and drone surveys.",
      text: ["A DJI Air 2S lets me see rivers, roads, campuses and farmland from above, both for photography and for survey work. Seeing a landscape from the air often explains what a map only hints at.",
             "Aerial views sit naturally beside my GIS and remote-sensing work: the drone shows the ground, and the maps put it in context."],
      points: ["Aerial photography of rivers, roads, campuses and farmland", "Survey support in the field", "Flights planned around weather and light"],
      chips: ["DJI Air 2S", "Aerial photography", "Field surveys"],
      link: { label: "See aerial photos", href: "photography.html" } },
    { art: "code",    tone: "sky",  title: "Web development", short: "Websites designed, coded and hosted by hand.",
      text: ["I build websites in plain HTML, CSS and JavaScript, doing the design, the code and the hosting myself. A good website is a way to explain research and services clearly to people who are not specialists.",
             "The BlueGreen Research and Consultancy (BGRC) website is one I made from start to finish, in English and Bangla."],
      points: ["Design from scratch, with no ready-made templates", "Hand-written HTML, CSS and JavaScript", "English and Bangla versions with a language switch", "Hosting and keeping the site running"],
      chips: ["HTML", "CSS", "JavaScript", "English + Bangla"],
      link: { label: "See the BGRC website", href: "project.html?p=bgrc-website" } },
    { art: "film",    tone: "sky",  title: "Video & documentary", short: "Documentary video for coastal climate projects.",
      text: ["I like turning technical work into a story people can follow. I have made a documentary video for the Coastal Towns Climate Resilience Project (CTCRP) of GCA and BUET, filming climate impacts and nature-based solutions in coastal towns.",
             "The footage belongs to GCA and BUET, so it is not shown here. The project page describes the work."],
      points: ["Field filming and community interviews", "One project video and four short town videos", "Raw footage handed over with the final edits"],
      chips: ["Videography", "Interviews", "Storytelling"],
      link: { label: "See the project", href: "project.html?p=ctcrp-documentary" } },
    { art: "people",  tone: "",     title: "Training", short: "GIS, remote sensing, modelling, AI and photography.",
      text: ["I train students and young researchers in the tools I use every day. My GIS courses run from basic to advanced, and I also train people in hydrological modelling, remote sensing, Google Earth Engine, AI and machine learning, and photography.",
             "Alongside the courses I have given workshops and webinars, from camera settings and composition to a beginner's guide to academic research."],
      points: ["GIS and remote sensing certification courses, basic to advanced (BGRC, Geo-Science Learning Center)", "Photography workshops at DUET, and Chief Instructor of the DUET Photographic Society", "A webinar on the research roadmap for beginners, for Green Voice"],
      chips: ["GIS", "Hydrological modelling", "Remote sensing", "Google Earth Engine", "AI & machine learning", "Photography"],
      link: { label: "See all trainings", href: "experience.html#training" } },
    { art: "compass", tone: "sand", title: "Travel", short: "Notes and photographs from trips around Bangladesh.",
      text: ["I like writing about places after I have been there, and my travel writing connects each place to the landscape and water I study. The first stories are about Kuakata, Sylhet and the Sundarban.",
             "Posts appear in English and Bangla, together with a map of the districts I have visited."],
      points: ["Kuakata sea beach, Patuakhali", "Sylhet's haors and tea hills", "The Sundarban mangrove region"],
      chips: ["Kuakata", "Sylhet", "Sundarban"],
      link: { label: "Open the travel blog", href: "travel.html" } }
  ],

  /* PhD / সম্ভাব্য সুপারভাইজারদের জন্য ব্লক (Home-এ)। ⚠ লেখা সাধারণ — আপনি নিজের মতো ঠিক করুন */
  phd: {
    kicker: "Next step",
    title: "Looking for a PhD supervisor in hydrology",
    text: "I'm applying for PhD positions in hydrology, with a focus on flood risk, water security and climate-resilient water resources planning. If your group works on related questions, I'd be glad to hear from you.",
    photo: "photos/conf/iccesd-2026.jpg",
    interests: ["Flood risk", "Water security", "Drought & climate", "Hydrological modelling", "Machine learning for hydrology"],
    areas: [
      { icon: "flood", title: "Flood risk and hazard modelling", text: "Flood hazard modelling with HEC-HMS and HEC-RAS, and GIS-based flood vulnerability and multi-hazard mapping." },
      { icon: "drop",  title: "Water security", text: "Blue and green water footprints and water security indices across a river basin, studied in the Shitalakshya Basin." },
      { icon: "sun",   title: "Drought and climate", text: "Drought assessment with SPEI, and how land use and a changing climate alter streamflow in the Sangu River." },
      { icon: "layers", title: "Hydrological modelling", text: "Rainfall–runoff, streamflow and soil-erosion modelling with SWAT, HEC-HMS and HEC-RAS." },
      { icon: "cpu",   title: "Machine learning for hydrology", text: "Neural networks and other machine-learning methods for prediction and downscaling, including my Raster Downscaling Tool." }
    ],
    toolsH: "Tools I work with",
    tools: ["SWAT", "HEC-HMS", "HEC-RAS", "Delft3D", "Google Earth Engine", "ArcGIS", "QGIS", "Python"]
  },

  /* How I got here — short = কার্ডের এক লাইন, text = popup-এর লেখা, points = popup-এর হাইলাইট। ⚠ লেখাগুলো আপনার দেওয়া তথ্য থেকে Claude লিখেছে — একবার দেখে নিন */
  journey: [
    { year: "2018", art: "cert",   title: "B.Sc. begins", short: "Environmental Science and Disaster Management at GSTU.",
      text: ["In 2018 I started a B.Sc. (Honors) in Environmental Science and Disaster Management at Gopalganj Science and Technology University (GSTU). The programme brought together environmental processes, hazards and field surveys, the foundation for everything that followed."],
      points: ["B.Sc. (Honors), 2018–2021, CGPA 3.01 / 4.00", "Final-year thesis on saline-water intrusion and agriculture in Gobra Union, Gopalganj"] },
    { year: "2018", art: "people", title: "Societies and student organisations", short: "Photography, student and environmental organisations at GSTU.",
      text: ["Alongside classes I joined student and environmental organisations at GSTU. They were where I found my community, and where photography became a way of serving a cause."],
      points: ["GSTU Photographic Society (until 2023; former Vice-president)", "RDSA: Environmental Secretary and Photography Secretary", "Green Voice: photographer of the GSTU branch, convener of the Ranisankail Upazila branch", "Member of the Thakurgaon Students Association"] },
    { year: "2022", art: "satellite", title: "GIS & remote sensing training", short: "Application of GIS and Remote Sensing in Research.",
      text: ["A structured training, in September and October 2022, on applying GIS and remote sensing in research. These are the tools that now sit at the centre of my work."],
      points: ["Sept – Oct 2022", "Using GIS and remote sensing in research work"] },
    { year: "2023", art: "lab",    title: "M.Sc. at DUET", short: "Water and Environmental Management, CGPA 3.92.",
      text: ["I joined the M.Sc. in Water and Environmental Management at the Institute of Water & Environment, DUET, in Gazipur. My thesis studies how land use and climate change alter streamflow in the Sangu River."],
      points: ["CGPA 3.92 / 4.00 in coursework", "Supervisor: Md. Rabiul Islam", "Training in numerical modelling, AI and GIS technology (July 2023)"] },
    { year: "2024", art: "medal",  title: "Research and first award", short: "Research roles, GIS training and the IICASD 2024 award.",
      text: ["2024 was the year research became my work. I carried out two UGC-funded teachers' research projects at DUET, joined the Kuakata erosion research as a Research Associate, and began training others in GIS. I won a Presenting Paper Award at IICASD 2024 and became Chief Instructor of the DUET Photographic Society, which I founded."],
      points: ["Research Assistant on UGC teachers' projects at IWE, DUET (2024–2026)", "Research Associate, M/S Tuhin Associates: Kuakata sea beach research", "Trainer: GIS & RS Certification Course (BGRC) and a practical training session (Geo-Science Learning Center)", "Presenting Paper Award, IICASD 2024"],
      galleryH: "At IICASD 2024", galleryAlbum: "IICASD 2024, DUET",
      gallery: [ { file: "photos/conf/iicasd-2024-presenting.jpg", title: "Presenting at IICASD 2024" }, { file: "photos/conf/iicasd-2024-a.jpg", title: "IICASD 2024, DUET" }, { file: "photos/conf/iicasd-2024-b.jpg", title: "IICASD 2024, DUET" } ] },
    { year: "2025", art: "chart",  title: "Papers in Q1 journals", short: "Co-authored papers, a second award and BGRC.",
      text: ["Co-authored articles appeared in Renewable Energy, Smart Agricultural Technology, Earth Systems and Environment and more. I won a second Presenting Paper Award (ICSHSD 2025), began work with BlueGreen Research and Consultancy (BGRC) as Lead Consultant, Environmental Research, and became Advisor of the DUET Photographic Society."],
      points: ["Presenting Paper Award, ICSHSD 2025", "Lead Consultant, Environmental Research, BGRC", "Webinar on the research roadmap for beginners (July)", "Documentary for the GCA–BUET Coastal Towns Climate Resilience Project (November)"] },
    { year: "2026", art: "code",   title: "Flood paper, training and a new role", short: "Sylhet paper in Discover Environment; Python at IICT.",
      text: ["A fuzzy AHP flood vulnerability study of Sylhet was published in Discover Environment. I completed a 60-hour Python course at IICT, DUET, trained in the BGRC GIS & RS Certification Course, and in October 2026 returned to DUET's Institute of Water & Environment as an official Research Assistant."],
      points: ["Sylhet flood vulnerability paper in Discover Environment", "8th ICCESD papers on Sylhet flood vulnerability and the Halda multi-hazard study (February)", "Python, 60-hour course at IICT, DUET (June)", "Official Research Assistant, IWE DUET (October)"],
      galleryH: "At ICCESD 2026", galleryAlbum: "ICCESD 2026",
      gallery: [ { file: "photos/conf/iccesd-2026.jpg", title: "At ICCESD 2026" } ] },
    { year: "Next", art: "compass", title: "PhD in hydrology", short: "Flood risk, water security and climate-resilient planning.", now: true,
      text: ["My next step is a PhD in hydrology, on flood risk, water security and climate-resilient water resources planning."],
      points: ["Focus: hydrology", "Open to supervisors working on related questions"] }
  ],

  /* ---------- ৫. Experience পেজ ---------- */
  expIntro: {
    kicker: "Experience",
    headline: "Work that turns water questions into answers",
    sub: "Research assistantship, consulting, field surveys and student organisations: the places where I learned to turn questions about water into maps, models and decisions people can use."
  },

  /* Experience = পদ/দায়িত্ব, ছোট করে। প্রজেক্টের বিস্তারিত থাকে Projects ট্যাবে (links দিয়ে যুক্ত) */
  experience: [
    { when: "October 2026 – present", art: "lab", icon: "flask", title: "Official Research Assistant", org: "Institute of Water & Environment (IWE), DUET", now: true,
      points: ["Back at IWE as an official Research Assistant."],
      text: ["In October 2026 I rejoined the Institute of Water & Environment (IWE), DUET, as an official Research Assistant."],
      tags: ["Water & environment", "Research"] },
    { when: "2025 – present", art: "work", icon: "briefcase", title: "Lead Consultant, Environmental Research", org: "BlueGreen Research and Consultancy (BGRC)", now: true,
      points: ["Environmental research and consulting: IEE and EIA, flood and drought risk, GIS and remote sensing, hydrological modelling."],
      text: ["Since 2025 I have worked with BlueGreen Research and Consultancy (BGRC) as Lead Consultant, Environmental Research.", "The role brings research methods into consulting work for clients, and includes running GIS and remote-sensing training and building the BGRC website."],
      tags: ["IEE & EIA", "Flood & drought risk", "GIS & remote sensing", "Hydrological modelling"],
      links: [ { label: "BGRC website", href: "project.html?p=bgrc-website", icon: "arrow" }, { label: "GIS & RS training programme", href: "project.html?p=bgrc-gis-training", icon: "arrow" }, { label: "All projects", href: "projects.html", icon: "arrow" } ] },
    { when: "2024 – 2025", art: "coast", icon: "briefcase", title: "Research Associate", org: "M/S Tuhin Associates",
      points: ["Worked on two projects there: the Kuakata sea beach research and, later, a video documentary."],
      text: ["I was a Research Associate at M/S Tuhin Associates from 2024 to 2025. I worked on two projects there: the Kuakata sea beach research and, later, a video documentary for the GCA–BUET Coastal Towns Climate Resilience Project."],
      tags: ["Coastal research", "Kuakata", "Documentary"],
      links: [ { label: "Kuakata sea beach research", href: "project.html?p=kuakata-research", icon: "arrow" }, { label: "CTCRP video documentary", href: "project.html?p=ctcrp-documentary", icon: "arrow" } ] },
    { when: "2024 – 2026", art: "river", icon: "flask", title: "Research Assistant, UGC Teachers' Research Projects", org: "Institute of Water & Environment (IWE), DUET",
      points: ["Two academic years, two UGC-funded projects: analysis, data collection and final reporting."],
      text: ["For two academic years, 2024–2025 and 2025–2026, I was a Research Assistant on UGC-funded teachers' research projects at IWE, DUET. I did the analysis, data collection and final reporting for two projects:"],
      list: ["EV charging station siting in Dhaka District (2024–25). Project Director: Md. Rabiul Islam.", "Blue and green water security in the Shitalakshya River Basin (2025–26). Project Director: Dr. Mohammad Nazim Uddin."],
      tags: ["AHP", "Fuzzy AHP", "ANN", "Water footprint"],
      links: [ { label: "EV charging station siting", href: "project.html?p=ev-charging-dhaka", icon: "arrow" }, { label: "Water security, Shitalakshya Basin", href: "project.html?p=shitalakshya-water", icon: "arrow" } ] }
  ],

  /* Training & workshops I've delivered (Experience পেজ) — নতুন কিছু হলে সবার ওপরে যোগ করুন।
     ⚠ ফি, ফোন, অন্যের নাম, QR — ইচ্ছে করেই দেওয়া হয়নি */
  trainingIntro: "I train students and young researchers in the tools I use every day. My GIS courses run from basic to advanced.",
  trainTopics: ["GIS (basic to advanced)", "Hydrological modelling", "Remote sensing", "Google Earth Engine", "AI & machine learning", "Photography", "Research guidance for beginners"],
  trainings: [
    { when: "From 10 Feb 2026", role: "Trainer", art: "satellite", tone: "", title: "GIS & RS Certification Course", org: "BlueGreen Research and Consultancy (BGRC)", mode: "Online",
      text: ["I train in the GIS & Remote Sensing Certification Course of BlueGreen Research and Consultancy (BGRC). Classes began on 10 February 2026 and run online."],
      points: ["Builds a strong foundation in ArcGIS", "Online classes, with certificates on attendance", "Part of BGRC's ongoing GIS and remote-sensing training programme"],
      link: { label: "See the BGRC training programme", href: "project.html?p=bgrc-gis-training" } },
    { when: "17 Jan 2026", role: "Keynote speaker", art: "camera", tone: "gold", title: "Framing, Composition and Camera Manual Setting", org: "DUET Photographic Society (DUETPS)", mode: "Workshop · DUET campus",
      text: ["A free photography workshop for everyone at DUET, held with the society's fresher's reception. I spoke on framing, composition and setting the camera manually."],
      points: ["Free and open to all", "Framing, composition and manual camera settings", "Organised by the DUET Photographic Society"],
      link: { label: "See photography", href: "photography.html" } },
    { when: "4 Jul 2025", role: "Webinar speaker", art: "cert", tone: "sky", title: "The Research Roadmap: From Choosing a Title to Writing Your First Paper", org: "Onusondhan, Green Voice", mode: "Webinar · Zoom",
      text: ["A beginner's guide to academic research, from choosing a title to writing a first paper, organised by Onusondhan, the research wing of Green Voice."],
      points: ["For students starting research", "From a research title to a first paper", "Held on Zoom"] },
    { when: "20 Sep – 15 Oct 2024", role: "Trainer", art: "river", tone: "rose", title: "Practical Training Session on GIS & RS", org: "Geo-Science Learning Center", mode: "Training session",
      text: ["A practical training session on GIS and remote sensing, run over about four weeks at the Geo-Science Learning Center."],
      points: ["Hands-on GIS and remote-sensing practice", "Certificate of appreciation received"] },
    { when: "15 Jun – 26 Jul 2024", role: "Trainer", art: "satellite", tone: "gold", title: "GIS & RS Certification Course", org: "BlueGreen Research and Consultancy (BGRC)", mode: "Certification course",
      text: ["My first run of the BGRC GIS & Remote Sensing Certification Course, run over six weeks in 2024."],
      points: ["GIS and remote sensing from the basics onwards", "Certificate of achievement received"],
      link: { label: "See the BGRC training programme", href: "project.html?p=bgrc-gis-training" } }
  ],

  /* Organisations (Experience পেজ — ক্লিকে popup). ⚠ ছবি ও বিস্তারিত পরে আপনি দিলে বসাব।
     images: ["photos/org/xyz.jpg"] দিলে popup-এ ছবি দেখাবে */
  leadership: [
    { icon: "camera", art: "camera", tone: "gold", org: "DUET Photographic Society", when: "", text: "Started the society at DUET and trained members through photography workshops.",
      more: ["I founded the DUET Photographic Society and later served as its Chief Instructor and then its Advisor.", "The society runs workshops on camera settings, composition and light for students at DUET."],
      roles: [ { role: "Founder" }, { role: "Chief Instructor", when: "2024 – 2025" }, { role: "Advisor", when: "2025 – present" } ],
      images: [], link: { label: "See workshop photos", href: "photography.html" } },
    { icon: "users", art: "people", tone: "sky", org: "Rangpur Divisional Students Association (RDSA), GSTU", when: "", text: "Students' association of Rangpur division at Gopalganj Science and Technology University.",
      more: ["RDSA, the Rangpur Divisional Students Association, brings together students of Rangpur division at Gopalganj Science and Technology University.", "I served on its executive side as Environmental Secretary and Photography Secretary."],
      roles: [ { role: "Environmental Secretary" }, { role: "Photography Secretary" } ], images: [] },
    { icon: "leaf", art: "nature", tone: "", org: "Green Voice", when: "", text: "Environmental volunteer organisation.",
      more: ["Green Voice is an environmental volunteer organisation.", "I was the photographer of its GSTU branch and convener of its Ranisankail Upazila branch."],
      roles: [ { role: "Photographer, GSTU branch" }, { role: "Convener, Ranisankail Upazila branch" } ], images: [] },
    { icon: "camera", art: "camera", tone: "rose", org: "GSTU Photographic Society", when: "2018 – 2023", text: "Part of the society through my undergraduate years.",
      more: ["I was part of the Photographic Society at Gopalganj Science and Technology University through my undergraduate years, from 2018 to 2023."],
      roles: [ { role: "Member", when: "2018 – 2023" }, { role: "Former Vice-president" } ], images: [] }
  ],

  /* Learning on the ground — ⚠ involves/builds সাধারণভাবে Claude লিখেছে, আপনি নিজের অভিজ্ঞতা অনুযায়ী ঠিক করুন */
  fieldwork: [
    { icon: "leaf",  art: "leaf",  tone: "", title: "BSc thesis survey", text: "Effect of saline-water intrusion on agriculture in Gobra Union, Gopalganj.",
      involves: ["Field visits to the study area in Gobra Union, Gopalganj", "Collecting data on saline-water intrusion and its effect on agriculture", "Turning field observations into a thesis and a conference paper (Khulna University, 2024)"],
      builds: ["Designing a study from a research question", "Careful data recording in the field", "Connecting local conditions to the numbers"] },
    { icon: "flood", art: "coast", tone: "sky", title: "Kuakata coast", text: "Field work for the Kuakata Sea Beach research.",
      involves: ["Field work for the Kuakata Sea Beach research (youth-led grant, BUET IWFM and GCA)", "Observing a changing coastline first-hand", "Filming Kuakata and three other coastal towns for the CTCRP documentary", "Related conference paper: shoreline change at Kuakata with DSAS (IICASD 2024)"],
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
    { icon: "globe", art: "code", tone: "rose", group: "Web development", items: ["HTML", "CSS", "JavaScript", "Web design", "Hosting"], used: "Designing, coding and hosting websites by hand, from the first sketch to the live site.",
      tools: [["HTML", "The structure and content of a web page."], ["CSS", "Layout, colour, typography and responsive design."], ["JavaScript", "Interactivity such as menus, forms, filters and language switches."], ["Web design", "Planning the layout, look and flow of a site before coding it."], ["Hosting", "Publishing a finished website online and keeping it running."]],
      uses: ["Designed, coded and hosted the BlueGreen Research and Consultancy (BGRC) website, in English and Bangla"], pubs: [], link: { label: "See the BGRC website project", href: "project.html?p=bgrc-website" } },
    { icon: "video", art: "camera", tone: "gold", group: "Photography & video", items: ["Photography", "Aerial photography", "Video documentary", "Training & workshops"], used: "Shooting, editing and training; documentary for a GCA–BUET project.",
      tools: [["Photography", "Landscapes, wildlife and people, shot on a Canon EOS 77D."], ["Aerial photography", "Photographs from a DJI Air 2S."], ["Video documentary", "A documentary video for the GCA–BUET Coastal Towns Climate Resilience Project."], ["Training & workshops", "Photography and GIS workshops; Chief Instructor of the DUET Photographic Society."]],
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
    { when: "November 2024", title: "Presenting Paper Award", where: "1st International Conference on Recent Innovation in Civil Engineering and Architecture for Sustainable Development (IICASD 2024), DUET", paper: "A comparative study of AHP and Fuzzy-AHP approach in selecting solid waste disposal site in Barishal Division",
      galleryH: "At IICASD 2024", galleryAlbum: "IICASD 2024, DUET", gallery: [ { file: "photos/conf/iicasd-2024-presenting.jpg", title: "Presenting at IICASD 2024" }, { file: "photos/conf/iicasd-2024-a.jpg", title: "IICASD 2024, DUET" }, { file: "photos/conf/iicasd-2024-b.jpg", title: "IICASD 2024, DUET" } ] }
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
    { year: 2026, title: "Assessing flood vulnerability in Sylhet District with an AHP-based GIS approach", venue: "8th International Conference on Civil Engineering for Sustainable Development · February 2026", galleryH: "At ICCESD 2026", gallery: [ { file: "photos/conf/iccesd-2026.jpg", title: "At ICCESD 2026" } ] },
    { year: 2026, title: "Spatial analysis of multi-hazard risks in the Halda River Basin through AHP-based modeling", venue: "8th International Conference on Civil Engineering for Sustainable Development · February 2026", galleryH: "At ICCESD 2026", gallery: [ { file: "photos/conf/iccesd-2026.jpg", title: "At ICCESD 2026" } ] },
    { year: 2025, title: "Assessing the future flood hazard in the Matamuhuri River Basin using HEC-HMS and HEC-RAS", venue: "Intl. Conf. on Civil Engineering Research & Innovations, RUET · December 2025" },
    { year: 2025, title: "Assessment of runoff and potential soil erosion in the Dakatia river basin, Bangladesh", venue: "Intl. Conf. on Civil Engineering Research & Innovations, RUET · December 2025" },
    { year: 2025, title: "Evaluating drinking water quality and health risks in communities adjacent to the Modhumoti River, Bangladesh", venue: "ICSHSD 2025, DUET · October 2025", award: true },
    { year: 2025, title: "Hydro-chemical assessment of groundwater and river water quality for drinking in Paikgachha Upazila, Khulna District", venue: "ICSHSD 2025, DUET · October 2025" },
    { year: 2025, title: "Assessment of heavy metal concentration and the physicochemical parameters of the outlet wastewater: industrial zone, Gazipur", venue: "ICSHSD 2025, DUET · October 2025" },
    { year: 2024, title: "A comparative study of AHP and Fuzzy-AHP approach in selecting solid waste disposal site in Barishal Division", venue: "IICASD 2024, DUET · November 2024", award: true, galleryH: "At IICASD 2024", gallery: [ { file: "photos/conf/iicasd-2024-presenting.jpg", title: "Presenting at IICASD 2024" }, { file: "photos/conf/iicasd-2024-a.jpg", title: "IICASD 2024, DUET" }, { file: "photos/conf/iicasd-2024-b.jpg", title: "IICASD 2024, DUET" } ] },
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
      title: "IEE report for a paper factory, Sirajganj", period: "Ongoing",
      role: "", lead: "", org: "",
      summary: "An Initial Environmental Examination (IEE) report for a paper factory in Sirajganj, Bangladesh.",
      tags: ["IEE", "Sirajganj", "Industrial wastewater"],
      problem: "Paper manufacturing uses large volumes of water and releases wastewater that must be treated before it reaches rivers. This project covers the environmental assessment (IEE report) for the factory.",
      method: "An IEE describes the factory's environmental setting, the likely impacts and the measures to reduce them.",
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
      title: "Blue and Green Water security in the Shitalakshya River Basin", period: "2025 – 2026",
      role: "Research Assistant", lead: "Project Director: Dr. Mohammad Nazim Uddin", org: "Institute of Water & Environment, DUET · UGC teachers' research project",
      fullTitle: "Towards Sustainable Water Management: Assessing Water Security in the Shitalakshya River Basin through Multi-Temporal Blue and Green Water Footprints",
      summary: "Assessing water security across the Shitalakshya River Basin through multi-temporal blue and green water footprints.",
      tags: ["Water security", "Blue water", "Green water", "Shitalakshya"],
      problem: "A basin's water security depends on both blue water, in rivers and aquifers, and green water, the soil moisture that feeds crops and vegetation. Looking at both, over several periods, shows where pressure on water is growing.",
      method: "Blue and green water footprints were assessed for several time periods and combined into three indices: the Green Water Security Index (GWSI), the Blue Water Security Index (BWSI) and the overall Water Security Index (WSI).",
      results: "",
      tools: ["Blue water footprint", "Green water footprint", "GWSI", "BWSI", "WSI", "ArcGIS"],
      related: ["ev-charging-dhaka"],
      materials: [], photo: "", map: "" },

    { id: "msc-thesis", kind: "research", art: "river", featured: false, status: "thesis", statusLabel: "MSc thesis · ongoing",
      title: "Land use, climate change and streamflow in the Sangu River", period: "2023 – ongoing",
      role: "MSc student", lead: "Supervisor: Md. Rabiul Islam", org: "Institute of Water & Environment, DUET",
      summary: "How land-use change and a changing climate alter streamflow in the Sangu River basin.",
      tags: ["Streamflow", "Land use", "Climate"],
      problem: "", method: "", results: "", materials: [], photo: "photos/projects/sangu.jpg", map: "maps/sangu.jpg" },

    { id: "kuakata-research", kind: "research", art: "coast", featured: true, status: "done", statusLabel: "Completed research project",
      title: "Kuakata Sea Beach: nature-based erosion reduction", period: "2024 – 2025",
      role: "Research Associate, M/S Tuhin Associates", lead: "", org: "Youth-led research grant · BUET IWFM and GCA",
      fullTitle: "Nature Based Multi-Dimensional Sustainable Development Project for Kuakata Sea Beach Through Beach Nourishment, Erosion Reduction & Enhancement of Mangrove Forest",
      summary: "A nature-based plan to restore Kuakata Sea Beach through beach nourishment, erosion reduction and mangrove enhancement, studied with GIS, shoreline analysis, soil sampling and Delft3D modelling.",
      tags: ["Coastal erosion", "Kuakata", "DSAS", "Delft3D", "Mangrove"],
      problem: "Kuakata, in Patuakhali, is one of Bangladesh's best-known sea beaches, and its shoreline and forest are changing. Parts of the coast have eroded while others have built up, mangrove cover has fallen, and the river that once fed the beach with sediment has been filling up.",
      method: "Shoreline change from 1980 to 2024 from satellite images with ArcGIS and DSAS; land use and land cover change for 2000, 2010 and 2024; soil boreholes down to 18 m to design the beach nourishment; and Delft3D modelling of flow and bed-level change from 2025 to 2035.",
      results: "The study proposes restoring the beach with sediment from targeted dredging at the Andharmanik River estuary, supported by mangrove zones planted with TetraPOT units and, where needed, offshore structures such as breakwaters, artificial reefs or geo-tubes.",
      findings: ["Along the coast, erosion reached up to 13.66 m per year in places, while other stretches gained up to 19 m per year", "The Andharmanik River narrowed from about 1.27 km in 2010 to about 0.65 km in 2025 as sediment filled the channel", "About 60% of the forest cover, mostly mangrove, was lost over four decades"],
      tools: ["ArcGIS", "DSAS", "Satellite imagery", "Borehole soil sampling", "Delft3D"],
      ack: "Supported by the Youth-Led Research Grant of the project \"Enhancing Coastal Resilience Through Nature-Based Solutions\" at the Institute of Water and Flood Management (IWFM), BUET, with the Global Center on Adaptation (GCA).",
      related: ["ctcrp-documentary"],
      materials: [], photo: "photos/projects/kuakata-field.jpg", photoNote: "Field visit at Kuakata Sea Beach", map: "" },

    { id: "ctcrp-documentary", kind: "media", art: "film", featured: false, status: "done", statusLabel: "Video documentary",
      title: "Video documentary: Coastal Towns Climate Resilience Project", period: "November 2025",
      role: "Videographer and documentary maker", lead: "", org: "GCA–BUET Coastal Towns Climate Resilience Project (CTCRP)",
      summary: "A documentary video on climate impacts and nature-based solutions in four coastal towns, made for the GCA–BUET Coastal Towns Climate Resilience Project.",
      tags: ["Documentary", "Videography", "Coastal towns", "Nature-based solutions"],
      problem: "Coastal towns face the impacts of climate change, and nature-based solutions are one way to respond. A short film can show both clearly to decision-makers and to the communities involved.",
      method: "I filmed in four coastal towns, Bagerhat, Chalna, Morrelganj and Kuakata, recording field visuals of climate impacts and nature-based solutions, and interviewing stakeholders and community members.",
      results: "One project video of about 5–6 minutes and four short town videos of 1–2 minutes each, with the raw footage and audio handed over to the project.",
      ack: "The video and footage belong to GCA and BUET, so they are not shown here.",
      related: ["kuakata-research"],
      video: "", materials: [], photo: "", map: "" },

    { id: "raster-downscaling-tool", kind: "tool", art: "raster", featured: false, status: "dev", statusLabel: "In development",
      title: "Raster Downscaling Tool", period: "2026",
      role: "Developer", lead: "", org: "",
      summary: "A desktop app that trains and compares machine-learning models on a coarse raster plus covariates, then downscales with the best one. GeoTIFF in, finer-resolution GeoTIFF out.",
      tags: ["Python", "Machine learning", "GeoTIFF"],
      problem: "Many climate and land-surface datasets are too coarse for local planning.",
      method: "Trains several ML models on a coarse raster and its covariates, checks accuracy, and downscales using the best model.",
      results: "", materials: [], photo: "maps/downscaling-tool.jpg", map: "" },

    { id: "bgrc-website", kind: "web", art: "code", featured: false, status: "completed", statusLabel: "Live website",
      title: "BGRC website: design, development and hosting", period: "August 2026 – present",
      role: "Designer, developer and host (built it all myself)", lead: "", org: "BlueGreen Research and Consultancy (BGRC)",
      summary: "The website of BlueGreen Research and Consultancy, designed, coded and hosted by me in HTML, CSS and JavaScript, in English and Bangla.",
      tags: ["HTML", "CSS", "JavaScript", "Web design", "English + Bangla"],
      problem: "A consultancy needs a clear, trustworthy website where industries, NGOs, developers and students can see what it does and get in touch.",
      method: "I did all the work myself: the design from scratch, the HTML, CSS and JavaScript code, the English and Bangla versions, and the hosting.",
      results: "A live website with Home, About, Services, Training, Projects, Team, Insights and Contact pages, a quote-request form, WhatsApp and email contact, a project-process section and a switch between English and Bangla.",
      materials: [{ label: "Visit www.bgrcbd.com", url: "https://www.bgrcbd.com" }], photo: "photos/projects/bgrc-home.jpg", gallery: ["photos/projects/bgrc-projects.jpg"], map: "" },

    { id: "bgrc-gis-training", kind: "consulting", art: "satellite", featured: false, status: "done", statusLabel: "Training programme",
      title: "GIS and RS training programme, six batches", period: "",
      role: "", lead: "", org: "BlueGreen Research and Consultancy (BGRC)",
      summary: "A training programme in GIS and remote sensing, run through BlueGreen Research and Consultancy in six batches.",
      tags: ["GIS", "Remote sensing", "Training", "Six batches"],
      problem: "", method: "", results: "", materials: [], photo: "photos/projects/bgrc-training.jpg", map: "" },

    { id: "bgrc-duet-thesis", kind: "consulting", art: "river", featured: false, status: "done", statusLabel: "Completed project",
      title: "Thesis project, Institute of Water and Environment, DUET", period: "",
      role: "", lead: "", org: "BlueGreen Research and Consultancy (BGRC)",
      summary: "A completed thesis project linked to the Institute of Water and Environment at DUET, listed among the BGRC projects.",
      tags: ["Thesis", "DUET", "Water and environment"],
      problem: "", method: "", results: "", materials: [], photo: "", map: "" },

    { id: "bgrc-iubat-thesis", kind: "consulting", art: "cert", featured: false, status: "done", statusLabel: "Completed project",
      title: "MSc thesis project, IUBAT", period: "",
      role: "", lead: "", org: "BlueGreen Research and Consultancy (BGRC)",
      summary: "Research and analysis support for an MSc thesis at IUBAT, listed among the completed BGRC projects.",
      tags: ["MSc thesis", "IUBAT", "Research support"],
      problem: "", method: "", results: "", materials: [], photo: "", map: "" }
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
    /* ভ্রমণের মানচিত্র: districts = শেপফাইলের জেলার নাম (ইংরেজি বানানে), post = নিচের পোস্টের id */
    map: {
      title: { en: "Places I have been", bn: "যেসব জায়গায় গিয়েছি" },
      note:  { en: "Tap a highlighted area on the map to read its story.", bn: "মানচিত্রের রঙিন এলাকায় ট্যাপ করলে সেই জায়গার গল্প পড়তে পারবেন।" },
      soonText: { en: "Story coming soon", bn: "শিগগিরই আসছে" },
      groups: [
        { districts: ["Patuakhali"], post: "kuakata", tone: "gold", label: { en: "Kuakata", bn: "কুয়াকাটা" }, sub: { en: "Patuakhali · coast", bn: "পটুয়াখালী · উপকূল" } },
        { districts: ["Sylhet"], post: "sylhet", tone: "sky", label: { en: "Sylhet", bn: "সিলেট" }, sub: { en: "Sylhet · haors and tea hills", bn: "সিলেট · হাওর ও চা-বাগান" } },
        { districts: ["Khulna", "Bagerhat", "Satkhira"], post: "sundarban", tone: "teal", label: { en: "Sundarban", bn: "সুন্দরবন" }, sub: { en: "Khulna · Bagerhat · Satkhira", bn: "খুলনা · বাগেরহাট · সাতক্ষীরা" } },
        { districts: ["Bogra"], post: "bogura", tone: "soon", soon: true, label: { en: "Bogura", bn: "বগুড়া" }, sub: { en: "Bogura · coming soon", bn: "বগুড়া · শিগগিরই" } }
      ]
    },

    /* ⚠ পোস্টগুলোর তথ্য ওয়েব সার্চ থেকে যাচাই করা, প্রথম-পুরুষের (I / আমি) অংশগুলো আপনি দেখে নিন। ছবি দিলে cover: "photos/travel/xxx.jpg" বসান, নইলে আঁকা ছবি দেখাবে */
    posts: [
      { id: "kuakata", date: "", when: "", place: "Kuakata, Patuakhali", region: { en: "Southern coast", bn: "দক্ষিণ উপকূল" }, tags: ["Coast", "Erosion", "Mangrove"],
        art: "sunrise", tone: "gold", cover: "", photos: [],
        title: { en: "Kuakata: a beach that is still on the move", bn: "কুয়াকাটা: যে সৈকত আজও বদলাচ্ছে" },
        summary: { en: "Where the sun rises and sets over the same sea, and where a changing shoreline became the subject of my research.",
                   bn: "যেখানে একই সাগর থেকে সূর্য ওঠে আর সেখানেই ডোবে, আর যেখানকার বদলে যাওয়া তটরেখা আমার গবেষণার বিষয় হয়ে উঠেছিল।" },
        related: [ { label: { en: "Read about the Kuakata research project", bn: "কুয়াকাটা গবেষণা প্রকল্পটি দেখুন" }, href: "project.html?p=kuakata-research" } ],
        body: {
          en: ["Kuakata sits at the southern tip of Bangladesh, in Kalapara upazila of Patuakhali district, about 320 km from Dhaka. Locals call it Sagar Kanya, the daughter of the sea. It is best known for a rare view: from the same long beach you can watch the sun rise out of the Bay of Bengal and, in the evening, sink back into it.",
               "## A coast that keeps moving",
               "For me Kuakata is more than a beach. Its shoreline is restless. Sand builds up in one place and washes away in another, and the rivers that once fed the coast with sediment are changing too. This is the coast I worked on as a Research Associate at M/S Tuhin Associates, in a research project on nature-based erosion reduction supported by a youth-led grant at BUET's Institute of Water and Flood Management and the Global Center on Adaptation.",
               "The study looked at the coast in several ways: satellite images from 1980 to 2024 analysed with ArcGIS and DSAS to measure how the shoreline moved, soil boreholes to understand what lies beneath the beach, and Delft3D modelling to test how the sand might behave over the next decade. In places the shoreline retreated by up to 13.66 m a year, while other stretches grew by up to 19 m a year.",
               "## Mangroves as part of the answer",
               "The proposal is to rebuild the beach with sediment dredged from the Andharmanik River estuary and to back it with mangrove zones. Mangroves slow waves, hold soil together and shelter young fish, and the loss of about 60% of the forest cover over four decades is one reason the shore is so exposed today. For planting, the project suggests TetraPOT units: concrete tetrapods that hold a biodegradable pot with a seed inside.",
               "## Through a camera",
               "I went back to Kuakata later with a camera, filming for the Coastal Towns Climate Resilience Project of GCA and BUET, together with Bagerhat, Chalna and Morrelganj. Filming made me see the same coast in another way: through the daily lives of the people who live beside it.",
               "## If you go",
               "Kuakata is reached by road from Dhaka via Barishal or Patuakhali, with the last stretch by local bus. Early morning and late afternoon give the best light on the water, and the beach is gentler outside the monsoon.",
               "Kuakata taught me that a shoreline is a story still being written. The beach on today's map will look different in a decade, and that is exactly why it deserves careful study."],
          bn: ["কুয়াকাটা বাংলাদেশের দক্ষিণ প্রান্তে, পটুয়াখালী জেলার কলাপাড়া উপজেলায়, ঢাকা থেকে প্রায় ৩২০ কিলোমিটার দূরে। স্থানীয়ভাবে একে বলা হয় সাগরকন্যা। এর সবচেয়ে বড় বিশেষত্ব একটি বিরল দৃশ্য: একই দীর্ঘ সৈকতে দাঁড়িয়ে বঙ্গোপসাগর থেকে সূর্যকে উঠতে দেখা যায়, আবার সন্ধ্যায় সেখানেই ডুবে যেতে দেখা যায়।",
               "## যে উপকূল থেমে নেই",
               "আমার কাছে কুয়াকাটা শুধু একটি সৈকত নয়। এর তটরেখা সারাক্ষণ অস্থির। এক জায়গায় বালি জমে, আরেক জায়গায় ভেঙে যায়, আর যেসব নদী একসময় উপকূলে পলি এনে দিত সেগুলোও বদলে যাচ্ছে। এই উপকূল নিয়েই আমি কাজ করেছি এম/এস তুহিন অ্যাসোসিয়েটসের রিসার্চ অ্যাসোসিয়েট হিসেবে। প্রকল্পটি ছিল প্রকৃতিভিত্তিক সমাধানে ভাঙন কমানো নিয়ে, বুয়েটের ইনস্টিটিউট অব ওয়াটার অ্যান্ড ফ্লাড ম্যানেজমেন্ট এবং গ্লোবাল সেন্টার অন অ্যাডাপটেশনের তরুণ-নেতৃত্বাধীন গবেষণা অনুদানে।",
               "গবেষণায় উপকূলকে কয়েকভাবে দেখা হয়েছে: ১৯৮০ থেকে ২০২৪ সালের স্যাটেলাইট ছবি ArcGIS ও DSAS দিয়ে বিশ্লেষণ করে তটরেখা কতটা সরেছে তা মাপা হয়েছে, সৈকতের নিচে কী আছে বুঝতে মাটির বোরহোল নমুনা নেওয়া হয়েছে, আর আগামী এক দশকে বালি কীভাবে সরতে পারে তা Delft3D মডেলে পরীক্ষা করা হয়েছে। কোথাও তটরেখা বছরে সর্বোচ্চ ১৩.৬৬ মিটার পর্যন্ত ক্ষয় হয়েছে, আবার কোথাও বছরে ১৯ মিটার পর্যন্ত বেড়েছে।",
               "## সমাধানের অংশ ম্যানগ্রোভ",
               "প্রস্তাব হলো আন্ধারমানিক নদীর মোহনা থেকে ড্রেজ করা বালি দিয়ে সৈকত নতুন করে গড়া, আর তার পাশে ম্যানগ্রোভ অঞ্চল তৈরি করা। ম্যানগ্রোভ ঢেউয়ের জোর কমায়, মাটি ধরে রাখে এবং মাছের পোনাকে আশ্রয় দেয়। গত চার দশকে বনের প্রায় ৬০ শতাংশ কমে যাওয়াও আজ তীর এত অরক্ষিত হওয়ার একটি কারণ। রোপণের জন্য প্রকল্পে টেট্রাপট (TetraPOT) ব্যবহারের কথা বলা হয়েছে: কংক্রিটের চতুষ্পদ কাঠামো, যার ভেতরের পচনশীল পাত্রে বীজ থাকে।",
               "## ক্যামেরার চোখে",
               "পরে আমি ক্যামেরা হাতে আবার কুয়াকাটায় গিয়েছি, গ্লোবাল সেন্টার অন অ্যাডাপটেশন ও বুয়েটের উপকূলীয় শহর জলবায়ু সহনশীলতা প্রকল্পের (CTCRP) ডকুমেন্টারি তৈরির জন্য, বাগেরহাট, চালনা ও মোরেলগঞ্জের সঙ্গে। এই কাজ একই উপকূলকে অন্যভাবে দেখতে শিখিয়েছে: যাঁরা এর পাশে বাস করেন তাঁদের দৈনন্দিন জীবনের ভেতর দিয়ে।",
               "## যেতে চাইলে",
               "ঢাকা থেকে সড়কপথে বরিশাল বা পটুয়াখালী হয়ে কুয়াকাটা যাওয়া যায়, শেষ অংশটুকু লোকাল বাসে। পানিতে সবচেয়ে সুন্দর আলো পাওয়া যায় ভোরে আর বিকেলের শেষ দিকে, আর বর্ষা এড়িয়ে গেলে সৈকত তুলনামূলক শান্ত থাকে।",
               "কুয়াকাটা আমাকে শিখিয়েছে, তটরেখা এমন এক গল্প যা এখনও লেখা হচ্ছে। আজকের মানচিত্রের সৈকত এক দশক পরে অন্যরকম দেখাবে, আর ঠিক সে কারণেই একে যত্ন করে পর্যবেক্ষণ করা দরকার।"] } },

      { id: "sylhet", date: "", when: "", place: "Sylhet", region: { en: "North-east", bn: "উত্তর-পূর্ব" }, tags: ["Haor", "Tea gardens", "Flood risk"],
        art: "haor", tone: "sky", cover: "", photos: [],
        title: { en: "Sylhet: hills, haors and a landscape shaped by floods", bn: "সিলেট: পাহাড়, হাওর আর বন্যায় গড়া এক ভূদৃশ্য" },
        summary: { en: "Tea hills, a swamp forest and wide seasonal wetlands: a landscape made by water, and the setting of a flood study I co-authored.",
                   bn: "চা-বাগানের ঢালু পাহাড়, জলাবন আর মৌসুমি বিস্তীর্ণ হাওর: পানির হাতে গড়া এক ভূদৃশ্য, আর আমার সহ-লেখা বন্যা-ঝুঁকি গবেষণার পটভূমি।" },
        related: [ { label: { en: "See the Sylhet flood vulnerability paper", bn: "সিলেটের বন্যা-ঝুঁকি গবেষণাপত্রটি দেখুন" }, href: "research.html#pubs" } ],
        body: {
          en: ["Sylhet, in the north-east of Bangladesh, is a landscape of rolling tea gardens, green hills close to the Indian border and wide seasonal wetlands called haors. The city itself is ringed by tea estates, and the region is famous for its tea.",
               "## A forest that floods on schedule",
               "Ratargul, about 26 km from Sylhet city beside the Gowain River, is the only freshwater swamp forest in Bangladesh. For several months of the monsoon its trees stand in water and the forest is explored by boat, while in the dry season parts of it can be crossed on foot.",
               "Further along the same road, Jaflong sits where the Piyain river leaves the hills at the border, with stones carried down by the water and tea estates on the slopes behind. Ratargul, Lalakhal, Jaflong and Bisnakandi lie along roughly the same route toward Tamabil, so a long day can cover several of them.",
               "## Why a flood researcher keeps looking",
               "The water that makes Sylhet beautiful also makes it vulnerable. Heavy rain in the hills upstream, low-lying haors below and fast-rising rivers mean floods are part of life here. I co-authored a study of the district that used fuzzy AHP in GIS to weigh sixteen flood-conditioning factors. It found that about 78% of Sylhet District falls in the high or very high flood-vulnerability classes, and it was published in Discover Environment in 2026.",
               "A related AHP-based flood vulnerability paper was also part of the 8th International Conference on Civil Engineering for Sustainable Development in February 2026. Maps like these cannot stop a flood, but they show planners where to look first.",
               "## If you go",
               "June to September is the best time for the swamp forest, when the trees stand in water. Tea gardens are at their most peaceful early in the morning, and many of the best-known places can be linked into one day along a single route.",
               "Sylhet shows how one landscape can hold beauty and risk at the same time, and how understanding the water is the first step toward living safely with it."],
          bn: ["সিলেট বাংলাদেশের উত্তর-পূর্বে। এখানে আছে ঢালু চা-বাগান, ভারত সীমান্তের কাছের সবুজ পাহাড় আর হাওর নামের বিস্তীর্ণ মৌসুমি জলাভূমি। শহরটি নিজেই চা-বাগানে ঘেরা, আর এই অঞ্চল চায়ের জন্য বিখ্যাত।",
               "## নিয়ম করে ডুবে যাওয়া বন",
               "সিলেট শহর থেকে প্রায় ২৬ কিলোমিটার দূরে গোয়াইন নদীর পাশে রাতারগুল বাংলাদেশের একমাত্র মিঠাপানির জলাবন। বর্ষার কয়েক মাস এর গাছগুলো পানিতে দাঁড়িয়ে থাকে, তখন নৌকায় ঘুরে দেখতে হয়। শুকনো মৌসুমে কিছু অংশে হেঁটেও যাওয়া যায়।",
               "একই পথে আরও এগোলে জাফলং: সীমান্তে পাহাড় থেকে নেমে আসা পিয়াইন নদী, পানিতে ভেসে আসা পাথর, আর পেছনের ঢালে চা-বাগান। রাতারগুল, লালাখাল, জাফলং ও বিছনাকান্দি প্রায় একই পথে তামাবিলের দিকে পড়ে, তাই একটি লম্বা দিনে এর বেশ কয়েকটি ঘুরে আসা যায়।",
               "## একজন বন্যা-গবেষকের চোখ কেন এখানে আটকে থাকে",
               "যে পানি সিলেটকে সুন্দর করেছে, সেই পানিই একে ঝুঁকিতেও রেখেছে। উজানের পাহাড়ে ভারী বৃষ্টি, নিচের নিচু হাওর আর দ্রুত ফুলে ওঠা নদী মিলিয়ে বন্যা এখানকার জীবনের অংশ। আমি জেলাটি নিয়ে একটি গবেষণার সহ-লেখক, যেখানে GIS-এ ফাজি AHP পদ্ধতিতে বন্যার ষোলোটি প্রভাবক বিবেচনা করা হয়েছে। দেখা গেছে সিলেট জেলার প্রায় ৭৮ শতাংশ এলাকা উচ্চ বা অতি উচ্চ বন্যা-ঝুঁকির শ্রেণিতে পড়ে। গবেষণাটি ২০২৬ সালে Discover Environment জার্নালে প্রকাশিত হয়েছে।",
               "AHP-ভিত্তিক সিলেটের বন্যা-ঝুঁকি নিয়ে একটি সংশ্লিষ্ট গবেষণাপত্র ২০২৬ সালের ফেব্রুয়ারিতে অনুষ্ঠিত ৮ম আন্তর্জাতিক সিভিল ইঞ্জিনিয়ারিং ফর সাসটেইনেবল ডেভেলপমেন্ট সম্মেলনেও ছিল। এ ধরনের মানচিত্র বন্যা থামাতে পারে না, কিন্তু পরিকল্পনাকারীদের দেখিয়ে দেয় কোথায় আগে নজর দিতে হবে।",
               "## যেতে চাইলে",
               "জলাবন দেখার সেরা সময় জুন থেকে সেপ্টেম্বর, যখন গাছগুলো পানিতে দাঁড়িয়ে থাকে। চা-বাগান সবচেয়ে শান্ত থাকে ভোরে, আর নামকরা জায়গাগুলোর অনেকগুলো একই পথে একদিনে জুড়ে নেওয়া যায়।",
               "সিলেট দেখায়, একই ভূদৃশ্যে কীভাবে সৌন্দর্য আর ঝুঁকি পাশাপাশি থাকে, আর পানিকে বোঝাই কেন তার সঙ্গে নিরাপদে বাঁচার প্রথম ধাপ।"] } },

      { id: "sundarban", date: "", when: "", place: "Sundarban, Khulna region", region: { en: "South-west", bn: "দক্ষিণ-পশ্চিম" }, tags: ["Mangrove", "World Heritage", "Delta"],
        art: "mangrove", tone: "", cover: "", photos: [],
        title: { en: "The Sundarban: where river, sea and forest meet", bn: "সুন্দরবন: যেখানে নদী, সাগর আর বন মিলেছে" },
        summary: { en: "The world's largest mangrove forest, and a living lesson in how nature defends a coast.",
                   bn: "পৃথিবীর বৃহত্তম ম্যানগ্রোভ বন, আর প্রকৃতি কীভাবে উপকূলকে রক্ষা করে তার এক জীবন্ত পাঠ।" },
        related: [ { label: { en: "See my Kuakata mangrove research", bn: "আমার কুয়াকাটার ম্যানগ্রোভ গবেষণা দেখুন" }, href: "project.html?p=kuakata-research" } ],
        body: {
          en: ["The Sundarban is the largest mangrove forest in the world: about 10,000 km² across Bangladesh and India, with roughly 60% of it on the Bangladeshi side. In Bangladesh it lies in the south-west, mainly across Khulna, Satkhira and Bagerhat districts, and it has been a UNESCO World Heritage Site since 1997.",
               "There are no roads inside. A web of tidal channels is the only way in, and the forest is explored by boat.",
               "## A forest built for salt and tides",
               "Here fresh water from the Ganges delta meets salt water from the Bay of Bengal, and the tide changes the landscape twice a day. Mangrove trees cope with the salt, and their roots rise above the mud to breathe and to hold the soil together. The forest is home to the Royal Bengal tiger, spotted deer, crocodiles and many birds, and families living around it depend on fishing and collecting honey.",
               "## A natural coastal defence",
               "As a water researcher I read the Sundarban as infrastructure. Mangroves slow storm surges and waves, trap sediment and shelter the land behind them. When the same trees thin out, as they have along parts of the Kuakata coast, the shore loses a defence. That link is why mangrove restoration sits at the centre of my Kuakata research.",
               "This south-western corner connects to my work in other ways too. I filmed in Bagerhat, Chalna and Morrelganj for the CTCRP documentary, and one of my conference papers studies drinking-water quality in Paikgachha, Khulna.",
               "## If you go",
               "Winter is the usual season for visits, and because the only way in is by water, trips are made by boat. Go with a licensed operator and follow the forest rules: this is a protected area and a tiger habitat.",
               "The Sundarban reminds me that some of the best coastal engineering was done by nature long ago, and that our task is often to protect it."],
          bn: ["সুন্দরবন পৃথিবীর বৃহত্তম ম্যানগ্রোভ বন: বাংলাদেশ ও ভারত মিলিয়ে প্রায় ১০,০০০ বর্গকিলোমিটার, যার প্রায় ৬০ শতাংশ বাংলাদেশে। বাংলাদেশে এটি দক্ষিণ-পশ্চিমে, প্রধানত খুলনা, সাতক্ষীরা ও বাগেরহাট জেলাজুড়ে, আর ১৯৯৭ সাল থেকে এটি ইউনেস্কোর বিশ্ব ঐতিহ্য স্থান।",
               "ভেতরে কোনো সড়ক নেই। জোয়ার-ভাটার খালের জালই একমাত্র পথ, আর বনটি ঘুরে দেখতে হয় নৌকায়।",
               "## লবণ আর জোয়ারের জন্য গড়া বন",
               "এখানে গঙ্গা ব-দ্বীপের মিঠা পানি মিশেছে বঙ্গোপসাগরের লোনা পানির সঙ্গে, আর দিনে দুবার জোয়ার ভূদৃশ্য বদলে দেয়। ম্যানগ্রোভ গাছ লবণ সইতে পারে, আর এর শিকড় কাদার ওপরে উঠে এসে শ্বাস নেয় এবং মাটিকে আঁকড়ে রাখে। বনটি রয়েল বেঙ্গল টাইগার, চিত্রা হরিণ, কুমির আর নানা পাখির আবাস, আর এর আশপাশের মানুষ মাছ ধরা ও মধু সংগ্রহের ওপর নির্ভর করে বাঁচে।",
               "## উপকূলের প্রাকৃতিক ঢাল",
               "পানি নিয়ে গবেষক হিসেবে আমি সুন্দরবনকে একধরনের অবকাঠামো হিসেবে দেখি। ম্যানগ্রোভ ঝড়ের জলোচ্ছ্বাস ও ঢেউয়ের জোর কমায়, পলি আটকে রাখে এবং পেছনের ভূমিকে আড়াল দেয়। কুয়াকাটা উপকূলের কিছু অংশে যেমন হয়েছে, এই গাছ পাতলা হয়ে গেলে তীর একটি সুরক্ষা হারায়। এই যোগসূত্রের কারণেই আমার কুয়াকাটা গবেষণার কেন্দ্রে আছে ম্যানগ্রোভ পুনরুদ্ধার।",
               "দক্ষিণ-পশ্চিমের এই প্রান্ত আমার কাজের সঙ্গে আরও নানাভাবে জড়িত। CTCRP ডকুমেন্টারির জন্য আমি বাগেরহাট, চালনা ও মোরেলগঞ্জে ভিডিও ধারণ করেছি, আর আমার একটি কনফারেন্স পেপার খুলনার পাইকগাছায় পানীয় জলের মান নিয়ে।",
               "## যেতে চাইলে",
               "সাধারণত শীতকালে সুন্দরবন ভ্রমণ করা হয়, আর পানিপথই একমাত্র পথ বলে ভ্রমণ হয় নৌকায়। অনুমোদিত অপারেটরের সঙ্গে যান এবং বনের নিয়ম মেনে চলুন: এটি সংরক্ষিত এলাকা এবং বাঘের আবাসস্থল।",
               "সুন্দরবন মনে করিয়ে দেয়, উপকূল রক্ষার সেরা কাজগুলোর অনেকই প্রকৃতি বহু আগেই করে রেখেছে, আর আমাদের কাজ প্রায়ই তাকে রক্ষা করা।"] } },

      { id: "bogura", soon: true, date: "", when: "", place: "Bogura", region: { en: "Northern Bangladesh", bn: "উত্তরবঙ্গ" }, tags: ["North", "Heritage"],
        art: "city", tone: "sand", cover: "", photos: [],
        title: { en: "Bogura", bn: "বগুড়া" },
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
