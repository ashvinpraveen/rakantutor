# AI Technical Sub-Tracks (2026): Computing

## Theme: Smart City Healthcare - Diabetic Retinopathy (DR) Screening

### Overview
The technical track is designed for participants who are enthusiastic about getting hands-on with real-world data and pushing the limits of AI technologies. This year, we challenge you to prepare a high-quality pipeline and train an AI model that can make reliable predictions from thousands of retinal fundus images with a realistic setting where lighting, blurring, camera differences, and class imbalance are common.

Unlike “clean” classroom datasets, healthcare imaging problems require you to think beyond accuracy alone. You will need to build a solution that can generalise to unseen images, explain your design choices clearly, and ensure your workflow is reproducible. You are encouraged to iterate from a simple baseline to stronger models by improving preprocessing, augmentation, hyperparameters, and training strategies.

![Diabetic Retinopathy](https://www.ophthalytics.com/our-technology/diabetic-retinopathy/)

### What’s different this year
NAIC will provide the official dataset(s) and a standardised evaluation criterion, so every team competes on the same foundation. **You are not allowed to add more training data/images to your model.** Your task is to push performance further by designing a solution that achieves the best accuracy with the smartest efficiency with strong predictions, fast inference, and lightweight deployment.

### What we want you to build
By the end of the technical track, your team should be able to demonstrate:
- A clean, reproducible training pipeline
- A trained model that performs well and generalises to unseen test images
- A working testing script that runs inference and produces the required submission output
- Clear documentation and answers to background questions explaining your approach

**Extra credit for real-world usefulness:**
Beyond raw model performance, we reward teams that can demonstrate practical value through additional features such as a simple dashboard, web demo, or mobile app prototype.

### AI Computing Tracks (2 Categories)
**Category A & B: Diabetic Retinopathy (DR) Severity Classification**
You will build a model that predicts the severity grade of diabetic retinopathy from fundus images (typically an ordinal scale such as 0–4). Strong solutions must handle class imbalance with low false positive (predicting abnormal on normal images), and low false negative (predicting normal images as abnormal).

### Important Dates
| Event | Date |
| :--- | :--- |
| **Dataset Release Date** | One week after registration closed |

---

## AI Masterclass Information
We provide a complimentary masterclass to kickstart your project.

### Masterclass: DR Screening via AI - Building a Strong Baseline
**You will learn:**
- How screening differs from “normal classification” (robustness and generalization)
- How to use the official dataset, labels, and evaluation script
- Baseline model training (transfer learning) and validation strategy
- Key performance metrics used for screening (from confusion matrix to accuracy, F1-score, precision and recall)
- How to avoid common pitfalls (overfitting, leakage, imbalance)

*Zoom links and recordings will be available on the competition portal.*

---

## Challenge: Preliminary Round - Deliverables
For the preliminary round, teams submit through the online form. You will submit:

### 1) Inference / Testing Script
A script that loads your trained model and outputs predictions for the provided test set format. For example:
- One command to run inference (e.g., `python infer.py --input_dir input-directory-path --output submission.csv`) or ipynb notebook or any
- Includes environment requirements (`requirements.txt` / `environment.yml`) and clear run instructions
- Outputs the required CSV format correctly (containing test images filename, actual class, predicted class) and result confusion matrix

*No/low-code tools are allowed (Teachable Machine / Orange), but you must still provide a reproducible batch inference method (exported model + steps) and generate the same required CSV + confusion matrix.*

### 2) Model Weights & Saved Model
Each team should provide:
- Trained weights (checkpoint) or exported TM/Orange model files
- Model configuration / architecture details
- Any required preprocessing configuration (image size, normalisation values etc.)

### 3) Short Technical Write-Up
Your report shall include:
- Model overview and why you chose it
- Training setup (augmentation, optimizer, epochs, input resolution)
- Validation strategy (how you avoided leakage / ensured fairness)
- Efficiency notes (model size, inference speed estimate, design choices)

*Note: Keep the write-up concise, clear, and reproducible. Judges reward clarity and correct methodology, not complexity.*

---

## Challenge: Preliminary Round - Judging Criteria

| Section | Weight | Evaluation Criteria |
| :--- | :--- | :--- |
| **Performance** | 55% | Accuracy, F1 Score, Precision, Recall, Confusion Matrix performance |
| **Model Design** | 20% | Architecture choice and justification, handling imbalance, training logic, and methods that improve generalisation |
| **Data Strategy** | 15% | Pipeline quality, representative preprocessing, strong validation split strategy, and augmentation design |
| **Additional Features** | 10% | Working demo showing inference and outputs (e.g., dashboard, app, demo). Must avoid misleading clinical claims |

---

## Challenge: Final Round – Judging Criteria and Deliverables
Based on the judging criteria from Preliminary Round above, top teams from preliminary submissions will qualify for the Grand Finale. A total of **60 teams** will advance to the Grand Finale. The exact distribution of teams per track will be determined based on participation and evaluation criteria.

In the final, teams are expected to deliver the following:
- Present approach + key experiments + results
- Explain failure or misclassified cases and limitations
- Demo the additional features/dashboard/app
- Answer questions from judges
- Prepare poster for showcase

---

## Task Objective
**Image-based Diabetic Retinopathy Screening using Fundus Images**

This task focuses on Smart City Healthcare by building AI for screening from retinal fundus photographs. Participants will develop models that predict screening outcomes at image/patient level, enabling early detection and referral before irreversible vision loss occurs.

The goal is not only high predictive performance, but also deployment-ready efficiency. Your model should be accurate on the unseen test images while remaining lightweight enough for large-scale screening in community clinics, mobile screening units, and smart city health programmes.

### Screening Population
Images originate from real-world screening settings and reflect practical imaging challenges such as varying illumination, blur, and artefacts. The dataset supports automated detection for populations where regular screening is difficult.

### Data Details
**1) Retinal Fundus Images**
- **Modality:** Colour fundus photographs (RGB)
- **Collection characteristics:** Captured in varied conditions; may contain artefacts / be out of focus (real screening noise)

**2) Labels: DR Severity Grading (Ordinal 0–4)**
Each image is graded on a 5-level ordinal severity scale:
- 0 — No DR
- 1 — Mild
- 2 — Moderate
- 3 — Severe
- 4 — Proliferative DR

*Important: This is an ordinal medical grading task (classes have an order), not just “5 independent categories.”*

### Model Requirements
Participants should aim for models that are:
- **Accurate:** Strong grading/prediction on unseen test images
- **Robust:** Handles noise, blur, exposure differences, and device variation
- **Efficient:** Small model size + fast inference under organiser evaluation protocol (edge-ready screening)
