import type { SiteData } from '../types';

export const siteData: SiteData = {
  name: '刘辉',
  nameEn: 'Liu Hui',
  tagline: '后端工程师 × AI Agent 开发者',
  taglineEn: 'Backend Engineer × AI Agent Developer',
  school: '华中农业大学',
  schoolEn: 'Huazhong Agricultural University',
  major: '信息管理与信息系统',
  majorEn: 'Information Management & Information Systems',

  intro: [
    '你好！我是刘辉，华中农业大学信息管理与信息系统专业本科生，目前在睿创微纳智能体开发部担任后端开发实习生。',
    '我专注于后端系统架构与 AI Agent 开发。在项目实践中，我主导了 RAG 智能面试平台和 Text2SQL 数据分析 Copilot 的设计与落地，积累了从高并发架构到 LLM 工程化的全链路经验。',
    '技术栈方面，我熟练掌握 Spring Boot、Spring Cloud、Kafka、Redis 等后端技术，同时深入 RAG 检索增强、Agent 决策引擎、LLM 网关等 AI 工程化领域。',
    '我享受将复杂问题拆解为可落地的系统设计，热衷于性能优化和技术深度探索。',
  ],

  introEn: [
    "Hi! I'm Liu Hui, an undergraduate student in Information Management & Information Systems at Huazhong Agricultural University, currently interning as a backend developer at Raytron Microelectronics.",
    'I focus on backend system architecture and AI Agent development. I have designed and delivered a RAG-powered intelligent interview platform and a Text2SQL data analysis Copilot, gaining full-stack experience from high-concurrency architecture to LLM engineering.',
    'My core stack includes Spring Boot, Spring Cloud, Kafka, and Redis for backend systems, along with RAG, Agent decision engines, and LLM gateways in the AI engineering space.',
    'I enjoy breaking down complex problems into actionable system designs and am passionate about performance optimization and deep technical exploration.',
  ],

  projects: [
    {
      slug: 'rag-interview',
      title: 'RAG 智能面试平台',
      titleEn: 'RAG-Powered Intelligent Interview Platform',
      period: '2025.09 - 2025.12',
      tag: '个人项目',
      summary:
        'AI面试全流程平台，覆盖简历分析、模拟面试、RAG问答、多模态评分，支持文字/视频双模面试，集成语音识别与 WebSocket 实时转写。',
      summaryEn:
        'Full-stack AI interview platform covering resume analysis, mock interviews, RAG Q&A, and multimodal scoring — supporting text/video dual-mode interviews with speech recognition and WebSocket real-time transcription.',
      techStack: ['Java 21', 'Spring Boot', 'SpringAI', 'pgvector', 'Redis', 'MinIO', 'Tika', 'Docker'],
      highlights: [
        {
          title: '多模型 Agent 决策',
          content:
            'LLM 驱动面试决策引擎，根据候选人回答自动追问/换题/结束，规则兜底 + 追问深度硬上限防死循环。',
        },
        {
          title: 'LLM 结构化输出框架',
          content:
            '全项目 Agent 复用的泛型框架，6 类错误分类映射硬编码诊断提示杜绝 prompt 注入，主模型不可用时自动切换 OpenRouter 降级重试。',
        },
        {
          title: 'RAG 检索增强',
          content:
            'Query 改写 + 原问题双候选兜底，自适应检索参数，SSE 流式探测窗口提前终止无效输出，未命中降级通用问答。',
        },
        {
          title: '多模态面试分析',
          content:
            'STT 三层兜底（客户端直传 → Deepgram → mock），LLM 多维度评分 + 按回答长度三档规则兜底。',
        },
        {
          title: '异步任务 + 限流',
          content:
            '模板方法实现 Redis Stream 异步框架（三条流水线 + 失败 ACK 后重投 + Prometheus 埋点）；Lua + ZSET 滑动窗口声明式限流。',
        },
      ],
    },
    {
      slug: 'text2sql-copilot',
      title: 'Text2SQL 对话式数据分析 Copilot',
      titleEn: 'Text2SQL Conversational Data Analysis Copilot',
      period: '2026.04 - 2026.06',
      tag: '个人项目',
      summary:
        '面向业务用户的自然语言数据分析 Copilot：提问即得答案+图表，SQL 可审计折叠。覆盖 Schema 检索、自纠错 Agent、数据治理、语义缓存、反馈飞轮全链路。',
      summaryEn:
        'Natural language data analysis Copilot for business users: ask questions, get answers + charts with auditable SQL. Covers Schema retrieval, self-correcting Agent, data governance, semantic caching, and feedback loops.',
      techStack: ['Python', 'FastAPI', 'Langfuse', 'PostgreSQL', 'sqlglot', 'Pydantic', 'Docker'],
      highlights: [
        {
          title: '自校正 Agent',
          content:
            'SQL 执行失败后自动构造修复上下文重新推理，智能错误分类跳过不可修复错误，全 Schema + 备用模型多层兜底，形成"生成→报错→修正"闭环。',
        },
        {
          title: 'LLM 网关',
          content:
            '多 provider 优先级路由 + 三态熔断器隔离故障节点，按角色令牌桶控 QPS + 滑动窗口配额控 token 成本，支持前端模型切换对比。',
        },
        {
          title: 'Schema 混合检索',
          content:
            'BM25 + Embedding 双策略 RRF 融合排名，FK 双向一跳补全 JOIN 桥接表，bigram 分词解决中文匹配，梯度测试确定最优权重，表召回率 98.8%。',
        },
        {
          title: '数据治理防线',
          content:
            '五层安全模型——表级过滤 → 危险 SQL 拦截 → 行列级 enforce → 只读执行 → PII 脱敏，策略 YAML 外置安全与 LLM 隔离。',
        },
        {
          title: '反馈飞轮 + 微调流水线',
          content:
            'YAML 声明式定义业务口径注入 prompt；飞书 Bot 每 6h 监测反馈数据量，双触发条件推送通知，QLoRA 训练 → 新旧模型评测对比决策，全流程审计日志可追溯。',
        },
      ],
    },
  ],

  experiences: [
    {
      company: '睿创微纳',
      companyEn: 'Raytron Microelectronics',
      role: '智能体开发部 · 后端开发实习生',
      roleEn: 'Agent Development Dept · Backend Developer Intern',
      period: '2026.07 - 至今',
      content:
        '负责 Neo 数字员工中 Git 代码交付节点的开发，涵盖项目与 Git 仓库的绑定与初始化、任务完成后的 Git 提交与推送、多 Commit 冲突处理与嵌套仓库拉取。这是 Neo 从"能写代码"到"能交付代码"的关键一环。',
      contentEn:
        'Responsible for developing the Git code delivery node in Neo Digital Employee, covering project-Git repo binding and initialization, post-task Git commit & push, multi-commit conflict resolution, and nested repository pulling — the key link from "can write code" to "can deliver code".',
      icon: '🚀',
    },
  ],

  skills: [
    {
      id: 'backend-frameworks',
      name: '后端框架',
      nameEn: 'Backend Frameworks',
      items: ['Spring Boot', 'Spring Cloud', 'MyBatis', 'gRPC', 'FastAPI'],
    },
    {
      id: 'middleware',
      name: '消息中间件',
      nameEn: 'Message Middleware',
      items: ['Kafka', 'Redis', 'Redisson', 'Canal', 'WebSocket'],
    },
    {
      id: 'databases',
      name: '数据库',
      nameEn: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'pgvector', 'ClickHouse', 'SQLite'],
    },
    {
      id: 'ai-agent',
      name: 'AI / Agent',
      nameEn: 'AI & Agent',
      items: ['LangChain', 'SpringAI', 'RAG', 'ReAct Agent', 'LLM Gateway', 'Prompt Engineering'],
    },
    {
      id: 'languages',
      name: '编程语言',
      nameEn: 'Languages',
      items: ['Java 21', 'Python', 'SQL', 'Shell'],
    },
    {
      id: 'engineering',
      name: '工程实践',
      nameEn: 'Engineering',
      items: ['Docker', 'Prometheus', '高并发架构', '限流熔断', '分布式系统', '性能优化'],
    },
  ],

  awards: [
    {
      icon: '🥈',
      title: 'APACM 亚太地区大学生数学建模竞赛',
      subtitle: '二等奖',
    },
    {
      icon: '🥈',
      title: '中国大学生计算机设计大赛',
      subtitle: '二等奖',
    },
  ],

  socials: [
    {
      label: 'GitHub',
      url: 'https://github.com/flying114514',
      icon: 'github',
      value: 'flying114514',
    },
    {
      label: 'CSDN',
      url: 'https://blog.csdn.net/2501_91482594',
      icon: 'csdn',
      value: '技术博客主页',
    },
    {
      label: 'Email',
      url: 'mailto:552296010@qq.com',
      icon: 'email',
      value: '552296010@qq.com',
    },
  ],

  seo: {
    title: '刘辉 | Portfolio - 后端工程师 × AI Agent 开发者',
    description: '刘辉 - 华中农业大学本科生，后端工程师 & AI Agent 开发者。专注于高并发架构、RAG检索增强、Agent决策引擎。目前在睿创微纳实习。',
    keywords: '刘辉,后端开发,Java,Spring Boot,AI Agent,RAG,华中农业大学,Portfolio,简历',
    author: '刘辉',
  },
};
