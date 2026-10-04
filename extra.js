document.documentElement.classList.add('js');
const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;

/* ===== FRENCH TRANSLATIONS (English text -> French text). Edit the French here. ===== */
const FR = {
"Home":"Accueil","About":"À propos","Projects":"Projets","Certificates":"Certificats","Education":"Formation","Experience":"Expérience","Skills":"Compétences","CV":"CV","Contact me ↗":"Me contacter ↗",
"FINAL-YEAR ENGINEERING STUDENT AT ENSA TÉTOUAN":"ÉTUDIANTE EN DERNIÈRE ANNÉE D'INGÉNIERIE À L'ENSA TÉTOUAN",
"Hi, I'm":"Salut, je suis","I teach data to think, predict and decide.":"J'apprends aux données à penser, prédire et décider.",
"Big Data and AI engineering student, turning raw data into models and dashboards that lead to better decisions.":"Étudiante ingénieure en Big Data et IA, je transforme des données brutes en modèles et tableaux de bord qui mènent à de meilleures décisions.",
"View my projects ↗":"Voir mes projets ↗","Download my CV ⤓":"Télécharger mon CV ⤓","Turning raw data into intelligent decisions.":"Transformer les données brutes en décisions intelligentes.",
"Years of study":"Années d'études","I'm First Last, a final-year student in the Big Data and Artificial Intelligence engineering program at ENSA Tétouan. After a baccalaureate in Physical Sciences and two years of preparatory classes, I chose data for its power to connect mathematics, computer science and real-world impact. I enjoy end-to-end projects, from the first raw file to a deployed result, and I'm looking for a final-year internship or a first role in data science, data engineering or AI.":"Je m'appelle First Last, étudiante en dernière année du cycle ingénieur Big Data et Intelligence Artificielle à l'ENSA Tétouan. Après un baccalauréat en Sciences Physiques et deux années de classes préparatoires, j'ai choisi la donnée pour sa capacité à relier les mathématiques, l'informatique et l'impact concret. J'aime les projets de bout en bout, du premier fichier brut à un résultat déployé, et je cherche un stage de fin d'études ou un premier poste en data science, data engineering ou IA.","A curious engineer,":"Une ingénieure curieuse,","driven by data.":"passionnée par la donnée.","The full data lifecycle, from raw files to decisions.":"Tout le cycle de vie de la donnée, des fichiers bruts aux décisions.","Final-year Big Data and AI engineering student at ENSA Tétouan. I chose data for its power to connect mathematics, computer science and real-world impact.":"Étudiante ingénieure en dernière année Big Data et IA à l'ENSA Tétouan. J'ai choisi la donnée pour sa capacité à relier les mathématiques, l'informatique et l'impact concret.","I enjoy end-to-end projects, from raw data to a deployed result, and I'm looking for a final-year internship or a first role in data science, data engineering or AI.":"J'aime les projets de bout en bout, des données brutes jusqu'à un résultat déployé, et je cherche un stage de fin d'études ou un premier poste en data science, data engineering ou IA.","Focus":"Spécialité","Looking for":"Recherche","Big Data & AI":"Big Data & IA","Final-year internship":"Stage de fin d'études","Collect":"Collecter","Clean":"Nettoyer","Model":"Modéliser","Visualize":"Visualiser","Deploy":"Déployer","Data tells the story, AI shapes the future.":"Les données racontent l'histoire, l'IA façonne l'avenir.","ARTIFICIAL INTELLIGENCE":"INTELLIGENCE ARTIFICIELLE",
"ABOUT ME":"À PROPOS DE MOI","A curious engineer, driven by data":"Une ingénieure curieuse, passionnée par la donnée",
"I'm First Last, a final-year student in the Big Data and Artificial Intelligence engineering program at ENSA Tétouan. After a baccalaureate in Physical Sciences and two years of preparatory classes, I chose data for its power to connect mathematics, computer science and real-world impact.":"Je m'appelle First Last, étudiante en dernière année du cycle ingénieur Big Data et Intelligence Artificielle à l'ENSA Tétouan. Après un baccalauréat en Sciences Physiques et deux années de classes préparatoires, j'ai choisi la donnée pour sa capacité à relier les mathématiques, l'informatique et l'impact concret.",
"My training covers the full data lifecycle: collecting and storing large datasets, cleaning and transforming them with Python, SQL and Spark, building machine learning and deep learning models, and presenting the results in dashboards with Power BI and Tableau. I like understanding why a model works, not only that it works.":"Ma formation couvre tout le cycle de vie de la donnée : collecter et stocker de grands jeux de données, les nettoyer et les transformer avec Python, SQL et Spark, construire des modèles de machine learning et de deep learning, puis présenter les résultats dans des tableaux de bord avec Power BI et Tableau. J'aime comprendre pourquoi un modèle fonctionne, pas seulement qu'il fonctionne.",
"I enjoy end-to-end projects, from the first raw file to a deployed result that someone can actually use. Along the way I've learned to work independently, to document my choices clearly, and to explain technical results to people who don't work with data every day.":"J'aime les projets de bout en bout, du premier fichier brut jusqu'à un résultat déployé que quelqu'un peut vraiment utiliser. En chemin, j'ai appris à travailler de façon autonome, à documenter clairement mes choix et à expliquer des résultats techniques à des personnes qui ne travaillent pas avec les données au quotidien.",
"I'm now looking for a final-year internship or a first role in data science, data engineering or AI, where I can keep learning while contributing to real projects. Outside of coursework, I stay curious by following new research, taking online courses and building side projects.":"Je cherche maintenant un stage de fin d'études ou un premier poste en data science, data engineering ou IA, où je pourrai continuer à apprendre tout en contribuant à de vrais projets. En dehors des cours, je reste curieuse en suivant les nouvelles recherches, en suivant des cours en ligne et en réalisant des projets personnels.",
"PROJECTS":"PROJETS","What I've":"Ce que j'ai","built.":"construit.",
"Selected work across data engineering, analytics, machine learning and AI applications.":"Une sélection de travaux en ingénierie des données, analyse, machine learning et applications d'IA.",
"01 / PROJECT":"01 / PROJET","02 / PROJECT":"02 / PROJET","03 / PROJECT":"03 / PROJET","04 / PROJECT":"04 / PROJET","05 / PROJECT":"05 / PROJET",
"MACHINE LEARNING · PREDICTION":"MACHINE LEARNING · PRÉDICTION","DEEP LEARNING · COMPUTER VISION":"DEEP LEARNING · VISION PAR ORDINATEUR","ANALYTICS · BUSINESS INTELLIGENCE":"ANALYSE · BUSINESS INTELLIGENCE","DATA ENGINEERING · STREAMING":"INGÉNIERIE DES DONNÉES · STREAMING","GENERATIVE AI · NLP":"IA GÉNÉRATIVE · NLP",
"Project name 1":"Nom du projet 1","Project name 2":"Nom du projet 2","Project name 3":"Nom du projet 3","Project name 4":"Nom du projet 4","Project name 5":"Nom du projet 5",
"Describe in two sentences the problem, the method you used and the result you got.":"Décrivez en deux phrases le problème, la méthode utilisée et le résultat obtenu.",
"View details ↗":"Voir les détails ↗",
"CERTIFICATES":"CERTIFICATS","Credentials I've":"Les certifications que j'ai","earned.":"obtenues.","Professional certifications in machine learning, big data and data visualization.":"Des certifications professionnelles en machine learning, big data et visualisation de données.","Certificate image":"Image du certificat","DATA VISUALIZATION":"VISUALISATION DE DONNÉES","Issuer":"Organisme",
"Certificate name 1":"Nom du certificat 1","Certificate name 2":"Nom du certificat 2","Certificate name 4":"Nom du certificat 4","Certificate name 5":"Nom du certificat 5",
"One sentence describing the skills covered by this certificate.":"Une phrase décrivant les compétences couvertes par ce certificat.",
"Data preparation, modeling, analysis and dashboarding for decision-oriented reporting.":"Préparation des données, modélisation, analyse et tableaux de bord pour un reporting orienté décision.",
"View credential ↗":"Voir le certificat ↗",
"EDUCATION":"FORMATION","Academic":"Parcours","background.":"académique.","From scientific foundations to a specialized engineering degree in Big Data and AI.":"Des bases scientifiques jusqu'à un diplôme d'ingénieur spécialisé en Big Data et IA.","Current · 5th year":"En cours · 5e année",
"Engineering Degree in Big Data & Artificial Intelligence":"Diplôme d'ingénieur en Big Data et Intelligence Artificielle","In progress":"En cours",
"Final year of the engineering program: machine learning, deep learning, large-scale data processing and the final-year project.":"Dernière année du cycle ingénieur : machine learning, deep learning, traitement de données à grande échelle et projet de fin d'études.",
"Data Visualization":"Visualisation de données","2 years":"2 ans","Preparatory Classes":"Classes préparatoires","Your institution":"Votre établissement",
"Intensive scientific foundation that built my rigor and problem-solving skills.":"Une solide base scientifique qui a construit ma rigueur et mon sens de la résolution de problèmes.",
"Mathematics":"Mathématiques","Physics":"Physique","Computer Science":"Informatique","Baccalaureate":"Baccalauréat","Baccalaureate in Physical Sciences":"Baccalauréat en Sciences Physiques","Very Good honors":"Mention Très Bien","Your high school":"Votre lycée",
"Graduated with Very Good honors (Mention Très Bien), which opened the way to engineering studies.":"Diplômée avec la mention Très Bien, ce qui m'a ouvert la voie vers les études d'ingénieur.",
"EXPERIENCE":"EXPÉRIENCE","Professional":"Expérience","experience.":"professionnelle.","Hands-on work applying data and AI skills to real-world projects.":"Une pratique concrète des compétences data et IA sur des projets réels.","Remote · 2 months":"À distance · 2 mois","Month 20XX – Month 20XX":"Mois 20XX – Mois 20XX","in · Company on LinkedIn ↗":"in · Entreprise sur LinkedIn ↗",
"Project":"Projet","Describe the project idea here: the company's need, what you designed and developed, and the result you delivered.":"Décrivez ici l'idée du projet : le besoin de l'entreprise, ce que vous avez conçu et développé, et le résultat livré.",
"Key contributions":"Contributions clés",
"First contribution, written as an action with a measurable result.":"Première contribution, formulée comme une action avec un résultat mesurable.",
"Second contribution, written as an action with a measurable result.":"Deuxième contribution, formulée comme une action avec un résultat mesurable.",
"Third contribution, written as an action with a measurable result.":"Troisième contribution, formulée comme une action avec un résultat mesurable.",
"AI":"IA","View GitHub repository ↗":"Voir le dépôt GitHub ↗",
"SKILLS":"COMPÉTENCES","Tools and":"Outils et","technologies.":"technologies.","The languages, frameworks and tools I use across the full data lifecycle.":"Les langages, frameworks et outils que j'utilise sur tout le cycle de vie de la donnée.","Languages":"Langages","Machine Learning & Deep Learning":"Machine Learning & Deep Learning","Big Data & Engineering":"Big Data & ingénierie","BI & Visualization":"BI & visualisation","Cloud & Tools":"Cloud & outils",
/* extracurricular section */
"Extracurricular":"Parascolaire","EXTRACURRICULAR":"PARASCOLAIRE","Beyond the":"Au-delà de la","classroom.":"salle de classe.",
"Clubs, events and competitions where I learned teamwork, organization and the pleasure of building things together.":"Clubs, événements et compétitions où j'ai appris le travail d'équipe, l'organisation et le plaisir de construire ensemble.",
"Organizing committees":"Comités d'organisation","Competitions":"Compétitions","Add your photos here":"Ajoutez vos photos ici",
"ORGANIZING COMMITTEE · AI CLUB":"COMITÉ D'ORGANISATION · CLUB IA","ORGANIZING COMMITTEE · MECHATRONICS CLUB":"COMITÉ D'ORGANISATION · CLUB MÉCATRONIQUE","COMPETITION":"COMPÉTITION",
"Month 20XX":"Mois 20XX","Microsoft event":"Événement Microsoft","CNR event":"Événement CNR","Competition in Martil":"Compétition à Martil","Competition in Rabat":"Compétition à Rabat",
"AI Club":"Club IA","Mechatronics Club":"Club Mécatronique",
"Describe your role in the organizing committee: your tasks, your team and what the event achieved.":"Décrivez votre rôle dans le comité d'organisation : vos tâches, votre équipe et ce que l'événement a permis d'accomplir.",
"Describe the competition: the challenge, your team, your approach and the result.":"Décrivez la compétition : le défi, votre équipe, votre approche et le résultat.",
"Teamwork":"Travail d'équipe","Organization":"Organisation","Problem solving":"Résolution de problèmes",
"RESUME":"RÉSUMÉ","Download my":"Télécharger mon","CV.":"CV.","View ↗":"Voir ↗","Open in new tab ↗":"Ouvrir dans un nouvel onglet ↗","CV in English":"CV en anglais","CV in French":"CV en français","Download ⤓":"Télécharger ⤓",
"CONTACT":"CONTACT","Let's work together":"Travaillons ensemble","An internship, a project or a collaboration? Write to me, I reply quickly.":"Un stage, un projet ou une collaboration ? Écrivez-moi, je réponds rapidement.",
"© 2026 First Last · Big Data & AI Engineer · ENSA Tétouan":"© 2026 First Last · Ingénieure Big Data & IA · ENSA Tétouan",
"Overview":"Aperçu","The challenge":"Le défi","My approach":"Mon approche","Results":"Résultats","Tech stack":"Technologies","View code on GitHub ↗":"Voir le code sur GitHub ↗",
/* texts of the project details window */
"Write 2 or 3 sentences presenting the project: what it is, who it is for and why you built it.":"Écrivez 2 ou 3 phrases pour présenter le projet : ce que c'est, pour qui et pourquoi vous l'avez construit.",
"Explain the problem or the need: what was hard, what data you had, what constraints existed.":"Expliquez le problème ou le besoin : ce qui était difficile, les données disponibles, les contraintes.",
"Step 1: how you collected and prepared the data.":"Étape 1 : comment vous avez collecté et préparé les données.",
"Step 2: the models or tools you chose, and why.":"Étape 2 : les modèles ou outils choisis, et pourquoi.",
"Step 3: how you evaluated and improved the result.":"Étape 3 : comment vous avez évalué et amélioré le résultat.",
"Main result with a number, for example an accuracy or a time saved.":"Résultat principal avec un chiffre, par exemple une précision ou un temps gagné.",
"Second result or what you learned from this project.":"Deuxième résultat ou ce que ce projet vous a appris.",
"Write 2 or 3 sentences presenting the project.":"Écrivez 2 ou 3 phrases pour présenter le projet.","Explain the problem or the need.":"Expliquez le problème ou le besoin.",
"Step 1.":"Étape 1.","Step 2.":"Étape 2.","Step 3.":"Étape 3.","Main result.":"Résultat principal.","Second result.":"Deuxième résultat.",
/* ===== new projects ===== */
"MACHINE LEARNING · NLP · PHARMACOVIGILANCE":"MACHINE LEARNING · NLP · PHARMACOVIGILANCE",
"BioSentry: early detection of drug side effects":"BioSentry : détection précoce des effets secondaires de médicaments",
"Pharmacovigilance platform that collects 7 public medical sources, extracts side effects with BioBERT, then flags weak signals with clustering and anomaly detection.":"Plateforme de pharmacovigilance qui collecte 7 sources médicales publiques, extrait les effets secondaires avec BioBERT, puis repère les signaux faibles par clustering et détection d'anomalies.",
"MLOPS · CI/CD · DEPLOYMENT":"MLOPS · CI/CD · DÉPLOIEMENT",
"California Housing MLOps pipeline":"Pipeline MLOps California Housing",
"End-to-end MLOps chain on Azure ML: automated training with a hyperparameter sweep, conditional model registration, CI/CD with GitHub Actions and A/B deployment behind a REST endpoint.":"Chaîne MLOps de bout en bout sur Azure ML : entraînement automatisé avec recherche d'hyperparamètres, enregistrement conditionnel du modèle, CI/CD avec GitHub Actions et déploiement A/B derrière un endpoint REST.",
"Real-time weather streaming pipeline":"Pipeline de streaming météo en temps réel",
"Live weather data from two APIs streamed through Kafka, processed with Spark Structured Streaming and stored in InfluxDB for Grafana dashboards.":"Données météo en direct issues de deux API, transmises par Kafka, traitées avec Spark Structured Streaming et stockées dans InfluxDB pour des tableaux de bord Grafana.",
"DEEP LEARNING · COMPUTER VISION":"DEEP LEARNING · VISION PAR ORDINATEUR",
"SignSense AI: ASL sign language recognition":"SignSense AI : reconnaissance de la langue des signes ASL",
"Real-time web app that recognizes the ASL alphabet from the webcam: MediaPipe tracks the hand, a CNN classifies it and the interface builds text.":"Application web temps réel qui reconnaît l'alphabet ASL via la webcam : MediaPipe suit la main, un CNN la classifie et l'interface construit le texte.",
"COMPUTER VISION · GESTURE CONTROL":"VISION PAR ORDINATEUR · CONTRÔLE PAR GESTES",
"Hand-gesture car game":"Jeu de voiture contrôlé par les gestes",
"A 2D dodging game played with hand gestures: MediaPipe reads the webcam, a detector counts raised fingers and the car reacts in real time in Pygame.":"Un jeu d'esquive 2D joué avec les gestes de la main : MediaPipe lit la webcam, un détecteur compte les doigts levés et la voiture réagit en temps réel dans Pygame.",
"Anomaly detection":"Détection d'anomalies",
"BioSentry is a pharmacovigilance platform built by a team of four (Aya Chakour, Amal Afenich, Oumaima Enajjari, Khouloud El Hajji) at ENSA Tétouan for the Web Analysis module. It gathers data on drug side effects from public medical sources, tracks how often each effect is mentioned over time and raises an alert level when the trend looks abnormal. The goal is to help spot a signal worth investigating earlier, not to replace a health professional.":"BioSentry est une plateforme de pharmacovigilance réalisée par une équipe de quatre (Aya Chakour, Amal Afenich, Oumaima Enajjari, Khouloud El Hajji) à l'ENSA Tétouan pour le module Analyse de Web. Elle rassemble des données sur les effets secondaires des médicaments issues de sources médicales publiques, suit la fréquence de mention de chaque effet dans le temps et déclenche un niveau d'alerte lorsque l'évolution semble anormale. L'objectif est d'aider à repérer plus tôt un signal à investiguer, pas de remplacer un professionnel de santé.",
"Information on side effects is scattered across official drug sheets, scientific papers, clinical trials, adverse-event reports and patient forums, and reading it by hand is slow. Rare or late effects only appear once a drug is widely used, so the data had to be unified, cleaned and weighted by source reliability before any model could be applied.":"Les informations sur les effets secondaires sont dispersées entre fiches officielles, publications scientifiques, essais cliniques, rapports d'événements indésirables et forums de patients, et les lire à la main est lent. Les effets rares ou tardifs n'apparaissent qu'une fois le médicament largement utilisé : il fallait donc unifier, nettoyer et pondérer les données selon la fiabilité des sources avant d'appliquer un modèle.",
"Built a reference list of 513 medicines with the RxNorm API, then collected data from 7 sources (MedlinePlus, PubMed, ClinicalTrials.gov, openFDA, Drugs.com, WebMD, Reddit) using APIs and Selenium scrapers.":"Construction d'une liste de référence de 513 médicaments avec l'API RxNorm, puis collecte de données auprès de 7 sources (MedlinePlus, PubMed, ClinicalTrials.gov, openFDA, Drugs.com, WebMD, Reddit) via des API et des scrapers Selenium.",
"Extracted medical entities with BioBERT, scored the reliability of each source with the HITS algorithm on a Neo4j graph, then normalized terms and dates.":"Extraction des entités médicales avec BioBERT, calcul de la fiabilité de chaque source avec l'algorithme HITS sur un graphe Neo4j, puis normalisation des termes et des dates.",
"Aggregated mentions per drug, side effect and month in MongoDB Atlas, which became the input of the models.":"Agrégation des mentions par médicament, effet secondaire et mois dans MongoDB Atlas, devenue l'entrée des modèles.",
"Compared K-Means, agglomerative clustering and HDBSCAN (silhouette, Calinski-Harabasz, Davies-Bouldin) and detected anomalies with a rolling Z-score, Isolation Forest and Local Outlier Factor.":"Comparaison de K-Means, du clustering agglomératif et de HDBSCAN (silhouette, Calinski-Harabasz, Davies-Bouldin) et détection d'anomalies avec un Z-score glissant, Isolation Forest et Local Outlier Factor.",
"Combined the three detectors: the alert level (normal, moderate, high, critical) depends on how many algorithms flag the same drug, side effect and month.":"Combinaison des trois détecteurs : le niveau d'alerte (normal, modéré, élevé, critique) dépend du nombre d'algorithmes qui signalent le même médicament, effet secondaire et mois.",
"18,313 raw documents collected and 19,974 aggregated records covering 326 drugs and 2,212 distinct side effects.":"18 313 documents bruts collectés et 19 974 enregistrements agrégés couvrant 326 médicaments et 2 212 effets secondaires distincts.",
"1,002 records flagged out of 19,974: 885 moderate and 117 high alerts, and none reached the critical level, which kept the alerts selective.":"1 002 enregistrements signalés sur 19 974 : 885 alertes modérées et 117 élevées, aucune n'a atteint le niveau critique, ce qui garde les alertes sélectives.",
"Delivered a project report, a presentation and a demo video of the dashboard.":"Livraison d'un rapport de projet, d'une présentation et d'une vidéo de démonstration du tableau de bord.",
"Built during my internship at Smartovate (July–August 2026). An automated chain that takes a house-price regression model from training to production on Azure Machine Learning. The dataset is versioned as an immutable Data Asset, the model is trained and tracked with MLflow, and every new model is deployed automatically through GitHub Actions as a REST API.":"Réalisé pendant mon stage chez Smartovate (juillet–août 2026). Une chaîne automatisée qui mène un modèle de régression du prix des maisons de l'entraînement jusqu'à la production sur Azure Machine Learning. Le dataset est versionné comme Data Asset immuable, le modèle est entraîné et suivi avec MLflow, et chaque nouveau modèle est déployé automatiquement via GitHub Actions sous forme d'API REST.",
"Training a good model once is easy; making the path to production repeatable is harder. The pipeline had to decide by itself whether a model is good enough to be released, trigger the deployment without exposing any secret, and run two model versions side by side to compare them safely.":"Entraîner un bon modèle une fois est facile ; rendre le chemin vers la production reproductible l'est moins. Le pipeline devait décider seul si un modèle est assez bon pour être publié, déclencher le déploiement sans exposer de secret, et faire tourner deux versions du modèle côte à côte pour les comparer en sécurité.",
"Versioned the California Housing dataset (about 20,640 rows) as an Azure ML Data Asset and built a 4-step pipeline: data preparation, hyperparameter sweep, evaluation and registration.":"Versionnement du dataset California Housing (environ 20 640 lignes) comme Data Asset Azure ML et construction d'un pipeline en 4 étapes : préparation des données, recherche d'hyperparamètres, évaluation et enregistrement.",
"Trained a Random Forest regressor with a sweep over n_estimators (100 to 400) and max_depth (5 to 25), tracked with MLflow.":"Entraînement d'un Random Forest avec une recherche sur n_estimators (100 à 400) et max_depth (5 à 25), suivi avec MLflow.",
"Registered the model only if its R² reaches 0.7, then triggered GitHub Actions through repository_dispatch, with the token stored in Azure Key Vault.":"Enregistrement du modèle uniquement si son R² atteint 0,7, puis déclenchement de GitHub Actions via repository_dispatch, avec le token stocké dans Azure Key Vault.",
"Wrote the CI/CD workflow: flake8 and pytest, Docker image pushed to Azure Container Registry, then deployment of a champion and a challenger model on a Managed Online Endpoint.":"Écriture du workflow CI/CD : flake8 et pytest, image Docker poussée vers Azure Container Registry, puis déploiement d'un modèle champion et d'un challenger sur un Managed Online Endpoint.",
"Split the traffic 80/20 between champion and challenger for A/B testing and smoke-tested the endpoint.":"Répartition du trafic 80/20 entre champion et challenger pour l'A/B testing, et test de l'endpoint.",
"Reference run: R² = 0.8087 and RMSE ≈ 50,063 on the validation set.":"Exécution de référence : R² = 0,8087 et RMSE ≈ 50 063 sur le jeu de validation.",
"A live REST endpoint that returns HTTP 200 with a prediction, backed by unit tests on the data preparation and scoring code.":"Un endpoint REST en ligne qui renvoie HTTP 200 avec une prédiction, appuyé par des tests unitaires sur la préparation des données et le script de scoring.",
"An end-to-end data engineering project that collects live weather measurements from two independent providers, OpenWeather and WeatherAPI, and exposes them as time series in Grafana. It shows the full path of a streaming architecture, from the API call to the dashboard.":"Un projet de data engineering de bout en bout qui collecte des mesures météo en direct auprès de deux fournisseurs indépendants, OpenWeather et WeatherAPI, et les expose sous forme de séries temporelles dans Grafana. Il illustre tout le chemin d'une architecture de streaming, de l'appel d'API au tableau de bord.",
"Two providers can report different values for the same city at the same moment. The pipeline had to ingest both continuously, keep events reliable between components and store them in a form that makes comparing temperature and humidity over time easy.":"Deux fournisseurs peuvent donner des valeurs différentes pour la même ville au même moment. Le pipeline devait ingérer les deux en continu, garder les événements fiables entre les composants et les stocker sous une forme qui facilite la comparaison de la température et de l'humidité dans le temps.",
"Wrote a Python producer that calls both weather APIs every 30 seconds, handles HTTP errors, shuts down gracefully and publishes JSON events to an Apache Kafka topic.":"Écriture d'un producer Python qui appelle les deux API météo toutes les 30 secondes, gère les erreurs HTTP, s'arrête proprement et publie des événements JSON dans un topic Apache Kafka.",
"Built a Spark Structured Streaming consumer that reads the topic with an explicit schema (city, temperature and humidity from each provider, timestamp).":"Construction d'un consumer Spark Structured Streaming qui lit le topic avec un schéma explicite (ville, température et humidité de chaque fournisseur, horodatage).",
"Wrote each micro-batch to InfluxDB as time-series points tagged by city.":"Écriture de chaque micro-batch dans InfluxDB sous forme de points de séries temporelles étiquetés par ville.",
"Containerized Kafka, InfluxDB and Grafana with Docker Compose and kept every secret in environment variables.":"Conteneurisation de Kafka, InfluxDB et Grafana avec Docker Compose, et secrets conservés dans des variables d'environnement.",
"A working live pipeline whose data is ready for Grafana panels: temperature per provider, difference between providers, humidity comparison and historical trends.":"Un pipeline fonctionnel dont les données sont prêtes pour les panneaux Grafana : température par fournisseur, écart entre fournisseurs, comparaison de l'humidité et tendances historiques.",
"Planned next steps: multi-city collection, data-quality alerts when providers disagree and CI with GitHub Actions.":"Prochaines étapes prévues : collecte multi-villes, alertes qualité des données lorsque les fournisseurs divergent et CI avec GitHub Actions.",
"SignSense AI is an interactive full-stack application that recognizes American Sign Language alphabet gestures in real time and turns them into text. It is an academic group project and a prototype for static ASL letters, not a replacement for professional interpretation.":"SignSense AI est une application full-stack interactive qui reconnaît en temps réel les gestes de l'alphabet de la langue des signes américaine (ASL) et les transforme en texte. C'est un projet académique de groupe, un prototype pour les lettres ASL statiques, qui ne remplace pas l'interprétation professionnelle.",
"Recognizing hand signs from a webcam is sensitive to background and lighting, and the app has to answer fast enough to feel live. The project therefore classifies a normalized hand skeleton instead of the raw video frame.":"Reconnaître des signes de la main via une webcam est sensible à l'arrière-plan et à la lumière, et l'application doit répondre assez vite pour paraître en direct. Le projet classifie donc un squelette de main normalisé plutôt que l'image vidéo brute.",
"Detected the 21 hand landmarks in the browser with MediaPipe Hands and converted them into a normalized 64 × 64 skeleton image.":"Détection des 21 points de repère de la main dans le navigateur avec MediaPipe Hands, convertis en une image de squelette normalisée de 64 × 64.",
"Trained a CNN with TensorFlow/Keras (three convolution blocks, a dense layer and dropout) to classify the letters A to Z, documented in a training notebook.":"Entraînement d'un CNN avec TensorFlow/Keras (trois blocs de convolution, une couche dense et du dropout) pour classer les lettres de A à Z, documenté dans un notebook d'entraînement.",
"Served the model through a FastAPI service that returns the predicted letter, a confidence score and the top five classes.":"Exposition du modèle via un service FastAPI qui renvoie la lettre prédite, un score de confiance et les cinq classes les plus probables.",
"Built a React interface to compose sentences from the detected letters, with optional translation through OpenRouter and browser text-to-speech.":"Construction d'une interface React pour composer des phrases à partir des lettres détectées, avec traduction optionnelle via OpenRouter et synthèse vocale du navigateur.",
"A working real-time prototype: webcam in, letter, confidence and top-5 predictions out.":"Un prototype temps réel fonctionnel : la webcam en entrée, la lettre, la confiance et le top 5 des prédictions en sortie.",
"Letters can be assembled into sentences, translated into another language and read aloud.":"Les lettres peuvent être assemblées en phrases, traduites dans une autre langue et lues à voix haute.",
"A 2D dodging game with no keyboard or controller: the player steers a car with one hand in front of the webcam. It combines computer vision and game development in a small real-time application.":"Un jeu d'esquive 2D sans clavier ni manette : le joueur pilote une voiture avec une main devant la webcam. Il associe vision par ordinateur et développement de jeu dans une petite application temps réel.",
"Hand gestures have to be recognized reliably, frame after frame, and turned into game actions without noticeable delay while the game keeps running at 60 frames per second.":"Les gestes de la main doivent être reconnus de façon fiable, image après image, et transformés en actions de jeu sans délai perceptible, pendant que le jeu tourne à 60 images par seconde.",
"Captured the webcam with OpenCV and extracted the 21 hand landmarks with MediaPipe Hands.":"Capture de la webcam avec OpenCV et extraction des 21 points de repère de la main avec MediaPipe Hands.",
"Wrote a GestureDetector class that counts raised fingers by comparing each fingertip with its middle joint (the thumb is compared horizontally) and recognizes four gestures: one finger, five fingers, closed fist and no hand.":"Écriture d'une classe GestureDetector qui compte les doigts levés en comparant chaque bout de doigt à son articulation intermédiaire (le pouce est comparé horizontalement) et reconnaît quatre gestes : un doigt, cinq doigts, poing fermé et aucune main.",
"Mapped the gestures to actions: one finger moves up, an open hand moves forward, a fist moves down and no hand stops the car.":"Association des gestes aux actions : un doigt fait monter, une main ouverte fait avancer, un poing fait descendre et aucune main arrête la voiture.",
"Built the Pygame game (800 × 500 at 60 FPS) with random-speed obstacles, collision detection, a score and a new level every 15 seconds that speeds up the road and the obstacles.":"Construction du jeu Pygame (800 × 500 à 60 FPS) avec des obstacles à vitesse aléatoire, la détection de collisions, un score et un nouveau niveau toutes les 15 secondes qui accélère la route et les obstacles.",
"A playable game controlled only by hand gestures, with a camera preview showing the landmarks, the detected gesture and the action.":"Un jeu jouable uniquement avec les gestes de la main, avec un aperçu caméra affichant les points de repère, le geste détecté et l'action.",
"Includes a HUD (score, distance, time, level), a game-over screen with replay and a clean release of the camera.":"Comprend un affichage de jeu (score, distance, temps, niveau), un écran de fin avec rejeu et une libération propre de la caméra."
,
/* ===== certificates and edits ===== */
"Certifications I've":"Les certifications que j'ai",
"Opened the way to engineering studies.":"Ce diplôme m'a ouvert la voie vers les études d'ingénieur.",
"Two-year preparatory cycle at ENSA Tétouan, built on solid foundations in mathematics, physics and computer science.":"Cycle préparatoire de deux ans à l'ENSA Tétouan, avec de solides bases en mathématiques, physique et informatique.",
"Jun 2025":"juin 2025",
"Oct 2025":"oct. 2025",
"Apr 2025":"avr. 2025",
"Nov 2025":"nov. 2025",
"Dec 2025":"déc. 2025",
"BUSINESS INTELLIGENCE":"BUSINESS INTELLIGENCE",
"ARTIFICIAL INTELLIGENCE":"INTELLIGENCE ARTIFICIELLE",
"GENERATIVE AI":"IA GÉNÉRATIVE",
"CLOUD":"CLOUD",
"Linear and logistic regression, gradient descent and regularization, taught by Andrew Ng with DeepLearning.AI and Stanford Online.":"Régression linéaire et logistique, descente de gradient et régularisation, enseignées par Andrew Ng avec DeepLearning.AI et Stanford Online.",
"Neural networks, decision trees and tree ensembles, with practical advice for building and evaluating machine learning systems.":"Réseaux de neurones, arbres de décision et ensembles d'arbres, avec des conseils pratiques pour construire et évaluer des systèmes de machine learning.",
"Large-scale data processing with PySpark: RDDs, DataFrames and Spark MLlib.":"Traitement de données à grande échelle avec PySpark : RDD, DataFrames et Spark MLlib.",
"Introductory course on big data concepts and the technologies used to store and process large datasets.":"Cours d'introduction aux concepts du big data et aux technologies utilisées pour stocker et traiter de grands jeux de données.",
"Loading, transforming and visualizing data to build reports and dashboards.":"Chargement, transformation et visualisation de données pour créer des rapports et des tableaux de bord.",
"Writing DAX measures and calculated columns to add custom calculations to Power BI models.":"Écriture de mesures et de colonnes calculées DAX pour ajouter des calculs personnalisés aux modèles Power BI.",
"Filtering, aggregating and grouping data to answer questions with SQL queries.":"Filtrage, agrégation et regroupement de données pour répondre à des questions avec des requêtes SQL.",
"Combining tables with joins, set operations and subqueries.":"Combinaison de tables avec des jointures, des opérations ensemblistes et des sous-requêtes.",
"Querying Oracle databases with SQL.":"Interrogation de bases de données Oracle avec SQL.",
"Cloud fundamentals on AWS: core services, security, pricing and the shared responsibility model.":"Fondamentaux du cloud sur AWS : services principaux, sécurité, tarification et modèle de responsabilité partagée.",
"Building and running containers and images with Docker.":"Création et exécution de conteneurs et d'images avec Docker.",
"Going further with Docker: multi-container applications, images, volumes and best practices.":"Aller plus loin avec Docker : applications multi-conteneurs, images, volumes et bonnes pratiques.",
"The core ideas behind containers and virtual machines, and when to use each.":"Les idées clés derrière les conteneurs et les machines virtuelles, et quand utiliser chacun.",
"Deploying and managing containerized applications with Kubernetes.":"Déploiement et gestion d'applications conteneurisées avec Kubernetes.",
"Foundations of artificial intelligence and its real-world applications.":"Fondements de l'intelligence artificielle et de ses applications concrètes.",
"Writing effective prompts to get reliable answers from large language models.":"Rédaction de prompts efficaces pour obtenir des réponses fiables de la part de grands modèles de langage.",
"Getting started with ChatGPT and using it for everyday tasks.":"Prise en main de ChatGPT et utilisation pour les tâches du quotidien.",
"Going further with ChatGPT: more advanced prompting and practical use cases.":"Aller plus loin avec ChatGPT : prompts plus avancés et cas d'usage pratiques."
,
"Coursera · Jun 2025":"Coursera · juin 2025",
"Coursera · Oct 2025":"Coursera · oct. 2025",
"DataCamp · Apr 2025":"DataCamp · avr. 2025",
"DataCamp · Dec 2025":"DataCamp · déc. 2025",
"DataCamp · Nov 2025":"DataCamp · nov. 2025",
"Udemy · Dec 2025":"Udemy · déc. 2025"
,
/* ===== experience, about, extracurricular ===== */
"July – August 2026":"Juillet – août 2026",
"California Housing MLOps pipeline (see Projects): an end-to-end chain on Azure Machine Learning that takes a house-price regression model from training to a live REST API, with no manual step between a good model and its deployment.":"Pipeline MLOps California Housing (voir Projets) : une chaîne de bout en bout sur Azure Machine Learning qui mène un modèle de régression du prix des maisons de l'entraînement jusqu'à une API REST en ligne, sans étape manuelle entre un bon modèle et son déploiement.",
"Versioned the dataset as an Azure ML Data Asset and built a 4-step training pipeline (preparation, hyperparameter sweep, evaluation, registration) tracked with MLflow.":"Versionnement du dataset comme Data Asset Azure ML et construction d'un pipeline d'entraînement en 4 étapes (préparation, recherche d'hyperparamètres, évaluation, enregistrement) suivi avec MLflow.",
"Added a quality gate so a model is registered only if its R² reaches 0.7; the reference run reached R² = 0.8087 (RMSE ≈ 50,063).":"Ajout d'un contrôle qualité : un modèle n'est enregistré que si son R² atteint 0,7 ; l'exécution de référence a obtenu R² = 0,8087 (RMSE ≈ 50 063).",
"Automated the deployment with GitHub Actions: lint and tests, Docker image pushed to Azure Container Registry, then champion and challenger models behind a Managed Online Endpoint with an 80/20 A/B split, the trigger token being kept in Azure Key Vault.":"Automatisation du déploiement avec GitHub Actions : lint et tests, image Docker poussée vers Azure Container Registry, puis modèles champion et challenger derrière un Managed Online Endpoint avec une répartition A/B 80/20, le token de déclenchement étant conservé dans Azure Key Vault.",
"I'm Amal Afenich, a final-year Big Data and Artificial Intelligence student, rigorous, autonomous and highly motivated, with a strong ability to learn and a genuine interest in new technologies. I commit fully to every project in order to build effective, relevant data-driven solutions. During my studies, I have worked on several academic projects involving data manipulation, training Machine Learning models, and using Big Data tools to analyze and process large volumes of data.":"Je suis Amal Afenich, étudiante en dernière année Big Data et Intelligence Artificielle, rigoureuse, autonome et très motivée, avec une grande capacité d'apprentissage et un véritable intérêt pour les nouvelles technologies. Je m'investis pleinement dans chaque projet afin de construire des solutions data efficaces et pertinentes. Au cours de mes études, j'ai réalisé plusieurs projets académiques portant sur la manipulation de données, l'entraînement de modèles de Machine Learning et l'utilisation d'outils Big Data pour analyser et traiter de grands volumes de données.",
"EVENT MANAGER · AI GEEKS ENSATE":"RESPONSABLE ÉVÉNEMENTIEL · AI GEEKS ENSATE",
"26 Oct 2024":"26 oct. 2024",
"Shaping the Future of Big Data & AI":"Shaping the Future of Big Data & AI",
"After attending the Microsoft Moroccan Community event at Technopark Tangier as a guest, I became the host: as event manager of AI Geeks ENSATE, I organized our own event, \"Shaping the Future of Big Data & AI\", at ENSA Tétouan, together with the members of the organizing committee.":"Après avoir assisté en tant qu'invitée à l'événement Microsoft Moroccan Community au Technopark de Tanger, je suis passée d'invitée à organisatrice : en tant que responsable événementiel d'AI Geeks ENSATE, j'ai organisé notre propre événement, « Shaping the Future of Big Data & AI », à l'ENSA de Tétouan, avec les membres du comité d'organisation.",
"Event management":"Gestion d'événements",
"Networking":"Réseautage",
"National Robotics Competition (MECA World Cup)":"Coupe Nationale de Robotique (MECA World Cup)",
"I was part of the organizing committee of the National Robotics Competition, hosted by the Mechatronics Club of ENSA Tétouan. As a Big Data and AI student, I contributed in a technical and collaborative environment and gained hands-on experience in event organization, networking, communication with partners and adapting quickly to dynamic situations.":"J'ai fait partie du comité d'organisation de la Coupe Nationale de Robotique, organisée par le Club Mécatronique de l'ENSA Tétouan. En tant qu'étudiante en Big Data et IA, j'ai contribué dans un environnement technique et collaboratif et acquis une expérience concrète en organisation d'événements, réseautage, communication avec les partenaires et adaptation rapide à des situations dynamiques.",
"Mechatronics Club on LinkedIn ↗":"Club Mécatronique sur LinkedIn ↗"
,
/* ===== extracurricular v2 ===== */
"ORGANIZING COMMITTEE · AI GEEKS ENSATE":"COMITÉ D'ORGANISATION · AI GEEKS ENSATE",
"Microsoft event: Shaping the Future of Big Data & AI":"Événement Microsoft : Shaping the Future of Big Data & AI",
"I was a member of the organizing committee of the Microsoft event \"Shaping the Future of Big Data & AI\", organized by the AI Geeks club of ENSA Tétouan on 26 October 2024. Together with the rest of the committee, I helped bring the event to life.":"J'ai fait partie du comité d'organisation de l'événement Microsoft « Shaping the Future of Big Data & AI », organisé par le club AI Geeks de l'ENSA Tétouan le 26 octobre 2024. Avec le reste du comité, j'ai contribué à faire vivre l'événement.",
"HACKATHON · TEAM OF 5":"HACKATHON · ÉQUIPE DE 5",
"13–15 Oct 2025":"13–15 oct. 2025",
"3–4 Apr 2026":"3–4 avr. 2026",
"Mediterranean Smart City Hackathon 2025":"Hackathon Méditerranéen Smart City 2025",
"With my team of five, I contributed to the 2nd edition of the Mediterranean Smart City Hackathon, held in Tétouan and Martil under the aegis of Abdelmalek Essaâdi University and the École Normale Supérieure of Martil. The event combined a bootcamp on soft, business and hard skills (AI, IoT, cybersecurity), a junior and kids hackathon, and a Smart City incubator for the projects born from it.":"Avec mon équipe de cinq personnes, j'ai contribué à la 2e édition du Hackathon Méditerranéen des Villes Intelligentes, organisée à Tétouan et Martil sous l'égide de l'Université Abdelmalek Essaâdi et de l'École Normale Supérieure de Martil. L'événement réunissait un bootcamp sur les soft skills, business skills et hard skills (IA, IoT, cybersécurité), un hackathon junior et kids, et un incubateur Smart City pour les projets nés du hackathon.",
"Game4Health Hackathon":"Hackathon Game4Health",
"With my team of five, I took part in Game4Health, a 48-hour hackathon held at iSMAGi in Rabat. The challenge: create the game that heals, by imagining, wiring, coding and pitching a solution at the crossroads of gaming and health, with IoT, game and VR development, and artificial intelligence.":"Avec mon équipe de cinq personnes, j'ai participé à Game4Health, un hackathon de 48 heures organisé à l'iSMAGi à Rabat. Le défi : créer le jeu qui soigne, en imaginant, câblant, codant et présentant une solution à l'intersection du jeu vidéo et de la santé, avec l'IoT, le développement de jeux et de VR, et l'intelligence artificielle.",
"Smart City":"Smart City",
"IoT":"IoT",
"Game & VR":"Jeu & VR"
};
const T = s => document.documentElement.lang === 'fr' && FR[s] ? FR[s] : s;

(function () {
  const nodes = [], sw = [...document.querySelectorAll('[data-l]')], title = document.title;
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: n => {
    const p = n.parentElement;
    return (!n.nodeValue.trim() || /^(SCRIPT|STYLE)$/.test(p.tagName) || p.hasAttribute('data-count')) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  }});
  while (w.nextNode()) nodes.push({ n: w.currentNode, o: w.currentNode.nodeValue });
  function apply(l) {
    document.documentElement.lang = l;
    nodes.forEach(({ n, o }) => {
      const v = l === 'fr' ? FR[o.trim().replace(/\s+/g, ' ')] : null;
      n.nodeValue = v ? o.replace(o.trim(), () => v) : o;
    });
    document.title = l === 'fr' ? title.replace('Big Data & AI Engineer', 'Ingénieure Big Data & IA') : title;
    sw.forEach(b => { const on = b.dataset.l === l; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    try { localStorage.setItem('lang', l); } catch (e) {}
  }
  sw.forEach(b => b.addEventListener('click', () => apply(b.dataset.l)));
  let saved = null; try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (saved === 'fr') apply('fr');
})();

/* ===== COUNTERS (home) ===== */
(function () {
  const auto = { projects: () => document.querySelectorAll('.pcard').length, certs: () => document.querySelectorAll('.ccard').length };
  const box = document.getElementById('stats'); if (!box) return;
  const run = () => box.querySelectorAll('[data-count]').forEach(el => {
    const t = +el.dataset.count || auto[el.dataset.count](), t0 = performance.now(), d = 1500;
    if (reduce) { el.textContent = t; return; }
    (function step(now) {
      const p = Math.min((now - t0) / d, 1);
      el.textContent = Math.round(t * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  });
  new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { run(); o.disconnect(); } }, { threshold: .4 }).observe(box);
})();

/* ===== REVEAL ON SCROLL ===== */
(function () {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target; el.classList.add('in'); io.unobserve(el);
    setTimeout(() => { el.classList.remove('rv', 'in'); el.style.transitionDelay = ''; }, 1400);
  }), { threshold: .1 });
  document.querySelectorAll('section:not(.hero) > *, .erow, .cvcard, .clink, .skcat').forEach(el => {
    if (el.matches('.erow,.cvcard,.clink,.skcat')) el.style.transitionDelay = ([...el.parentNode.children].indexOf(el) % 4) * 90 + 'ms';
    el.classList.add('rv'); io.observe(el);
  });
})();
