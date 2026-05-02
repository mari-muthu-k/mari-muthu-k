export const PROJECTS = [
  {
    id: 'FWGPT',
    title: 'FWGPT',
    tagline: 'Organisation level intelligent assistant for operations',
    description: 'An intelligent assistant designed to streamline operations at the organisational level, providing seamless integration and automation capabilities.',
    tech: ['Python', 'OpenAI', 'MCP', 'Langchain', 'Vector search', 'Azure', 'NodeJS'],
    repo: '#', // Private repo
    status: 'ACTIVE',
    year: '2025-2026',
  },
  {
    id: 'AIRE',
    title: 'AIRE',
    tagline: 'Participant, GitLab AI Hackathon 2026',
    description: 'AIRE embeds governance directly into the repo workflow, issues, merge requests, and pipelines — so that every AI change is reviewed, scored, and acted upon automatically.',
    tech: ['Python', 'Vertex AI', 'MCP', 'Langchain', 'Vector search', 'GCP', 'Gitlab Duo', 'FastAPI'],
    repo: 'https://devpost.com/software/aire-ai-that-governs-ai',
    status: 'COMPLETE',
    year: 2026,
  },
  {
    id: 'skinnova',
    title: 'Skinnova',
    tagline: 'Winner 1st Place, Datadog x Google AI Partner Catalyst: Accelerate Innovation Hackathon 2025',
    description: 'Skinnova is a production-grade AI observability system where AI reliability, risk, and impact are fully observable — a pattern applicable to any high-stakes AI product.',
    tech: ['Python', 'Vertex AI', 'GCP', 'Datadog AI observability', 'FastAPI', 'React', 'Hallucination detection', 'LLM evaluation'],
    repo: 'https://devpost.com/software/skinnova',
    status: 'COMPLETE',
    year: 2025,
  },
  {
    id: 'KAFKA SPEED-UP AUTOMATION',
    title: 'Kafka Speed-Up Automation',
    tagline: 'Optimize Kafka performance with automated tuning',
    description: 'Automated solution for optimizing Kafka cluster performance by dynamically adjusting configurations based on real-time metrics. This project saved $60K+ annually in manual tuning costs and improved system efficiency at Comcast.',
    tech: ['Golang', 'Gin', 'Kafka', 'Prometheus', 'Grafana'],
    repo: '#', // Private repo
    status: 'ACTIVE',
    year: '2024-2025',
  },
  {
    id: 'ROBOTIX',
    title: 'ROBOTIX',
    tagline: 'Autonomous Robot Control Platform',
    description: 'Led the development of Robotix with Open-RMF (open-rmf.org), a research-driven platform for controlling and monitoring autonomous robots, adopted by the Singapore government for operational deployments.',
    tech: ['Python', 'ROS-2', 'Open-RMF', 'OpenCV', 'Raspberry Pi', 'Path Planning', 'Docker'],
    repo: '#',
    status: 'COMPLETE',
    year: '2023-2024',
  }
]

export const SKILLS = {
  'Core Languages': ['Go', 'Python','ReactJS','NodeJS', 'TypeScript'],
  'Backend / API':  ['FastAPI', 'gRPC', 'REST', 'WebRTC','Microservices','WebSockets'],
  'ML / AI':        ['YoloV8','TensorFlow', 'PyTorch', 'Scikit-learn', 'LLM APIs', 'Computer Vision','Langchain', 'VertexAI'],
  'Infrastructure': ['Docker', 'Kubernetes','ArgoCD', 'GitHub Actions', 'AWS','Google Cloud'],
  'Data & Storage': ['MySQL','PostgreSQL', 'Redis', 'MongoDB', 'Elasticsearch', 'Kafka','RabbitMQ','SolrDB'],
  'Tooling':        ['Git', 'Linux', 'Prometheus', 'Grafana', 'OpenTelemetry','Datadog'],
}

export const EXPERIENCE = [
  {
    role: 'Software Engineer 3',
    company: 'Comcast India engineering center',
    period: 'April, 2026 - Present',
    location: 'Chennai, India',
    highlights: [
      'Pitched over 4+ project ideas, leading 2 from ideation to production',
      'Designed and deployed ML-assisted ticket triage system cutting resolution time in half',
    ],
  },
  {
    role: 'Software Engineer 2',
    company: 'Comcast India engineering center',
    period: 'May, 2024 - March,2026',
    location: 'Chennai, India',
    highlights: [
      'Pitched and led development of Kafka Speed-Up Automation, an internal tool that optimizes Kafka performance, saving $60K+ annually in manual tuning costs',
      'Leading and Developing the fwGPT project (Beta of agentic AI) to automate manual tasks by LLM and improve operational efficiency',
      'Took more than 40 technical interviews to hire Senior level engineers and forwarded the feedback to leadership',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Dotworld Technologies',
    period: 'July, 2023 - April, 2024',
    location: 'Coimbatore, India',
    highlights: [
      'Developed Robotix, a complete multi-tenant web app in Golang and ReactJS to control robots via ROS2',
      'Integrated a time-series database to enhance internal analytics capabilities',
      'Contributed to openRMF to automate robot fleet management: open-rmf.org'
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Ontoborn Technologies',
    period: 'November, 2022 - June, 2023',
    location: 'Remote',
    highlights: [
      'Developed a multi-tenant architecture using Go/Gin and ReactJS for scalable user management',
      'Integrated monthly subscriptions with a free trial and user-tier-based feature access',
      'Implemented Chargebee checkout API with multi-currency support and webhooks to manage subscription renewals',
    ],
  },
  {
    role: 'Freelance Software Engineer',
    company: 'Various Clients',
    period: 'January, 2021 - October, 2022',
    location: 'Remote',
    highlights: [
      'Collaborated with the DICOM Standards team to modernize their MRI viewing interface and enhance visualization performance.',
      'Developed SodiumChloride, a research-focused platform for data science and machine learning ',
      'Founded and led the development of FormTheta, AI generated form creation software for surveys like typeForm , surveyMonkey.'
    ],
  },
]

export const NAV_SECTIONS = [
  { id: 'hero',       label: 'Launch'   },
  { id: 'about',      label: 'Crew'     },
  { id: 'skills',     label: 'Systems'  },
  { id: 'projects',   label: 'Missions' },
  { id: 'experience', label: 'Log'      },
  { id: 'contact',    label: 'Reach'    },
]

export const CONTACT_CHANNELS = [
  { label: 'GitHub',    value: 'github.com/mari-muthu-k',       href: 'https://github.com/mari-muthu-k' },
  { label: 'LinkedIn',  value: 'linkedin.com/in/mari-muthu-k',   href: 'https://www.linkedin.com/in/mari-muthu-k/' },
  { label: 'Instagram', value: 'instagram.com/mari.k.raj',        href: 'https://www.instagram.com/mari.k.raj' },
]