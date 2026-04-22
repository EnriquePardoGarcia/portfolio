# Enrique Pardo García - GitHub Project Analysis

## Profile Overview
**GitHub Account:** EnriquePardoGarcia  
**Field:** Data Science and Engineering  
**Key Skills:** Python, PySpark, Java, Machine Learning, Computer Vision, Big Data  
**Contributions:** 31 contributions in the last year

---

## Project Portfolio Summary

### 1. **Road Segmentation**
**Repository:** Road-Segmentation  
**Language:** Python (Jupyter Notebook)  
**Focus:** Computer Vision / Image Segmentation

#### Project Description
Automatic road segmentation from high-resolution aerial images using the Massachusetts Roads Dataset. This project develops a computational method capable of identifying road pixels in satellite imagery under challenging conditions such as shadows, vegetation, and variable lighting.

#### Key Technologies
- **Language:** Python
- **Libraries:** NumPy, OpenCV, scikit-learn, Matplotlib, Seaborn
- **Dataset:** Massachusetts Roads Dataset
- **Color Spaces:** RGB, HSV, Lab for feature extraction

#### Key Capabilities
- Multi-space color feature extraction (RGB, HSV, Lab color channels)
- Gradient magnitude calculation on H channel for edge detection
- Binary and adaptive thresholds for intensity variations
- Supports class-imbalanced data through balanced sampling

#### Models Implemented
1. **Neural Network** - Captures complex non-linear relationships and subtle texture differences
2. **Random Forest** - Robust, interpretable, efficient model

#### Performance Metrics & Achievements
- **F1-score:** High performance with balanced precision-recall trade-off
- **Accuracy:** Consistently high across both models
- **Key Achievement:** Random Forest provided stable, interpretable results; Neural Network captured more complex spatial patterns
- **Practical Applications:** Urban planning, GIS, autonomous vehicle navigation
- **Challenge Addressed:** Class imbalance in aerial imagery (roads occupy small fraction of image area)

#### Outcomes
- Successfully segmented roads in complex aerial imagery
- Demonstrated effective feature-engineered approach combining multi-space color features with robust machine learning
- Models reliable even under variable lighting and obstruction conditions

---

### 2. **Object Recognition**
**Repository:** Object-Recognition  
**Language:** Python (Jupyter Notebook)  
**Focus:** Computer Vision / Data Augmentation

#### Project Description
Object recognition and classification in images through pixel-level masks and manual data augmentation. The project focuses on identifying and classifying animal objects (elephants, rhinos, etc.) by isolating them from their background and enhancing training data with artificial variations.

#### Key Technologies
- **Language:** Python
- **Libraries:** NumPy, OpenCV, Matplotlib, Scikit-image, Pandas
- **Techniques:** Data augmentation, mask-based ROI extraction, color-space analysis

#### Data Augmentation Techniques
1. **Geometric Transformations:**
   - Horizontal & Vertical Flips
   - Random Rotations & Shifts
   - Spatial variability handling

2. **Photometric Transformations:**
   - Brightness & Contrast Adjustments
   - Gamma Correction for visual contrast enhancement
   - Lighting variation handling

#### Key Capabilities
- Pixel-level mask application for precise object isolation
- Color-based feature extraction (average RGB values and color descriptors)
- Automated dataset expansion through augmentation
- Feature visualization and separability analysis

#### Performance Achievements
| Aspect | Improvement Observed |
|--------|----------------------|
| Dataset Size | Expanded through augmentation |
| Model Robustness | Improved against rotation and brightness changes |
| Feature Distinction | Enhanced through color-space analysis |

#### Outcomes
- Successfully isolated animal objects using binary masks
- Expanded dataset size through systematic augmentation
- Enhanced model robustness against various image transformations
- Demonstrated practical feature-based approach to object recognition

---

### 3. **Clinical Trial Information Retrieval System**
**Repository:** Clinical-Trial-Information-Retrieval-System  
**Language:** Java (100% Java)  
**Focus:** Natural Language Processing / Information Retrieval

#### Project Description
A comprehensive Java-based system for indexing, searching, and evaluating clinical trial documents. Combines traditional information retrieval with semantic and embedding-based methods to improve accuracy in biomedical text search and analysis.

#### Key Technologies
- **Language:** Java
- **Core Components:**
  - Indexer (ClinicalTrialIndexer.java)
  - Search Engine (ClinicalTrialIndexReader.java, ClinicalTrialMultiSearcher.java)
  - Embedding-based Search (ClinicalTrialEmbeddingSearcher.java)
  - Rescoring/Ranking (ClinicalTrialRescoreSearcher.java)
  - Batch Processing (BatchSearcher.java)
  - Evaluation Framework (Evaluation.java)
  - Document Parser (ClinicalTrialParser.java)

#### Key Capabilities
- **Traditional IR:** Document indexing and retrieval
- **Semantic Search:** Embedding-based methods for meaning-aware search
- **Multi-method Retrieval:** Multiple search strategies for comprehensive results
- **Rescoring/Re-ranking:** Advanced ranking strategies for result refinement
- **Batch Processing:** Efficient processing of large document collections
- **Evaluation:** Built-in metrics and evaluation framework for IR system assessment

#### Domain Focus
- Biomedical text analysis
- Clinical trial document management
- Information retrieval in healthcare domain
- Semantic understanding of clinical terminology

#### Unique Features
- Combines classical information retrieval techniques with modern embedding-based methods
- Specialized parser for clinical trial data
- Comprehensive evaluation system for IR performance
- Batch processing capabilities for production environments

---

### 4. **IoT Malware Detection with PySpark**
**Repository:** IoT-Malware-Detection-with-PySpark  
**Language:** Jupyter Notebook (Python with PySpark)  
**Focus:** Big Data / Machine Learning / Cybersecurity

#### Project Description
A complete IoT network malware detection system using PySpark for distributed machine learning. Automatically downloads the CTU-IoT-Malware-Capture-1-1 dataset from Kaggle, preprocesses it, and trains distributed machine learning models for detecting malicious network behavior.

#### Key Technologies
- **Framework:** PySpark (Spark Machine Learning)
- **Data Source:** Kaggle API integration for automatic dataset retrieval
- **Dataset:** CTU-IoT-Malware-Capture-1-1 (part of IoT-23 project)
- **Dependencies:** PySpark, Pandas, Seaborn, Matplotlib, Tabulate

#### Data Processing Pipeline
1. **Automated Download:** Uses Kaggle API for dataset retrieval
2. **Data Cleaning:** Separator detection, column renaming, null handling
3. **Feature Engineering:** History transformation and feature extraction
4. **Feature Selection:** Correlation analysis with target label
5. **Class Balancing:** Balanced sampling of road/background pixels

#### Machine Learning Models Implemented
1. **Logistic Regression (LR)** - Fast, interpretable baseline
2. **Random Forest (RF)** - Ensemble approach for improved accuracy
3. **Gradient-Boosted Trees (GBT)** - Advanced boosting strategy

#### Evaluation Metrics & Performance
- **AUC (Area Under the ROC Curve)** - Primary metric
- **Accuracy** - Training and test set performance
- **Confusion Matrix** - Visual performance analysis
- **Model Comparison Table** - Side-by-side evaluation of all three models

#### Key Features
- Configurable command-line interface with multiple options
- Support for model comparison across LR, RF, and GBT
- Automatic feature correlation analysis
- Real-time visualization of metrics
- Distributed processing for large-scale datasets

#### Achievements
- **Co-Authored:** Developed with Nicolás Aller Ponte
- **Context:** Bachelor's Degree in Data Science and Engineering (2025), University of A Coruña
- **Scalability:** Handles large IoT network traffic datasets using Spark's distributed computing
- **Practical Application:** Malware detection in IoT network connections

#### Usage Examples
```bash
# Compare all three models
python practica1_aage.py --model all --train --evaluate

# Random Forest with feature correlation removal
python practica1_aage.py --model rf --train --evaluate --no-important-vars

# Custom gradient boosting iterations
python practica1_aage.py --model gbt --train --evaluate --iters 100
```

---

### 5. **Smartports Visual Classification**
**Repository:** Smartports-Visual-Classifications  
**Language:** Python  
**Focus:** Deep Learning / Computer Vision / Port Infrastructure

#### Project Description
Computer vision project for visual classification of maritime/port operations. Specifically focused on detecting ship presence (ship/no-ship classification) and docking status (docked/undocked detection).

#### Key Technologies
- **Framework:** PyTorch for deep learning
- **Models:**
  - SmallCNN (from scratch) - Custom convolutional architecture
  - ResNet18 (transfer learning) - Pre-trained backbone
- **Data Handling:** Custom PyTorch Dataset with data augmentation
- **Environment:** Python 3.10 with conda

#### Project Structure & Components
1. **dataset.py** - Custom PortDataset class, transforms, dataloaders
2. **models.py** - SmallCNN and pre-trained ResNet18 implementations
3. **trainer.py** - Training loop logic
4. **evaluation.py** - Metrics and visualizations
5. **logger.py** - Real-time training logs to text file
6. **run_manager.py** - Automatic folder management with timestamps

#### Classification Tasks
**Task 2:** Ship/No-ship Detection (4 configurations)
- Binary classification for ship presence in port imagery

**Task 4:** Docked/Undocked Status (6 configurations)
- Multi-configuration approach for docking status detection
- Executed after Task 2

#### Training & Evaluation Features
- **Hyperparameter Tracking:** Each run saves hyperparams.json
- **Model Checkpointing:** Best model weights saved per run (.pt files)
- **Real-time Logging:** Epoch-by-epoch training progress
- **Results Storage:** PNG visualizations, JSON metrics, history files
- **Timestamp Organization:** Automatic folder organization by execution time

#### Visualization Capabilities
- **Predictions:** Visual prediction output
- **Error Analysis:** Error case visualizations
- **ROC Curves:** Model discrimination ability
- **Confusion Matrices:** Classification performance matrix
- **Confidence Histogram:** Model confidence distribution
- **Training Curves:** Loss and metric progression
- **Comparison Plots:** Multi-model comparison

#### Testing & Inference
Custom test.py script for evaluation on new data:
```bash
python test.py \
  --task ship \
  --model_type pretrained \
  --model_path runs/ship_20260323_101742/models/pretrained_aug_run1_best.pt \
  --csv P1-Material/ship.csv \
  --images_dir P1-Material/images \
  --save_visuals
```

#### Achievements
- **Dual Task Capability:** Ship detection and docking status classification
- **Transfer Learning:** Effective use of pre-trained ResNet18
- **Custom Architecture:** SmallCNN alternative for comparison
- **Production-Ready:** Organized runs directory with full reproducibility
- **Data Augmentation:** Comprehensive augmentation pipeline
- **Visualization Suite:** Extensive analysis and interpretation tools

#### Domain Application
- **Port Operations:** Automated classification of maritime activities
- **Infrastructure Monitoring:** Vessel and dock status tracking
- **Smart Ports:** Part of IoT and automation in port management

---

## Technology Stack Summary

### Languages & Frameworks
| Language | Projects | Framework/Library |
|----------|----------|------------------|
| Python | 4/5 | PyTorch, PySpark, scikit-learn, OpenCV |
| Java | 1/5 | Traditional Java (IR libraries) |
| Jupyter Notebook | 3/5 | IPython, interactive analysis |

### Machine Learning & AI
- **Classical ML:** Random Forest, Logistic Regression, Gradient-Boosted Trees
- **Deep Learning:** ResNet18 (transfer learning), Custom CNN
- **Information Retrieval:** Semantic search, embedding-based methods
- **Big Data:** PySpark distributed machine learning

### Computer Vision
- **Libraries:** OpenCV, scikit-image, Matplotlib, Seaborn
- **Techniques:** Image segmentation, object recognition, data augmentation, mask-based ROI extraction
- **Color Spaces:** RGB, HSV, Lab color space analysis
- **Feature Engineering:** Multi-scale features, gradient computation

### Data Processing
- **Tools:** Pandas, NumPy
- **Large-Scale:** PySpark for distributed computing
- **Kaggle Integration:** Automated dataset retrieval

### Domains of Expertise
1. **Computer Vision** - Segmentation, object recognition, classification
2. **Machine Learning** - Supervised learning, model comparison, evaluation
3. **Deep Learning** - CNN architectures, transfer learning
4. **Big Data & Cloud** - PySpark, distributed processing
5. **Natural Language Processing/IR** - Semantic search, document indexing
6. **Data Engineering** - Preprocessing, feature engineering, ETL

---

## Key Achievements & Metrics

### Quantifiable Outcomes
- **5 Public Repositories** - Active project showcase
- **31 GitHub Contributions** - Last year activity
- **Multiple Data Domains** - Healthcare, IoT, Computer Vision, Port Operations
- **Language Diversity** - Python, Java, Jupyter notebooks

### Technical Milestones
- **Cross-Domain Expertise:** Successfully applied ML/AI across healthcare, cybersecurity, and maritime domains
- **Scale Capabilities:** From single-machine ML (scikit-learn) to distributed Big Data (PySpark)
- **Method Comparison:** Demonstrated ability to compare multiple algorithms and select optimal approaches
- **Production-Ready Code:** Well-structured projects with evaluation frameworks

### Academic Context
- **University:** University of A Coruña (Universidade da Coruña)
- **Degree:** Bachelor's Degree in Data Science and Engineering
- **Graduation:** 2025
- **Collaborations:** Multi-author projects (e.g., IoT project with Nicolás Aller Ponte)

---

## Recommended Highlights for Portfolio Enhancement

### For "About Me" Section
> "Data Science and Engineering student specializing in Python, PySpark, and Java. Demonstrated expertise across:
> 
> - **Computer Vision:** Road segmentation in aerial images and object recognition with advanced data augmentation techniques
> - **Big Data & ML:** IoT malware detection using distributed PySpark models (Logistic Regression, Random Forest, Gradient Boosting)
> - **NLP & Information Retrieval:** Java-based system combining traditional IR with semantic/embedding methods for clinical trial document analysis
> - **Deep Learning:** PyTorch-based visual classification for maritime infrastructure (ship and dock status detection)
> 
> Experienced in implementing end-to-end ML pipelines from data preprocessing to evaluation, with proven ability to compare multiple algorithms, handle class imbalance, and apply transfer learning effectively."

### Key Projects to Highlight
1. **IoT Malware Detection** - Demonstrates Big Data skills and distributed computing
2. **Road Segmentation** - Shows classical ML + feature engineering expertise
3. **Clinical Trial IR System** - Highlights Java and NLP capabilities
4. **Smartports Visual Classification** - Modern deep learning and production-ready code structure

### Metrics to Emphasize
- Balanced precision-recall trade-offs in imbalanced datasets
- Multi-model comparison and evaluation frameworks
- Real-time logging and experiment tracking capabilities
- Reproducible, organized project structures with timestamps and hyperparameter tracking
