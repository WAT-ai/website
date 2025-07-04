/**
 * Project data for WAT.ai research initiatives
 * Contains project descriptions, team leads, and collaboration details
 * Used to populate the Projects page and graph visualization
 */
export const ProjectData = [
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
    title:
      "Causal Modeling and Time Series Representation Learning for Diabetes Management",
    tpm: "Christopher Risi, Walker Payne, Dvir Zagury-Grynbaum",
    description:
      "Gluroo aims to simplify diabetes management by streamlining the tracking of fitness, nutrition, and insulin use for people with diabetes (PWD). This project focuses on improving short-term prandial (meal-time) and postprandial blood glucose outcomes for people with type 1 diabetes, a complex disease that affects nearly 10 million people worldwide. We aim to leverage semi-supervised learning to identify unlabelled meals in time-series blood glucose data, develop meal-scoring functions, and explore causal machine-learning techniques. Our goal is to provide actionable insights to PWD and their care practitioners, enhancing health outcomes and quality of life.",
    collaboration: "Gluroo",
  },
  {
    title:
      "Copyright Detection in Large Language Models - An ethical approach to Generative AI Development",
    tpm: "Senan Gaffori, Khushee Kapoor",
    description:
      "Use of copyrighted content in training generative AI models has increased significantly as the field has emerged, however, it is challenging to know whether a model is using copyrighted material in its training data. There are two project goals The first is to develop tools to detect whether a piece of given content was used in training data of an LLM. The second is to build an open-source RAG-based logging system to keep track of pieces of flagged media that have been found in the training data of publicly available LLMs.",
  },
  {
    title: "Deep Reinforcement Learning for Stock Portfolio Optimization",
    tpm: "Balambika Baskaran, Ali Elhor",
    description:
      "We are developing a reinforcement learning policy-agent model that optimizes a stock portfolio for long-term capital gains. This model will trade on stocks, commodities and indexes, and have access to real-time data on individual assets, as well as various indicators. In simpler words, we’re making a model to make your Wealthsimple balance go up fast! 💰",
  },
  {
    title: "DelayNoMore: TTC Bus Delay Forecaster",
    tpm: "Ted Ferris, Chow Sheng Liang, Franklin Ramirez",
    description:
      "The goal of this project is to develop a model that accurately predicts whether a bus route will be delayed by leveraging previous years' TTC delay data which includes time of delay, location, route, vehicle number, and a few other fields. We also plan on expanding these fields by including seasonality, weather/road conditions, and other applicable features.",
  },
  {
    title:
      "Deploying AI onboard satellite microcontrollers for the Semantic Segmentation of Methane Plumes with Hyperspectral ML Models",
    tpm: "Liam McAlpine, Prahar Ijner, Kaxit Pandya",
    description:
      "This project aims to develop and deploy artificial intelligence onboard microcontrollers to identify and segment methane plumes using hyperspectral machine learning models. The goal is to enhance environmental monitoring and contribute to climate change mitigation by providing precise and real-time data on methane emissions. The STARCOP dataset provides a fully annotated dataset to be used for training and evaluation. This project will aim to develop a model on this dataset and benchmark it against existing solutions.",
  },
  {
    title: "Energy-efficient AI Accelerators for Transformer Models",
    tpm: "Madhav Malhotra",
    description:
      "We’ll be creating an AI accelerator (a computer chip optimised to run AI models) for transformers. Our specific goal is to optimise the energy consumption of this AI accelerator, given the rising energy demand from data centres housing computer LLM inference. Our final digital accelerator design will be manufactured using Tiny Tapeout, whereas intermediate testing will occur using industry simulation softwares and field-programmable gate arrays (FPGAs).",
  },
  {
    title: "NuanceEdge",
    tpm: "Rachel Heo, Ethan Lem, Shruti Srivatsan",
    description:
      "Open science is critical for a society’s development and prosperity through knowledge sharing, collaboration, public trust, and evidence-informed decision making. It is currently difficult for policymakers to access and understand latest scientific results, making it difficult to appropriately inform decision making with the latest knowledge. Our team will be looking to address this problem by developing a web-based platform, NuanceEdge, aimed at making science more accessible through extraction of key insights and better presentation using generative AI tools.",
    collaboration: "W&W",
  },
  {
    title: "Pitch AI",
    tpm: "Amandeep Kaur, Zahra Sarayloo",
    description:
      "We aim to develop a generative AI tool to create movie trailers for the media industry. We’ll be using machine learning and deep learning to generate scenarios. The input parameters for the trailer generation include character ideas, plot points, and the user’s prompt. The output is a text-based trailer with characters, scene descriptions, and emotions that the user can utilize. This project aims to provide a new tool for filmmakers and creatives in the industry.",
    collaboration: "Product Ventures",
  },
  {
    title: "Reinforcement Learning for Doom (1993)",
    tpm: "Karman Singh, Krish Sethi",
    description:
      "The project aims to build an RL agent that plays Doom (1993), improving upon the work from Playing FPS Games with Deep Reinforcement Learning (Lample & Chaplot 2017). They are currently implementing a DTQN model to train an agent in Vizdoom.",
  },
  {
    title:
      "Transfer learning to test decision-making generalisation in LLM agents",
    tpm: "Mehar Shienh, Madhav Malhotra",
    description:
      "We’re aiming to create LLM agents that can make political decisions, like in parliamentary legislation. Our approach will attempt to train agents to make good decisions in gamified environments like Monopoly. We will then see how this training ‘generalises’ (transfers) to a real-life context using the case study of politics. The ‘product’ outcome is getting a good political decision-making agent. The ‘research’ outcome is testing the generalisation of the agent’s decision making capabilities.",
  },
  {
    title:
      "WindDM: Conditional Diffusion Models for Super-resolution of Wind Data",
    tpm: "Daniel Bartman, Jacob Schnell",
    description:
      "Access to high-quality, microscale data on local wind patterns is essential for determining optimal placements of wind farms. While this has traditionally been achieved through the use of Large Eddy Simulations (LES) to super-resolve mesoscale data, these are slow and costly to produce. We propose using recent advances in diffusion models to produce scalable and accurate microscale data at a fraction of the cost of LES models. We also leverage conditional information from the domain of interest to further improve our generations.",
    collaboration: "Veer Renewables",
  },
];

export const PastProjects = [
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
