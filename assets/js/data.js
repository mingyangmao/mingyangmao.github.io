/*
  CLASSIC ACADEMIC WEBSITE — EDIT ALL CONTENT HERE.
  Every field is optional except name and title. Never fill with invented contact information.
*/
window.ACADEMIC_DATA = {
  profile: {
    name: 'Mingyang Mao',
    role: 'Ph.D. Student',
    department: 'Electrical & Computer Engineering',
    university: 'University of South Florida',
    location: 'Tampa, Florida, USA',
    photo: 'assets/images/profile.png',
    photoAlt: 'Mingyang Mao standing by the ocean',
    email: 'mmao@usf.edu',
    github: '', // Add your own GitHub URL
    scholar: 'https://scholar.google.com/citations?user=7fdCZLMAAAAJ',
    lab: 'https://era-research-lab.github.io/',
    linkedin: 'https://www.linkedin.com/in/mingyang-mao-061b28197/',
    cv: '', // Add CV PDF at assets/Mingyang_Mao_CV.pdf and put that path here
    bio: [
      'I am a Ph.D. student at the University of South Florida, in the Department of Electrical & Computer Engineering, advised by [Prof. Xiaomin Lin](https://xiaominlin.github.io/). Before that, I obtained my M.S.E. in Electrical & Computer Engineering from Johns Hopkins University and my B.Eng. from the University of Nottingham.',
      'My research lies at the intersection of efficient machine learning systems, multimodal reasoning, and embodied intelligence. I am especially interested in enabling foundation models to operate efficiently and reliably when knowledge changes, as well as connecting vision-language-action policies with world models and planning for real-world robotic manipulation.',
      'I’m always open to collaborations! Feel free to reach out to me at mmao@usf.edu.'
    ],
    interests: ['Efficient LLM inference', 'Retrieval-augmented generation', 'Embodied AI and robot learning', 'Vision-language reasoning'],
    education: [
      {degree: 'Ph.D. Student, Electrical & Computer Engineering', institution: 'University of South Florida', year: 'Current'},
      {degree: 'M.S.E., Electrical & Computer Engineering', institution: 'Johns Hopkins University', year: '2025'},
      {degree: 'B.Eng., Electrical & Electronic Engineering', institution: 'University of Nottingham', year: '2023'}
    ]
  },
  news: [
    {date: 'Sep 2026', text: 'Our work on repairing stale KV caches after document edits is available on arXiv.', url: 'https://arxiv.org/abs/2609.17983'},
    {date: 'May 2026', text: 'FAM-Bench became available as an arXiv preprint.', url: 'https://arxiv.org/abs/2605.31410'},
    {date: 'Feb 2026', text: 'Multi-RAG was accepted at PAKDD 2026.', url: 'https://doi.org/10.1007/978-981-92-1947-6_30'},
    {date: 'Jan 2026', text: 'Adaptive Dynamics Planning (ADP) for robot navigation was accepted at ICRA 2026.', url: 'https://arxiv.org/abs/2510.05330'}
  ],
  research: [
    {title: 'Efficient Language Models & Inference Systems', category: 'Systems', details: 'Efficient inference with long contexts and retrieval-augmented models, focusing on KV-cache reuse, factual edits, memory consistency, and systems-aware evaluation.'},
    {title: 'Embodied Intelligence & Robot Planning', category: 'Robotics', details: 'Vision-language-action policies, action sampling, predictive models, and model predictive control for reliable manipulation. Current directions include simulation-based evaluation and flexible-object tasks.'},
    {title: 'Multimodal Reasoning & Evaluation', category: 'Multimodal AI', details: 'Benchmarks and methods that probe the reliability of vision-language models on grounded decision making, visual logical anomalies, and long-context reasoning.'}
  ],
  publications: [
    {
      id: 'cache', year: 2026, selected: true, category: 'Systems',
      title: 'Contiguity, Not Importance: Budgeted Repair of Stale KV Caches After Document Edits',
      authors: 'Mingyang Mao, Wyatt Mackey, Xiaomin Lin',
      venue: 'arXiv preprint, 2026', note: 'Preprint · under review',
      summary: 'A controlled study of budgeted KV-cache recomputation after factual document edits, comparing edit-local and importance-based repair policies.',
      image: 'assets/images/kvedits.png',
      links: [{name:'arXiv',url:'https://arxiv.org/abs/2609.17983'},{name:'PDF',url:'https://arxiv.org/pdf/2609.17983'},{name:'Code',url:'https://github.com/mingyangmao/KVEdit'}]
    },
    {
      id: 'fam', year: 2026, selected: true, category: 'Multimodal AI',
      title: 'FAM-Bench: Benchmarking Condition-Aware Food-as-Medicine Reasoning in Vision-Language Models',
      authors: 'Mingyang Mao, Bhargav Rishi Medisetti, Utkarsh Grover, Tanvir Ibrahim, Wenyan Li, Tingting Zhang, Xiaomin Lin',
      venue: 'arXiv preprint, 2026', note: 'Preprint · under review',
      summary: 'A benchmark with 2,500 questions drawn from 1,811 recipes and 13 health conditions, testing grounded food suitability judgments and comparative reasoning.',
      image: 'assets/images/fam.png',
      links: [{name:'arXiv',url:'https://arxiv.org/abs/2605.31410'},{name:'PDF',url:'https://arxiv.org/pdf/2605.31410'},{name:'Project',url:'https://mingyangmao.github.io/FAM/'}]
    },
    {
      id: 'multirag', year: 2026, selected: true, category: 'Multimodal AI',
      title: 'Multi-RAG: A Multimodal Retrieval-Augmented Generation System for Adaptive Video Understanding',
      authors: 'Mingyang Mao, Mariela M. Perez-Cabarcas, Utteja Kallakuri, Nicholas R. Waytowich, Xiaomin Lin, Tinoosh Mohsenin',
      venue: 'Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD), 2026', note: 'Conference paper',
      summary: 'A multimodal retrieval-augmented system to support adaptive understanding of video content.',
      image: 'assets/images/multi-rag.png',
      links: [{name:'Publisher',url:'https://doi.org/10.1007/978-981-92-1947-6_30'},{name:'Code',url:'https://github.com/mingyangmao/RAG-LLM-ARL-demo'}]
    },
    {
      id: 'adp', year: 2026, selected: true, category: 'Robotics',
      title: 'Adaptive Dynamics Planning for Robot Navigation',
      authors: 'Yuanjie Lu, Mingyang Mao, Tong Xu, Linji Wang, Xiaomin Lin, Xuesu Xiao',
      venue: 'IEEE International Conference on Robotics and Automation (ICRA), 2026', note: 'Conference paper',
      summary: 'Uses reinforcement learning to adaptively adjust the fidelity of robot dynamics modeling during planning, improving navigation success, safety, and efficiency in simulation and real-world tests.',
      image: 'assets/images/adp.png',
      links: [{name:'arXiv',url:'https://arxiv.org/abs/2510.05330'},{name:'PDF',url:'https://arxiv.org/pdf/2510.05330'}]
    },
    {
      id: 'lad', year: 2026, selected: false, category: 'Multimodal AI',
      title: 'LADBench: A Benchmark for Logical Fault Detection in Images',
      authors: 'Sahasra Kondapalli, Lara Radovanovic, Aadi Palnitkar, Mingyang Mao, Xiaomin Lin',
      venue: 'IEEE International Conference on Development and Learning (ICDL), 2026', note: 'Conference paper',
      summary: 'Evaluates visual logical anomaly detection using a tiered prompting protocol.',
      image: 'assets/images/ladbench.png',
      links: [{name:'arXiv',url:'https://arxiv.org/abs/2606.17433'},{name:'Project',url:'https://era-research-lab.github.io/projects/ladbench/'}]
    },
    {
      id: 'edge', year: 2026, selected: false, category: 'Robotics',
      title: 'Embodied Foundation Models at the Edge: A Survey of Deployment Constraints and Mitigation Strategies',
      authors: 'Utkarsh Grover, Ravi Ranjan, Mingyang Mao, Trung Tien Dong, Satvik Praveen, Zhenqi Wu, J. Morris Chang, Tinoosh Mohsenin, Yi Sheng, Agoritsa Polyzou, Eiman Kanjo, Xiaomin Lin',
      venue: 'arXiv preprint, 2026', note: 'Survey · Preprint',
      summary: 'Surveys systems-level barriers to deploying embodied foundation models on resource-constrained hardware.',
      image: 'assets/images/edge-survey.png',
      links: [{name:'arXiv',url:'https://arxiv.org/abs/2603.16952'}]
    },
    {
      id: 'mil', year: 2026, selected: false, category: 'Multimodal AI',
      title: 'Mil-SCORE: Benchmarking Long-Context Geospatial Reasoning and Planning in Large Language Models',
      authors: 'Aadi Palnitkar, Mingyang Mao, Nicholas R. Waytowich, Vinicius G. Goecks, Tinoosh Mohsenin, Xiaomin Lin',
      venue: 'arXiv preprint, 2026', note: 'Preprint',
      summary: 'Evaluates multi-hop, long-context geospatial reasoning across heterogeneous evidence in planning tasks.',
      image: 'assets/images/milscore.png',
      links: [{name:'arXiv',url:'https://arxiv.org/abs/2601.21826'}]
    }
  ],
  projects: [
    {title:'Budgeted KV-Cache Repair', status:'Research · Preprint', category:'Systems', description:'Evaluating how to repair cached language-model states after document edits with only a small recomputation budget. Includes matched direct and derived QA, causal dependency diagnostics, and efficiency measurements.', tags:['PyTorch','Llama / Qwen / Mistral','RAG'], image:'assets/images/kvedits.png', links:[{name:'Paper',url:'https://arxiv.org/abs/2609.17983'}]},
    {title:'VLA and World-Model-Guided Planning', status:'Ongoing research', category:'Robotics', description:'Studying action proposal, particle-based search, MPC/MPPI, and simulation-in-the-loop evaluation for robotic manipulation. Research direction, not a published result.', tags:['VLA','World models','MPC / MPPI','Isaac Sim'], image:'assets/images/robotics.svg', links:[]},
    {title:'FAM-Bench', status:'Research · Preprint', category:'Multimodal AI', description:'A condition-aware benchmark for grounded food suitability judgments in vision-language models, with dish-level and comparative tasks.', tags:['Vision-language models','Evaluation','Reasoning'], image:'assets/images/fam.png', links:[{name:'Paper',url:'https://arxiv.org/abs/2605.31410'},{name:'Project',url:'https://mingyangmao.github.io/FAM/'}]},
    {title:'Multi-RAG for Video Understanding', status:'Published research · PAKDD 2026', category:'Multimodal AI', description:'An adaptive video understanding system that integrates retrieval and multimodal evidence with language-model reasoning.', tags:['Multimodal RAG','Video understanding'], image:'assets/images/multi-rag.png', links:[{name:'Publication',url:'https://doi.org/10.1007/978-981-92-1947-6_30'}]},
    {title:'Edge AI / FPGA Inference', status:'Engineering project', category:'Systems', description:'Quantized neural-network deployment on embedded and FPGA platforms, with INT8 model optimization and accelerators such as NVDLA on Zynq.', tags:['FPGA','NVDLA','INT8','Embedded AI'], image:'assets/images/edge-ai.svg', links:[]},
    {title:'ConvoAid: RAG Meeting Assistant', status:'Engineering project', category:'Systems', description:'An interactive desktop assistant that combines streaming speech transcription, document ingestion, and retrieval-augmented question answering.', tags:['Python','PyQt6','Chroma','Speech-to-text'], image:'assets/images/multi-rag.svg', links:[]}
  ],
  teaching: [
    {role:'Teaching Assistant, EGN 3373 - Electrical Systems', institution:'University of South Florida', year:'2026', details:''}
  ]
};
