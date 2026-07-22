/** Extended content from BMD website content document — main BMD service page only */

export const BMD_INDUSTRIAL_PARTNERS = ["Dyqure", "QureMed", "ABMI", "VD"];

export const BMD_ACADEMIC_PARTNERS = ["University of Jordan", "Riphah International University"];

export const BMD_RESEARCH_AREAS = [
  "Bioresorbable and Polymeric Biomaterials",
  "Drug Delivery and Drug-Eluting Systems",
  "Electrospun Nanofibers and Tissue Engineering Scaffolds",
  "Biomedical and Implantable Device Coatings",
  "Tissue Engineering and Wound Healing Technologies",
  "Advanced Biomaterial Design and Characterization",
  "Smart and Sensor-Integrated Medical Devices",
  "Cardiovascular and Catheter-Based Biomaterials",
];

export const BMD_EXPERTISE = [
  "Biomaterials",
  "Auxetic Structures",
  "Drug Delivery Systems",
  "Cardiovascular Devices",
  "Tissue Engineering",
  "Polymeric Medical Devices",
  "Smart Wound Healing Systems",
  "Biomedical Coatings",
  "Catheter & Stent Technologies",
];

export const BMD_PATENTS = [
  {
    title: "Anisotropic Stent Device for the Treatment of Coronary Heart Disease",
    inventors: "Murtaza Najabat Ali, Faisal Amin",
    patentNo: "26/2014",
  },
  {
    title: "Counter-intuitive Auxetic Intramedullary Bone Stent and Method for Treating Long Bone Fracture",
    inventors: "Murtaza Najabat Ali, Zainab Munib",
    patentNo: "77/2014",
  },
];

export const BMD_PRODUCTS = {
  skincare: [
    "Hyaluronic Acid Serum",
    "Retinol Serum",
    "Glycolic Acid Serum",
    "Moisturising Sunscreen (All Skin Types)",
    "Vitamin C Serum",
  ],
  haircare: ["Hair Growth Serum (Minoxidil-Based)"],
  innovative: [
    "Microspheres",
    "Bioresorbable Vascular Scaffold",
    "3rd Gen DES Coating",
    "Hydrophilic Coatings",
    "Anti-inflammatory Coatings",
    "Surface Modified Coatings",
    "Drug Eluting Coatings",
    "Topical Pain Relief Emulgel",
    "Topical Antifungal Cream",
    "10% Lidocaine Topical Spray",
  ],
};

export const BMD_EQUIPMENT = [
  "HPLC",
  "Refrigerated Centrifuge",
  "Bath Shaker",
  "Leica Microscope (up to 55×)",
  "AmScope Microscope (up to 90×)",
  "Analytical Balance (up to 0.01 mg)",
  "UV Spectrophotometer",
  "Rotary Evaporator",
];

export type BmdPublication = {
  citation: string;
  url?: string;
};

export const BMD_PUBLICATIONS: BmdPublication[] = [
  {
    citation:
      "Umer, M., Ali, M. N., Mubashar, A., & Mir, M. (2019). Computational modeling of balloon-expandable stent deployment in coronary artery using the finite element method. Research Reports in Clinical Cardiology, 10, 43–56.",
    url: "https://doi.org/10.2147/RRCC.S173086",
  },
  {
    citation:
      "Bukhari F, Ansari U, Najabat Ali M, et al. A Biaxial Strain–Based Expansion Mechanism for Auxetic Stent Deployment. Journal of Applied Biomaterials & Functional Materials. 2017;15(3):196-205.",
    url: "https://doi.org/10.5301/jabfm.5000326",
  },
  {
    citation:
      "Munib, Zainab & Ansari, Umar & Ali, Murtaza Najabat & Rana, Nosheen. (2014). A paradigm shift of the conventional intramedullary devices to new biological osteosynthetic devices: Bone stents. International Journal of Biomedical and Advance Research. 5. 135.",
    url: "https://doi.org/10.7439/ijbar.v5i3.596",
  },
  {
    citation:
      "Gul R, Mir M, Ali MN. An Appraisal of pH triggered Bacitracin drug release, through composite hydrogel systems. Journal of Biomaterials Applications. 2023;37(10):1699-1715.",
    url: "https://doi.org/10.1177/08853282231160212",
  },
  {
    citation:
      "Sakina, R., Ali, M. (2014). An Appraisal of the Efficacy and Effectiveness of Nanoscaffolds Developed by Different Techniques for Bone Tissue Engineering Applications: Electrospinning A Paradigm Shift. Adv. Polym. Technol., 33, 21429.",
    url: "https://doi.org/10.1002/adv.21429",
  },
  {
    citation:
      "Ali, M.N., Rehman, I.U. An Auxetic structure configured as oesophageal stent with potential to be used for palliative treatment of oesophageal cancer; development and in vitro mechanical analysis. J Mater Sci: Mater Med 22, 2573–2581 (2011).",
    url: "https://doi.org/10.1007/s10856-011-4436-y",
  },
  {
    citation:
      "Amin, Faisal & Ali, Murtaza Najabat & Asim Minhas, Muhammad. (2013). An Evolutionary Appraisal of the Efficacy of Coronary Artery Stents relevant to the Treatment of Coronary Heart Diseases. International Journal of Biomedical and Advance Research. 4. 764.",
    url: "https://doi.org/10.7439/ijbar.v4i11.560",
  },
  {
    citation:
      "Qureshi, Zunaira, Ali, Murtaza Najabat, Khalid, Minahil, An Insight into Potential Pharmacotherapeutic Agents for Painful Diabetic Neuropathy, Journal of Diabetes Research, 2022, 9989272.",
    url: "https://doi.org/10.1155/2022/9989272",
  },
  {
    citation:
      'Mir M, Ali MN, Ansari U, Smith PJ, Zahoor A, Qayyum F, Abbas S (2019). Aqua-gel pH sensor: intelligent engineering and evaluation of pH sensor based on multi-factorial testing regimes. Sensor Review, Vol. 39 No. 2 pp. 178–189.',
    url: "https://doi.org/10.1108/SR-06-2017-0104",
  },
  {
    citation:
      "Amin F, Ali MN, Ansari U, Mir M, Minhas MA, Shahid W. Auxetic Coronary Stent Endoprosthesis: Fabrication and Structural Analysis. Journal of Applied Biomaterials & Functional Materials. 2015;13(2):127-135.",
    url: "https://doi.org/10.5301/jabfm.5000213",
  },
  {
    citation:
      "Ali, M.N., Busfield, J.J.C. & Rehman, I.U. Auxetic oesophageal stents: structure and mechanical properties. J Mater Sci: Mater Med 25, 527–553 (2014).",
    url: "https://doi.org/10.1007/s10856-013-5067-2",
  },
  {
    citation:
      "Mehmood S, Ali MN, Ansari U, Mir M, Khan MA. Auxetic polymeric bone plate as internal fixator for long bone fractures: Design, fabrication and structural analysis. Technology and Health Care. 2015;23(6):819-833.",
    url: "https://doi.org/10.3233/THC-151021",
  },
  {
    citation:
      "Munib, Z., Ali, M. N., Ansari, U., & Mir, M. (2015). Auxetic Polymeric Bone Stent for Tubular Fractures: Design, Fabrication and Structural Analysis. Polymer-Plastics Technology and Engineering, 54(16), 1667–1678.",
    url: "https://doi.org/10.1080/03602559.2015.1021481",
  },
  {
    citation:
      "Ali, Murtaza Najabat & Rehman, Ihtesham. (2014). Auxetic polyurethane stents and stent-grafts for the palliative treatment of squamous cell carcinomas of the proximal and mid oesophagus: A novel fabrication route. Journal of Manufacturing Systems. 37.",
    url: "https://doi.org/10.1016/j.jmsy.2014.07.009",
  },
  {
    citation:
      "Hassan, Sadia et al. Bioinspired chitosan based functionalization of biomedical implant surfaces for enhanced hemocompatibility, antioxidation and anticoagulation potential: an in silico and in vitro study. RSC advances vol. 14,29 20691-20713. 2024.",
    url: "https://doi.org/10.1039/d4ra00796d",
  },
  {
    citation:
      "Azam N, Najabat Ali M and Javaid Khan T (2021) Carbon Quantum Dots for Biomedical Applications: Review and Analysis. Front. Mater. 8:700403.",
    url: "https://doi.org/10.3389/fmats.2021.700403",
  },
  {
    citation:
      "Zahra, F., Qureshi, Z., Ali, M.N. (2024). Carbon Quantum Dots, Its Synthesis and Evaluation of Its Cytotoxicity. In: Garg, S., Chandra, A., Sagadevan, S. (eds) Emerging Sustainable Nanomaterials for Biomedical Applications. Springer, Cham.",
    url: "https://doi.org/10.1007/978-3-031-63961-6_14",
  },
  {
    citation:
      "Kayani, A. M., Rizvi, S. N. H., Niazi, K. A., Ali, M. N., Aslam, M. M., Mir, M. and Ali, H. (2021) CLINICAL EVALUATION OF THE INDIGENOUSLY MANUFACTURED REJUVENATE® BARE METAL STENT SYSTEM IN PAKISTANI PATIENTS WITH CORONARY ARTERY DISEASE. Pakistan Heart Journal, 54(3), pp. 261–267.",
    url: "https://doi.org/10.47144/phj.v54i3.2169",
  },
  {
    citation:
      "Ali, Murtaza Najabat & Zahoor, Amber & Smith, Patrick. (2018). Comparison of conductometric behavior of two hydrogel based sensing polymeric composites in the physiological pH range. Biomedical Physics & Engineering Express. 4.",
    url: "https://doi.org/10.1088/2057-1976/aaceb3",
  },
  {
    citation:
      "Mukhtiar, Natasha, Murtaza Najabat Ali, and Hafsa Inam. 2021. DESIGN AND DEVELOPMENT OF IMPURITIES FREE PYROLYTIC COATED MECHANICAL BI-LEAFLET HEART VALVE PROTOTYPE. Pakistan Heart Journal 54 (3):277-84.",
    url: "https://doi.org/10.47144/phj.v54i3.2114",
  },
  {
    citation:
      "Hassan, S., Ali, M.N., Mir, M. et al. Development and evaluation of drug delivery patch for topical wound healing application. SN Appl. Sci. 3, 825 (2021).",
    url: "https://doi.org/10.1007/s42452-021-04809-9",
  },
  {
    citation:
      "Hassan, Sadia & Javed, Tooba & Ali, Murtaza & Bilal, Namra. (2022). Development of plant based bioactive, anticoagulant and antioxidant surface coatings for medical implants. Materials Today Communications. 33. 104516.",
    url: "https://doi.org/10.1016/j.mtcomm.2022.104516",
  },
  {
    citation:
      "Inam, H., Ali, M. N., Jameel, I. R., Awaiz, D., & Qureshi, Z. (2024). Development of Robust PEBAX-Based Angiographic Catheter: Design and In Vitro Study. Materials, 17(17), 4248.",
    url: "https://doi.org/10.3390/ma17174248",
  },
  {
    citation:
      "Qureshi, Zunaira & Ali, Murtaza Najabat. (2020). Diabetic Neuropathy Pain Management: A Global Challenge. Current diabetes reviews. 16.",
    url: "https://doi.org/10.2174/1573399816666201103142521",
  },
  {
    citation:
      'M. Mir, U. Ansari, M. N. Ali, M. H. U. Iftikhar and F. Qayyum, Electromechanically Actuated Multifunctional Wireless Auxetic Device for Wound Management, IEEE Journal of Translational Engineering in Health and Medicine, vol. 5, 2017.',
    url: "https://doi.org/10.1109/JTEHM.2017.2723465",
  },
  {
    citation:
      "Amin, Faisal & Ali, Murtaza Najabat & Ansari, Umar. (2014). Emerging Approach for Treating Complications Associated with Pertrochanteric Fractures. Minerva Ortopedica e Traumatologica.",
  },
  {
    citation:
      "Hassan, Sadia & Nadeem, Aroosa & Ali, Muhammad & Ali, Murtaza Najabat & Niazi, Muhammad & Mahmood, Azhar. (2022). Graphite coatings for biomedical implants: A focus on anti-thrombosis and corrosion resistance properties. Materials Chemistry and Physics. 290. 126562.",
    url: "https://doi.org/10.1016/j.matchemphys.2022.126562",
  },
  {
    citation:
      "Riaz, Zainab, Ali, Murtaza Najabat, Qureshi, Zunaira, Mohsin, Muhammad, In Vitro Investigation and Evaluation of Novel Drug Based on Polyherbal Extract against Type 2 Diabetes, Journal of Diabetes Research, 2020, 7357482.",
    url: "https://doi.org/10.1155/2020/7357482",
  },
  {
    citation:
      "Mehmood, Seemab & Ansari, Umar & Ali, Murtaza Najabat & Rana, Nosheen. (2014). Internal fixation: An evolutionary appraisal of methods used for long bone fractures. International Journal of Biomedical and Advance Research. 5. 142.",
    url: "https://doi.org/10.7439/ijbar.v5i3.627",
  },
  {
    citation:
      "Mir M, Ansari U, Najabat Ali M. Macro-Scale Model Study of a Tunable Drug Dispensation Mechanism for Controlled Drug Delivery in Potential Wound-Healing Applications. Journal of Applied Biomaterials & Functional Materials. 2017;15(1):63-69.",
    url: "https://doi.org/10.5301/jabfm.5000280",
  },
  {
    citation:
      "Ghafoor, Bakhtawar, Ali, Murtaza Najabat, Ansari, Umar, Bhatti, Muhammad Faraz, Mir, Mariam, Akhtar, Hafsah, Darakhshan, Fatima, New Biofunctional Loading of Natural Antimicrobial Agent in Biodegradable Polymeric Films for Biomedical Applications, International Journal of Biomaterials, 2016, 6964938.",
    url: "https://doi.org/10.1155/2016/6964938",
  },
  {
    citation:
      "Mir, M., Ali, M. N., Barakullah, A., Gulzar, A., Arshad, M., Fatima, S., & Asad, M. (2018). Synthetic polymeric biomaterials for wound healing: a review. Progress in Biomaterials, 7(1).",
    url: "https://doi.org/10.1007/s40846-018-0111-2",
  },
  {
    citation:
      "M. N. Ali and F. Amin, Smart stent: A new concept for the treatment of central airway obstructions, NUST Journal of Engineering Sciences, vol. 5, no. 1, pp. 27–34, Dec. 2012.",
    url: "https://doi.org/10.24949/njes.v5i1.51",
  },
  {
    citation:
      'Khan MA, Ansari U, Ali MN (2015). Real-time wound management through integrated pH sensors: a review. Sensor Review, Vol. 35 No. 2 pp. 183–189.',
    url: "https://doi.org/10.1108/SR-08-2014-689",
  },
  {
    citation:
      "Mir, Mariam, Ali, Murtaza Najabat, Sami, Javaria, Ansari, Umar, Review of Mechanics and Applications of Auxetic Structures, Advances in Materials Science and Engineering, 2014, 753496.",
    url: "https://doi.org/10.1155/2014/753496",
  },
  {
    citation:
      "Ghafoor, Bakhtawar & Aleem, Amna & Ali, Murtaza Najabat. (2018). Review of the fabrication techniques and applications of polymeric electrospun nanofibers for drug delivery systems. Journal of Drug Delivery Science and Technology. 48.",
    url: "https://doi.org/10.1016/j.jddst.2018.09.005",
  },
  {
    citation:
      "Mir, M., Ali, M.N., Ansari, U. et al. Structure and motility of the esophagus from a mechanical perspective. Esophagus 13, 8–16 (2016).",
    url: "https://doi.org/10.1007/s10388-015-0497-1",
  },
  {
    citation:
      "Ghafoor, Bakhtawar, Ali, Murtaza Najabat, Riaz, Zainab, Synthesis and Appraisal of Natural Drug-Polymer-Based Matrices Relevant to the Application of Drug-Eluting Coronary Stent Coatings, Cardiology Research and Practice, 2020, 4073091.",
    url: "https://doi.org/10.1155/2020/4073091",
  },
  {
    citation:
      "Ghafoor B, Najabat Ali M. Synthesis and in vitro evaluation of natural drug loaded polymeric films for cardiovascular applications. Journal of Bioactive and Compatible Polymers. 2022;37(2):98-114.",
    url: "https://doi.org/10.1177/08839115221085735",
  },
  {
    citation:
      "Ali, Murtaza Najabat & Ansari, U & Sami, J & Qayyum, Faisal. (2016). To Develop a Biocompatible and Biodegradable Polymer-Metal Composite with Good Mechanical and Drug Release Properties. Journal of Material Sciences & Engineering. 5.",
    url: "https://doi.org/10.4172/2169-0022.1000274",
  },
];
