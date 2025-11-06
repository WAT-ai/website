// newProjectData.ts - Current and past project data for WAT.ai
// -----------------------------------------------------------
// This file exports arrays of active and completed projects for display on the Projects page.
// Edit this file to add, remove, or update project info and details.

/**
 * Updated project data for WAT.ai research initiatives
 * Contains project descriptions, team leads, contacts, and collaboration details
 * Used to populate the redesigned Projects page
 */

export interface TeamMember {
  name: string;
  email?: string;
  linkedin?: string;
}

export interface ProjectLinks {
  website?: string;
  repository?: string;
  paper?: string;
  documentation?: string;
}

export interface ProjectData {
  title: string;
  tpm: string;
  description: string;
  teamMembers: TeamMember[];
  links?: ProjectLinks;
  collaboration?: string;
  tags: string[];
}

export const NewProjectData: ProjectData[] = [
  {
    title: "Deep Learning Race Car",
    tpm: "Nina Zhang",
    description:
      "The Deep Learning Race Car project leverages Deep RL infrastructure to train a miniature race car using reinforcement learning in simulation, then evaluates performance in physical environments. The trained model is deployed onto a custom-built miniature race car equipped with a Raspberry Pi and onboard sensors for real-time inference. This project demonstrates sim-to-real transfer learning and autonomous racing through curriculum learning, progressing from simple to complex track configurations.",
    teamMembers: [
      {
        name: "Nina Zhang",
        email: "nina123hz@gmail.com",
        linkedin: "https://www.linkedin.com/in/nina-zhang-a85935310/"
      }
    ],
    tags: ["Reinforcement Learning", "Robotics", "Autonomous Systems", "PPO", "Sim-to-Real"]
  },
  {
    title: "ClipABit: Semantic Video Search Engine",
    tpm: "Eshaan Mehta, Safiya Makada",
    description:
      "Imagine you are a video editor searching through a directory of hundreds of files of footage, trying to find the exact moment to insert into your project. Instead of manually searching through files, what if your video editor had the context of all your files… That's what we're building, a semantic search engine enabling you to find moments within your footage in seconds. We index the videos using off-the-shelf models to build a knowledge base that you can query using natural language. Search by content, location, entities and people within your clips and find exactly what you're looking for!",
    teamMembers: [
      {
        name: "Eshaan Mehta",
        email: "e3mehta@uwaterloo.ca",
        linkedin: "https://www.linkedin.com/in/eshaan-mehta-136a6924b/"
      },
      {
        name: "Safiya Makada",
        email: "smakada@uwaterloo.ca",
        linkedin: "https://www.linkedin.com/in/safiya-makada/"
      }
    ],
    links: {
      repository: "https://github.com/ClipABit"
    },
    tags: ["Computer Vision", "NLP", "Semantic Search", "Video Processing", "RAG"]
  },
  {
    title: "FlockRL: Decentralized Drone Swarm Coordination",
    tpm: "Joshua Zhang, Katie Zhong",
    description:
      "FlockRL explores how drones can learn to coordinate without a central controller. Each drone relies only on its own state and the positions of nearby neighbors to decide where to move. The challenge is to traverse constrained spaces and obstacle-filled environments without collisions while maintaining coordination. We start by training a single drone to handle navigation tasks, then scale up to swarms to study decentralized control at larger scales. This project demonstrates how reinforcement learning can enable safe and adaptive coordination in robotics.",
    teamMembers: [
      {
        name: "Joshua Zhang",
        email: "jlzhang@uwaterloo.ca",
        linkedin: "https://www.linkedin.com/in/joshualeezhang/"
      },
      {
        name: "Katie Zhong",
        email: "k2zhong@uwaterloo.ca",
        linkedin: "https://www.linkedin.com/in/katie-zhong/"
      }
    ],
    tags: ["Reinforcement Learning", "Swarm Robotics", "Multi-Agent Systems", "PPO", "Decentralized Control"]
  },
  {
    title: "Pianofi: AI-Powered Piano Transcription",
    tpm: "Jonathan Gong, Bruce Wang, Alex Qin",
    description:
      "PianoFi is an AI-powered service that turns any song into professional piano cover sheet music. Upload a song and get editable MusicXML/MIDI and preview audio. We combine neural AMT models and an interactive web UI so musicians of all levels can quickly obtain accurate transcriptions/covers and practice material! The project aims to achieve state-of-the-art note-level accuracy while maintaining low latency for a seamless user experience.",
    teamMembers: [
      {
        name: "Jonathan Gong",
        email: "j56gong@uwaterloo.ca",
        linkedin: "https://www.linkedin.com/in/jonathan-gong-005491263/"
      },
      {
        name: "Bruce Wang",
        email: "b225wang@uwaterloo.ca",
        linkedin: "https://www.linkedin.com/in/brucewang15/"
      }
    ],
    links: {
      repository: "https://github.com/Pianofi",
      website: "https://pianofi.ca"
    },
    tags: ["Audio Processing", "Music Information Retrieval", "Deep Learning", "Full-Stack"]
  },
  {
    title: "See-DR: Mobile Diabetic Retinopathy Screening",
    tpm: "Jessica Yuan, Hari Chandrasekhar",
    description:
      "See-DR is a low-cost mobile screening tool for diabetic retinopathy (DR), a leading cause of preventable blindness. Using a smartphone camera, our system captures retinal images and applies AI to detect early signs of DR. To ensure transparency, it generates visual heatmaps highlighting which regions of the eye influenced the model's decision. By leveraging mobile AI and explainable deep learning, See-DR aims to provide accessible, portable, and affordable eye screening for clinics and community outreach programs.",
    teamMembers: [
      {
        name: "Jessica Yuan",
        email: "jl2yuan@uwaterloo.ca",
        linkedin: "https://www.linkedin.com/in/jessica-yuan1/"
      },
      {
        name: "Hari Chandrasekhar",
        email: "hchandra@uwaterloo.ca",
        linkedin: "https://www.linkedin.com/in/hari-chandrasekhar/"
      }
    ],
    links: {
      repository: "https://github.com/jessicayuan1/see-dr"
    },
    tags: ["Medical AI", "Computer Vision", "Mobile Deployment", "Explainable AI", "Healthcare"]
  },
  {
    title: "Microgrid RL: Autonomous Optimization of Renewable-Powered Microgrids",
    tpm: "Jordan Leis, Devon Kisob",
    description:
      "The Microgrid RL project at WAT.ai focuses on developing and assessing reinforcement learning (RL) architectures designed for autonomous optimization of renewable-powered microgrids in rural Sub-Saharan Africa. Utilizing realistic simulations integrated with NASA's POWER API weather data, the team evaluates state-of-the-art RL methods, Deep Q-Network (DQN), Proximal Policy Optimization (PPO), and Deep Deterministic Policy Gradient (DDPG) to effectively manage energy storage, renewable generation, and load balancing. The goal is to identify the most robust and efficient solution, ultimately enhancing energy accessibility and reducing operational barriers in energy-deficient regions.",
    teamMembers: [
      {
        name: "Jordan Leis",
        email: "j2leis@uwaterloo.ca",
        linkedin: "https://www.linkedin.com/in/jordan-leis"
      },
      {
        name: "Devon Kisob",
        email: "dkisob@uwaterloo.ca",
        linkedin: "https://www.linkedin.com/in/devonkisob/"
      }
    ],
    tags: ["Reinforcement Learning", "Microgrids", "Energy Systems", "Sustainability"]
  },
  {
    title: "AI Sentiment Pulse in Stock Market",
    tpm: "Jiayou (Sam) Zhong, Shenyan (Bob) Zheng",
    description:
      "AI Sentiment Pulse in Stock Market is an application-focused project that leverages social media sentiment to anticipate short-term market trends. Inspired by the 2021 GameStop surge—where Reddit discussions triggered dramatic price shifts—we built a system to monitor real-time updates from subreddits like r/WallStreetBets. Instead of focusing on individual stocks, we analyze trending topics and collective user sentiment to detect sudden shifts in market attention. To improve accuracy, our system includes sarcasm detection tailored to the informal and ironic language often used in financial communities. These insights are combined with market data and processed using classical and deep learning models to forecast potential price movements. Our goal is to equip investors with timely, sentiment-driven signals that highlight emerging retail momentum.",
    teamMembers: [
      {
        name: "Jiayou (Sam) Zhong",
        email: "j55zhong@uwaterloo.ca",
        linkedin: "https://www.linkedin.com/in/jiayouz/"
      },
      {
        name: "Shenyan (Bob) Zheng",
        email: "b63zheng@uwaterloo.ca",
        linkedin: "https://www.linkedin.com/in/shenyan-zheng-0ab064274/"
      }
    ],
    tags: ["Sentiment Analysis", "Stock Market", "Social Media", "Deep Learning", "Sarcasm Detection"]
  },
  {
    title: "AffiNNity: Predicting Drug–Target Binding with Graph Neural Networks",
    tpm: "Jahkim Brown-Roopnarine, James Yu",
    description:
      "Drug discovery is slow, expensive, and often hit-or-miss. AffiNNity is a machine learning model designed to change that — using Graph Neural Networks (GNNs) to predict how strongly a drug will bind to a target protein. By combining molecular graphs with protein sequence data in a dual-stream setup, the system captures both the shape and behavior of drug–protein interactions. Built on top of large datasets like PDBBind and modern architectures like Graph Isomorphism Networks, AffiNNity learns the patterns that make a drug effective — without needing to run thousands of costly lab tests. The goal is to speed up early-phase drug screening, reduce experimental overhead, and help scientists identify the most promising candidates faster. As pharmaceutical pipelines increasingly rely on computational tools, AffiNNity offers a scalable, accurate way to bring life-saving treatments to patients more efficiently.",
    teamMembers: [
      {
        name: "Jahkim Brown-Roopnarine",
        email: "jbrownro@uwaterloo.ca",
        linkedin: "https://www.linkedin.com/in/jahkim-brown-roopnarine/"
      },
      {
        name: "James Yu",
        email: "j85yu@uwaterloo.ca",
        linkedin: "https://www.linkedin.com/in/james-yu2005/"
      }
    ],
    tags: ["Drug Discovery", "Graph Neural Networks", "Bioinformatics", "Machine Learning", "Protein Binding"]
  },
  {
    title: "FORTif.ai: AI-Driven Companion for Senior Independence",
    tpm: "Lino Kee, Edson Takei",
    description:
      "FORTif.ai is an AI-driven companion that empowers seniors to live independently by merging proactive safety monitoring with tailored daily support. Using a computer-vision–powered Hazard Detection model, it continuously scans the home for potential risks—like spills, cluttered pathways, and tripping hazards—and offers clear, actionable recommendations to address them. At the same time, an intuitive AI chatbot engages users in friendly, proactive conversations, providing timely medication and appointment reminders, personalized wellness check-ins, and empathetic responses to questions or concerns. With built-in voice-to-text capabilities and real-time safety insights, FORTif.ai delivers a seamless, user-centric experience designed to enhance home safety, streamline everyday routines, and foster lasting independence for seniors.",
    teamMembers: [
      {
        name: "Lino Kee",
        email: "lino.kee@uwaterloo.ca",
        linkedin: "https://www.linkedin.com/in/linokee0423/"
      },
      {
        name: "Edson Takei",
        email: "ektakei@uwaterloo.ca",
        linkedin: "https://www.linkedin.com/in/edsontakei/"
      }
    ],
    tags: ["Senior Care", "Computer Vision", "AI Chatbot", "Home Safety", "Voice Recognition"]
  },
  {
    title: "Oliver: AI-Powered Virtual Teaching Assistant",
    tpm: "Haoran Zhu, Xianda Du",
    description:
      "In recent years, advancements in conversational AI have led to the development of intelligent tutoring systems to enhance learning experiences through interactive conversation. This project, Oliver, is an innovative virtual teaching assistant and course management system that leverages contextual memory and response strategies designed to promote active learning and critical thinking. Unlike traditional models that frequently offer direct answers, Oliver encourages exploration and comprehension. Through our research paper, we underscore Oliver's potential to serve as a powerful tool in education, supporting learners in developing deeper cognitive skills rather than relying on rote memorization.",
    teamMembers: [
      {
        name: "Haoran Zhu",
        linkedin: "https://www.linkedin.com/in/haoran-zhu-5243b0186/"
      },

    ],
    links: {
      repository: "https://github.com/XiandaDu/WatAIOliver",
      paper: "https://ieeexplore.ieee.org/document/10975875/"
    },
    tags: ["Natural Language Processing", "Education Technology", "Conversational AI", "Active Learning"]
  },
  {
    title: "Radiel Health: Personalized Medicine Through Computational Fluid Dynamics",
    tpm: "Rishabh Sharma, Ahash Ganeshamoorthy, Jatin Mehta",
    description:
      "Surgical diagnosis has always been very observational, decisions were based off of what could be seen. There have been many successful attempts to add more quantitative metrics in medicine, but still diagnoses tend to be 'one-size-fits-all'. The next big leap in the field comes in the form of personalized medicine, where each patient has their own customized treatment that's shaped through empirical research. We are developing a platform where surgeons can upload ultrasounds of an artery, which is then turned into a 3D mesh and is run through our ML model. This model, trained on geometric and physics-based data from ultrasounds, allows us to quickly and accurately predict critical flow parameters for surgeries like coronary interventions. The goal is to minimize the cost to make these parameters available to surgeons from any clinic, making diagnoses more informed.",
    teamMembers: [
      {
        name: "Rishabh Sharma",
        email: "r342shar@uwaterloo.ca",
        linkedin: "https://www.linkedin.com/in/rishabh2003sharma/"
      },
      {
        name: "Ahash Ganeshamoorthy",
        email: "ahash.ganeshamoorthy@griffithuni.edu.au",
        linkedin: "https://www.linkedin.com/in/ahash-ganeshamoorthy/"
      },
      {
        name: "Jatin Mehta",
        email: "jatin.mehta@uwaterloo.ca",
        linkedin: "https://www.linkedin.com/in/jatin-r-mehta/"
      }
    ],
    links: {
      website: "https://radielhealth.com/",
      documentation: "https://radielhealth.notion.site/from-barbarism-to-digital-twins"
    },
    collaboration: "UW Fluid Flow Physics Group",
    tags: ["Medical AI", "Computational Fluid Dynamics", "Personalized Medicine", "Computer Vision"]
  }
];

// New project data for redesigned Projects page.
// Add projects as objects in NewProjectData. Update interfaces for new fields.
// Used by ModernProjectCard and Projects page.

// Keep the old project data for past projects
export const PastProjects = [
  {
    title: "Audio Temporal Segmentation & Sentiment Analysis",
    tpm: "Krish Patel, Sahal Sajeer Kalandan",
    description:
      "Our project aims to analyze audio signals to detect phrases and understand emotions. We break down audio into smaller parts (called phrases) and study their patterns over time. This is done using a supervised dataset of audio with labeled phrases and different emotional tags corresponding to each phrase. By looking at the frequency and timing of sounds, we can predict and identify key phrases. We also apply language processing methods to analyze the emotional tone of the audio. This helps improve technologies like phrase detection and language analysis in various multimedia applications.",
  },
  {
    title: "BCI Signal Decoding for Motor Control",
    tpm: "Jakeb Chouinard, Raihan A. Vaheed",
    description:
      "We aim to develop a Spiking Neural Network that can translate neural activity from the brain's motor areas into muscle control commands. Using implanted electrode data from Macaques, our SNNs will provide insights for advanced prosthetic control and efficient brain-computer interface implementations.",
  },
  {
    title: "Causal Modeling and Time Series Representation Learning for Diabetes Management",
    tpm: "Christopher Risi, Walker Payne, Dvir Zagury-Grynbaum",
    description:
      "Gluroo aims to simplify diabetes management by streamlining the tracking of fitness, nutrition, and insulin use for people with diabetes (PWD). This project focuses on improving short-term prandial (meal-time) and postprandial blood glucose outcomes for people with type 1 diabetes, a complex disease that affects nearly 10 million people worldwide. We aim to leverage semi-supervised learning to identify unlabelled meals in time-series blood glucose data, develop meal-scoring functions, and explore causal machine-learning techniques. Our goal is to provide actionable insights to PWD and their care practitioners, enhancing health outcomes and quality of life.",
    collaboration: "Gluroo",
  },
  {
    title: "Copyright Detection in Large Language Models - An ethical approach to Generative AI Development",
    tpm: "Senan Gaffori, Khushee Kapoor",
    description:
      "Use of copyrighted content in training generative AI models has increased significantly as the field has emerged, however, it is challenging to know whether a model is using copyrighted material in its training data. There are two project goals The first is to develop tools to detect whether a piece of given content was used in training data of an LLM. The second is to build an open-source RAG-based logging system to keep track of pieces of flagged media that have been found in the training data of publicly available LLMs.",
  },
  {
    title: "Deep Reinforcement Learning for Stock Portfolio Optimization",
    tpm: "Balambika Baskaran, Ali Elhor",
    description:
      "We are developing a reinforcement learning policy-agent model that optimizes a stock portfolio for long-term capital gains. This model will trade on stocks, commodities and indexes, and have access to real-time data on individual assets, as well as various indicators. In simpler words, we're making a model to make your Wealthsimple balance go up fast! 💰",
  },
  {
    title: "DelayNoMore: TTC Bus Delay Forecaster",
    tpm: "Ted Ferris, Chow Sheng Liang, Franklin Ramirez",
    description:
      "The goal of this project is to develop a model that accurately predicts whether a bus route will be delayed by leveraging previous years' TTC delay data which includes time of delay, location, route, vehicle number, and a few other fields. We also plan on expanding these fields by including seasonality, weather/road conditions, and other applicable features.",
  },
  {
    title: "Deploying AI onboard satellite microcontrollers for the Semantic Segmentation of Methane Plumes with Hyperspectral ML Models",
    tpm: "Liam McAlpine, Prahar Ijner, Kaxit Pandya",
    description:
      "This project aims to develop and deploy artificial intelligence onboard microcontrollers to identify and segment methane plumes using hyperspectral machine learning models. The goal is to enhance environmental monitoring and contribute to climate change mitigation by providing precise and real-time data on methane emissions. The STARCOP dataset provides a fully annotated dataset to be used for training and evaluation. This project will aim to develop a model on this dataset and benchmark it against existing solutions.",
  },
  {
    title: "Energy-efficient AI Accelerators for Transformer Models",
    tpm: "Madhav Malhotra",
    description:
      "We'll be creating an AI accelerator (a computer chip optimised to run AI models) for transformers. Our specific goal is to optimise the energy consumption of this AI accelerator, given the rising energy demand from data centres housing computer LLM inference. Our final digital accelerator design will be manufactured using Tiny Tapeout, whereas intermediate testing will occur using industry simulation softwares and field-programmable gate arrays (FPGAs).",
  },
  {
    title: "NuanceEdge",
    tpm: "Rachel Heo, Ethan Lem, Shruti Srivatsan",
    description:
      "Open science is critical for a society's development and prosperity through knowledge sharing, collaboration, public trust, and evidence-informed decision making. It is currently difficult for policymakers to access and understand latest scientific results, making it difficult to appropriately inform decision making with the latest knowledge. Our team will be looking to address this problem by developing a web-based platform, NuanceEdge, aimed at making science more accessible through extraction of key insights and better presentation using generative AI tools.",
    collaboration: "W&W",
  },
  {
    title: "Pitch AI",
    tpm: "Amandeep Kaur, Zahra Sarayloo",
    description:
      "We aim to develop a generative AI tool to create movie trailers for the media industry. We'll be using machine learning and deep learning to generate scenarios. The input parameters for the trailer generation include character ideas, plot points, and the user's prompt. The output is a text-based trailer with characters, scene descriptions, and emotions that the user can utilize. This project aims to provide a new tool for filmmakers and creatives in the industry.",
    collaboration: "Product Ventures",
  },
  {
    title: "Reinforcement Learning for Doom (1993)",
    tpm: "Karman Singh, Krish Sethi",
    description:
      "The project aims to build an RL agent that plays Doom (1993), improving upon the work from Playing FPS Games with Deep Reinforcement Learning (Lample & Chaplot 2017). They are currently implementing a DTQN model to train an agent in Vizdoom.",
  },
  {
    title: "Transfer learning to test decision-making generalisation in LLM agents",
    tpm: "Mehar Shienh, Madhav Malhotra",
    description:
      "We're aiming to create LLM agents that can make political decisions, like in parliamentary legislation. Our approach will attempt to train agents to make good decisions in gamified environments like Monopoly. We will then see how this training 'generalises' (transfers) to a real-life context using the case study of politics. The 'product' outcome is getting a good political decision-making agent. The 'research' outcome is testing the generalisation of the agent's decision making capabilities.",
  },
  {
    title: "WindDM: Conditional Diffusion Models for Super-resolution of Wind Data",
    tpm: "Daniel Bartman, Jacob Schnell",
    description:
      "Access to high-quality, microscale data on local wind patterns is essential for determining optimal placements of wind farms. While this has traditionally been achieved through the use of Large Eddy Simulations (LES) to super-resolve mesoscale data, these are slow and costly to produce. We propose using recent advances in diffusion models to produce scalable and accurate microscale data at a fraction of the cost of LES models. We also leverage conditional information from the domain of interest to further improve our generations.",
    collaboration: "Veer Renewables",
  },
  {
    title: "PlayFitt Recommender System",
    tpm: "Ben Bates, Richard Wills",
    coreMembers: "Will Erf, Kristof Sochan, Nolan White-Roy, Ross Cleary",
    description:
      "Our objective is to help people be more active! We developed a recommender system for the PlayFitt fitness app using a contextual bandit algorithm. This takes into account information about the users as context, and makes decisions about rep counts and reward values to suggest. Notably, this approach enables online learning.",
    collaboration: "Intellisports",
    collaborationLogo: "intellisport.png",
    collaborationLink: "https://www.playfitt.ca",
  },
  {
    title: "Solar Photovoltaic Output Prediction",
    tpm: "Areel Khan, Carter Demars",
    coreMembers: "Anupra Chandran, Bill Bai, Mihir Gupta, Raihan Abdul Vaheed",
    description:
      "We set out to develop deep learning models that predict solar photovoltaic output. These forecasts on solar energy production can drive better energy decisions, massively reducing carbon emmissions produced by power grids.",
    collaboration: "Open Climate Fix",
    collaborationLogo: "ocf.png",
    collaborationLink: "https://openclimatefix.org",
  },
  {
    title: "Prostate Cancer Prediction With Correlated Diffusion Imaging",
    tpm: "Hargun Mujral, Jarett Dewbury",
    coreMembers: "Adam Lam, Alex Shao, Michelle Watson, Praajna Baragur",
    description:
      "The application of machine learning to medical images has led to impressive advancement in cancer diagnostics. Our objective is to develop a baseline of deep learning models to detect the presence of prostate cancer within a novel Correlated Diffusion Imaging (CDI) dataset.",
    collaboration: "Dr. Alexander Wong & Hayden Gunraj",
    collaborationLogo: "vip-lab.png",
    collaborationLink: "https://uwaterloo.ca/vision-image-processing-lab/",
  },
  {
    title: "Deep Learning Framework Comparison",
    tpm: "Anusha Raisinghani, Trevor Yu",
    coreMembers:
      "Adish Shah, Ethan Gabriel, Musaab Siddiqui, Urban Pistek, Yask Pokra",
    description:
      "The goal of our project is to benchmark performance of several deep learning frameworks, including TensorFlow, PyTorch, Jax, MxNet, Flux.jl, and KNet.jl. We build models from scratch in each framework and test them on common datasets.",
  },
  {
    title: "Reinforcement Learning Chess Engine",
    tpm: "Amya Singhal, Thomas Fortin",
    coreMembers: "Alex He, Alexander Hutchinson, Ishaan Patel, Shivam Jindal",
    description:
      "We are developing an artificial intelligence chess engine based on the work of Deep Mind on their chess engine━Alpha-Zero. We are also iteratively testing and modifying the model to improve performance on hardware with much more limited processing power than what was available to Deep Mind when creating Alpha-Zero.",
  },
  {
    title: "Stable Diffused Adversarial Attacks",
    tpm: "Andy Wu, Dhrumil Patel, Rayaq Siddiqui",
    coreMembers:
      "Eric Sheen, Harsh Patel, Iliad Shaghaghi, Nicole Jin, Ryan Shen",
    description:
      "We are exploring pre-trained computer vision models (i.e. MobileNet_v1) with the goal to exploit vulnerabilities through various adversarial attacks. Our work aims to develop an architecture that automates adversarial attack image generation in model misclassification.",
  },
];
