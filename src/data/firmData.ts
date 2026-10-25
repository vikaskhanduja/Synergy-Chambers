export interface Lawyer {
  id: string;
  name: string;
  role: string;
  location: string;
  qualifications: string[];
  bio: string;
  practiceFocus: string[];
  imageUrl: string;
  notableHighlights?: string[];
  barAdmissions?: string[];
}

export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  keyServices: string[];
  courtRepresentation: string[];
  iconName: string;
}

export const FIRM_DETAILS = {
  name: "Synergy Chambers",
  tagline: "Advocates & Solicitors",
  establishedLocation: "Chamber No. 238, Patiala House Courts, New Delhi – 110001",
  email: "info@synergychambers.com",
  phone: "+91 11 2338 0000",
  hours: "Monday – Saturday: 9:30 AM – 7:30 PM",
  quote: {
    text: "The life of the law has not been logic; it has been experience.",
    author: "Oliver Wendell Holmes"
  },
  mission: "Synergy Chambers is a Delhi-based full-service law firm bringing together experienced advocates and solicitors to guide individuals, families, and businesses through complex legal challenges — with clarity, integrity, and results."
};

export const FOUNDERS: Lawyer[] = [
  {
    id: "akshay-chauhan",
    name: "Akshay Chauhan",
    role: "Advocate & Co-Founder",
    location: "New Delhi (Patiala House Courts)",
    qualifications: [
      "LL.B., ICFAI Law School, ICFAI University, Dehradun",
      "Member, Bar Council of Delhi",
      "Member, New Delhi Bar Association"
    ],
    bio: "Akshay Chauhan is a distinguished trial lawyer at Synergy Chambers with extensive courtroom experience representing government enforcement agencies as well as private clients in high-stakes criminal, regulatory, and corporate litigation. In his prior practice, Akshay assisted the Special Prosecutor / Senior Standing Counsel for the Narcotics Control Bureau (NCB) and Enforcement Directorate (ED), leading prosecution in over 100 NDPS matters and 50 PMLA matters.",
    notableHighlights: [
      "Assisted Special Prosecutor / Senior Standing Counsel for NCB and Enforcement Directorate (ED)",
      "Led prosecution strategy in over 100 NDPS trials and 50 PMLA financial crime proceedings",
      "Notable case work prosecuting India's largest LSD haul and 20 kg heroin smuggling at IGI Airport",
      "Handled high-profile PMLA prosecutions including Unitech Group and Aircel-Maxis matters",
      "Handled major enforcement litigation for CBIC in customs/tax, and for SFIO in corporate fraud trials",
      "Appellate litigation before the High Courts and Supreme Court of India"
    ],
    practiceFocus: [
      "Criminal Trial Advocacy & NDPS Act Defence",
      "Prevention of Money Laundering Act (PMLA) Defence",
      "Serious Fraud Investigation Office (SFIO) & Economic Offences",
      "Customs, Indirect Tax & CBIC Regulatory Disputes",
      "Appellate Litigation before High Courts & Supreme Court"
    ],
    barAdmissions: ["Bar Council of Delhi", "New Delhi Bar Association"],
    imageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "sumit-ghartan",
    name: "Sumit Ghartan",
    role: "Advocate & Co-Founder",
    location: "New Delhi (Patiala House Courts)",
    qualifications: [
      "LL.B., Campus Law Centre, Faculty of Law, University of Delhi",
      "Member, Bar Council of Delhi",
      "Trial Court Advocate, New Delhi"
    ],
    bio: "Sumit Ghartan is a core litigation advocate at Synergy Chambers, practising extensively across criminal and civil matters with an emphasis on cases arising under the POCSO, NDPS, and PMLA Acts. He appears regularly before trial courts across the National Capital Territory of Delhi, handling bail applications, trial management, criminal defence, and complex matrimonial disputes.",
    notableHighlights: [
      "Alumnus of the prestigious Campus Law Centre (CLC), University of Delhi",
      "Prior tenure across premier Delhi litigation firms: K & R Legal, Ketan Bhutani & Associates, and DK Rustagi & Co.",
      "Comprehensive trial advocacy in economic offences, NDPS bail hearings, and POCSO matters",
      "Strategic negotiation and counselling in contentious civil and family law litigation",
      "Proven track record in drafting plaints, petitions, and appellate briefs"
    ],
    practiceFocus: [
      "POCSO Act Trials & Special Court Representation",
      "NDPS Act Defence & Anticipatory/Regular Bail",
      "PMLA Litigation & Enforcement Directorate Inquiries",
      "Civil Disputes & Property Litigation",
      "Matrimonial Remedies & Family Settlements"
    ],
    barAdmissions: ["Bar Council of Delhi", "Patiala House Courts Bar Association"],
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "hitesh-nandal",
    name: "Hitesh Nandal",
    role: "Advocate & Co-Founder",
    location: "New Delhi (Patiala House Courts)",
    qualifications: [
      "B.B.A. LL.B., Vivekananda Institute of Professional Studies (VIPS), GGSIPU",
      "Member, Bar Council of Delhi"
    ],
    bio: "Hitesh Nandal is an advocate at Synergy Chambers with a practice spanning white-collar litigation, regulatory matters, and civil-commercial disputes. His focus areas include PMLA, NDPS, Customs, and FEMA matters, alongside criminal litigation under the Indian Penal Code / Bharatiya Nyaya Sanhita, economic offences, and commercial disputes before the NCLT and arbitration tribunals.",
    notableHighlights: [
      "Previously worked under a Special Public Prosecutor for the Enforcement Directorate (ED)",
      "Handled PMLA, FEMA, and Customs litigation including contested bail applications and trial preparation",
      "Experienced across District Courts and Appellate Forums in NDPS appeals under Section 68-O",
      "SFIO-related corporate fraud investigations and corporate insolvency disputes before the NCLT",
      "Extensive drafting of discharge applications, writ petitions, and commercial appellate submissions"
    ],
    practiceFocus: [
      "White-Collar Crime & PMLA Investigations",
      "Foreign Exchange Management Act (FEMA) & Customs Litigation",
      "Insolvency & Bankruptcy Code (NCLT & NCLAT)",
      "Commercial Dispute Resolution & Domestic Arbitration",
      "Economic Offences Wing (EOW) Defence"
    ],
    barAdmissions: ["Bar Council of Delhi", "Delhi High Court Bar Association"],
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
  }
];

export const CHANDIGARH_TEAM: Lawyer[] = [
  {
    id: "dr-amardeep-singh-sandhu",
    name: "Dr. Amardeep Singh Sandhu",
    role: "Advocate, Chandigarh Chambers",
    location: "Chandigarh (Punjab & Haryana High Court)",
    qualifications: [
      "Ph.D. in Law, University School of Law and Legal Studies (USLLS), GGSIPU",
      "LL.M. in Constitutional & Criminal Law, National Law University, Delhi (NLUD)",
      "B.A. LL.B. (Hons.), Vivekananda Institute of Professional Studies (VIPS)"
    ],
    bio: "Dr. Amardeep Singh Sandhu is an advocate with Synergy Chambers' Chandigarh team. He brings a profound academic and empirical foundation to his litigation practice. His doctoral research examined judicial interventions in public health during the COVID-19 pandemic. Prior to active practice in the region, Dr. Sandhu was on the faculty at the University School of Law and Legal Studies, GGSIPU.",
    notableHighlights: [
      "Doctorate in Law (Ph.D.) focusing on judicial constitutional interventions",
      "Master of Laws (LL.M.) from National Law University Delhi (NLUD)",
      "Former Law Faculty member at USLLS, GGSIPU",
      "Extensive author of published research in peer-reviewed national and international law journals",
      "Expertise spanning Constitutional Writs, Criminal Law Reform, and Healthcare Jurisprudence"
    ],
    practiceFocus: [
      "Constitutional Writs & Public Law Litigation",
      "High Court Appellate Advocacy (Punjab & Haryana High Court)",
      "Criminal Jurisprudence & Substantive Review",
      "Public Health & Regulatory Law",
      "Academic Legal Consultancy & Research Strategy"
    ],
    imageUrl: "https://static.wixstatic.com/media/4b0d5e_7e888cb5799d41f1bc349a73d00fefb1~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/amardeep%20sandhu_edited.jpg"
  },
  {
    id: "abhinav-chaudhary",
    name: "Abhinav Chaudhary",
    role: "Advocate, Chandigarh Chambers",
    location: "Chandigarh (High Court & Regional Tribunals)",
    qualifications: [
      "LL.B., Faculty of Law",
      "Member, Punjab & Haryana High Court Bar Association"
    ],
    bio: "Abhinav Chaudhary is an advocate with Synergy Chambers' Chandigarh team, practising mainly in service matters — representing clients in disputes relating to government and institutional employment, seniority, promotions, and disciplinary inquiries. He holds specialized expertise in cooperative society governance, and maintains an active appellate practice before the Motor Accident Claims Tribunal (MACT) and High Court.",
    notableHighlights: [
      "Specialized service law practice before Central Administrative Tribunal (CAT) & High Court",
      "Cooperative society governance and regulatory disputes handling",
      "Extensive record of successful claim recoveries before Motor Accident Claims Tribunals (MACT)",
      "Broad civil and criminal appellate representation across the Punjab & Haryana region"
    ],
    practiceFocus: [
      "Service Matters, Promotions & Disciplinary Inquiries",
      "Cooperative Society Governance & Institutional Law",
      "Motor Accident Claims Tribunal (MACT) Appeals",
      "Civil & Criminal Appeals before High Court"
    ],
    imageUrl: "https://static.wixstatic.com/media/4b0d5e_ec76f070ae3e48128fc0a30a5f49e13a~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/abhinav%20chaudhary_edited.jpg"
  }
];

export const HARYANA_TEAM: Lawyer[] = [
  {
    id: "ajay-gulia",
    name: "Ajay Gulia",
    role: "Advocate, Haryana District & Sessions Practice",
    location: "Haryana (District Courts: Karnal, Panipat & NCR)",
    qualifications: ["LL.B., Advocate", "Bar Council of Punjab & Haryana"],
    bio: "Ajay Gulia is an advocate with Synergy Chambers' Haryana team, delivering dedicated representation across the state's district and sessions courts with a deep understanding of local procedural practice, civil trials, and land tenure disputes.",
    practiceFocus: ["Civil Suits & Land Disputes", "District Court Trials", "Criminal Defence", "Local Revenue Matters"],
    imageUrl: "https://static.wixstatic.com/media/4b0d5e_ba80200af202414f8450b6b038ca0519~mv2.jpeg/v1/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ajay%20Gulia.jpeg"
  },
  {
    id: "daksh-yadav",
    name: "Daksh Yadav",
    role: "Advocate, Haryana District & Sessions Practice",
    location: "Haryana (Rewari, Gurugram & District Courts)",
    qualifications: ["LL.B., Advocate", "Bar Council of Punjab & Haryana"],
    bio: "Daksh Yadav represents Synergy Chambers in Haryana, focusing on commercial litigation, property boundary controversies, bail hearings, and contractual recovery proceedings throughout the southern Haryana belt.",
    practiceFocus: ["Property & Tenancy Disputes", "Contract Enforcement", "Bail & Criminal Trials", "Consumer Forums"],
    imageUrl: "https://static.wixstatic.com/media/4b0d5e_86f465e8e9fe4cb5824b58a5d362c1c1~mv2.jpeg/v1/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Daksh%20Yadav.jpeg"
  },
  {
    id: "ankit-yadav",
    name: "Ankit Yadav",
    role: "Advocate, Haryana District & Sessions Practice",
    location: "Haryana (District & Sessions Courts)",
    qualifications: ["LL.B., Advocate", "Bar Council of Punjab & Haryana"],
    bio: "Ankit Yadav brings reliable trial experience to Synergy Chambers' Haryana contingent, advocating on behalf of agricultural landowners, regional businesses, and private individuals in district courts.",
    practiceFocus: ["Revenue Appeals & Partition Suits", "Cheque Bounce (Sec 138 NI Act)", "Civil Injunctions", "Bail Hearings"],
    imageUrl: "https://static.wixstatic.com/media/4b0d5e_2b1d9ccedc2e4e2285914f87fbbd83e0~mv2.jpg/v1/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ankit%20yadav_edited.jpg"
  },
  {
    id: "mehr-chaudhary",
    name: "Mehr Chaudhary",
    role: "Advocate, Haryana District & Sessions Practice",
    location: "Haryana (District Courts & Family Forums)",
    qualifications: ["LL.B., Advocate", "Bar Association"],
    bio: "Mehr Chaudhary is an advocate with the Haryana practice of Synergy Chambers, advising on family settlements, matrimonial remedies, civil disputes, and local regulatory procedures.",
    practiceFocus: ["Family & Matrimonial Settlements", "Civil Rights & Recovery", "Mediation & Negotiation", "Labour Grievances"],
    imageUrl: "https://static.wixstatic.com/media/4b0d5e_35efc5782dd34052920897113ac50f83~mv2.png/v1/fill/w_287,h_323,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/mehr%20ch.png"
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "civil-litigation",
    title: "Civil Litigation",
    subtitle: "Commercial, Contractual & Remedial Suits",
    shortDesc: "End-to-end representation in civil disputes before trial courts, High Courts, and appellate tribunals across Delhi NCR, Chandigarh, and Haryana.",
    fullDesc: "Civil litigation refers to the formal legal process of resolving non-criminal disputes between individuals, corporations, and statutory entities through the judicial system. At Synergy Chambers, our practice is grounded in meticulous case preparation, rigorous factual analysis, and strategic courtroom advocacy to protect our clients' commercial and proprietary interests.",
    keyServices: [
      "Breach of contract suits and recovery proceedings",
      "Commercial and joint-venture business disputes",
      "Injunctions, declaratory suits, and specific performance claims",
      "Damages, tort liability, and restitution claims",
      "Partnership dissolutions and shareholder conflicts"
    ],
    courtRepresentation: [
      "Patiala House Courts & Delhi District Courts",
      "High Court of Delhi",
      "Punjab & Haryana High Court",
      "Appellate Tribunals & Commercial Courts"
    ],
    iconName: "Scale"
  },
  {
    id: "white-collar-crimes",
    title: "White-Collar Crimes & Regulatory Defence",
    subtitle: "PMLA, SFIO, ED, NDPS & Financial Inquiries",
    shortDesc: "Formidable defence advocacy in high-stakes financial crime investigations, Enforcement Directorate summons, SFIO inquiries, and special statute trials.",
    fullDesc: "Led by trial advocates with prior prosecutorial and special counsel backgrounds assisting the NCB and Enforcement Directorate, Synergy Chambers provides unmatched strategic defence in complex economic offences, money laundering allegations, and regulatory enforcement actions.",
    keyServices: [
      "Prevention of Money Laundering Act (PMLA) trials & provisional attachment challenges",
      "Enforcement Directorate (ED) summons, inquiries, and bail proceedings",
      "Serious Fraud Investigation Office (SFIO) corporate fraud defence",
      "NDPS Act trial advocacy, search & seizure scrutiny, and appellate litigation",
      "FEMA contraventions, Customs adjudications, and DRI proceedings",
      "Economic Offences Wing (EOW) & Special Investigation Team (SIT) matters"
    ],
    courtRepresentation: [
      "Special PMLA Courts (Patiala House Courts & Rouse Avenue)",
      "Special NDPS Courts",
      "Appellate Tribunal for PMLA (SAFEMA)",
      "High Court of Delhi & Supreme Court of India"
    ],
    iconName: "ShieldAlert"
  },
  {
    id: "criminal-litigation",
    title: "Criminal Litigation & Trial Advocacy",
    subtitle: "Bail, Trial Management & Appellate Defence",
    shortDesc: "Dedicated criminal defence across all stages — from initial FIR registration and anticipatory bail to full courtroom trial management and high court appeals.",
    fullDesc: "Our criminal litigation practice combines vigorous trial preparation, witness examination excellence, and strategic defence under the Indian Penal Code / Bharatiya Nyaya Sanhita and special criminal statutes. We ensure constitutional safeguards and individual liberties are rigorously upheld.",
    keyServices: [
      "Anticipatory bail, regular bail, and interim transit protection",
      "Trial advocacy, charge arguments, and rigorous cross-examination of prosecution witnesses",
      "POCSO Act defence and special court trials",
      "Quashing of FIRs and criminal complaints under Section 482 CrPC / Sec 528 BNSS",
      "Criminal appeals and revisions before Sessions, High Courts, and the Supreme Court"
    ],
    courtRepresentation: [
      "Chief Metropolitan Magistrate (CMM) & Sessions Courts",
      "Patiala House Courts, Tis Hazari, Saket, Karkardooma, Rohini, Dwarka",
      "High Court of Delhi & Punjab and Haryana High Court",
      "Supreme Court of India"
    ],
    iconName: "Gavel"
  },
  {
    id: "arbitration-adr",
    title: "Arbitration & Alternative Dispute Resolution",
    subtitle: "Domestic & Commercial Arbitrations",
    shortDesc: "Fast-track resolution of commercial controversies through domestic arbitration, mediation, and enforcement proceedings under the Arbitration Act.",
    fullDesc: "Synergy Chambers assists commercial enterprises and individuals in avoiding prolonged courtroom battles through structured arbitration and mediation. We represent clients from pre-arbitration strategy to post-award enforcement or statutory challenge.",
    keyServices: [
      "Section 9 petitions for urgent interim protective relief",
      "Section 11 applications for appointment of independent arbitrators",
      "Representation before Sole Arbitrators and arbitral tribunals",
      "Section 34 petitions challenging arbitral awards",
      "Section 36 execution and domestic award enforcement proceedings",
      "Mediation, conciliation, and negotiated commercial settlements"
    ],
    courtRepresentation: [
      "Delhi International Arbitration Centre (DIAC)",
      "Indian Council of Arbitration (ICA)",
      "High Court of Delhi Commercial Appellate Division",
      "Punjab & Haryana High Court"
    ],
    iconName: "Handshake"
  },
  {
    id: "service-matters",
    title: "Service Matters & Administrative Law",
    subtitle: "Public Sector Employment & Administrative Tribunals",
    shortDesc: "Expert representation for government and institutional employees in promotions, disciplinary actions, pensions, and Central Administrative Tribunal (CAT) hearings.",
    fullDesc: "Led by specialized counsel in our Chandigarh and Delhi teams, our service matters practice handles contentious employment disputes, seniority controversies, departmental inquiries, and administrative overreach within government bodies and cooperative institutions.",
    keyServices: [
      "Representation before the Central Administrative Tribunal (CAT)",
      "Disciplinary inquiry defence and natural justice violations",
      "Seniority fixation, promotion denial, and reservation disputes",
      "Pension, gratuity, and terminal benefits disputes",
      "Cooperative society governance, elections, and regulatory matters",
      "Writ petitions challenging administrative and tribunal orders"
    ],
    courtRepresentation: [
      "Central Administrative Tribunal (CAT Principal Bench New Delhi & Chandigarh Bench)",
      "Armed Forces Tribunal (AFT)",
      "High Court of Delhi & Punjab and Haryana High Court"
    ],
    iconName: "Building2"
  },
  {
    id: "property-disputes",
    title: "Property & Real Estate Disputes",
    subtitle: "Title, Partition, Tenancy & Land Disputes",
    shortDesc: "Strategic counsel in real estate title verification, partition suits, landlord-tenant disputes, and land acquisition across Delhi NCR and Haryana.",
    fullDesc: "Real estate and land litigation requires thorough knowledge of local revenue laws, tenancy codes, and property jurisprudence. Synergy Chambers represents landowners, buyers, and developers in complex title and ownership disputes.",
    keyServices: [
      "Title verification and property due diligence",
      "Partition suits among co-owners and ancestral property claims",
      "Landlord and tenant eviction suits under Delhi Rent Control and state rent laws",
      "Specific performance of sale agreements and earnest money recovery",
      "Land acquisition claims and enhanced compensation appeals",
      "RERA complaints and homebuyer protection before Real Estate Authorities"
    ],
    courtRepresentation: [
      "District Civil Courts across Delhi and Haryana",
      "Revenue Courts, Tehsildars, and Financial Commissioners",
      "Delhi RERA & Haryana RERA (Panchkula & Gurugram)",
      "High Courts"
    ],
    iconName: "Home"
  },
  {
    id: "matrimonial",
    title: "Matrimonial & Family Law",
    subtitle: "Compassionate, Discretionary Family Resolution",
    shortDesc: "Sensitive, confidential guidance in matrimonial disputes, mutual & contested divorce, maintenance, and child custody.",
    fullDesc: "Family controversies require not only sharp legal acumen but also emotional maturity and discretion. We prioritize collaborative settlement and mediation while standing ready for firm courtroom representation when required.",
    keyServices: [
      "Contested divorce petitions and Mutual Consent Divorce (Sec 13B HMA)",
      "Interim and permanent maintenance under Section 125 CrPC / Sec 24 HMA",
      "Protection of Women from Domestic Violence Act (PWDVA) proceedings",
      "Child custody, guardianship, and visitation right claims",
      "Restitution of conjugal rights and family property settlements"
    ],
    courtRepresentation: [
      "Family Courts across Delhi (Patiala House, Saket, etc.)",
      "Family Courts in Haryana (Gurugram, Faridabad, Karnal, Rewari)",
      "High Courts on Family Appeal"
    ],
    iconName: "HeartHandshake"
  },
  {
    id: "labour-employment",
    title: "Labour & Employment Law",
    subtitle: "Workplace Governance, Policies & Industrial Disputes",
    shortDesc: "Balancing enterprise compliance and worker rights in employment contracts, POSH guidelines, and industrial tribunal hearings.",
    fullDesc: "Our employment law practice advises both institutional employers and executive professionals on structuring compliant workplace policies and resolving contentious industrial disputes.",
    keyServices: [
      "Employment contract drafting, non-compete clauses, and executive agreements",
      "Prevention of Sexual Harassment (POSH) compliance and Internal Committee (IC) guidance",
      "Wrongful termination, retrenchment claims, and severance negotiations",
      "Industrial tribunal disputes and labour conciliation proceedings",
      "Statutory compliance under Factories Act, Payment of Gratuity, and Provident Fund laws"
    ],
    courtRepresentation: [
      "Labour Courts & Industrial Tribunals (Delhi & Haryana)",
      "Appellate Authorities under Payment of Gratuity Act",
      "High Courts"
    ],
    iconName: "Briefcase"
  },
  {
    id: "corporate-commercial",
    title: "Corporate & Commercial Advisory",
    subtitle: "Startup Structuring, Contracts & NCLT Practice",
    shortDesc: "Business-first legal advisory on corporate formation, commercial contracts, regulatory compliance, and NCLT insolvency proceedings.",
    fullDesc: "From structuring early-stage ventures to navigating commercial contracts and insolvency proceedings, Synergy Chambers aligns legal strategy with commercial reality to safeguard ongoing business operations.",
    keyServices: [
      "Corporate formation, governance charters, and director duties",
      "Commercial contract drafting, master service agreements, and vendor contracts",
      "Insolvency & Bankruptcy Code (IBC) proceedings before the NCLT",
      "Regulatory compliance advisory under Companies Act and MCA guidelines",
      "Shareholder agreements, joint venture pacts, and investor dispute management"
    ],
    courtRepresentation: [
      "National Company Law Tribunal (NCLT New Delhi & Chandigarh)",
      "National Company Law Appellate Tribunal (NCLAT)",
      "Commercial Courts"
    ],
    iconName: "FileCheck"
  }
];

export const JURISDICTIONS = [
  {
    region: "National Capital Territory of Delhi",
    hub: "Headquarters & Principal Chambers",
    address: "Chamber No. 238, Patiala House Courts, New Delhi – 110001",
    courts: [
      "Supreme Court of India (Tilak Marg, New Delhi)",
      "High Court of Delhi (Sher Shah Road, New Delhi)",
      "Patiala House Courts (New Delhi District)",
      "Tis Hazari, Saket, Karkardooma, Rohini & Dwarka District Courts",
      "National Company Law Tribunal (NCLT) & NCLAT",
      "Central Administrative Tribunal (CAT Principal Bench)",
      "Debt Recovery Tribunal (DRT & DRAT)"
    ]
  },
  {
    region: "Chandigarh & Punjab Region",
    hub: "Regional Chambers",
    address: "Chandigarh High Court Complex & Regional Tribunals",
    courts: [
      "High Court of Punjab & Haryana at Chandigarh",
      "Central Administrative Tribunal (CAT Chandigarh Bench)",
      "Armed Forces Tribunal (AFT Chandimandir / Chandigarh)",
      "Motor Accident Claims Tribunal (MACT)",
      "District & Sessions Court, Chandigarh"
    ]
  },
  {
    region: "Haryana State Practice",
    hub: "District & Sessions Network",
    address: "From Karnal to Rewari, Gurugram, Faridabad, Panipat & Rohtak",
    courts: [
      "District & Sessions Courts: Karnal, Rewari, Gurugram, Panipat, Faridabad",
      "Haryana Real Estate Regulatory Authority (HRERA Gurugram & Panchkula)",
      "State Consumer Disputes Redressal Commission",
      "Revenue Courts, Collectorate & Sub-Divisional Magistrates"
    ]
  }
];
