import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Project {
  title: string;
  subtitle: string;
  role: string;
  techStack: string[];
  description: string;
  highlights: string[];
  tag: string;
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  client?: string;
  location: string;
  period: string;
  points: string[];
  skills: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // Signals for interactive state
  mobileMenuOpen = signal<boolean>(false);
  activeSection = signal<string>('hero');
  activeSkillTab = signal<string>('All');
  copiedContact = signal<string | null>(null);

  // Profile data
  name = 'Shivakumar Kancharla';
  title = 'Full Stack Software Engineer';
  location = 'Warangal, Telangana, India';
  email = 'kancharlashivakumar1999@gmail.com';
  phone = '+91 7893628598';
  linkedin = 'https://linkedin.com/in/shivakumar-kancharla';
  experienceYears = '3+';

  summary = `Full Stack Software Engineer with 3+ years of experience building scalable enterprise applications using Angular and ASP.NET Core Web APIs. Specialized in REST API development, PostgreSQL performance optimization, and secure authentication mechanisms (JWT, RBAC). Proven impact in improving application performance, reducing data inconsistencies, and delivering maintainable solutions aligned with SOLID principles and Clean Architecture in Agile environments.`;

  metrics = [
    { value: '3+', label: 'Years Experience' },
    { value: '40%', label: 'Data Inconsistency Reduced' },
    { value: '30%', label: 'Data-Entry Time Saved' },
    { value: '4+', label: 'Production Enterprise Apps' }
  ];

  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      icon: 'bi-window-stack',
      skills: ['Angular', 'TypeScript', 'RxJS', 'Angular Signals', 'Reactive & Template Forms', 'HTML5', 'CSS3 / SCSS', 'React (basics)', 'Responsive Web Design']
    },
    {
      name: 'Backend (.NET)',
      icon: 'bi-cpu',
      skills: ['C#', '.NET Core / .NET 11', 'ASP.NET Core', 'RESTful Web APIs', 'Minimal APIs', 'Entity Framework Core', 'Dapper', 'ADO.NET', 'LINQ', 'Dependency Injection', 'Middleware']
    },
    {
      name: 'Database & Caching',
      icon: 'bi-database',
      skills: ['PostgreSQL', 'SQL', 'Query Optimization', 'Indexing Strategies', 'Triggers & Stored Procedures', 'Server-Side Pagination', 'Row-Level Security (RLS)', 'Redis Distributed Cache', 'In-Memory Caching']
    },
    {
      name: 'Security & Architecture',
      icon: 'bi-shield-check',
      skills: ['JWT (RS256)', 'Role-Based Access Control (RBAC)', 'Multi-tenant Isolation', 'Clean Architecture', 'Repository Pattern', 'SOLID Principles']
    },
    {
      name: 'Integrations & Tools',
      icon: 'bi-diagram-3',
      skills: ['Cashfree & Easebuzz Payments', 'ClickHouse Analytics', 'Firebase Cloud Messaging (FCM)', 'OpenTelemetry Observability', 'Git / GitHub', 'Visual Studio', 'Syncfusion EJ2']
    },
    {
      name: 'Practices & Testing',
      icon: 'bi-check2-circle',
      skills: ['Unit Testing (Jasmine)', 'Agile / Scrum', 'SDLC', 'Code Reviews', 'AI-assisted dev (Cursor, Augment)', 'Sprint Planning']
    }
  ];

  experiences: Experience[] = [
    {
      role: 'ASP.NET Developer',
      company: 'Sparity',
      client: 'SSR DAILII',
      location: 'Hyderabad, India',
      period: 'April 2026 – Present',
      skills: ['ASP.NET Core (.NET 11)', 'Minimal APIs', 'Dapper', 'PostgreSQL', 'React', 'Redis', 'Cashfree', 'Easebuzz', 'ClickHouse', 'OpenTelemetry'],
      points: [
        'Developed and maintained scalable ERP modules using ASP.NET Core (.NET 11), Minimal APIs, Dapper, PostgreSQL, and React following Clean Architecture, Repository Pattern, and SOLID principles.',
        'Designed and implemented RESTful APIs for Sales, Product Catalog, Route Management, Coupons, Dealer Returns, Crates/Trays Management, and other enterprise business workflows.',
        'Migrated data access layer from Entity Framework to Dapper, optimizing SQL execution, query performance, and indexing to drastically improve API response times.',
        'Implemented secure authentication and authorization with JWT (RS256), Role-Based Access Control (RBAC), and PostgreSQL Row-Level Security (RLS) for multi-tenant data isolation.',
        'Engineered dynamic product management features including Product Extended APIs, dynamic attributes, price tiers, image asset management, and bulk operations.',
        'Integrated Cashfree and Easebuzz payment gateways with seamless payment initiation, webhooks/callbacks, transaction verification, and automated reconciliation.',
        'Configured Redis-based distributed caching and in-memory caching for frequently accessed master data, substantially decreasing database query load.',
        'Designed and optimized PostgreSQL schemas, triggers, views, and audit logging to reliably process high-volume transactions.',
        'Built asynchronous background services and scheduled workers for bulk processing, payment reconciliation, notifications, and long-running routines.',
        'Instrumented OpenTelemetry distributed tracing to monitor API performance, pinpoint bottlenecks across database and external integrations, and maintain high system availability.'
      ]
    },
    {
      role: 'Angular / .NET Full Stack Developer',
      company: 'Vividminds',
      client: 'Quixy',
      location: 'Hyderabad, India',
      period: 'March 2023 – April 2026',
      skills: ['Angular', 'ASP.NET Core', 'C#', 'PostgreSQL', 'Syncfusion EJ2', 'JWT', 'RBAC', 'RxJS', 'Agile/Scrum'],
      points: [
        'Engineered end-to-end enterprise web applications utilizing Angular and ASP.NET Core with maintainable, testable architectures.',
        'Implemented side-panel and popup-based record workflows with Syncfusion EJ2 Grid, slashing user data-entry turnaround time by 30%.',
        'Enforced robust client and grid-level business validation rules, cutting data inconsistencies across records by 40%.',
        'Designed and delivered comprehensive RESTful APIs using ASP.NET Core and PostgreSQL powering high-volume enterprise CRUD operations.',
        'Secured end-to-end API communication through robust JWT authentication and Role-Based Access Control (RBAC).',
        'Optimized backend response times via PostgreSQL query tuning, execution plan analysis, and deliberate indexing.',
        'Led Angular migration from v14 to v17, bringing improved performance, standalone components, and modern Angular features.',
        'Mentored junior developers, participated in sprint planning, conducted code reviews, and adopted AI-assisted engineering tools.'
      ]
    }
  ];

  projects: Project[] = [
    {
      title: 'SSR DAILII',
      subtitle: 'Enterprise ERP Platform',
      role: 'Full Stack Developer',
      techStack: ['ASP.NET Core', 'PostgreSQL', 'React', 'Dapper', 'Redis', 'Cashfree', 'Easebuzz'],
      tag: 'Enterprise ERP',
      icon: 'bi-buildings',
      description: 'Comprehensive enterprise ERP platform automating Sales, Product Catalog, Route Management, Dealer Returns, Crates/Trays, and multi-gateway digital payments.',
      highlights: [
        'Clean Architecture & Repository Pattern with high-performance Dapper ORM execution',
        'Multi-tenant isolation using PostgreSQL Row-Level Security (RLS) & RS256 JWT',
        'Cashfree & Easebuzz webhook handling with automated financial reconciliation'
      ]
    },
    {
      title: 'Quixy',
      subtitle: 'Low-Code / No-Code Platform',
      role: 'Full Stack Developer',
      techStack: ['Angular', 'ASP.NET Core', 'PostgreSQL', 'Syncfusion EJ2 Grid'],
      tag: 'Platform & Automation',
      icon: 'bi-grid-3x3-gap',
      description: 'Enterprise no-code/low-code platform enabling businesses to build customizable workflows, data management portals, and automated rules.',
      highlights: [
        'Interactive Syncfusion EJ2 grid workflows cutting data-entry time by 30%',
        'Strict grid validation logic reducing data inconsistencies by 40%',
        'Successful upgrade of Angular codebases from v14 to v17'
      ]
    },
    {
      title: 'Caddie',
      subtitle: 'AI-Powered Assistant',
      role: 'Frontend Developer',
      techStack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'Data Visualization'],
      tag: 'AI & Analytics',
      icon: 'bi-robot',
      description: 'Intelligent AI-driven assistant with real-time insight visualization, dynamic configuration, and interactive dashboards.',
      highlights: [
        'Built rich analytical dashboard interfaces displaying AI recommendations',
        'Integrated real-time streaming REST API feeds into reactive UI states',
        'Designed modular and dynamic navigation patterns for optimal user interaction'
      ]
    },
    {
      title: 'RecruitMate',
      subtitle: 'AI-Driven Job Portal',
      role: 'Full Stack Developer',
      techStack: ['Angular', 'ASP.NET Core', 'PostgreSQL', 'Pagination & Filtering'],
      tag: 'Job Recruitment',
      icon: 'bi-people',
      description: 'Smart recruitment portal automating candidate sourcing, certificate management, automated workflows, and high-performance talent search.',
      highlights: [
        'Server-side pagination, multi-column sorting, and high-speed searching over large applicant pools',
        'Certificate generation and verification workflows for job seekers',
        'Automated applicant pipeline tracking and recruiter management tools'
      ]
    }
  ];

  achievements = [
    {
      icon: 'bi-trophy-fill',
      title: 'Spotlight Award',
      desc: 'Awarded for outstanding contributions to core feature development, architecture stability, and platform enhancements.'
    },
    {
      icon: 'bi-lightning-charge-fill',
      title: '40% Error & Inconsistency Reduction',
      desc: 'Pioneered custom validation logic and database safeguards that significantly reduced data integrity discrepancies.'
    },
    {
      icon: 'bi-speedometer2',
      title: 'Grid & Database Performance Optimization',
      desc: 'Cut user data-entry time by 30% and dramatically accelerated query execution using Dapper, Redis caching, and indexing.'
    },
    {
      icon: 'bi-arrow-up-circle-fill',
      title: 'Angular v14 to v17 Major Migration',
      desc: 'Successfully upgraded legacy enterprise applications to modern Angular with zero downtime and improved bundle efficiency.'
    }
  ];

  leadership = [
    {
      title: 'Technical Mentorship',
      desc: 'Mentored junior engineers and conducted regular code reviews to ensure SOLID principles and Clean Architecture standards.'
    },
    {
      title: 'Cross-functional Collaboration',
      desc: 'Partnered with product managers, QA, and DevOps to deliver critical sprint goals and complex ERP modules on schedule.'
    },
    {
      title: 'Agile & Scrum Excellence',
      desc: 'Active driver in sprint ceremonies, technical design workshops, retrospectives, and continuous deployment workflows.'
    }
  ];

  education = {
    degree: 'Bachelor of Engineering – Electrical Engineering',
    college: 'Vagdevi College of Engineering',
    year: '2022',
    icon: 'bi-mortarboard'
  };

  // UI helpers
  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }

  scrollTo(sectionId: string) {
    this.activeSection.set(sectionId);
    this.closeMobileMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  copyToClipboard(text: string, type: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedContact.set(type);
      setTimeout(() => this.copiedContact.set(null), 2500);
    });
  }

  filterSkills(category: string) {
    this.activeSkillTab.set(category);
  }

  get displayedSkillCategories(): SkillCategory[] {
    const tab = this.activeSkillTab();
    if (tab === 'All') return this.skillCategories;
    return this.skillCategories.filter(c => c.name.toLowerCase().includes(tab.toLowerCase()));
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['hero', 'summary', 'skills', 'experience', 'projects', 'achievements', 'contact'];
    const scrollPosition = window.pageYOffset + 200;

    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection.set(section);
          break;
        }
      }
    }
  }
}
