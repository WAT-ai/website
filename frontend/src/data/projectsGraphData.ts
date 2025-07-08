// Graph data for project relationships. Exports nodes/edges for vis-network.
// Add new nodes/edges for new projects. Used by ProjectsGraph.

import { Node, Edge, Options } from "vis-network";

export const nodes: Node[] = [
  {
    id: "AI Chip Hardware",
    label: "AI Chip Hardware",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "AI Chip Hardware: \n \nWe'll be creating an AI accelerator (a computer\nchip optimised to run AI models) for transformers.\nOur specific goal is to optimise the energy\nconsumption of this AI accelerator, given the\nrising energy demand from data centres housing\ncompute for LLM inference. Our final digital\naccelerator design will be manufactured using Tiny\nTapeout, whereas intermediate testing will occur\nusing industry simulation softwares and field-\nprogrammable gate arrays (FPGAs).",
  },
  {
    id: "Cybersecurity",
    label: "Cybersecurity",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "Cybersecurity: \n \nThe cybersecurity team was testing AI-enabled\ncyberdefences for IoT devices. We used the\nCanadian Institute for Cybersecurity's dataset to\ncompare bio-inspired AI algorithms to shallow ML\nalgorithms which can fit on common IoT devices\nlike the ESP32 NodeMCU. To learn more about the\nalgorithms we tested, see our blog or our\nconference paper.",
  },
  {
    id: "Deep Learning Framework Comparison",
    label: "Deep Learning Framework Comparison",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "Deep Learning Framework Comparison: \n \nThe goal of our project is to benchmark\nperformance of several deep learning frameworks,\nincluding TensorFlow, PyTorch, Jax, MxNet,\nFlux.jl, and KNet.jl. We build models from scratch\nin each framework and test them on common\ndatasets.",
  },
  {
    id: "Reinforcement Learning Chess Engine",
    label: "Reinforcement Learning Chess Engine",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "Reinforcement Learning Chess Engine: \n \nWe are developing an artificial intelligence chess\nengine based on the work of Deep Mind on their\nchess engine—Alpha-Zero. We are also iteratively\ntesting and modifying the model to improve\nperformance on hardware with much more limited\nprocessing power than what was available to Deep\nMind when creating Alpha-Zero.",
  },
  {
    id: "Audio Analysis",
    label: "Audio Analysis",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "Audio Analysis: \n \nOur project aims to analyze audio signals to\ndetect phrases and understand emotions. We break\ndown audio into smaller parts (called phrases) and\nstudy their patterns over time. This is done using\na supervised dataset of audio with labeled phrases\nand different emotional tags corresponding to each\nphrase. By looking at the frequency and timing of\nsounds, we can predict and identify key phrases.\nWe also apply language processing methods to\nanalyze the emotional tone of the audio. This\nhelps improve technologies like phrase detection\nand language analysis in various multimedia\napplications.",
  },
  {
    id: "GPU Reinforcement Learning Autotuning",
    label: "GPU Reinforcement Learning Autotuning",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "GPU Reinforcement Learning Autotuning: \n \nUsing language models as optimizers for CUDA\nkernels.",
  },
  {
    id: "Pitch.AI",
    label: "Pitch.AI",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "Pitch.AI: \n \nThis project uses generative AI to create movie\npitches for the media industry. We fine-tune a\nlarge language model (LLM) to generate trailer\nscenarios. The input includes genre, setting,\ntone, emotions, character ideas, and plot points,\nand the output is a text movie trailer description\nwith characters, scene descriptions, and emotions.\nBy merging advanced AI with creative processes,\nthis project aims to streamline the development of\nmovie concepts, offering a new tool for filmmakers\nand creatives in the industry.",
  },
  {
    id: "Stock Forecasting + Sentiment Analysis",
    label: "Stock Forecasting + Sentiment Analysis",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "Stock Forecasting + Sentiment Analysis: \n \nTo build a stock forecaster/recommendation system\nthat uses not only classical technical analysis\nmethods but leverages natural language processing\n(sentiment analysis) to attempt to build a more\ninformed model.",
  },
  {
    id: "BCI Signal Decoding",
    label: "BCI Signal Decoding",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "BCI Signal Decoding: \n \nWe aim to develop a Spiking Neural Network that\ncan translate neural activity from the brain's\nmotor areas into muscle control commands. Using\nimplanted electrode data from Macaques, our SNNs\nwill provide insights for advanced prosthetic\ncontrol and efficient brain-computer interface\nimplementations.",
  },
  {
    id: "Brain2Text",
    label: "Brain2Text",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "Brain2Text: \n \nUsing data from a Stanford competition to convert\nEEG signals to coherent sentences. Assisting\npeople who have ALS and lost their ability to\nspeak and communicate with others.",
  },
  {
    id: "XCare",
    label: "XCare",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "XCare: \n \nLeveraging Computer Vision and CNNs to analyze\npatient x-rays for injury identification and\nlocation. Building a Rehabilitation Agent with\nGenerative AI and RAG to support patient recovery\nwhile waiting for specialists.",
  },
  {
    id: "Blood Glucose",
    label: "Blood Glucose",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "Blood Glucose: \n \nGluroo aims to simplify diabetes management by\nstreamlining the tracking of fitness, nutrition,\nand insulin use for people with diabetes (PWD).\nThis project focuses on improving short-term\nprandial (meal-time) and postprandial blood\nglucose outcomes for people with type 1 diabetes,\na complex disease that affects nearly 10 million\npeople worldwide. We aim to leverage semi-\nsupervised learning to identify unlabelled meals\nin time-series blood glucose data, develop meal-\nscoring functions, and explore causal machine-\nlearning techniques. Our goal is to provide\nactionable insights to PWD and their care\npractitioners, enhancing health outcomes and\nquality of life.",
  },
  {
    id: "PlayFitt Recommender System",
    label: "PlayFitt Recommender System",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "PlayFitt Recommender System: \n \nOur objective is to help people be more active! We\ndeveloped a recommender system for the PlayFitt\nfitness app using a contextual bandit algorithm.\nThis takes into account information about the\nusers as context, and makes decisions about rep\ncounts and reward values to suggest. Notably, this\napproach enables online learning.",
  },
  {
    id: "Sattelite ML",
    label: "Sattelite ML",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "Sattelite ML: \n \nThis project aims to develop and deploy artificial\nintelligence onboard microcontrollers to identify\nand segment methane plumes using hyperspectral\nmachine learning models. The goal is to enhance\nenvironmental monitoring and contribute to climate\nchange mitigation by providing precise and real-\ntime data on methane emissions. The STARCOP\ndataset provides a full annotated dataset to be\nused for training and evaluation. This project\nwill aim to develop a model on this dataset and\nbenchmark it against existing solutions.",
  },
  {
    id: "Solar Photovoltaic Output Prediction",
    label: "Solar Photovoltaic Output Prediction",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "Solar Photovoltaic Output Prediction: \n \nWe set out to develop deep learning models that\npredict solar photovoltaic output. These forecasts\non solar energy production can drive better energy\ndecisions, massively reducing carbon emmissions\nproduced by power grids.",
  },
  {
    id: "Hamming.AI",
    label: "Hamming.AI",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "Hamming.AI: \n \nBug In The Code Stack is a variant of the Needle\nIn The Haystack benchmark that tests LLMs'\ndebugging skills at longer context sizes. The\nbenchmark generates a large document of Python\nsource code with a syntatic bug inserted within\nit, and the LLM is tasked with retrieving the\nlocation of the bug. Through testing 11 different\nLLMs on the benchmark, we have discovered a\ncorrelation between increased context size and\ndegradation in retrieval accuracy,  as well as\nperformance disparity between closed-source and\nopen-source models. To learn more, please check\nout our ArXiv paper (link to paper)",
  },
  {
    id: "Energy Consumption Forecasting",
    label: "Energy Consumption Forecasting",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "Energy Consumption Forecasting: \n \nThe proposal for this project is to develop a\nsystem that is capable of modeling the electrical\ndemand for a commercial building using historical\nload data, temperature conditions, and occupancy\nlevels.",
  },
  {
    id: "TTC Bus Delay",
    label: "TTC Bus Delay",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "TTC Bus Delay: \n \nThe goal of this project is to develop a model\nthat accurately predicts whether a bus route will\nbe delayed by leveraging previous years' TTC delay\ndata which includes time of delay, location,\nroute, vehicle number, and a few other fields. We\nalso plan on expanding these fields by including\nseasonality, weather/road conditions, and other\napplicable features.",
  },
  {
    id: "FPS RL ",
    label: "FPS RL ",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "FPS RL : \n \nThe project aims to build an RL agent that plays\nDoom (1993), improving upon the work from Playing\nFPS Games with Deep Reinforcement Learning (Lample\n& Chaplot 2017). They are currently implementing a\nDTQN model to train an agent in Vizdoom.",
  },
  {
    id: "Legislation LLM ",
    label: "Legislation LLM ",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "Legislation LLM : \n \nWe're aiming to create LLM agents that can make\npolitical decisions, like in parliamentary\nlegislation. Our approach will attempt to train\nagents to make good decisions in gamified\nenvironments like Monopoly. We will then see how\nthis training 'generalises' (transfers) to a real-\nlife context using the case study of politics. The\n'product' outcome is getting a good political\ndecision-making agent. The 'research' outcome is\ntesting the generalisation of the agent's decision\nmaking capabilities.",
  },
  {
    id: "RL Stocks",
    label: "RL Stocks",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "RL Stocks: \n \nWe are developing a reinforcement learning policy-\nagent model that optimizes a stock portfolio for\nlong-term capital gains. This model will trade on\nstocks, commodities and indexes, and have access\nto real-time data on individual assets, as well as\nvarious indicators. In simpler words, we're making\na model to make your Wealthsimple balance go up\nfast! 💰",
  },
  {
    id: "Zoning LLM",
    label: "Zoning LLM",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "Zoning LLM: \n \nWe are building a webapp that uses GenAI Methods (\nLLM+ RAG) to analyze zoning documents in Ontarian\ncities to gain insights about zoning regulation\nthat help solve the Ontarian housing crisis.",
  },
  {
    id: "LLM Copyright",
    label: "LLM Copyright",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "LLM Copyright: \n \nUse of copyrighted content in training generative\nAI models has increased significantly as the field\nhas emerged, however, it is challenging to know\nwhether a model is using copyrighted material in\nits training data. There are two project goals The\nfirst is to develop tools to detect whether a\npiece of given content was used in training data\nof an LLM. The second is to build an open-source\nRAG-based logging system to keep track of pieces\nof flagged media that have been found in the\ntraining data of publicly available LLMs.",
  },
  {
    id: "W&W",
    label: "W&W",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "W&W: \n \nOpen science is critical for a society's\ndevelopment and prosperity through knowledge\nsharing, collaboration, public trust, and\nevidence-informed decision making. It is currently\nchallenging for policymakers to access and\nunderstand latest scientific results, making it\ndifficult to appropriately inform decision making\nwith the latest knowledge. Existing platforms\nseeking to address parts of this problem have some\ngaps that NuanceEdge wants to address by making\nscience more accessible to those who need it in a\nconvenient and efficient manner using generative\nAI tools.",
  },
  {
    id: "MedChat ",
    label: "MedChat ",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "MedChat : \n \nWinner of the 2023 Cohere RAG Challenge, MedChat\nis a medical AI platform that leverages disease\ndiaganosis models and medical literature to\nsupport medical professionals. MedChat answers the\nquestion: what if medical professionals could\naccess reliable A.I. tools via a centralized\ninterface?",
  },
  {
    id: "Vector DB for Pharmaceutical Ontologies",
    label: "Vector DB for Pharmaceutical Ontologies",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "Vector DB for Pharmaceutical Ontologies: \n \nFor deep learning networks to effectively be\nutilized for drug discovery, valid data\nrepresentations need to be created for the data\nitself that is able to encode all of the\ncontextual information that exists in this space.\nOne way of encoding this information is to create\nvector databases based on the relationships\nencoded in drug ontologies.",
  },
  {
    id: "Prostate Cancer Prediction With Correlated Diffusion Imaging",
    label: "Prostate Cancer Prediction With Correlated Diffusion Imaging",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "Prostate Cancer Prediction With Correlated Diffusion Imaging: \n \nThe application of machine learning to medical\nimages has led to impressive advancement in cancer\ndiagnostics. Our objective is to develop a\nbaseline of deep learning models to detect the\npresence of prostate cancer within a novel\nCorrelated Diffusion Imaging (CDI) dataset.",
  },
  {
    id: "Wildfires",
    label: "Wildfires",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "Wildfires: \n \nDesign and Develop a Wildfire Detection Model:\nDevelop a machine learning model to identify\nwildfires in real time using remote sensing data,\nincluding satellite imagery and weather data.",
  },
  {
    id: "Stable Diffused Adversarial Attacks",
    label: "Stable Diffused Adversarial Attacks",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "Stable Diffused Adversarial Attacks: \n \nWe are exploring pre-trained computer vision\nmodels (i.e. MobileNet_v1) with the goal to\nexploit vulnerabilities through various\nadversarial attacks. Our work aims to develop an\narchitecture that automates adversarial attack\nimage generation in model misclassification.",
  },
  {
    id: "Website Generation",
    label: "Website Generation",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "Website Generation: \n \nGenerate HTML and CSS code from screenshot or\nsketch of a static website layout using a self-\ntrained encoder-decoder model.",
  },
  {
    id: "WindDM",
    label: "WindDM",
    color: "#d8b125",
    font: { color: "white" },
    shape: "dot",
    title:
      "WindDM: \n \nAccess to high-quality, microscale data on local\nwind patterns is essential for determining optimal\nplacements of wind farms. While this has\ntraditionally been achieved through the use of\nLarge Eddy Simulations (LES) to super-resolve\nmesoscale data, these are slow and costly to\nproduce. We propose using recent advances in\ndiffusion models to produce scalable and accurate\nmicroscale data at a fraction of the cost of LES\nmodels. We also leverage conditional information\nfrom the domain of interest to further improve our\ngenerations.",
  },
];

export const edges: Edge[] = [
  {
    color: "#898989",
    from: "AI Chip Hardware",
    to: "Cybersecurity",
    value: 0.6568132434376022,
  },
  {
    color: "#898989",
    from: "AI Chip Hardware",
    to: "Deep Learning Framework Comparison",
    value: 0.6270103232270665,
  },
  {
    color: "#898989",
    from: "AI Chip Hardware",
    to: "Reinforcement Learning Chess Engine",
    value: 0.5840044543747099,
  },
  {
    color: "#898989",
    from: "Audio Analysis",
    to: "GPU Reinforcement Learning Autotuning",
    value: 0.7108286619186401,
  },
  {
    color: "#898989",
    from: "Audio Analysis",
    to: "Pitch.AI",
    value: 0.5670989622801231,
  },
  {
    color: "#898989",
    from: "Audio Analysis",
    to: "Stock Forecasting + Sentiment Analysis",
    value: 0.6989290624537783,
  },
  {
    color: "#898989",
    from: "BCI Signal Decoding",
    to: "Brain2Text",
    value: 0.5988498032093048,
  },
  {
    color: "#898989",
    from: "BCI Signal Decoding",
    to: "Reinforcement Learning Chess Engine",
    value: 0.7358418624353963,
  },
  {
    color: "#898989",
    from: "BCI Signal Decoding",
    to: "XCare",
    value: 0.7235180139541626,
  },
  {
    color: "#898989",
    from: "Blood Glucose",
    to: "PlayFitt Recommender System",
    value: 0.6225422766855067,
  },
  {
    color: "#898989",
    from: "Blood Glucose",
    to: "Sattelite ML",
    value: 0.7362395367765147,
  },
  {
    color: "#898989",
    from: "Blood Glucose",
    to: "Solar Photovoltaic Output Prediction",
    value: 0.7366006233334166,
  },
  {
    color: "#898989",
    from: "Brain2Text",
    to: "Audio Analysis",
    value: 0.7672137399677555,
  },
  {
    color: "#898989",
    from: "Brain2Text",
    to: "XCare",
    value: 0.7585504651069641,
  },
  {
    color: "#898989",
    from: "Cybersecurity",
    to: "Deep Learning Framework Comparison",
    value: 0.6753014326095581,
  },
  {
    color: "#898989",
    from: "Cybersecurity",
    to: "Sattelite ML",
    value: 0.6097012162208557,
  },
  {
    color: "#898989",
    from: "Deep Learning Framework Comparison",
    to: "GPU Reinforcement Learning Autotuning",
    value: 0.5492807299327407,
  },
  {
    color: "#898989",
    from: "Deep Learning Framework Comparison",
    to: "Hamming.AI",
    value: 0.6486406535720429,
  },
  {
    color: "#898989",
    from: "Energy Consumption Forecasting",
    to: "AI Chip Hardware",
    value: 0.6786896692925488,
  },
  {
    color: "#898989",
    from: "Energy Consumption Forecasting",
    to: "Solar Photovoltaic Output Prediction",
    value: 0.7547167533973732,
  },
  {
    color: "#898989",
    from: "Energy Consumption Forecasting",
    to: "TTC Bus Delay",
    value: 0.7077014918505251,
  },
  {
    color: "#898989",
    from: "FPS RL ",
    to: "Legislation LLM ",
    value: 0.6040796637535095,
  },
  {
    color: "#898989",
    from: "FPS RL ",
    to: "RL Stocks",
    value: 0.6531026856035793,
  },
  {
    color: "#898989",
    from: "FPS RL ",
    to: "Reinforcement Learning Chess Engine",
    value: 0.6088355961094973,
  },
  {
    color: "#898989",
    from: "GPU Reinforcement Learning Autotuning",
    to: "Hamming.AI",
    value: 0.6961073641649029,
  },
  {
    color: "#898989",
    from: "GPU Reinforcement Learning Autotuning",
    to: "Stock Forecasting + Sentiment Analysis",
    value: 0.6488016457079854,
  },
  {
    color: "#898989",
    from: "Hamming.AI",
    to: "Zoning LLM",
    value: 0.712111234664917,
  },
  {
    color: "#898989",
    from: "LLM Copyright",
    to: "Pitch.AI",
    value: 0.6325260996818542,
  },
  {
    color: "#898989",
    from: "LLM Copyright",
    to: "W&W",
    value: 0.6720957159996033,
  },
  {
    color: "#898989",
    from: "LLM Copyright",
    to: "Zoning LLM",
    value: 0.6942691620748731,
  },
  {
    color: "#898989",
    from: "Legislation LLM ",
    to: "RL Stocks",
    value: 0.6334485898449596,
  },
  {
    color: "#898989",
    from: "Legislation LLM ",
    to: "Reinforcement Learning Chess Engine",
    value: 0.6374930035320818,
  },
  {
    color: "#898989",
    from: "MedChat ",
    to: "Cybersecurity",
    value: 0.732202098834389,
  },
  {
    color: "#898989",
    from: "MedChat ",
    to: "Vector DB for Pharmaceutical Ontologies",
    value: 0.7415381824053413,
  },
  { color: "#898989", from: "MedChat ", to: "W&W", value: 0.655679365654029 },
  {
    color: "#898989",
    from: "Pitch.AI",
    to: "Legislation LLM ",
    value: 0.6721419095993042,
  },
  {
    color: "#898989",
    from: "PlayFitt Recommender System",
    to: "RL Stocks",
    value: 0.6480016989709452,
  },
  {
    color: "#898989",
    from: "PlayFitt Recommender System",
    to: "Stock Forecasting + Sentiment Analysis",
    value: 0.679278831438948,
  },
  {
    color: "#898989",
    from: "Prostate Cancer Prediction With Correlated Diffusion Imaging",
    to: "Deep Learning Framework Comparison",
    value: 0.6945369839668274,
  },
  {
    color: "#898989",
    from: "Prostate Cancer Prediction With Correlated Diffusion Imaging",
    to: "Vector DB for Pharmaceutical Ontologies",
    value: 0.6550495624542236,
  },
  {
    color: "#898989",
    from: "Prostate Cancer Prediction With Correlated Diffusion Imaging",
    to: "XCare",
    value: 0.6752946376800537,
  },
  {
    color: "#898989",
    from: "RL Stocks",
    to: "Stock Forecasting + Sentiment Analysis",
    value: 0.6223077065440328,
  },
  {
    color: "#898989",
    from: "Sattelite ML",
    to: "Solar Photovoltaic Output Prediction",
    value: 0.5175375619485867,
  },
  {
    color: "#898989",
    from: "Sattelite ML",
    to: "Wildfires",
    value: 0.41053229570388794,
  },
  {
    color: "#898989",
    from: "Solar Photovoltaic Output Prediction",
    value: 0.6581879665627495,
  },
  {
    color: "#898989",
    from: "Solar Photovoltaic Output Prediction",
    to: "W&W",
    value: 0.6747241407961655,
  },
  {
    color: "#898989",
    from: "Stable Diffused Adversarial Attacks",
    to: "Deep Learning Framework Comparison",
    value: 0.6697705584901232,
  },
  {
    color: "#898989",
    from: "Stable Diffused Adversarial Attacks",
    to: "Solar Photovoltaic Output Prediction",
    value: 0.6979678217230114,
  },
  {
    color: "#898989",
    from: "Stable Diffused Adversarial Attacks",
    to: "XCare",
    value: 0.7233883307344711,
  },
  {
    color: "#898989",
    from: "TTC Bus Delay",
    to: "Stock Forecasting + Sentiment Analysis",
    value: 0.7420603488647726,
  },
  {
    color: "#898989",
    from: "TTC Bus Delay",
    to: "Wildfires",
    value: 0.7400937831345922,
  },
  {
    color: "#898989",
    from: "Vector DB for Pharmaceutical Ontologies",
    to: "LLM Copyright",
    value: 0.7088780403137207,
  },
  {
    color: "#898989",
    from: "Vector DB for Pharmaceutical Ontologies",
    to: "Sattelite ML",
    value: 0.7065354883670807,
  },
  {
    color: "#898989",
    from: "Website Generation",
    to: "LLM Copyright",
    value: 0.781251655891636,
  },
  {
    color: "#898989",
    from: "Website Generation",
    to: "Pitch.AI",
    value: 0.7041299166756814,
  },
  {
    color: "#898989",
    from: "Website Generation",
    to: "Stable Diffused Adversarial Attacks",
    value: 0.747372031211853,
  },
  {
    color: "#898989",
    from: "Wildfires",
    to: "Solar Photovoltaic Output Prediction",
    value: 0.6939451463287872,
  },
  {
    color: "#898989",
    from: "WindDM",
    to: "Deep Learning Framework Comparison",
    value: 0.7682731598615646,
  },
  {
    color: "#898989",
    from: "WindDM",
    to: "Sattelite ML",
    value: 0.7192440629005432,
  },
  {
    color: "#898989",
    from: "WindDM",
    to: "Solar Photovoltaic Output Prediction",
    value: 0.7676076272001695,
  },
  {
    color: "#898989",
    from: "Zoning LLM",
    to: "Legislation LLM ",
    value: 0.6674414674902831,
  },
  {
    color: "#898989",
    from: "Zoning LLM",
    to: "Pitch.AI",
    value: 0.7114326185841924,
  },
];

export const options: Options = {
  configure: {
    enabled: false,
  },
  edges: {
    color: {
      inherit: true,
    },
    smooth: {
      enabled: true,
      type: "dynamic",
      roundness: 0.5,
    },
  },
  interaction: {
    dragNodes: true,
    hideEdgesOnDrag: false,
    hideNodesOnDrag: false,
  },
  physics: {
    enabled: true,
    stabilization: {
      enabled: true,
      fit: true,
      iterations: 1000,
      onlyDynamicEdges: false,
      updateInterval: 50,
    },
  },
};
