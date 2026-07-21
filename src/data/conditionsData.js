export const conditionsData = [
  {
    id: "cataract",
    title: "Cataract",
    category: "Cataract",
    ageGroup: "Senior (50+ years)",
    urgency: "Routine / Planned Evaluation",
    tagline: "Clouding of the eye's natural crystalline lens leading to progressive vision impairment.",
    shortDesc: "Cataract is a natural aging process where the clear crystalline lens becomes cloudy, causing blurry vision, glare around lights, and faded colors.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    symptoms: [
      "Gradual blurring or haziness in vision",
      "Increased sensitivity to light and night glare",
      "Frequent changes in eyeglass prescriptions",
      "Colors appearing faded, yellowish, or less vibrant",
      "Double vision in a single eye"
    ],
    causes: [
      "Natural aging process (most common)",
      "Long-term diabetes mellitus",
      "Eye injuries or previous ocular surgeries",
      "Prolonged exposure to ultraviolet (UV) radiation",
      "Extended use of corticosteroid medications"
    ],
    diagnosticProcess: [
      "Slit-Lamp Biomicroscopy evaluation",
      "Visual Acuity Testing & Refraction",
      "Dilated Eye Examination for retinal checkup",
      "Optical Biometry for precise IOL power calculation"
    ],
    treatmentOverview: "Cataract is medically evaluated and corrected through modern micro-incision cataract surgery (MICS) where the cloudy natural lens is replaced with a customized intraocular lens (IOL).",
    faqs: [
      {
        question: "Is cataract surgery painful?",
        answer: "Cataract evaluation and modern sutureless procedures are performed under topical numbing eye drops, ensuring maximum patient comfort."
      },
      {
        question: "Can cataract affect both eyes?",
        answer: "Yes, cataract frequently develops in both eyes, though one eye may be affected earlier or more severely than the other."
      }
    ]
  },
  {
    id: "diabetic-retinopathy",
    title: "Diabetic Retinopathy",
    category: "Retina",
    ageGroup: "Adult / Senior",
    urgency: "High Priority / Screening",
    tagline: "Retinal microvascular damage caused by chronically elevated blood sugar levels.",
    shortDesc: "Diabetic retinopathy damages blood vessels in the retina, potentially causing fluid leakage, macular edema, or abnormal blood vessel growth leading to vision loss.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
    symptoms: [
      "Floating spots or dark strings (floaters)",
      "Fluctuating vision clarity",
      "Impaired color vision or dark patches in field of view",
      "Sudden, painless loss of vision in advanced stages"
    ],
    causes: [
      "Uncontrolled or long-standing diabetes (Type 1 & Type 2)",
      "High blood pressure & elevated cholesterol levels",
      "Pregnancy with pre-existing diabetes"
    ],
    diagnosticProcess: [
      "Digital Fundus Photography",
      "Optical Coherence Tomography (OCT) for macular thickness",
      "Fundus Fluorescein Angiography (FFA) when indicated"
    ],
    treatmentOverview: "Management includes strict glycemic control, anti-VEGF intraocular injections, retinal laser photocoagulation, and advanced vitrectomy procedures when necessary.",
    faqs: [
      {
        question: "How often should diabetic patients have an eye test?",
        answer: "Diabetic individuals should undergo a comprehensive dilated retina examination at least once a year, or more frequently as advised by a retina specialist."
      }
    ]
  },
  {
    id: "glaucoma",
    title: "Glaucoma",
    category: "Glaucoma",
    ageGroup: "Adult / Senior (40+ years)",
    urgency: "High Priority / Early Screening",
    tagline: "Progressive optic nerve damage often linked with elevated intraocular pressure.",
    shortDesc: "Often called the 'silent thief of sight', glaucoma damages the optic nerve gradually, typically starting with loss of peripheral vision without early pain.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    symptoms: [
      "Gradual loss of peripheral (side) vision",
      "Tunnel vision in advanced stages",
      "Severe eye pain, headache, & halo around lights (in acute angle-closure)"
    ],
    causes: [
      "Elevated intraocular pressure (IOP)",
      "Family history of glaucoma",
      "Thin central corneal thickness",
      "High myopia or vascular risk factors"
    ],
    diagnosticProcess: [
      "Non-Contact & Applanation Tonometry (IOP check)",
      "Visual Field Perimetry for peripheral vision testing",
      "OCT Optic Nerve Head analysis & Pachymetry"
    ],
    treatmentOverview: "Focuses on lowering eye pressure to preserve remaining vision using prescription eye drops, laser trabeculoplasty, or micro-invasive glaucoma surgery (MIGS).",
    faqs: [
      {
        question: "Can normal eye pressure rule out glaucoma?",
        answer: "No. Normal-tension glaucoma can occur even when measured eye pressure falls within the statistically normal range."
      }
    ]
  },
  {
    id: "dry-eye-syndrome",
    title: "Dry Eye Disease",
    category: "Cornea",
    ageGroup: "All Ages",
    urgency: "Routine / Comfort Care",
    tagline: "Chronic ocular surface instability due to inadequate tear quantity or quality.",
    shortDesc: "Dry eye occurs when tears are insufficient or evaporate too quickly, causing gritty discomfort, redness, and burning sensations.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1000&q=80",
    symptoms: [
      "Stinging, burning, or scratchy sensation in eyes",
      "Stringy mucus in or around eyes",
      "Sensitivity to light and wind",
      "Watery eyes (reflex tearing response)",
      "Eye fatigue after prolonged screen time"
    ],
    causes: [
      "Meibomian gland dysfunction (MGD)",
      "Excessive digital screen usage",
      "Air conditioning and low humidity",
      "Hormonal changes or autoimmune conditions"
    ],
    diagnosticProcess: [
      "Tear Film Break-Up Time (TBUT) test",
      "Schirmer tear quantity evaluation",
      "Meibography & ocular surface staining"
    ],
    treatmentOverview: "Managed with preservative-free artificial tears, warm compress therapy, meibomian gland expression, punctal plugs, and environmental modifications.",
    faqs: [
      {
        question: "Why do my eyes water if they are dry?",
        answer: "Dryness causes irritation, which triggers a emergency flood of low-quality reflex tears that do not lubricate properly."
      }
    ]
  },
  {
    id: "refractive-errors",
    title: "Refractive Errors (Myopia, Hyperopia, Astigmatism)",
    category: "Refractive / LASIK",
    ageGroup: "Children / Adults",
    urgency: "Routine Assessment",
    tagline: "Optical focus imbalances causing blurred distance or near vision.",
    shortDesc: "Refractive errors occur when the shape of the cornea or eye prevents light from focusing directly on the retina, requiring glasses, contact lenses, or laser correction.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    symptoms: [
      "Blurred vision at distance (Myopia / Nearsightedness)",
      "Blurred vision up close (Hyperopia / Farsightedness)",
      "Distorted or doubled text (Astigmatism)",
      "Eyestrain and frequent headaches after reading"
    ],
    causes: [
      "Elongated or shortened eyeball length",
      "Irregular corneal curvature",
      "Age-related decrease in lens flexibility (Presbyopia)"
    ],
    diagnosticProcess: [
      "Automated Refraction & Subjective Verification",
      "Corneal Topography Mapping",
      "Cycloplegic Refraction (for young patients)"
    ],
    treatmentOverview: "Corrected with spectacles, contact lenses, or refractive surgical procedures like LASIK, Contoura Vision, or Phakic IOLs.",
    faqs: [
      {
        question: "Who is eligible for LASIK consultation?",
        answer: "Adults aged 18+ with stable eyeglass prescriptions for at least one year and healthy cornea thickness may undergo suitability screening."
      }
    ]
  },
  {
    id: "squint-and-lazy-eye",
    title: "Squint (Strabismus) & Lazy Eye (Amblyopia)",
    category: "Paediatric",
    ageGroup: "Children / Young Adults",
    urgency: "Early Paediatric Checkup",
    tagline: "Eye misalignment and reduced visual acuity during early child development.",
    shortDesc: "Squint occurs when eyes point in different directions. If untreated, the brain may favor one eye, leading to Amblyopia (lazy eye). Early intervention is crucial.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1000&q=80",
    symptoms: [
      "Eyes appearing misaligned or turning inward/outward",
      "Squinting or closing one eye in bright sunlight",
      "Tilting head to focus on objects",
      "Poor depth perception"
    ],
    causes: [
      "Uncorrected refractive error",
      "Imbalance of extraocular muscles",
      "Nervous system conditions affecting eye movement"
    ],
    diagnosticProcess: [
      "Cover-Uncover test & Hirschberg light reflex",
      "Paediatric Cycloplegic Refraction",
      "Orthoptic Binocular Vision Evaluation"
    ],
    treatmentOverview: "Treated through prescription glasses, occlusion patching therapy, orthoptic eye exercises, or paediatric strabismus surgery.",
    faqs: [
      {
        question: "Can a squint be corrected in older children or adults?",
        answer: "Yes, visual alignment and cosmetic appearance can be improved at almost any age through specialized strabismus evaluation."
      }
    ]
  },
  {
    id: "eye-injury-trauma",
    title: "Eye Trauma & Ocular Emergency",
    category: "Emergency Care",
    ageGroup: "All Ages",
    urgency: "Immediate Emergency Attention",
    tagline: "Urgent physical, chemical, or foreign body injuries to the eye.",
    shortDesc: "Physical impact, foreign body insertion, chemical splashes, or sudden severe pain require urgent professional eye-care evaluation to prevent vision impairment.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
    symptoms: [
      "Sudden severe eye pain or redness",
      "Chemical exposure (alkali or acid)",
      "Object embedded or scratching the corneal surface",
      "Sudden partial or complete loss of vision",
      "Bleeding or visible fluid loss from the eye"
    ],
    causes: [
      "Workplace accidents, chemical splashes, or projectile splinters",
      "Sports-related impact injuries",
      "Accidental contact with household cleaning chemicals"
    ],
    diagnosticProcess: [
      "Immediate ocular lavage (for chemical injuries)",
      "Fluorescein corneal staining under cobalt blue light",
      "Slit-lamp examination & orbital imaging"
    ],
    treatmentOverview: "Requires immediate medical triage, sterile flushing, antibiotic protection, foreign body removal, or emergency surgical repair.",
    faqs: [
      {
        question: "What should I do immediately if chemical enters my eye?",
        answer: "Flush the eye immediately with clean water or sterile saline for at least 15 minutes without rubbing, then seek urgent eye-care evaluation."
      }
    ]
  }
];
