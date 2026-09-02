import { Course, PricingPackage, StatItem, CaseStudy, Testimonial, FAQItem } from "@/types";

export const COURSES: Course[] = [
  {
    id: "autonomous-agents",
    title: "Autonomous Agent Architect",
    tagline: "Build multi-agent swarms that plan, debug, and execute without human intervention",
    description: "From single ReAct loops to LangGraph state machines, hierarchical multi-agent teams with CrewAI, and robust human-in-the-loop checkpointing.",
    badge: "Most Popular Track",
    badgeColor: "orange",
    level: "Intermediate",
    duration: "6 Weeks • 24 Labs",
    rollNo: "AGT-01",
    techStack: ["LangGraph", "CrewAI", "Python", "PydanticAI", "Ollama"],
    highlights: [
      "Dynamic state routing & cyclic execution graphs in LangGraph",
      "Hierarchical delegation & worker swarms with CrewAI",
      "Persistent memory storage with SQLite & vector checkpointers",
      "Reliable error recovery & self-healing code loops"
    ],
    price: "₹24,999",
    originalPrice: "₹39,999",
    featured: true,
    modules: [
      {
        title: "Module 1: Foundations of Agentic Loops",
        duration: "Week 1",
        topics: [
          "ReAct patterns vs plain LLM completion",
          "Tool schema definitions with Pydantic v2",
          "Structured output guarantees and validation",
          "Zero-shot agent decision chains"
        ],
        project: "Build a Self-Correcting SQL & DB Query Agent"
      },
      {
        title: "Module 2: Cyclic Graphs with LangGraph",
        duration: "Week 2-3",
        topics: [
          "Nodes, edges, and conditional router dispatch",
          "State schemas and state reducer patterns",
          "Human-in-the-loop pause & resume workflows",
          "Time-travel debugging on execution graphs"
        ],
        project: "Autonomous Code Refactoring & Testing Swarm"
      },
      {
        title: "Module 3: Multi-Agent Collaboration & CrewAI",
        duration: "Week 4",
        topics: [
          "Manager agents vs worker agent swarms",
          "Role-playing personas, task handoffs, and delegation",
          "Asynchronous parallel tool executions",
          "Consensus algorithms among conflicting agents"
        ],
        project: "Autonomous Market Research & Diligence Generator"
      },
      {
        title: "Module 4: Enterprise Memory, Guardrails & Production",
        duration: "Week 5-6",
        topics: [
          "Short-term scratchpad vs long-term semantic memory",
          "Tool-calling security & sandboxed Python runners",
          "Langfuse telemetry & latency budget optimization",
          "Deploying as FastAPIs and Docker containers"
        ],
        project: "Production-Ready Customer Escalation Swarm"
      }
    ]
  },
  {
    id: "workflow-automation",
    title: "Production Workflow Automation",
    tagline: "Orchestrate enterprise workflows using n8n, Make, and custom micro-agents",
    description: "Master zero-downtime webhook pipelines, self-hosted n8n automation clusters, hybrid API connectors, and event-driven AI pipelines that replace manual operations.",
    badge: "Zero-Code to Pro-Code",
    badgeColor: "sky",
    level: "Beginner to Pro",
    duration: "4 Weeks • 16 Labs",
    rollNo: "WKF-02",
    techStack: ["n8n", "Make.com", "WhatsApp Business API", "PostgreSQL", "FastAPI"],
    highlights: [
      "Self-hosting production n8n with Docker & queue mode",
      "Complex branching, deduplication, and idempotency handling",
      "Connecting WhatsApp API, Slack, Razorpay, Notion, and PostgreSQL",
      "Hybrid workflows: triggering Python micro-agents from webhooks"
    ],
    price: "₹19,999",
    originalPrice: "₹29,999",
    modules: [
      {
        title: "Module 1: High-Reliability Webhook Architecture",
        duration: "Week 1",
        topics: [
          "Webhook verification, rate-limiting, and HMAC signatures",
          "Data transformation with jq & JavaScript nodes",
          "Error handling sub-workflows and retry policies"
        ],
        project: "Resilient Razorpay & CRM Sync Pipeline"
      },
      {
        title: "Module 2: Self-Hosting n8n at Scale",
        duration: "Week 2",
        topics: [
          "Docker Compose setup with Redis worker queues",
          "Database backups & environment credential isolation",
          "Custom community node creation"
        ],
        project: "Enterprise Self-Hosted Automation Hub"
      },
      {
        title: "Module 3: Intelligent Event-Driven AI Pipelines",
        duration: "Week 3-4",
        topics: [
          "Document parsing (invoices, statements) with Vision LLMs",
          "Semantic categorization & ticket routing",
          "Automated WhatsApp & email drafting with human approval"
        ],
        project: "End-to-End Invoice Processing & Vendor Payout Bot"
      }
    ]
  },
  {
    id: "local-llm-mcp",
    title: "Local LLM & MCP Tool Mastery",
    tagline: "Run private models locally and connect external tools via Model Context Protocol",
    description: "Ensure complete privacy and eliminate cloud token expenses. Run quantized DeepSeek, Llama, and Qwen models on your hardware, building custom Model Context Protocol (MCP) servers.",
    badge: "100% Privacy Focused",
    badgeColor: "sprout",
    level: "Intermediate",
    duration: "4 Weeks • 14 Labs",
    rollNo: "MCP-03",
    techStack: ["Ollama", "vLLM", "Model Context Protocol", "TypeScript", "FastMCP"],
    highlights: [
      "Running GGUF/AWQ quantized models locally on consumer GPUs & Apple Silicon",
      "Building production FastMCP Python & TypeScript servers",
      "Connecting local AI to local file systems, databases, and CLI tools",
      "Benchmarking token-per-second, KV-cache, and structured output speeds"
    ],
    price: "₹17,999",
    originalPrice: "₹27,999",
    modules: [
      {
        title: "Module 1: The Local LLM Stack",
        duration: "Week 1",
        topics: [
          "Ollama, LM Studio, and vLLM setups",
          "Quantization matrix (Q4_K_M vs FP16 vs AWQ)",
          "Context window management & vRAM budgeting on M-series & RTX"
        ],
        project: "High-Throughput Local Inference Server"
      },
      {
        title: "Module 2: Building Custom MCP Servers",
        duration: "Week 2-3",
        topics: [
          "Model Context Protocol architecture & stdio transport",
          "Defining MCP tools, resources, and prompts",
          "FastMCP in Python vs Official TypeScript SDK"
        ],
        project: "Custom Local Filesystem & SQL MCP Tool Suite"
      },
      {
        title: "Module 3: Autonomous Desktop & CLI Agents",
        duration: "Week 4",
        topics: [
          "Agent-computer interfaces",
          "Sandboxed command execution",
          "Safe file modification & rollback strategies"
        ],
        project: "Offline Local Coding Copilot with MCP Tools"
      }
    ]
  },
  {
    id: "enterprise-swarms",
    title: "Enterprise Multi-Agent Swarms",
    tagline: "Coordinate 50+ specialized agents with shared memory, evaluations, and compliance",
    description: "Designed for senior engineers and tech leads deploying mission-critical AI swarms. Covers distributed consensus, evaluation harnesses, and cost controls.",
    badge: "Advanced Architecture",
    badgeColor: "bubblegum",
    level: "Advanced",
    duration: "5 Weeks • 18 Labs",
    rollNo: "SWM-04",
    techStack: ["AutoGen", "Langfuse", "Qdrant", "Redis", "Temporal"],
    highlights: [
      "Durable agent execution with Temporal workflows",
      "Vector search memory with hybrid sparse-dense retrieval",
      "Automated evaluation suites & synthetic benchmark testing",
      "Token budget enforcement & fallback strategies"
    ],
    price: "₹29,999",
    originalPrice: "₹44,999",
    modules: [
      {
        title: "Module 1: Distributed Multi-Agent Protocols",
        duration: "Week 1-2",
        topics: [
          "Message bus architectures for AI swarms",
          "State synchronization across distributed agents",
          "Handling flaky tools & non-deterministic loops"
        ],
        project: "Distributed Competitive Intelligence Swarm"
      },
      {
        title: "Module 2: Durable Execution with Temporal",
        duration: "Week 3",
        topics: [
          "Temporal orchestrator for multi-day agent runs",
          "Durable timers, signal handlers, and queries",
          "Zero-state-loss server reboots"
        ],
        project: "Bulletproof Multi-Day Research Pipeline"
      },
      {
        title: "Module 3: Continuous Evaluations & Guardrails",
        duration: "Week 4-5",
        topics: [
          "RAGAS & DeepEval for automated QA evaluation",
          "NeMo Guardrails & prompt injection defenses",
          "Langfuse observability & tracing dashboards"
        ],
        project: "Enterprise Agentic Gateway with Real-Time Evals"
      }
    ]
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "starter-pass",
    name: "Starter Pass",
    subtitle: "For builders exploring self-paced AI labs and foundational repositories",
    price: "₹14,999",
    period: "one-time payment",
    rollNo: "PRC-01",
    features: [
      { text: "Access to 1 complete course track of your choice", included: true },
      { text: "All 20+ production starter repositories & code templates", included: true },
      { text: "Private Discord engineering community with 3,000+ engineers", included: true },
      { text: "Lifetime updates as new model weights release", included: true },
      { text: "Live weekend breakout rooms & architecture reviews", included: false },
      { text: "1-on-1 agent architecture code audit", included: false }
    ],
    ctaText: "Enroll in Starter",
    note: "Instant repository access • GST invoice provided"
  },
  {
    id: "builder-lab",
    name: "Builder Lab Pass",
    subtitle: "Our flagship cohort: All 4 tracks + live weekend labs with code reviews",
    price: "₹34,999",
    period: "one-time payment",
    isPopular: true,
    rollNo: "PRC-02",
    features: [
      { text: "All 4 tracks: Autonomous Agents, n8n, Local MCP & Swarms", included: true },
      { text: "70+ production-grade code repositories & templates", included: true },
      { text: "Live interactive labs (Sat & Sun 6:00 PM IST) + 4K recordings", included: true },
      { text: "Direct WhatsApp & Discord channels with instructors & TAs", included: true },
      { text: "Verified 'Agentic Systems Architect' certificate", included: true },
      { text: "Priority access to alumni job board & consulting leads", included: true }
    ],
    ctaText: "Join Cohort 04",
    note: "Cohort 04 begins April 2026 • 16 seats left • No-cost EMI available"
  },
  {
    id: "enterprise-fellow",
    name: "Enterprise Fellowship & Audit",
    subtitle: "Comprehensive training + customized architecture audit for your team",
    price: "₹79,999",
    period: "one-time payment",
    rollNo: "PRC-03",
    features: [
      { text: "Everything in Builder Lab for you and up to 3 team members", included: true },
      { text: "Two 90-minute 1-on-1 private architecture reviews (in-person or remote)", included: true },
      { text: "Custom tool & MCP server boilerplate tailored to your stack", included: true },
      { text: "Security & token-cost optimization audit on your production repositories", included: true },
      { text: "Direct WhatsApp emergency channel with lab lead for 90 days", included: true },
      { text: "GST input tax credit invoice for your corporate entity", included: true }
    ],
    ctaText: "Apply for Fellowship",
    note: "Limited to 5 teams per cohort • GST invoice provided"
  }
];

export const STATS: StatItem[] = [
  { value: "4,820+", label: "Agents Deployed to Production", annotation: "Across engineering teams & startups" },
  { value: "99.4%", label: "Workflow Reliability SLA", annotation: "Zero non-deterministic loops" },
  { value: "140+", label: "Pre-Built Tool & MCP Connectors", annotation: "WhatsApp, Razorpay, Postgres, Slack" },
  { value: "4.96/5", label: "Average Cohort Rating", annotation: "Across 900+ verified alumni" }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    studentName: "Rohan Kulkarni",
    role: "Lead Platform Engineer",
    company: "FinTech Infrastructure",
    agentName: "GST & Tax Reconciliation Swarm",
    metric: "32 hrs/wk",
    metricLabel: "Saved in tax compliance & invoice auditing",
    description: "Built a 3-agent swarm with LangGraph that inspects invoice filings, cross-verifies balance sheets, and flags non-compliance directly into Slack and ERP systems.",
    tech: ["LangGraph", "Claude 3.7", "FastMCP", "PostgreSQL"]
  },
  {
    id: "case-2",
    studentName: "Ananya Deshpande",
    role: "Founder & Product Lead",
    company: "ScribeFlow",
    agentName: "WhatsApp Inbound Sales Agent Swarm",
    metric: "88%",
    metricLabel: "Enterprise leads qualified in 90 seconds",
    description: "Replaced manual sales qualification with an n8n webhook pipeline connected to the WhatsApp Cloud API and local Ollama models to extract requirements and book sales demos.",
    tech: ["n8n", "WhatsApp API", "Ollama", "Airtable"]
  },
  {
    id: "case-3",
    studentName: "Vikram Nair",
    role: "Staff AI Platform Engineer",
    company: "Quick-Commerce Scaleup",
    agentName: "Self-Healing Microservices Incident Swarm",
    metric: "4.5x faster",
    metricLabel: "Mean time to resolution during regressions",
    description: "Deployed an AutoGen team that intercepts Prometheus alerts, diagnoses stack traces, validates unit tests in an isolated sandbox, and drafts GitHub pull requests.",
    tech: ["CrewAI", "Temporal", "Docker Sandbox", "GitHub API"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    author: "Tanmay Sawant",
    role: "Staff Backend Engineer",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    content: "Most AI bootcamps just teach you to wrap an OpenAI API key in a toy script. AgentCraft taught me cyclic graphs, state checkpointing, and local MCP privacy. We automated our entire data ingestion with zero hallucination.",
    highlightWord: "cyclic graphs",
    cohort: "Cohort 02 Alumni",
    rating: 5
  },
  {
    id: "test-2",
    author: "Priyanka Iyer",
    role: "VP of Engineering",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    content: "We were spending ₹8,50,000/month on cloud LLM tokens for customer queries. Through the Local LLM & MCP track, we moved 75% of classification to fine-tuned local models on our own hardware. The return on investment was immediate.",
    highlightWord: "₹8,50,000/month",
    cohort: "Cohort 03 Alumni",
    rating: 5
  },
  {
    id: "test-3",
    author: "Kunal Joshi",
    role: "AI Automation Consultant",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    content: "The n8n production boilerplate alone was worth the entire fee. I closed two D2C brands on monthly automation retainers within 10 days of completing the webhook module.",
    highlightWord: "worth the entire fee",
    cohort: "Cohort 01 Alumni",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Where are the live sessions hosted and what are the timings?",
    answer: "Live cohort lab sessions happen every Saturday & Sunday from 6:00 PM to 8:30 PM IST on Zoom and our private lab portal. Every session is recorded in 4K with timestamped code notebooks uploaded within 2 hours."
  },
  {
    question: "Can I pay via UPI, NetBanking or claim a GST invoice for company reimbursement?",
    answer: "Yes. We support UPI (Google Pay, PhonePe, Paytm), NetBanking, Credit/Debit cards, and No-Cost EMI options. A compliant GST tax invoice is automatically issued with your company GSTIN for 100% tax write-off and corporate L&D reimbursement."
  },
  {
    question: "Do I need expensive cloud GPUs or a specialized rig?",
    answer: "Not at all. For the local LLM track, we demonstrate how to run 4-bit and 8-bit quantized models smoothly on modern MacBooks (M1/M2/M3/M4) or consumer NVIDIA cards (RTX 3060+). For all other agent & n8n tracks, standard laptops and free cloud tiers are fully sufficient."
  },
  {
    question: "What programming background is expected?",
    answer: "Basic comfort with Python or JavaScript/TypeScript is ideal. If you know how functions, loops, and basic dictionaries/JSON structures work, you are ready. We provide starter boilerplate templates for all 70+ lab projects."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 14-day, 100% money-back guarantee. Attend the first 2 weeks of live labs. If you feel this isn't the most rigorous, high-leverage engineering program you've taken, simply drop us an email or WhatsApp for a full refund."
  }
];
