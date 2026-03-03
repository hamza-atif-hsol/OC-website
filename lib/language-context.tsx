"use client"

import type { ReactNode } from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "EN" | "ES" | "FR" | "DE"

interface Translations {
  [key: string]: {
    [key: string]: string
  }
}

const translations: Translations = {
  EN: {
    // Navigation
    careers: "Careers",
    partners: "Partners",
    newsroom: "Newsroom",
    contact: "Contact",
    solutions: "Solutions",
    clients: "Clients",
    resources: "Resources",
    company: "Company",
    requestDemo: "Request a demo",
    clientLogin: "Client Login",
    search: "Search solutions, compliance tools, onboarding...",
    filterBySegment: "Filter by Segment",
    organizationType: "Organization Type",
    banking: "Banking",
    buySide: "Buy-Side",
    paymentFintech: "Payment & Fintech",
    corporate: "Corporate",
    compliancePortal: "Compliance Portal",
    customerPortal: "Customer Portal",
    transactionMonitoring: "Transaction Monitoring",
    language: "Language",
    ourClients: "Our Clients",
    clientsList: "Clients",
    caseStudies: "Case Studies",
    clientNews: "Client News",
    solutionResources: "Solution Resources",
    brochures: "Brochures",
    datasheets: "Datasheets",
    analystRelations: "Analyst Relations",
    moreResources: "More Resources",
    whitepapers: "Whitepapers",
    reports: "Reports",
    podcasts: "Podcasts",
    insights: "Insights",
    blog: "Blog",
    events: "Events",
    regulatoryHorizon: "Regulatory Horizon Scanning Report 2026",
    globalFincrime: "Global Fincrime Operations Trends in 2025",
    aiCompliance: "AI in Compliance Research Report",
    globalAml: "Global AML Fines Research Report 2024",
    expertGuide: "The Expert's Guide to Digitalizing Compliance",
    discoverOneConstellation: "Discover One Constellation",
    leadership: "Leadership",
    awards: "Awards",
    platform: "Platform",
    corpResponsibility: "Corporate Responsibility",
    sustainability: "Sustainability",
    esGPolicy: "Environmental, Social & Governance (ESG) Policy",
    modernSlavery: "Modern Slavery Act",
    trustSecurity: "Trust & Security",
    howOneConstellation: "How One Constellation helps",
    fincrimeOperating: "FinCrime Operating System",
    agenticAi: "Agentic AI – Meet the Agents",
    overviewCLM: "Overview of One Constellation CLM",
    kycSolution: "Know Your Customer (KYC)",
    clientOnboarding: "Client Onboarding",
    idVerification: "Identity & Verification (ID&V)",
    regulatoryCompliance: "Regulatory Compliance",
    crmSalesforce: "CRM for Salesforce",
    integrationHubFlows: "Integration Hub & Flows",
    loanOrigination: "Loan Origination",
    accountOpening: "Account Opening",
    wealthCompliance: "Wealth Management Compliance",

    // Hero Section
    compliancePortalBadge: "Compliance Portal",
    heroTitle: "Harnessing the Power of",
    heroHighlight: "E-KYC",
    heroSubtitle: "for Regulatory Compliance",
    heroDescription:
      "Automate Know Your Customer processes and streamline regulatory compliance across all jurisdictions with our intelligent E-KYC solution.",
    getStarted: "Get Started",
    watchDemo: "Watch Demo",

    // One Platform Section
    onePlatformTitle: "One platform to support",
    onePlatformHighlight: "all industries",
    onePlatformDescription:
      "A comprehensive solution designed to meet the complex compliance and operational needs of any financial institution or regulated entity.",
    financeAndBanking: "Finance & Banking",
    financeDescription: "Streamline compliance for banking institutions and financial services providers globally.",
    payments: "Payments",
    paymentsDescription: "Secure payment processing with built-in AML and KYC compliance automation.",
    insurance: "Insurance",
    insuranceDescription: "Automate customer verification and risk assessment for insurance companies.",
    cryptocurrency: "Cryptocurrency",
    cryptoDescription: "Enhanced compliance tools specifically designed for digital asset platforms.",

    // AML Solutions
    antiMoneyLaundering: "Anti-Money Laundering",
    amlSolutions: "Solutions",
    amlDescription:
      "Our comprehensive AML solutions help you detect suspicious patterns, identify high-risk customers, and maintain compliance with global regulations including FATF, OFAC, and local requirements.",
    exploreAML: "Explore AML Solutions",

    // KYC Section
    makingClientOnboarding: "Making",
    clientOnboardingHighlight: "Client Onboarding",
    easierWithKYC: "Easier with Digital KYC",
    kycDescription:
      "Streamline your customer onboarding process with our digital KYC solution. Reduce friction, enhance user experience, and ensure compliance all in minutes.",
    learnMore: "Learn More",
    viewDemo: "View Demo",

    // Financial Necessity Section
    financialNecessity: "Financial Necessity",
    necessityDescription:
      "Regulatory compliance is not optional. Our solutions ensure your organization meets all mandatory requirements while optimizing operational efficiency.",
    cyclicChoice: "Cyclic Choice",
    choiceDescription:
      "Thousands of institutions choose our platform repeatedly for its reliability, innovation, and commitment to compliance excellence.",
    onboardingAutomation: "Onboarding Automation",
    multiJurisdiction: "Multi-Jurisdiction",
    secureCompliance: "Secure Compliance",
    regulatoryAligned: "Regulatory Aligned",

    // Solutions Section
    solutionsWeOffer: "Solutions",
    weOffer: "We Offer",
    digitalOnboardingTitle: "Digital Onboarding Portal",
    digitalOnboardingDesc: "Streamlined customer acquisition with intuitive digital workflows.",
    compliancePortalTitle: "Compliance Portal",
    compliancePortalDesc: "Complete regulatory compliance management and audit trails.",
    transactionMonitoringTitle: "Transaction Monitoring",
    transactionMonitoringDesc: "Real-time transaction screening and anomaly detection.",

    // Stats Section
    years: "Years",
    offices: "Offices",
    customers: "Customers",
    entities: "Entities",
    transactions: "Transactions",

    // Efficiency Section
    efficiency: "Efficiency",
    attainedThrough: "Attained through",
    compliance: "Compliance",
    efficiencyDescription:
      "Our intelligent compliance platform reduces operational overhead while ensuring complete regulatory adherence. Achieve more with less, and turn compliance into a competitive advantage.",

    // Trust Section
    builtOnFoundation: "Built on a Foundation of",
    trust: "Trust",
    trustDescription:
      "Security and compliance are at our core. We maintain SOC 2 Type II certification, GDPR compliance, and employ military-grade encryption for all data.",
    soc2Certified: "SOC2 Type II & ISO 27001 Certified",
    gdprCompliant: "Compliant with GDPR, CCPA, and MiFID II",
    encryption: "End-to-end encryption for all data",
    systemAvailability: "System Availability",
    expertSupport: "Expert Support",
    identityVerification: "Identity Verification",

    // Footer
    aboutUs: "About Us",
    products: "Products",
    aboutFooter: "About Us",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    security: "Security",
    newsletter: "Newsletter",
    stayUpdated: "Stay updated with the latest in RegTech.",
    enterEmail: "Enter email",
    join: "Join",
    copyright: "© 2026 One Constellation Limited. All rights reserved.",
    footerDescription:
      "The global leader in Client Lifecycle Management (CLM) and digital transformation for financial institutions.",
    searchResults: "Search Results",
    resultsFound: "results found for",
    allSolutions: "Browse all our solutions",
    noResultsFound: "No results found. Try searching for KYC, onboarding, compliance, or other solutions.",
    viewMore: "View all results for",
    backToHome: "Back to Home",

    // Book Demo Page translations
    scheduleDemo: "Schedule Your Demo",
    transformCompliance: "See How Our Platform Can Transform Your",
    complianceOperations: "Compliance Operations",
    joinLeadingInstitutions:
      "Join leading financial institutions in automating their compliance and KYC processes. Get a personalized walkthrough of our platform.",
    demoScheduled: "Demo Scheduled!",
    checkEmail: "Check your email for confirmation details and meeting link.",
    scheduleAnother: "Schedule Another Demo",
    whatYouWillGet: "What You'll Get",
    thirtyMinuteDive: "30-minute deep dive",
    specialistConsultation: "1-on-1 specialist consultation",
    productWalkthrough: "Live product walkthrough",
    yourInformation: "Your Information",
    fullName: "Full Name",
    johnDoe: "John Doe",
    emailAddress: "Email Address",
    johnCompany: "john@company.com",
    companyName: "Company Name",
    yourCompany: "Your Company",
    phoneNumber: "Phone Number",
    phoneFormat: "+1 (555) 123-4567",
    selectTimeSlot: "Select a Time Slot",
    timesShownGMT: "Times shown in GMT+0",
    confirmAppointment: "Request Demo",
    firstName: "First Name",
    lastName: "Last Name",
    businessEmail: "Business Email",
    marketSegment: "Market Segment",
    selectSegment: "Select a market segment",
    country: "Country",
    selectCountry: "Select a country",
  },
  ES: {
    // Navigation
    careers: "Carreras",
    partners: "Socios",
    newsroom: "Sala de prensa",
    contact: "Contacto",
    solutions: "Soluciones",
    clients: "Clientes",
    resources: "Recursos",
    company: "Empresa",
    requestDemo: "Solicitar una demostración",
    clientLogin: "Inicio de Sesión de Cliente",
    search: "Buscar soluciones, herramientas de cumplimiento, incorporación...",
    filterBySegment: "Filtrar por segmento",
    organizationType: "Tipo de organización",
    banking: "Banca",
    buySide: "Buy-Side",
    paymentFintech: "Pagos y Fintech",
    corporate: "Corporativo",
    compliancePortal: "Portal de Cumplimiento",
    customerPortal: "Portal de Clientes",
    transactionMonitoring: "Monitoreo de Transacciones",
    language: "Idioma",
    ourClients: "Nuestros Clientes",
    clientsList: "Clientes",
    caseStudies: "Estudios de Caso",
    clientNews: "Noticias de Clientes",
    solutionResources: "Recursos de Soluciones",
    brochures: "Folletos",
    datasheets: "Hojas de Datos",
    analystRelations: "Relaciones de Analistas",
    moreResources: "Más Recursos",
    whitepapers: "Documentos Técnicos",
    reports: "Informes",
    podcasts: "Podcasts",
    insights: "Perspectivas",
    blog: "Blog",
    events: "Eventos",
    regulatoryHorizon: "Informe de Escaneo de Horizonte Regulatorio 2026",
    globalFincrime: "Tendencias Globales de Operaciones Fincrime en 2025",
    aiCompliance: "Informe de Investigación de IA en Cumplimiento",
    globalAml: "Informe Global de Multas AML 2024",
    expertGuide: "Guía del Experto para Digitalizar el Cumplimiento",
    discoverOneConstellation: "Descubre One Constellation",
    leadership: "Liderazgo",
    awards: "Premios",
    platform: "Plataforma",
    corpResponsibility: "Responsabilidad Corporativa",
    sustainability: "Sostenibilidad",
    esGPolicy: "Política Ambiental, Social y de Gobierno (ESG)",
    modernSlavery: "Ley de Esclavitud Moderna",
    trustSecurity: "Confianza y Seguridad",
    howOneConstellation: "Cómo ayuda One Constellation",
    fincrimeOperating: "Sistema Operativo de Crimen Financiero",
    agenticAi: "IA Agéntica – Conoce los Agentes",
    overviewCLM: "Descripción General del CLM de One Constellation",
    kycSolution: "Conocimiento del Cliente (KYC)",
    clientOnboarding: "Incorporación de Clientes",
    idVerification: "Verificación de Identidad (ID&V)",
    transactionMonitoring: "Monitoreo de Transacciones",
    regulatoryCompliance: "Cumplimiento Regulatorio",
    crmSalesforce: "CRM para Salesforce",
    integrationHubFlows: "Integration Hub y Flujos",
    loanOrigination: "Originación de Préstamos",
    accountOpening: "Apertura de Cuenta",
    wealthCompliance: "Cumplimiento de Gestión de Patrimonio",

    // Hero Section
    compliancePortalBadge: "Portal de Cumplimiento",
    heroTitle: "Aprovechando el Poder del",
    heroHighlight: "E-KYC",
    heroSubtitle: "para Cumplimiento Regulatorio",
    heroDescription:
      "Automatiza los procesos de Conocimiento del Cliente y racionaliza el cumplimiento regulatorio en todas las jurisdicciones con nuestra solución inteligente de E-KYC.",
    getStarted: "Comenzar",
    watchDemo: "Ver Demo",

    // One Platform Section
    onePlatformTitle: "Una plataforma para apoyar",
    onePlatformHighlight: "todas las industrias",
    onePlatformDescription:
      "Una solución integral diseñada para satisfacer las necesidades complejas de cumplimiento y operativas de cualquier institución financiera o entidad regulada.",
    financeAndBanking: "Finanzas y Banca",
    financeDescription:
      "Simplifica el cumplimiento de las instituciones bancarias y proveedores de servicios financieros a nivel mundial.",
    payments: "Pagos",
    paymentsDescription: "Procesamiento seguro de pagos con automatización integrada de AML y cumplimiento KYC.",
    insurance: "Seguros",
    insuranceDescription: "Automatiza la verificación de clientes y evaluación de riesgos para compañías de seguros.",
    cryptocurrency: "Criptomoneda",
    cryptoDescription:
      "Herramientas de cumplimiento mejoradas diseñadas específicamente para plataformas de activos digitales.",

    // AML Solutions
    antiMoneyLaundering: "Prevención de Lavado de Dinero",
    amlSolutions: "Soluciones",
    amlDescription:
      "Nuestras soluciones integrales de AML te ayudan a detectar patrones sospechosos, identificar clientes de alto riesgo y mantener el cumplimiento con regulaciones globales incluyendo FATF, OFAC y requisitos locales.",
    exploreAML: "Explorar Soluciones AML",

    // KYC Section
    makingClientOnboarding: "Haciendo",
    clientOnboardingHighlight: "Incorporación de Clientes",
    easierWithKYC: "Más Fácil con KYC Digital",
    kycDescription:
      "Simplifica tu proceso de incorporación de clientes con nuestra solución digital KYC. Reduce fricción, mejora la experiencia del usuario y asegura cumplimiento todo en minutos.",
    learnMore: "Aprender Más",
    viewDemo: "Ver Demo",

    // Financial Necessity Section
    financialNecessity: "Necesidad Financiera",
    necessityDescription:
      "El cumplimiento regulatorio no es opcional. Nuestras soluciones aseguran que tu organización cumpla con todos los requisitos obligatorios mientras optimiza la eficiencia operativa.",
    cyclicChoice: "Elección Cíclica",
    choiceDescription:
      "Miles de instituciones eligen nuestra plataforma repetidamente por su confiabilidad, innovación y compromiso con la excelencia en cumplimiento.",
    onboardingAutomation: "Automatización de Incorporación",
    multiJurisdiction: "Multi-Jurisdicción",
    secureCompliance: "Cumplimiento Seguro",
    regulatoryAligned: "Alineado Regulatoriamente",

    // Solutions Section
    solutionsWeOffer: "Soluciones",
    weOffer: "que Ofrecemos",
    digitalOnboardingTitle: "Portal de Incorporación Digital",
    digitalOnboardingDesc: "Adquisición simplificada de clientes con flujos de trabajo digitales intuitivos.",
    compliancePortalTitle: "Portal de Cumplimiento",
    compliancePortalDesc: "Gestión integral del cumplimiento regulatorio y rastros de auditoría.",
    transactionMonitoringTitle: "Monitoreo de Transacciones",
    transactionMonitoringDesc: "Detección de anomalías y análisis de transacciones en tiempo real.",

    // Stats Section
    years: "Años",
    offices: "Oficinas",
    customers: "Clientes",
    entities: "Entidades",
    transactions: "Transacciones",

    // Efficiency Section
    efficiency: "Eficiencia",
    attainedThrough: "Alcanzada a través de",
    compliance: "Cumplimiento",
    efficiencyDescription:
      "Nuestra plataforma inteligente de cumplimiento reduce la sobrecarga operativa mientras asegura la adhesión regulatoria completa. Logra más con menos y convierte el cumplimiento en una ventaja competitiva.",

    // Trust Section
    builtOnFoundation: "Construido sobre una Base de",
    trust: "Confianza",
    trustDescription:
      "La seguridad y el cumplimiento están en nuestro núcleo. Mantenemos certificación SOC 2 Type II, cumplimiento GDPR y empleamos encriptación de grado militar para todos los datos.",
    soc2Certified: "Certificado SOC2 Type II e ISO 27001",
    gdprCompliant: "Conforme con GDPR, CCPA y MiFID II",
    encryption: "Encriptación de extremo a extremo para todos los datos",
    systemAvailability: "Disponibilidad del Sistema",
    expertSupport: "Soporte Experto",
    identityVerification: "Verificación de Identidad",

    // Footer
    aboutUs: "Acerca de Nosotros",
    products: "Productos",
    aboutFooter: "Acerca de Nosotros",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    security: "Seguridad",
    newsletter: "Boletín",
    stayUpdated: "Manténte actualizado con las últimas novedades en RegTech.",
    enterEmail: "Ingresa tu correo",
    join: "Unirse",
    copyright: "© 2026 One Constellation Limited. Todos los derechos reservados.",
    footerDescription:
      "El líder global en Gestión del Ciclo de Vida del Cliente (CLM) y transformación digital para instituciones financieras.",
    searchResults: "Resultados de búsqueda",
    resultsFound: "resultados encontrados para",
    allSolutions: "Explora todas nuestras soluciones",
    noResultsFound: "No se encontraron resultados. Intenta buscar KYC, incorporación, cumplimiento u otras soluciones.",
    viewMore: "Ver todos los resultados para",
    backToHome: "Volver al inicio",

    // Book Demo Page translations
    scheduleDemo: "Programa tu Demo",
    transformCompliance: "Mira Cómo Nuestra Plataforma Puede Transformar Tu",
    complianceOperations: "Operaciones de Cumplimiento",
    joinLeadingInstitutions:
      "Únete a instituciones financieras líderes en automatizar sus procesos de cumplimiento y KYC. Obtén un recorrido personalizado de nuestra plataforma.",
    demoScheduled: "¡Demo Programada!",
    checkEmail: "Revisa tu correo para los detalles de confirmación y el enlace de la reunión.",
    scheduleAnother: "Programar Otra Demo",
    whatYouWillGet: "Lo Que Obtendrás",
    thirtyMinuteDive: "Análisis profundo de 30 minutos",
    specialistConsultation: "Consulta 1-a-1 con especialista",
    productWalkthrough: "Demostración en vivo del producto",
    yourInformation: "Tu Información",
    fullName: "Nombre Completo",
    johnDoe: "Juan García",
    emailAddress: "Dirección de Correo",
    johnCompany: "juan@empresa.com",
    companyName: "Nombre de la Empresa",
    yourCompany: "Tu Empresa",
    phoneNumber: "Número de Teléfono",
    phoneFormat: "+34 (555) 123-4567",
    selectTimeSlot: "Selecciona una Franja Horaria",
    timesShownGMT: "Horas mostradas en GMT+0",
    confirmAppointment: "Solicitar Demo",
    firstName: "Nombre",
    lastName: "Apellido",
    businessEmail: "Correo Empresarial",
    marketSegment: "Segmento de Mercado",
    selectSegment: "Selecciona un segmento de mercado",
    country: "País",
    selectCountry: "Selecciona un país",
  },
  FR: {
    // Navigation
    careers: "Carrières",
    partners: "Partenaires",
    newsroom: "Salle de presse",
    contact: "Contact",
    solutions: "Solutions",
    clients: "Clients",
    resources: "Ressources",
    company: "Entreprise",
    requestDemo: "Demander une démo",
    clientLogin: "Connexion Client",
    search: "Rechercher des solutions, outils de conformité, intégration...",
    filterBySegment: "Filtrer par segment",
    organizationType: "Type d'organisation",
    banking: "Banque",
    buySide: "Buy-Side",
    paymentFintech: "Paiements et Fintech",
    corporate: "Entreprise",
    compliancePortal: "Portail de conformité",
    customerPortal: "Portail client",
    transactionMonitoring: "Surveillance des transactions",
    language: "Langue",
    ourClients: "Nos Clients",
    clientsList: "Clients",
    caseStudies: "Études de Cas",
    clientNews: "Actualités Clients",
    solutionResources: "Ressources de Solutions",
    brochures: "Brochures",
    datasheets: "Fiches Techniques",
    analystRelations: "Relations Analystes",
    moreResources: "Plus de Ressources",
    whitepapers: "Livres Blancs",
    reports: "Rapports",
    podcasts: "Podcasts",
    insights: "Perspectives",
    blog: "Blog",
    events: "Événements",
    regulatoryHorizon: "Rapport de Balayage de l'Horizon Réglementaire 2026",
    globalFincrime: "Tendances Mondiales des Opérations Fincrime en 2025",
    aiCompliance: "Rapport de Recherche sur l'IA en Conformité",
    globalAml: "Rapport de Recherche sur les Amendes AML Mondiales 2024",
    expertGuide: "Guide de l'Expert pour Numériser la Conformité",
    discoverOneConstellation: "Découvrez One Constellation",
    leadership: "Leadership",
    awards: "Récompenses",
    platform: "Plateforme",
    corpResponsibility: "Responsabilité Sociale",
    sustainability: "Durabilité",
    esGPolicy: "Politique Environnementale, Sociale et de Gouvernance (ESG)",
    modernSlavery: "Loi sur l'Esclavage Moderne",
    trustSecurity: "Confiance et Sécurité",
    howOneConstellation: "Comment One Constellation Aide",
    fincrimeOperating: "Système d'Exploitation de Lutte contre le Crime Financier",
    agenticAi: "IA Agentique – Rencontrez les Agents",
    overviewCLM: "Aperçu de One Constellation CLM",
    kycSolution: "Connaissance du Client (KYC)",
    clientOnboarding: "Intégration des Clients",
    idVerification: "Vérification d'Identité (ID&V)",
    transactionMonitoring: "Surveillance des Transactions",
    regulatoryCompliance: "Conformité Réglementaire",
    crmSalesforce: "CRM pour Salesforce",
    integrationHubFlows: "Hub d'Intégration et Flux",
    loanOrigination: "Origination de Prêts",
    accountOpening: "Ouverture de Compte",
    wealthCompliance: "Conformité Gestion de Patrimoine",

    // Hero Section
    compliancePortalBadge: "Portail de conformité",
    heroTitle: "Exploiter la Puissance du",
    heroHighlight: "E-KYC",
    heroSubtitle: "pour la Conformité Réglementaire",
    heroDescription:
      "Automatisez les processus de Connaissance du Client et rationalisez la conformité réglementaire dans toutes les juridictions avec notre solution E-KYC intelligente.",
    getStarted: "Commencer",
    watchDemo: "Regarder la démo",

    // One Platform Section
    onePlatformTitle: "Une plateforme pour soutenir",
    onePlatformHighlight: "tous les secteurs",
    onePlatformDescription:
      "Une solution complète conçue pour répondre aux besoins de conformité et opérationnels complexes de toute institution financière ou entité réglementée.",
    financeAndBanking: "Finance et Banque",
    financeDescription:
      "Simplifiez la conformité des institutions bancaires et des fournisseurs de services financiers mondialement.",
    payments: "Paiements",
    paymentsDescription: "Traitement de paiement sécurisé avec automatisation intégrée de la conformité AML et KYC.",
    insurance: "Assurance",
    insuranceDescription:
      "Automatisez la vérification des clients et l'évaluation des risques pour les compagnies d'assurance.",
    cryptocurrency: "Crypto-monnaie",
    cryptoDescription: "Outils de conformité améliorés spécialement conçus pour les plateformes d'actifs numériques.",

    // AML Solutions
    antiMoneyLaundering: "Lutte contre le Blanchiment d'Argent",
    amlSolutions: "Solutions",
    amlDescription:
      "Nos solutions AML complètes vous aident à détecter les modèles suspects, identifier les clients à haut risque et maintenir la conformité avec les réglementations mondiales incluant FATF, OFAC et les exigences locales.",
    exploreAML: "Explorer les Solutions AML",

    // KYC Section
    makingClientOnboarding: "Rendre",
    clientOnboardingHighlight: "l'Intégration Client",
    easierWithKYC: "Plus Facile avec KYC Numérique",
    kycDescription:
      "Rationalisez votre processus d'intégration des clients avec notre solution KYC numérique. Réduisez les frictions, améliorez l'expérience utilisateur et assurez la conformité le tout en quelques minutes.",
    learnMore: "En Savoir Plus",
    viewDemo: "Voir la Démo",

    // Financial Necessity Section
    financialNecessity: "Nécessité Financière",
    necessityDescription:
      "La conformité réglementaire n'est pas facultative. Nos solutions assurent que votre organisation respecte toutes les exigences obligatoires tout en optimisant l'efficacité opérationnelle.",
    cyclicChoice: "Choix Cyclique",
    choiceDescription:
      "Des milliers d'institutions choisissent notre plateforme à plusieurs reprises pour sa fiabilité, son innovation et son engagement envers l'excellence de la conformité.",
    onboardingAutomation: "Automatisation de l'Intégration",
    multiJurisdiction: "Multi-Juridictions",
    secureCompliance: "Conformité Sécurisée",
    regulatoryAligned: "Aligné sur les Réglementations",

    // Solutions Section
    solutionsWeOffer: "Solutions",
    weOffer: "que nous Offrons",
    digitalOnboardingTitle: "Portail d'Intégration Numérique",
    digitalOnboardingDesc: "Acquisition de clients rationalisée avec des flux de travail numériques intuitifs.",
    compliancePortalTitle: "Portail de Conformité",
    compliancePortalDesc: "Gestion complète de la conformité réglementaire et des pistes d'audit.",
    transactionMonitoringTitle: "Surveillance des Transactions",
    transactionMonitoringDesc: "Dépistage des transactions en temps réel et détection des anomalies.",

    // Stats Section
    years: "Ans",
    offices: "Bureaux",
    customers: "Clients",
    entities: "Entités",
    transactions: "Transactions",

    // Efficiency Section
    efficiency: "Efficacité",
    attainedThrough: "Atteinte par",
    compliance: "Conformité",
    efficiencyDescription:
      "Notre plateforme de conformité intelligente réduit la charge opérationnelle tout en assurant une adhésion réglementaire complète. Accomplissez plus avec moins et transformez la conformité en avantage compétitif.",

    // Trust Section
    builtOnFoundation: "Construit sur une Base de",
    trust: "Confiance",
    trustDescription:
      "La sécurité et la conformité sont au cœur de notre activité. Nous maintenons la certification SOC 2 Type II, la conformité GDPR et employons le chiffrement de niveau militaire pour toutes les données.",
    soc2Certified: "Certifié SOC2 Type II et ISO 27001",
    gdprCompliant: "Conforme aux exigences GDPR, CCPA et MiFID II",
    encryption: "Chiffrement de bout en bout pour toutes les données",
    systemAvailability: "Disponibilité du Système",
    expertSupport: "Support Expert",
    identityVerification: "Vérification d'Identité",

    // Footer
    aboutUs: "À propos de nous",
    products: "Produits",
    aboutFooter: "À propos de nous",
    privacyPolicy: "Politique de Confidentialité",
    termsOfService: "Conditions d'Utilisation",
    security: "Sécurité",
    newsletter: "Bulletin d'Actualités",
    stayUpdated: "Restez informé des dernières nouvelles en RegTech.",
    enterEmail: "Entrez votre email",
    join: "Rejoindre",
    copyright: "© 2026 One Constellation Limited. Tous droits réservés.",
    footerDescription:
      "Le leader mondial en gestion du cycle de vie client (CLM) et transformation numérique pour les institutions financières.",
    searchResults: "Résultats de recherche",
    resultsFound: "résultats trouvés pour",
    allSolutions: "Explorez toutes nos solutions",
    noResultsFound: "Aucun résultat trouvé. Essayez de rechercher KYC, intégration, conformité ou d'autres solutions.",
    viewMore: "Afficher tous les résultats pour",
    backToHome: "Retour à l'accueil",

    // Book Demo Page translations
    scheduleDemo: "Planifiez Votre Démo",
    transformCompliance: "Découvrez Comment Notre Plateforme Peut Transformer Votre",
    complianceOperations: "Opérations de Conformité",
    joinLeadingInstitutions:
      "Rejoignez les institutions financières leaders qui automatisent leurs processus de conformité et KYC. Obtenez une présentation personnalisée de notre plateforme.",
    demoScheduled: "Démo Programmée!",
    checkEmail: "Consultez votre email pour les détails de confirmation et le lien de réunion.",
    scheduleAnother: "Planifier une Autre Démo",
    whatYouWillGet: "Ce Que Vous Obtiendrez",
    thirtyMinuteDive: "Plongée approfondie de 30 minutes",
    specialistConsultation: "Consultation 1-à-1 avec un spécialiste",
    productWalkthrough: "Visite en direct du produit",
    yourInformation: "Vos Informations",
    fullName: "Nom Complet",
    johnDoe: "Jean Dupont",
    emailAddress: "Adresse Email",
    johnCompany: "jean@entreprise.com",
    companyName: "Nom de l'Entreprise",
    yourCompany: "Votre Entreprise",
    phoneNumber: "Numéro de Téléphone",
    phoneFormat: "+33 (555) 123-4567",
    selectTimeSlot: "Sélectionnez un Créneau Horaire",
    timesShownGMT: "Heures affichées en GMT+0",
    confirmAppointment: "Demander une Démo",
    firstName: "Prénom",
    lastName: "Nom",
    businessEmail: "Email Professionnel",
    marketSegment: "Segment de Marché",
    selectSegment: "Sélectionnez un segment de marché",
    country: "Pays",
    selectCountry: "Sélectionnez un pays",
  },
  DE: {
    // Navigation
    careers: "Karrieren",
    partners: "Partner",
    newsroom: "Newsroom",
    contact: "Kontakt",
    solutions: "Lösungen",
    clients: "Kunden",
    resources: "Ressourcen",
    company: "Unternehmen",
    requestDemo: "Demo anfordern",
    clientLogin: "Client Login",
    search: "Lösungen, Compliance-Tools, Onboarding durchsuchen...",
    filterBySegment: "Nach Segment filtern",
    organizationType: "Organisationstyp",
    banking: "Banking",
    buySide: "Buy-Side",
    paymentFintech: "Zahlungen und Fintech",
    corporate: "Unternehmen",
    compliancePortal: "Compliance-Portal",
    customerPortal: "Kundenportal",
    transactionMonitoring: "Transaktionsüberwachung",
    language: "Sprache",
    ourClients: "Unsere Kunden",
    clientsList: "Kunden",
    caseStudies: "Fallstudien",
    clientNews: "Kundennachrichten",
    solutionResources: "Lösungsressourcen",
    brochures: "Broschüren",
    datasheets: "Datenblätter",
    analystRelations: "Analystenbeziehungen",
    moreResources: "Weitere Ressourcen",
    whitepapers: "Whitepaper",
    reports: "Berichte",
    podcasts: "Podcasts",
    insights: "Einblicke",
    blog: "Blog",
    events: "Veranstaltungen",
    regulatoryHorizon: "Regulatorischer Horizont Scanning Bericht 2026",
    globalFincrime: "Globale Fincrime-Operationstrends 2025",
    aiCompliance: "KI in Compliance-Forschungsbericht",
    globalAml: "Globaler AML-Bußgeldbericht 2024",
    expertGuide: "Leitfaden des Experten zur Digitalisierung der Compliance",
    discoverOneConstellation: "Entdecken Sie One Constellation",
    leadership: "Leadership",
    awards: "Auszeichnungen",
    platform: "Plattform",
    corpResponsibility: "Unternehmensverantwortung",
    sustainability: "Nachhaltigkeit",
    esGPolicy: "Umwelt-, Sozial- und Governance-Richtlinie (ESG)",
    modernSlavery: "Gesetz über moderne Sklaverei",
    trustSecurity: "Vertrauen und Sicherheit",
    howOneConstellation: "Wie One Constellation hilft",
    fincrimeOperating: "Finanzkriminalitäts-Betriebssystem",
    agenticAi: "Agentic AI – Treffen Sie die Agenten",
    overviewCLM: "Übersicht über One Constellation CLM",
    kycSolution: "Know Your Customer (KYC)",
    clientOnboarding: "Client Onboarding",
    idVerification: "Identitäts- und Verifizierung (ID&V)",
    regulatoryCompliance: "Einhaltung von Vorschriften",
    crmSalesforce: "CRM für Salesforce",
    integrationHubFlows: "Integrations-Hub und Flows",
    loanOrigination: "Kreditvergabe",
    accountOpening: "Kontoeröffnung",
    wealthCompliance: "Vermögensverwaltungs-Compliance",

    // Hero Section
    compliancePortalBadge: "Compliance-Portal",
    heroTitle: "Nutzen Sie die Kraft von",
    heroHighlight: "E-KYC",
    heroSubtitle: "für behördliche Compliance",
    heroDescription:
      "Automatisieren Sie Know Your Customer-Prozesse und rationalisieren Sie die behördliche Compliance in allen Ländern mit unserer intelligenten E-KYC-Lösung.",
    getStarted: "Jetzt starten",
    watchDemo: "Demo ansehen",

    // One Platform Section
    onePlatformTitle: "Eine Plattform zur Unterstützung",
    onePlatformHighlight: "aller Branchen",
    onePlatformDescription:
      "Eine umfassende Lösung, die darauf ausgelegt ist, die komplexen Compliance- und Betriebsanforderungen jedes Finanzinstituts oder regulierten Unternehmens zu erfüllen.",
    financeAndBanking: "Finanzen und Banking",
    financeDescription: "Vereinfachen Sie die Compliance für Bankinstitute und Finanzdienstleister weltweit.",
    payments: "Zahlungen",
    paymentsDescription: "Sichere Zahlungsabwicklung mit integrierter AML- und KYC-Compliance-Automatisierung.",
    insurance: "Versicherung",
    insuranceDescription:
      "Automatisieren Sie die Kundenverifizierung und Risikobewertung für Versicherungsunternehmen.",
    cryptocurrency: "Kryptowährung",
    cryptoDescription: "Verbesserte Compliance-Tools speziell für digitale Vermögensplattformen konzipiert.",

    // AML Solutions
    antiMoneyLaundering: "Geldwäschebekämpfung",
    amlSolutions: "Lösungen",
    amlDescription:
      "Unsere umfassenden AML-Lösungen helfen Ihnen, verdächtige Muster zu erkennen, risikoreiche Kunden zu identifizieren und die Compliance mit globalen Vorschriften einschließlich FATF, OFAC und lokalen Anforderungen aufrechtzuerhalten.",
    exploreAML: "AML-Lösungen erkunden",

    // KYC Section
    makingClientOnboarding: "Das",
    clientOnboardingHighlight: "Kundenonboarding",
    easierWithKYC: "Einfacher mit digitalem KYC",
    kycDescription:
      "Rationalisieren Sie Ihren Kundenonboarding-Prozess mit unserer digitalen KYC-Lösung. Reduzieren Sie Reibungsverluste, verbessern Sie das Benutzererlebnis und stellen Sie Compliance sicher alles in wenigen Minuten.",
    learnMore: "Mehr erfahren",
    viewDemo: "Demo ansehen",

    // Financial Necessity Section
    financialNecessity: "Finanzielle Notwendigkeit",
    necessityDescription:
      "Die behördliche Compliance ist nicht optional. Unsere Lösungen stellen sicher, dass Ihre Organisation alle obligatorischen Anforderungen erfüllt und gleichzeitig die Betriebseffizienz optimiert.",
    cyclicChoice: "Zyklische Wahl",
    choiceDescription:
      "Tausende von Institutionen wählen unsere Plattform wiederholt für ihre Zuverlässigkeit, Innovation und ihr Engagement für Compliance-Exzellenz.",
    onboardingAutomation: "Onboarding-Automatisierung",
    multiJurisdiction: "Multi-Jurisdiktion",
    secureCompliance: "Sichere Compliance",
    regulatoryAligned: "Behördlich ausgerichtet",

    // Solutions Section
    solutionsWeOffer: "Lösungen",
    weOffer: "die wir anbieten",
    digitalOnboardingTitle: "Digitales Onboarding-Portal",
    digitalOnboardingDesc: "Optimierte Kundengewinnung mit intuitiven digitalen Arbeitsabläufen.",
    compliancePortalTitle: "Compliance-Portal",
    compliancePortalDesc: "Umfassende Verwaltung der behördlichen Compliance und Audit-Trails.",
    transactionMonitoringTitle: "Transaktionsüberwachung",
    transactionMonitoringDesc: "Echtzeitprüfung von Transaktionen und Anomalieerkennung.",

    // Stats Section
    years: "Jahre",
    offices: "Büros",
    customers: "Kunden",
    entities: "Entitäten",
    transactions: "Transaktionen",

    // Efficiency Section
    efficiency: "Effizienz",
    attainedThrough: "Erreicht durch",
    compliance: "Compliance",
    efficiencyDescription:
      "Unsere intelligente Compliance-Plattform reduziert den operativen Overhead und gewährleistet gleichzeitig vollständige behördliche Einhaltung. Erreichen Sie mehr mit weniger und wandeln Sie Compliance in einen Wettbewerbsvorteil um.",

    // Trust Section
    builtOnFoundation: "Aufgebaut auf einer Basis von",
    trust: "Vertrauen",
    trustDescription:
      "Sicherheit und Compliance sind der Kern unseres Unternehmens. Wir halten die SOC 2 Type II-Zertifizierung ein, entsprechen der GDPR und verwenden militärische Verschlüsselung für alle Daten.",
    soc2Certified: "SOC2 Type II und ISO 27001 zertifiziert",
    gdprCompliant: "Konform mit GDPR, CCPA und MiFID II",
    encryption: "End-to-End-Verschlüsselung für alle Daten",
    systemAvailability: "Systemverfügbarkeit",
    expertSupport: "Experten-Support",
    identityVerification: "Identitätsverifizierung",

    // Footer
    aboutUs: "Über uns",
    products: "Produkte",
    aboutFooter: "Über uns",
    privacyPolicy: "Datenschutzrichtlinie",
    termsOfService: "Nutzungsbedingungen",
    security: "Sicherheit",
    newsletter: "Newsletter",
    stayUpdated: "Bleiben Sie über die neuesten RegTech-Entwicklungen auf dem Laufenden.",
    enterEmail: "E-Mail eingeben",
    join: "Beitreten",
    copyright: "© 2026 One Constellation Limited. Alle Rechte vorbehalten.",
    footerDescription:
      "Der globale Marktführer in Client Lifecycle Management (CLM) und digitaler Transformation für Finanzinstitute.",
    searchResults: "Suchergebnisse",
    resultsFound: "Ergebnisse gefunden für",
    allSolutions: "Alle unsere Lösungen durchsuchen",
    noResultsFound:
      "Keine Ergebnisse gefunden. Versuchen Sie, nach KYC, Onboarding, Compliance oder anderen Lösungen zu suchen.",
    viewMore: "Alle Ergebnisse anzeigen für",
    backToHome: "Zurück zur Startseite",

    // Book Demo Page translations
    scheduleDemo: "Planen Sie Ihre Demo",
    transformCompliance: "Sehen Sie, Wie Unsere Plattform Ihre",
    complianceOperations: "Compliance-Operationen Transformieren Kann",
    joinLeadingInstitutions:
      "Treten Sie führenden Finanzinstitutionen bei, die ihre Compliance- und KYC-Prozesse automatisieren. Erhalten Sie eine persönliche Präsentation unserer Plattform.",
    demoScheduled: "Demo Geplant!",
    checkEmail: "Überprüfen Sie Ihre E-Mail auf Bestätigungsdetails und Meeting-Link.",
    scheduleAnother: "Weitere Demo Planen",
    whatYouWillGet: "Was Sie Bekommen",
    thirtyMinuteDive: "30-Minuten-Tieftauchgang",
    specialistConsultation: "1-zu-1 Spezialistenkonsultation",
    productWalkthrough: "Live-Produktdemonstration",
    yourInformation: "Ihre Informationen",
    fullName: "Vollständiger Name",
    johnDoe: "Johann Schmidt",
    emailAddress: "E-Mail-Adresse",
    johnCompany: "johann@unternehmen.de",
    companyName: "Unternehmensname",
    yourCompany: "Ihr Unternehmen",
    phoneNumber: "Telefonnummer",
    phoneFormat: "+49 (555) 123-4567",
    selectTimeSlot: "Wählen Sie einen Zeitslot",
    timesShownGMT: "Zeiten in GMT+0 angezeigt",
    confirmAppointment: "Demo anfordern",
    firstName: "Vorname",
    lastName: "Nachname",
    businessEmail: "Geschäftliche E-Mail",
    marketSegment: "Marktsegment",
    selectSegment: "Wählen Sie ein Marktsegment",
    country: "Land",
    selectCountry: "Wählen Sie ein Land",
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN")
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("preferredLanguage") as Language | null
      if (savedLanguage && ["EN", "ES", "FR", "DE"].includes(savedLanguage)) {
        setLanguage(savedLanguage)
      }
      setIsHydrated(true)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem("preferredLanguage", lang)
    }
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || translations["EN"]?.[key] || key
  }

  // Prevent hydration mismatch
  if (!isHydrated) {
    return null
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
