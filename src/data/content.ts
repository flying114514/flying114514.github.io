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
      slug: 'neo-digital-employee',
      title: 'Neo 数字员工',
      titleEn: 'Neo AI Digital Employee — Execution Layer',
      period: '2026.07 - 至今',
      tag: '实习项目',
      summary:
        'AI驱动任务编排与执行平台（17万行 TypeScript monorepo，五层架构：网关→调度→策划→执行→支持）。负责执行层三个核心模块设计。',
      summaryEn:
        'AI-driven task orchestration & execution platform (170K LoC, 5-layer architecture). Led three execution-layer core module designs.',
      techStack: ['TypeScript', 'Node.js', 'Express', 'Python', 'SQLite', 'PostgreSQL', 'Docker'],
      highlights: [
        {
          title: '红黄绿灯 · Agent 自主性分级协议',
          content:
            '设计三级重规划协议：绿灯（执行细节，Agent 自行重试解决）→ 黄灯（局部目标不确定，增量重规划只重建受影响节点）→ 红灯（整体方案失败，全局重规划+人工介入）。配合 replan_count 阈值防无限循环，调度层作为中间仲裁者不判断灯的颜色。',
        },
        {
          title: '经验闭环 · L1→L2→L3 学习机制',
          content:
            'L1：每次任务完成后驱动反思阶段，产出结构化执行报告（what_worked/what_failed/suggestions）写入记忆模块。L2：定期跨执行聚合分析，发现规律。L3：技能加载时查询记忆模块，动态调整执行参数。关键边界——L1反思不直接修改技能包，保证多部门共享稳定性。',
        },
        {
          title: '技能包流水线 · 声明式插件架构',
          content:
            '通用运行时+可插拔技能包（模板方法+策略模式）。YAML声明式7字段块规范（metadata/tools/security/recovery/pipeline/sub_agents/checklists），每个字段有明确消费者。四级失败策略（重试→换路→循环优化→子Agent分解），补偿操作由技能包自行定义（none/call_tool/irreversible），加载时编译检查硬约束。',
        },
      ],
    },
    {
      slug: 'rag-interview',
      title: 'RAG 智能面试平台',
      titleEn: 'RAG-Powered Intelligent Interview Platform',
      period: '2025.09 - 2025.12',
      tag: '个人项目',
      githubUrl: 'https://github.com/flying114514/rag-ui',
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
      githubUrl: 'https://github.com/flying114514/text2sql',
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
      company: '华中农业大学',
      companyEn: 'Huazhong Agricultural University',
      role: '信息管理与信息系统 · 本科',
      roleEn: 'Information Management & Information Systems · B.S.',
      period: '2024.09 - 2028.06',
      content:
        '国家"211工程"、"双一流"建设高校。主修课程包括数据结构、操作系统、计算机网络、数据库系统、信息系统分析与设计等。在校期间参与数学建模与计算机设计竞赛并获奖。',
      contentEn:
        'National "211 Project" and "Double First-Class" university. Major coursework includes Data Structures, Operating Systems, Computer Networks, Database Systems, and Information Systems Analysis & Design. Participated in mathematical modeling and computer design competitions.',
      icon: '🎓',
    },
    {
      company: '沸点工作室',
      companyEn: 'Boiling Point Studio',
      role: '后端组成员',
      roleEn: 'Backend Team Member',
      period: '2025.06',
      content:
        '通过选拔加入华中农业大学校级技术组织——沸点工作室。开始系统学习 Java 后端技术栈（Spring Boot、MyBatis、MySQL），参与工作室内部项目开发，从零搭建第一个 Web 应用。这是从课堂到工程的转折点。',
      contentEn:
        'Joined Boiling Point Studio, a university-level tech organization at HZAU. Began systematic learning of Java backend stack (Spring Boot, MyBatis, MySQL), participated in internal project development, and built the first web application from scratch.',
      icon: '💻',
    },
    {
      company: '沸点工作室',
      companyEn: 'Boiling Point Studio',
      role: '后端副组长',
      roleEn: 'Deputy Backend Lead',
      period: '2025.09',
      content:
        '完成转正答辩，晋升为后端副组长。负责团队日常管理、新成员培训带教，组织 AI Agent 方向学习资料分享与技术研讨。期间主导工作室后端技术选型与代码规范制定，推动团队从单机开发向 Docker 容器化部署迁移。',
      contentEn:
        'Passed promotion review and became Deputy Backend Lead. Responsible for team management, newcomer mentoring, and organizing AI Agent learning sessions and tech talks. Led backend tech stack selection and coding standards, driving the team\'s migration to Docker-based deployment.',
      icon: '👥',
    },
    {
      company: '路线调整',
      companyEn: 'Pivot',
      role: '从传统后端全面转向 AI 应用开发',
      roleEn: 'From Traditional Backend to AI Application Development',
      period: '2026.02',
      content:
        '判断 AI Agent 是下一波技术浪潮，主动暂停 Java 传统后端技术学习，全面转向 AI 应用开发方向。半年内完成 LLM 工程化（RAG、Agent、Prompt Engineering）、Python 技术栈迁移、LangChain/SpringAI 框架实战，为后续 Neo 实习和两个 AI 项目的独立开发奠定基础。',
      contentEn:
        'Recognized AI Agents as the next technology wave and pivoted from traditional Java backend to AI application development. Within six months, mastered LLM engineering (RAG, Agent, Prompt Engineering), migrated to Python stack, and gained hands-on experience with LangChain/SpringAI — laying the groundwork for the Neo internship and two independent AI projects.',
      icon: '🔀',
    },
    {
      company: '睿创微纳',
      companyEn: 'Raytron Microelectronics',
      role: '智能体开发部 · 智能体开发实习生',
      roleEn: 'Agent Development Dept · Agent Development Intern',
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
      items: ['MySQL', 'PostgreSQL', 'pgvector', 'Neo4j', 'SQLite'],
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
      items: ['Java 21', 'Python', 'SQL'],
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

  articles: [
    {
      title: 'AI 时代，后端思维为什么反而更重要？',
      description:
        '从传统后端转 AI Agent 开发一年后的深度思考：Spring Cloud 的分布式思维模型（断路器、SAGA、网关、消息队列、配置中心）如何一一映射到 Agent 系统设计中，以及为什么"后端思维"在 AI 时代不但没过时，反而更值钱了。',
      url: 'https://my.feishu.cn/docx/SxftdO40bo4gLZxQtnVcZhXjnfc',
      platform: '飞书文档',
      platformIcon: '📄',
      tags: ['AI Agent', '后端思维', 'Spring Cloud', '分布式系统', '职业发展'],
      date: '2026-08',
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
