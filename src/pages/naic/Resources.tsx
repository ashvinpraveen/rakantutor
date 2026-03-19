import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    Lightbulb, Settings, Video, Monitor, Building2,
    ArrowRight, ExternalLink, Code2, Palette, Brain,
    Hammer, Database, Globe, Mic, Film, FlaskConical,
    BookOpen, Cpu, Layers, Wand2, Camera, Music,
    Stethoscope, BarChart3, PencilRuler, Blocks, Sparkles
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

interface Resource {
    name: string;
    description: string;
    url: string;
    tag: string;
    icon: React.ReactNode;
    free?: boolean;
}

interface ResourceCategory {
    category: string;
    resources: Resource[];
}

interface Track {
    id: string;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
    borderColor: string;
    tagColor: string;
    categories: ResourceCategory[];
}

const tracksData: Track[] = [
    {
        id: "innovation",
        title: "Innovation",
        subtitle: "Use AI to build apps for UN SDGs",
        icon: <Lightbulb className="w-6 h-6" />,
        color: "from-amber-500 to-orange-500",
        bgColor: "bg-amber-500/10",
        borderColor: "border-amber-500/30",
        tagColor: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
        categories: [
            {
                category: "AI-Powered App Builders (Vibe Coding)",
                resources: [
                    {
                        name: "Lovable",
                        description: "Build full-stack web apps from a prompt. Generates React + Supabase code — ideal for students with no prior dev experience.",
                        url: "https://lovable.dev",
                        tag: "App Builder",
                        icon: <Sparkles className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Bolt.new",
                        description: "In-browser full-stack development powered by AI. Spin up a working app instantly from a description.",
                        url: "https://bolt.new",
                        tag: "App Builder",
                        icon: <Wand2 className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "v0 by Vercel",
                        description: "Generate clean React UI components from plain English. Great for building polished, production-ready interfaces quickly.",
                        url: "https://v0.dev",
                        tag: "UI Generator",
                        icon: <Layers className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Cursor",
                        description: "AI-native code editor built on VS Code. Use Ctrl+K to edit code with AI, and chat with your codebase. The go-to tool for vibe coding.",
                        url: "https://cursor.com",
                        tag: "Code Editor",
                        icon: <Code2 className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "GitHub Copilot",
                        description: "AI pair programmer inside VS Code. Free for students via GitHub Education. Autocompletes code, explains functions, and fixes bugs.",
                        url: "https://github.com/features/copilot",
                        tag: "Code Assistant",
                        icon: <Brain className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
            {
                category: "Backend & Database",
                resources: [
                    {
                        name: "Supabase",
                        description: "Open-source Firebase alternative with a Postgres database, auth, and storage. Lovable/Bolt.new connect to it out-of-the-box.",
                        url: "https://supabase.com",
                        tag: "Database",
                        icon: <Database className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Firebase",
                        description: "Google's backend-as-a-service. Realtime database, auth, and hosting — perfect for MVPs that need to go live fast.",
                        url: "https://firebase.google.com",
                        tag: "Backend",
                        icon: <Database className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Vercel",
                        description: "Deploy your web app live in seconds with a free tier. Connects directly to GitHub. Your app will be live at a public URL instantly.",
                        url: "https://vercel.com",
                        tag: "Deployment",
                        icon: <Globe className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
            {
                category: "AI APIs to Power Your App",
                resources: [
                    {
                        name: "Google Gemini API",
                        description: "Free API for adding AI chat, summarisation, and text generation to your app. Generous free tier — great for student projects.",
                        url: "https://ai.google.dev",
                        tag: "AI API",
                        icon: <Brain className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "OpenAI API",
                        description: "Access GPT-4o for chat, completion, and vision tasks. Powers intelligent features in your app with a few lines of code.",
                        url: "https://platform.openai.com",
                        tag: "AI API",
                        icon: <Brain className="w-4 h-4" />,
                    },
                    {
                        name: "Hugging Face",
                        description: "Thousands of free, open-source AI models for text, images, and audio. Find a model for nearly any AI feature you can imagine.",
                        url: "https://huggingface.co",
                        tag: "Model Hub",
                        icon: <Brain className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
            {
                category: "UN SDG Research & Data",
                resources: [
                    {
                        name: "UN SDG Data Portal",
                        description: "Official UN data and indicators for all 17 Sustainable Development Goals. Find real datasets to inspire and validate your app idea.",
                        url: "https://unstats.un.org/sdgs/dataportal",
                        tag: "Data",
                        icon: <Globe className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Malaysia Open Data",
                        description: "Government datasets covering education, health, environment, and more. Find local data to ground your SDG app in Malaysia's context.",
                        url: "https://data.gov.my",
                        tag: "Data",
                        icon: <BarChart3 className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "SDG Academy",
                        description: "Free courses by top educators on the SDGs — understand the problem space deeply before you build your solution.",
                        url: "https://sdgacademy.org",
                        tag: "Learning",
                        icon: <BookOpen className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
            {
                category: "UI & Design",
                resources: [
                    {
                        name: "shadcn/ui",
                        description: "Copy-paste React UI components that look great out of the box. Used in this very site — used by thousands of AI-generated apps.",
                        url: "https://ui.shadcn.com",
                        tag: "UI Library",
                        icon: <Palette className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Figma",
                        description: "The industry-standard design tool. Sketch out your app before you build it. Free for students and teams of up to 3.",
                        url: "https://figma.com",
                        tag: "Design",
                        icon: <Palette className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
        ]
    },
    {
        id: "engineering",
        title: "Engineering",
        subtitle: "AI-powered smart city solutions",
        icon: <Settings className="w-6 h-6" />,
        color: "from-blue-500 to-indigo-500",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/30",
        tagColor: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
        categories: [
            {
                category: "Machine Learning & AI Frameworks",
                resources: [
                    {
                        name: "TensorFlow",
                        description: "Google's end-to-end ML framework. Excellent for training models and deploying them in smart city solutions.",
                        url: "https://tensorflow.org",
                        tag: "ML Framework",
                        icon: <Brain className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "PyTorch",
                        description: "The leading research ML framework — flexible, Pythonic, and widely used for custom model architectures.",
                        url: "https://pytorch.org",
                        tag: "ML Framework",
                        icon: <Brain className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Scikit-learn",
                        description: "Simple and efficient tools for data mining and data analysis. Perfect for classical ML algorithms and quick prototyping.",
                        url: "https://scikit-learn.org",
                        tag: "ML Library",
                        icon: <FlaskConical className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "YOLOv8 (Ultralytics)",
                        description: "State-of-the-art real-time object detection. Detect vehicles, people, and objects in images or live video streams.",
                        url: "https://docs.ultralytics.com",
                        tag: "Computer Vision",
                        icon: <Camera className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
            {
                category: "Simulation & Prototyping",
                resources: [
                    {
                        name: "Wokwi",
                        description: "Browser-based Arduino & ESP32 simulator — prototype IoT circuits without any hardware. Fast, free, and works on any device.",
                        url: "https://wokwi.com",
                        tag: "IoT Simulator",
                        icon: <Cpu className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Tinkercad",
                        description: "Free web-based 3D design and Arduino simulation from Autodesk. Great for visualising physical smart city components.",
                        url: "https://www.tinkercad.com",
                        tag: "Simulation",
                        icon: <Blocks className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "SUMO (Traffic Simulation)",
                        description: "Open-source urban traffic simulation software. Model road networks, traffic flow, and test smart traffic management ideas.",
                        url: "https://eclipse.dev/sumo",
                        tag: "Traffic Sim",
                        icon: <Settings className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
            {
                category: "Datasets & Smart City Data",
                resources: [
                    {
                        name: "Kaggle Datasets",
                        description: "Thousands of free datasets covering traffic, air quality, energy, water systems, and more. Start here for your data.",
                        url: "https://kaggle.com/datasets",
                        tag: "Datasets",
                        icon: <Database className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "OpenStreetMap",
                        description: "Free, editable map data of the world. Use it as geographic data for your smart city simulations and routing solutions.",
                        url: "https://www.openstreetmap.org",
                        tag: "Geospatial",
                        icon: <Globe className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "UCI ML Repository",
                        description: "Classic repository of hundreds of machine learning datasets. Strong collection of energy, environmental, and urban data.",
                        url: "https://archive.ics.uci.edu",
                        tag: "Datasets",
                        icon: <Database className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
            {
                category: "Development Tools",
                resources: [
                    {
                        name: "Google Colab",
                        description: "Free Jupyter notebooks in the cloud with GPU access. Run ML experiments without setting anything up locally.",
                        url: "https://colab.research.google.com",
                        tag: "Notebooks",
                        icon: <Code2 className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Streamlit",
                        description: "Turn Python scripts into interactive data dashboards and demos in minutes. Ideal for presenting your engineering solution.",
                        url: "https://streamlit.io",
                        tag: "Dashboard",
                        icon: <BarChart3 className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Gradio",
                        description: "Create instant web demos for your ML models with a few lines of Python. Great for showing off your solution to judges.",
                        url: "https://gradio.app",
                        tag: "Demo Builder",
                        icon: <Globe className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
        ]
    },
    {
        id: "genai",
        title: "Gen Art",
        subtitle: "Digital storytelling for Visit Malaysia 2026",
        icon: <Video className="w-6 h-6" />,
        color: "from-pink-500 to-rose-500",
        bgColor: "bg-pink-500/10",
        borderColor: "border-pink-500/30",
        tagColor: "bg-pink-500/20 text-pink-600 dark:text-pink-400",
        categories: [
            {
                category: "AI Image Generation",
                resources: [
                    {
                        name: "Midjourney",
                        description: "The gold standard for stunning, artistic AI image generation. Produces the most visually striking, cinematic stills — perfect for showcasing Malaysia's beauty.",
                        url: "https://midjourney.com",
                        tag: "Image Gen",
                        icon: <Camera className="w-4 h-4" />,
                    },
                    {
                        name: "Adobe Firefly",
                        description: "Adobe's AI image generator — commercially safe content and deeply integrated with Photoshop and Express. Great for professional, polished visuals.",
                        url: "https://firefly.adobe.com",
                        tag: "Image Gen",
                        icon: <Sparkles className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "DALL-E 3 (via ChatGPT)",
                        description: "Generate highly accurate, prompt-faithful images through ChatGPT. Excellent for illustrating specific Malaysian landmarks, food, or cultural scenes.",
                        url: "https://chat.openai.com",
                        tag: "Image Gen",
                        icon: <Wand2 className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Ideogram",
                        description: "Specialises in generating images with accurate, legible text. Useful for creating title cards, subtitles, and graphic elements within your video.",
                        url: "https://ideogram.ai",
                        tag: "Image Gen",
                        icon: <Palette className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Leonardo.ai",
                        description: "Powerful image generator with fine-grained style control. Train custom models to maintain a consistent visual style across all your stills.",
                        url: "https://leonardo.ai",
                        tag: "Image Gen",
                        icon: <Camera className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
            {
                category: "AI Voice & Audio",
                resources: [
                    {
                        name: "ElevenLabs",
                        description: "Industry-leading AI voice synthesis. Create natural-sounding narration in multiple languages and accents — including Malaysian English.",
                        url: "https://elevenlabs.io",
                        tag: "Voice AI",
                        icon: <Mic className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Murf AI",
                        description: "Studio-quality AI voiceovers with 120+ voices. Easy script-to-voice workflow, with built-in timing sync for your video.",
                        url: "https://murf.ai",
                        tag: "Voice AI",
                        icon: <Mic className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Suno",
                        description: "Generate original background music from a text prompt. Create a unique, royalty-free soundtrack that perfectly matches your Malaysia story.",
                        url: "https://suno.com",
                        tag: "Music Gen",
                        icon: <Music className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Udio",
                        description: "Create high-quality, diverse AI music. Try prompts like 'traditional Malaysian gamelan fusion, cinematic, uplifting' for a unique track.",
                        url: "https://www.udio.com",
                        tag: "Music Gen",
                        icon: <Music className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
            {
                category: "Video Editing & Assembly",
                resources: [
                    {
                        name: "CapCut",
                        description: "The go-to free video editor for TikTok-style content. Built-in transitions, auto-captions, beat sync, and trending templates — perfect for this track.",
                        url: "https://capcut.com",
                        tag: "Video Editor",
                        icon: <Film className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "DaVinci Resolve",
                        description: "Professional-grade video editing, colour grading, and audio mixing — all free. Overkill for some, but the colour tools make visuals look incredible.",
                        url: "https://www.blackmagicdesign.com/products/davinciresolve",
                        tag: "Video Editor",
                        icon: <Film className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "RunwayML",
                        description: "Add AI-powered motion to your stills with Gen-3 Alpha. Animate images to create subtle movement, bringing your Malaysia visuals to life.",
                        url: "https://runwayml.com",
                        tag: "AI Video",
                        icon: <Video className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Canva Video",
                        description: "Drag-and-drop video creation with thousands of templates. Fast way to assemble your stills into a polished, branded video format.",
                        url: "https://canva.com/video",
                        tag: "Video Editor",
                        icon: <Palette className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
            {
                category: "Inspiration & Research",
                resources: [
                    {
                        name: "Visit Malaysia 2026 Official",
                        description: "The official campaign site — understand the brand, themes, and visual identity before you start generating content.",
                        url: "https://www.tourismmalaysia.gov.my",
                        tag: "Research",
                        icon: <Globe className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Tourism Malaysia Media Gallery",
                        description: "Official high-resolution photos of Malaysian landmarks, culture, and nature. Use as reference images for your AI generation prompts.",
                        url: "https://www.tourismmalaysia.gov.my/media",
                        tag: "Reference",
                        icon: <Camera className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
        ]
    },
    {
        id: "computing",
        title: "Computing",
        subtitle: "AI model for medical image analysis",
        icon: <Monitor className="w-6 h-6" />,
        color: "from-cyan-500 to-blue-500",
        bgColor: "bg-cyan-500/10",
        borderColor: "border-cyan-500/30",
        tagColor: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
        categories: [
            {
                category: "Deep Learning & Computer Vision",
                resources: [
                    {
                        name: "PyTorch",
                        description: "The most popular framework for medical imaging research. Flexible, well-documented, and has a rich ecosystem for custom model training.",
                        url: "https://pytorch.org",
                        tag: "DL Framework",
                        icon: <Brain className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "TorchVision",
                        description: "PyTorch's computer vision library. Pre-built models (ResNet, EfficientNet, ViT) that you can fine-tune on medical imaging tasks.",
                        url: "https://pytorch.org/vision",
                        tag: "CV Library",
                        icon: <Camera className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Keras / TensorFlow",
                        description: "High-level API for building neural networks. Faster to prototype with than raw PyTorch — great if you're new to deep learning.",
                        url: "https://keras.io",
                        tag: "DL Framework",
                        icon: <Brain className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "OpenCV",
                        description: "The standard library for image preprocessing — resizing, normalising, augmenting, and analysing medical images before feeding them into your model.",
                        url: "https://opencv.org",
                        tag: "Image Processing",
                        icon: <Camera className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Albumentations",
                        description: "Fast, flexible image augmentation library. Significantly boosts model performance on small medical datasets by artificially expanding training data.",
                        url: "https://albumentations.ai",
                        tag: "Augmentation",
                        icon: <Layers className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
            {
                category: "Medical Imaging & Datasets",
                resources: [
                    {
                        name: "Kaggle DR Detection Dataset",
                        description: "The classic Kaggle Diabetic Retinopathy detection dataset — thousands of labelled fundus images at different severity grades. Essential starting point.",
                        url: "https://www.kaggle.com/c/diabetic-retinopathy-detection",
                        tag: "Dataset",
                        icon: <Database className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "APTOS 2019 Blindness Detection",
                        description: "High-quality retinal fundus images from Aravind Eye Hospital, labelled for DR severity. One of the best publicly available DR datasets.",
                        url: "https://www.kaggle.com/c/aptos2019-blindness-detection",
                        tag: "Dataset",
                        icon: <Stethoscope className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "EyePACS Dataset",
                        description: "Large-scale diabetic retinopathy dataset with over 88,000 fundus images. Used in many landmark DR screening research papers.",
                        url: "https://www.eyepacs.com/technical-information",
                        tag: "Dataset",
                        icon: <Database className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "MESSIDOR Dataset",
                        description: "Fundus image database for DR research from French ophthalmology labs. Well-curated and widely referenced in the literature.",
                        url: "https://www.adcis.net/en/third-party/messidor",
                        tag: "Dataset",
                        icon: <Database className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
            {
                category: "Pre-trained Models & Transfer Learning",
                resources: [
                    {
                        name: "timm (PyTorch Image Models)",
                        description: "The largest collection of pre-trained vision models in PyTorch. Find EfficientNet, ViT, ConvNeXt, and more — fine-tune any on your DR dataset.",
                        url: "https://timm.fast.ai",
                        tag: "Model Zoo",
                        icon: <Brain className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Hugging Face Medical Models",
                        description: "Search 'retinal' or 'fundus' for community-trained medical imaging models you can fine-tune or use as a baseline.",
                        url: "https://huggingface.co/models?search=retinal",
                        tag: "Pre-trained Models",
                        icon: <Brain className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
            {
                category: "Training Infrastructure",
                resources: [
                    {
                        name: "Kaggle Notebooks",
                        description: "Free GPU/TPU access (30 hrs/week) with datasets available immediately. The fastest way to start training DR models — no setup needed.",
                        url: "https://kaggle.com/code",
                        tag: "Free GPU",
                        icon: <Cpu className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Google Colab",
                        description: "Free T4 GPU access in Jupyter notebooks. Connect to Google Drive for dataset storage. Go-to platform for students training vision models.",
                        url: "https://colab.research.google.com",
                        tag: "Free GPU",
                        icon: <Cpu className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Weights & Biases (W&B)",
                        description: "Track your model experiments, visualise training curves, and compare runs. Free for students — makes iterating on models much faster.",
                        url: "https://wandb.ai",
                        tag: "Experiment Tracking",
                        icon: <BarChart3 className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
            {
                category: "Learning Resources",
                resources: [
                    {
                        name: "fast.ai Practical Deep Learning",
                        description: "The best free course for getting hands-on with computer vision fast. Lesson 1 alone will have you training an image classifier.",
                        url: "https://course.fast.ai",
                        tag: "Course",
                        icon: <BookOpen className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Papers With Code",
                        description: "Find the latest state-of-the-art methods for diabetic retinopathy detection, with linked code repositories to learn from.",
                        url: "https://paperswithcode.com/task/diabetic-retinopathy-detection",
                        tag: "Research",
                        icon: <FlaskConical className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
        ]
    },
    {
        id: "architecture",
        title: "Architecture",
        subtitle: "Designing future learning spaces",
        icon: <Building2 className="w-6 h-6" />,
        color: "from-emerald-500 to-teal-500",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/30",
        tagColor: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
        categories: [
            {
                category: "3D Design & CAD",
                resources: [
                    {
                        name: "SketchUp Free",
                        description: "The easiest 3D modelling tool for architectural design — browser-based with no install needed. Ideal if you're new to 3D design.",
                        url: "https://app.sketchup.com",
                        tag: "3D Modelling",
                        icon: <PencilRuler className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Blender",
                        description: "Powerful, free, open-source 3D creation suite. Steeper learning curve, but produces stunning architectural renders and walkthroughs.",
                        url: "https://blender.org",
                        tag: "3D Modelling",
                        icon: <Blocks className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Autodesk Revit (Education)",
                        description: "Industry-standard BIM software — free for students with an Autodesk Education account. Used by professional architects worldwide.",
                        url: "https://www.autodesk.com/education/edu-software/overview",
                        tag: "BIM / CAD",
                        icon: <Building2 className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "AutoCAD Web",
                        description: "Free browser-based CAD for 2D floor plans and technical drawings. Great for producing precise architectural plans.",
                        url: "https://web.autocad.com",
                        tag: "CAD",
                        icon: <PencilRuler className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
            {
                category: "AI Design Tools",
                resources: [
                    {
                        name: "Midjourney",
                        description: "Generate architectural concept visuals and mood boards from text prompts. Try: 'future classroom, biophilic design, natural light, Malaysia, photorealistic'.",
                        url: "https://midjourney.com",
                        tag: "AI Visualisation",
                        icon: <Sparkles className="w-4 h-4" />,
                    },
                    {
                        name: "Adobe Firefly",
                        description: "AI image generation and generative fill for architectural renders. Extend or modify images of your designs for presentation boards.",
                        url: "https://firefly.adobe.com",
                        tag: "AI Visualisation",
                        icon: <Wand2 className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Spline",
                        description: "Design and share interactive 3D content in the browser. Great for creating engaging 3D walkthroughs of your learning space to present to judges.",
                        url: "https://spline.design",
                        tag: "3D / Interactive",
                        icon: <Layers className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
            {
                category: "Rendering & Visualisation",
                resources: [
                    {
                        name: "Lumion (Student)",
                        description: "Stunning real-time architectural visualisation software. Student version available free — turn your 3D models into cinematic renders.",
                        url: "https://lumion.com/education.html",
                        tag: "Rendering",
                        icon: <Camera className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Enscape (Trial)",
                        description: "Real-time rendering and VR plugin for Revit and SketchUp. Instantly see your design brought to life with realistic lighting and materials.",
                        url: "https://enscape3d.com",
                        tag: "Rendering",
                        icon: <Camera className="w-4 h-4" />,
                    },
                    {
                        name: "D5 Render",
                        description: "Free real-time rendering software with a large asset library. Produces photorealistic architectural visuals quickly — import from SketchUp or Revit.",
                        url: "https://www.d5render.com",
                        tag: "Rendering",
                        icon: <Palette className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
            {
                category: "Presentation & Boards",
                resources: [
                    {
                        name: "Canva",
                        description: "Create polished architectural presentation boards, posters, and pitch decks. Thousands of architecture-specific templates available.",
                        url: "https://canva.com",
                        tag: "Presentation",
                        icon: <Palette className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Adobe Express",
                        description: "Quick, high-quality graphics and presentation boards. Excellent for assembling your final concept boards with renders and diagrams.",
                        url: "https://www.adobe.com/express",
                        tag: "Presentation",
                        icon: <Palette className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
            {
                category: "Research & Inspiration",
                resources: [
                    {
                        name: "ArchDaily",
                        description: "The world's most visited architecture website. Browse award-winning school and educational building designs for inspiration and reference.",
                        url: "https://www.archdaily.com/tag/educational-architecture",
                        tag: "Inspiration",
                        icon: <BookOpen className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "Dezeen Education",
                        description: "Curated coverage of the most innovative educational architecture globally — great for understanding what 'future learning spaces' looks like.",
                        url: "https://www.dezeen.com/tag/educational-buildings",
                        tag: "Inspiration",
                        icon: <BookOpen className="w-4 h-4" />,
                        free: true,
                    },
                    {
                        name: "The Third Teacher",
                        description: "Resource on how the physical environment affects learning. Understand the 'why' behind designing spaces that support student wellbeing.",
                        url: "https://thethirdteacher.com",
                        tag: "Research",
                        icon: <BookOpen className="w-4 h-4" />,
                        free: true,
                    },
                ]
            },
        ]
    },
];

const ResourcesPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main className="pt-32 pb-20 px-4 md:px-8">
                <div className="container mx-auto max-w-6xl">

                    {/* Hero */}
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <div className="text-center mb-20">
                            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
                                National AI Competition 2026
                            </h2>
                            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
                                Track <span className="text-primary">Resources</span>
                            </h1>
                            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                                Curated tools, datasets, and learning materials for every NAIC track.
                                Everything you need to go from idea to submission.
                            </p>
                            <div className="mt-8">
                                <Button asChild size="lg" className="rounded-full">
                                    <Link to="/naic/register">
                                        Register Now
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </BlurFade>

                    {/* Track navigation */}
                    <BlurFade delay={BLUR_FADE_DELAY * 2}>
                        <div className="flex flex-wrap justify-center gap-4 mb-20">
                            {tracksData.map((track) => (
                                <a
                                    key={track.id}
                                    href={`#${track.id}`}
                                    className="px-6 py-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all font-medium"
                                >
                                    {track.title}
                                </a>
                            ))}
                        </div>
                    </BlurFade>

                    {/* Track sections */}
                    <div className="space-y-32">
                        {tracksData.map((track, trackIndex) => (
                            <section key={track.id} id={track.id} className="scroll-mt-32">
                                <BlurFade delay={BLUR_FADE_DELAY * (trackIndex + 3)}>

                                    {/* Track header */}
                                    <div className={`p-8 rounded-3xl border ${track.borderColor} ${track.bgColor} mb-12`}>
                                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                                            <div className="inline-flex items-center gap-4 text-primary">
                                                {track.icon}
                                                <div>
                                                    <h2
                                                        className="text-3xl font-bold tracking-tight uppercase"
                                                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                                                    >
                                                        {track.title}
                                                    </h2>
                                                    <p className="text-muted-foreground text-sm mt-1">{track.subtitle}</p>
                                                </div>
                                            </div>
                                            <div className="md:ml-auto">
                                                <Button asChild variant="outline" size="sm" className="rounded-full">
                                                    <Link to={`/naic/tracks#${track.id}`}>
                                                        View Track Details <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Resource categories */}
                                    <div className="space-y-12">
                                        {track.categories.map((category, catIndex) => (
                                            <div key={catIndex}>
                                                <h3 className="text-lg font-bold uppercase tracking-wider text-muted-foreground mb-6 flex items-center gap-3">
                                                    <span className={`w-8 h-0.5 bg-gradient-to-r ${track.color}`} />
                                                    {category.category}
                                                </h3>
                                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                    {category.resources.map((resource, resIndex) => (
                                                        <a
                                                            key={resIndex}
                                                            href={resource.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="group flex flex-col gap-3 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all duration-200"
                                                        >
                                                            <div className="flex items-start justify-between gap-2">
                                                                <div className="flex items-center gap-2">
                                                                    <span className={`p-1.5 rounded-lg ${track.bgColor} text-primary`}>
                                                                        {resource.icon}
                                                                    </span>
                                                                    <span className="font-bold text-foreground group-hover:text-primary transition-colors">
                                                                        {resource.name}
                                                                    </span>
                                                                </div>
                                                                <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                                                            </div>
                                                            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                                                {resource.description}
                                                            </p>
                                                            <div className="flex items-center gap-2 flex-wrap">
                                                                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${track.tagColor}`}>
                                                                    {resource.tag}
                                                                </span>
                                                                {resource.free && (
                                                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-500/15 text-green-600 dark:text-green-400">
                                                                        Free
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </BlurFade>

                                {trackIndex < tracksData.length - 1 && (
                                    <div className="mt-32 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                                )}
                            </section>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <BlurFade delay={BLUR_FADE_DELAY * 9}>
                        <div className="mt-40 text-center p-12 md:p-20 rounded-[3rem] bg-gradient-to-b from-primary/10 to-transparent border border-primary/20">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Ready to build something great?</h2>
                            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
                                Register your team and start using these resources to craft your winning submission.
                            </p>
                            <Button asChild size="lg" className="rounded-full px-12 py-8 text-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                                <Link to="/naic/register">Register Your Team</Link>
                            </Button>
                        </div>
                    </BlurFade>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ResourcesPage;
