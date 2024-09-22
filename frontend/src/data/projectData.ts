import { DataSet, Node, Edge } from "vis-network/standalone";

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

export const projectNodes = new DataSet<Node>([
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 1,
    label: "Audio Analysis",
    shape: "dot",
    title:
      "Our project aims to analyze audio signals to detect phrases and understand emotions. We break down audio into smaller parts (called phrases) and study their patterns over time. This is done using a supervised dataset of audio with labeled phrases and different emotional tags corresponding to each phrase. By looking at the frequency and timing of sounds, we can predict and identify key phrases. We also apply language processing methods to analyze the emotional tone of the audio. This helps improve technologies like phrase detection and language analysis in various multimedia applications.",
    value: 100,
    x: 2.3076865673065186,
    y: 2.2303552627563477,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 2,
    label: "BCI Signal Decoding",
    shape: "dot",
    title:
      "We aim to develop a Spiking Neural Network that can translate neural activity from the brain's motor areas into muscle control commands. Using implanted electrode data from Macaques, our SNNs will provide insights for advanced prosthetic control and efficient brain-computer interface implementations.",
    value: 100,
    x: 1.628177523612976,
    y: 3.180338144302368,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 3,
    label: "Blood Glucose",
    shape: "dot",
    title:
      "Gluroo aims to simplify diabetes management by streamlining the tracking of fitness, nutrition, and insulin use for people with diabetes (PWD). This project focuses on improving short-term prandial (meal-time) and postprandial blood glucose outcomes for people with type 1 diabetes, a complex disease that affects nearly 10 million people worldwide. We aim to leverage semi-supervised learning to identify unlabelled meals in time-series blood glucose data, develop meal-scoring functions, and explore causal machine-learning techniques. Our goal is to provide actionable insights to PWD and their care practitioners, enhancing health outcomes and quality of life.",
    value: 100,
    x: 1.7138899564743042,
    y: 2.177978992462158,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 4,
    label: "LLM Copyright",
    shape: "dot",
    title:
      "Use of copyrighted content in training generative AI models has increased significantly as the field has emerged, however, it is challenging to know whether a model is using copyrighted material in its training data. There are two project goals The first is to develop tools to detect whether a piece of given content was used in training data of an LLM. The second is to build an open-source RAG-based logging system to keep track of pieces of flagged media that have been found in the training data of publicly available LLMs.",
    value: 100,
    x: 2.332765817642212,
    y: 0.6680499315261841,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 5,
    label: "RL Stocks",
    shape: "dot",
    title:
      "We are developing a reinforcement learning policy-agent model that optimizes a stock portfolio for long-term capital gains. This model will trade on stocks, commodities and indexes, and have access to real-time data on individual assets, as well as various indicators. In simpler words, we're making a model to make your Wealthsimple balance go up fast! 💰",
    value: 100,
    x: 3.264392614364624,
    y: 1.6221553087234497,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 6,
    label: "TTC Bus Delay",
    shape: "dot",
    title:
      "The goal of this project is to develop a model that accurately predicts whether a bus route will be delayed by leveraging previous years' TTC delay data which includes time of delay, location, route, vehicle number, and a few other fields. We also plan on expanding these fields by including seasonality, weather/road conditions, and other applicable features.",
    value: 100,
    x: 3.6031687259674072,
    y: 3.087784767150879,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 7,
    label: "Sattelite ML",
    shape: "dot",
    title:
      "This project aims to develop and deploy artificial intelligence onboard microcontrollers to identify and segment methane plumes using hyperspectral machine learning models. The goal is to enhance environmental monitoring and contribute to climate change mitigation by providing precise and real-time data on methane emissions. The STARCOP dataset provides a full annotated dataset to be used for training and evaluation. This project will aim to develop a model on this dataset and benchmark it against existing solutions.",
    value: 100,
    x: 2.6689794063568115,
    y: 3.2116904258728027,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 8,
    label: "AI Chip Hardware",
    shape: "dot",
    title:
      "We'll be creating an AI accelerator (a computer chip optimised to run AI models) for transformers. Our specific goal is to optimise the energy consumption of this AI accelerator, given the rising energy demand from data centres housing compute for LLM inference. Our final digital accelerator design will be manufactured using Tiny Tapeout, whereas intermediate testing will occur using industry simulation softwares and field-programmable gate arrays (FPGAs).",
    value: 100,
    x: 4.052953720092773,
    y: 2.4768993854522705,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 9,
    label: "W&W",
    shape: "dot",
    title:
      "Open science is critical for a society's development and prosperity through knowledge sharing, collaboration, public trust, and evidence-informed decision making. It is currently challenging for policymakers to access and understand latest scientific results, making it difficult to appropriately inform decision making with the latest knowledge. Existing platforms seeking to address parts of this problem have some gaps that NuanceEdge wants to address by making science more accessible to those who need it in a convenient and efficient manner using generative AI tools.",
    value: 100,
    x: 1.276572585105896,
    y: 1.5692722797393799,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 10,
    label: "MedChat ",
    shape: "dot",
    title:
      "Winner of the 2023 Cohere RAG Challenge, MedChat is a medical AI platform that leverages disease diaganosis models and medical literature to support medical professionals. MedChat answers the question: what if medical professionals could access reliable A.I. tools via a centralized interface?",
    value: 100,
    x: 1.0153394937515259,
    y: 2.128708600997925,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 11,
    label: "Pitch.AI",
    shape: "dot",
    title:
      "This project uses generative AI to create movie pitches for the media industry. We fine-tune a large language model (LLM) to generate trailer scenarios. The input includes genre, setting, tone, emotions, character ideas, and plot points, and the output is a text movie trailer description with characters, scene descriptions, and emotions. By merging advanced AI with creative processes, this project aims to streamline the development of movie concepts, offering a new tool for filmmakers and creatives in the industry.",
    value: 100,
    x: 2.0303990840911865,
    y: 1.3688299655914307,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 12,
    label: "FPS RL ",
    shape: "dot",
    title:
      "The project aims to build an RL agent that plays Doom (1993), improving upon the work from Playing FPS Games with Deep Reinforcement Learning (Lample & Chaplot 2017). They are currently implementing a DTQN model to train an agent in Vizdoom.",
    value: 100,
    x: 3.7701473236083984,
    y: 1.6072781085968018,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 13,
    label: "Legislation LLM ",
    shape: "dot",
    title:
      "We're aiming to create LLM agents that can make political decisions, like in parliamentary legislation. Our approach will attempt to train agents to make good decisions in gamified environments like Monopoly. We will then see how this training 'generalises' (transfers) to a real-life context using the case study of politics. The 'product' outcome is getting a good political decision-making agent. The 'research' outcome is testing the generalisation of the agent's decision making capabilities.\n",
    value: 100,
    x: 3.5518269538879395,
    y: 0.9538215398788452,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 14,
    label: "WindDM",
    shape: "dot",
    title:
      "Access to high-quality, microscale data on local wind patterns is essential for determining optimal placements of wind farms. While this has traditionally been achieved through the use of Large Eddy Simulations (LES) to super-resolve mesoscale data, these are slow and costly to produce. We propose using recent advances in diffusion models to produce scalable and accurate microscale data at a fraction of the cost of LES models. We also leverage conditional information from the domain of interest to further improve our generations.",
    value: 100,
    x: 3.219883918762207,
    y: 3.6281213760375977,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 15,
    label: "XCare",
    shape: "dot",
    title:
      "Leveraging Computer Vision and CNNs to analyze patient x-rays for injury identification and location. Building a Rehabilitation Agent with Generative AI and RAG to support patient recovery while waiting for specialists.",
    value: 100,
    x: 1.321228265762329,
    y: 3.6444857120513916,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 16,
    label: "Cybersecurity",
    shape: "dot",
    title:
      "The cybersecurity team was testing AI-enabled cyberdefences for IoT devices. We used the Canadian Institute for Cybersecurity's dataset to compare bio-inspired AI algorithms to shallow ML algorithms which can fit on common IoT devices like the ESP32 NodeMCU. To learn more about the algorithms we tested, see our blog or our conference paper. ",
    value: 100,
    x: 2.3949177265167236,
    y: 3.400455951690674,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 17,
    label: "Vector DB for Pharmaceutical Ontologies",
    shape: "dot",
    title:
      "For deep learning networks to effectively be utilized for drug discovery, valid data representations need to be created for the data itself that is able to encode all of the contextual information that exists in this space. One way of encoding this information is to create vector databases based on the relationships encoded in drug ontologies.",
    value: 100,
    x: 0.955556333065033,
    y: 3.1319820880889893,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 18,
    label: "Brain2Text",
    shape: "dot",
    title:
      "Using data from a Stanford competition to convert EEG signals to coherent sentences. Assisting people who have ALS and lost their ability to speak and communicate with others.",
    value: 100,
    x: 1.6791002750396729,
    y: 2.7042009830474854,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 19,
    label: "Energy Consumption Forecasting",
    shape: "dot",
    title:
      "The proposal for this project is to develop a system that is capable of modeling the electrical demand for a commercial building using historical load data, temperature conditions, and occupancy levels.",
    value: 100,
    x: 3.9432785511016846,
    y: 3.1552493572235107,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 20,
    label: "GPU Reinforcement Learning Autotuning",
    shape: "dot",
    title: "Using language models as optimizers for CUDA kernels.",
    value: 100,
    x: 2.8984460830688477,
    y: 2.427914619445801,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 21,
    label: "Stock Forecasting + Sentiment Analysis",
    shape: "dot",
    title:
      "To build a stock forecaster/recommendation system that uses not only classical technical analysis methods but leverages natural language processing (sentiment analysis) to attempt to build a more informed model.",
    value: 100,
    x: 2.6676619052886963,
    y: 1.811019778251648,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 22,
    label: "Website Generation",
    shape: "dot",
    title:
      "Generate HTML and CSS code from screenshot or sketch of a static website layout using a self-trained encoder-decoder model.",
    value: 100,
    x: 1.9618686437606812,
    y: 0.8042610883712769,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 23,
    label: "Wildfires",
    shape: "dot",
    title:
      "Design and Develop a Wildfire Detection Model: Develop a machine learning model to identify wildfires in real time using remote sensing data, including satellite imagery and weather data.",
    value: 100,
    x: 2.723529577255249,
    y: 3.9920945167541504,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 24,
    label: "Zoning LLM",
    shape: "dot",
    title:
      "We are building a webapp that uses GenAI Methods ( LLM+ RAG) to analyze zoning documents in Ontarian cities to gain insights about zoning regulation that help solve the Ontarian housing crisis.",
    value: 100,
    x: 2.9747819900512695,
    y: 0.4737734794616699,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 25,
    label: "Hamming.AI",
    shape: "dot",
    title:
      "Bug In The Code Stack is a variant of the Needle In The Haystack benchmark that tests LLMs' debugging skills at longer context sizes. The benchmark generates a large document of Python source code with a syntatic bug inserted within it, and the LLM is tasked with retrieving the location of the bug. Through testing 11 different LLMs on the benchmark, we have discovered a correlation between increased context size and degradation in retrieval accuracy,  as well as performance disparity between closed-source and open-source models. To learn more, please check out our ArXiv paper (link to paper)",
    value: 100,
    x: 2.8404431343078613,
    y: 0.8059523701667786,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 26,
    label: "PlayFitt Recommender System",
    shape: "dot",
    title:
      "Our objective is to help people be more active! We developed a recommender system for the PlayFitt fitness app using a contextual bandit algorithm. This takes into account information about the users as context, and makes decisions about rep counts and reward values to suggest. Notably, this approach enables online learning.",
    value: 100,
    x: 2.79954195022583,
    y: 1.4294997453689575,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 27,
    label: "Solar Photovoltaic Output Prediction",
    shape: "dot",
    title:
      "We set out to develop deep learning models that predict solar photovoltaic output. These forecasts on solar energy production can drive better energy decisions, massively reducing carbon emmissions produced by power grids.",
    value: 100,
    x: 3.0244927406311035,
    y: 3.1175756454467773,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 28,
    label: "Prostate Cancer Prediction With Correlated Diffusion Imaging",
    shape: "dot",
    title:
      "The application of machine learning to medical images has led to impressive advancement in cancer diagnostics. Our objective is to develop a baseline of deep learning models to detect the presence of prostate cancer within a novel Correlated Diffusion Imaging (CDI) dataset.",
    value: 100,
    x: 0.9945715665817261,
    y: 3.6921472549438477,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 29,
    label: "Deep Learning Framework Comparison",
    shape: "dot",
    title:
      "The goal of our project is to benchmark performance of several deep learning frameworks, including TensorFlow, PyTorch, Jax, MxNet, Flux.jl, and KNet.jl. We build models from scratch in each framework and test them on common datasets.",
    value: 100,
    x: 3.321307420730591,
    y: 2.6275556087493896,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 30,
    label: "Reinforcement Learning Chess Engine",
    shape: "dot",
    title:
      "We are developing an artificial intelligence chess engine based on the work of Deep Mind on their chess engine—Alpha-Zero. We are also iteratively testing and modifying the model to improve performance on hardware with much more limited processing power than what was available to Deep Mind when creating Alpha-Zero.",
    value: 100,
    x: 4.093181133270264,
    y: 1.942681908607483,
  },
  {
    color: "#d8b125",
    font: { color: "white" },
    id: 31,
    label: "Stable Diffused Adversarial Attacks",
    shape: "dot",
    title:
      "We are exploring pre-trained computer vision models (i.e. MobileNet_v1) with the goal to exploit vulnerabilities through various adversarial attacks. Our work aims to develop an architecture that automates adversarial attack image generation in model misclassification.",
    value: 100,
    x: 1.9308511018753052,
    y: 3.7414166927337646,
  },
]);

export const projectEdges = new DataSet<Edge>([
  // Your edges data here (empty in this case)
]);
