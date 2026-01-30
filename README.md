# Rakan Tutor

Official website for Rakan Tutor, featuring our homepage, company information, and the National AI Competition (NAIC) 2026 registration system.

## 👋 Getting Started for Non-Developers

New to coding? No problem! This guide will walk you through everything you need to start working on this website.

### What You'll Need

Before you start, you'll need to install a few tools. Think of these as the essential apps you need to work on the website:

#### 1. **GitHub Desktop** - Your Version Control Tool
**What it does:** GitHub Desktop helps you download the code, track your changes, and share them with the team. It's like Google Docs version history, but for code. And uploading to GitHub is similar to Google Drive.

**How to install:**
1. Go to [desktop.github.com](https://desktop.github.com)
2. Download and install GitHub Desktop
3. Sign in with your GitHub account (create one if you don't have it)
4. Click "Clone a repository" and select `rakantutor` or enter the repository URL

#### 2. **Node.js** - The JavaScript Runtime
**What it does:** Node.js is what runs the website on your computer. It's like the engine that powers everything.

**How to install:**
1. Go to [nodejs.org](https://nodejs.org)
2. Download the **LTS version** (the one marked "Recommended for most users")
3. Run the installer and follow the prompts (just keep clicking "Next")
4. To verify it's installed, open Terminal (Mac) or Command Prompt (Windows) and type:
   ```sh
   node --version
   ```
   You should see a version number like `v18.x.x` or higher

#### 3. **Antigravity** - Your AI Coding Assistant
**What it does:** Antigravity is an AI-powered tool that helps you write code, fix bugs, and understand what's happening in the codebase. It's like having an expert developer sitting next to you! It's similar to Cursor, or VS code but has a nice free tier as of right now (Jan)

**How to install:**
1. Visit [Antigravity's website](https://antigravity.google)
2. Follow the installation guide for your operating system
3. Once installed, you can use it to help you make changes to the code

**Pro tip:** If you have a ChatGPT or Claude subscription, you can install their extensions in Antigravity to access more AI usage:
- **ChatGPT (Codex)** extension - Use your ChatGPT subscription for additional AI assistance
- **Claude** extension - Use your Claude subscription for additional AI assistance

This gives you more flexibility and AI credits to work with!

### Running the Website Locally (on your computer for development)

Once you have everything installed, here's how to get the website running on your computer:

#### Step 1: Open the Project
1. Open **GitHub Desktop**
2. Make sure the `rakantutor` repository is selected
3. Click "Open in Terminal" (Mac) or "Open in Command Prompt" (Windows)

#### Step 2: Install Dependencies
**What this does:** This downloads all the code libraries and tools the website needs to run.

In the terminal window that just opened, type:
```sh
npm install
```

This might take a few minutes. You'll see a lot of text scrolling by - that's normal!

#### Step 3: Start the Development Server
**What this does:** This starts a local version of the website on your computer so you can see your changes in real-time.

Type this command:
```sh
npm run dev
```

You should see a message like "Local: http://localhost:8080". This means the website is running!

#### Step 4: View the Website
1. Open your web browser (Chrome, Safari, Firefox, etc.)
2. Go to `http://localhost:8080`
3. You should see the Rakan Tutor website! 🎉

**Pro tip:** Keep the terminal window open while you work. If you close it, the website will stop running.

### Making Changes

Now that everything is running, here's how to make changes:

#### 1. **Edit the Code**
- Open the project folder in your code editor (VS Code is recommended)
- Find the file you want to change (ask Antigravity for help finding the right file!)
- Make your changes
- **Save the file** - The website will automatically refresh to show your changes!

#### 2. **Preview Your Changes**
- Go back to your browser at `http://localhost:8080`
- Refresh the page if needed
- You should see your changes immediately

#### 3. **Save Your Changes to GitHub**

Once you're happy with your changes, here's how to share them with the team:

**Step 1: Review Your Changes**
1. Open **GitHub Desktop**
2. You'll see a list of all the files you changed on the left side
3. Review them to make sure everything looks good

**Step 2: Commit Your Changes**
1. In the bottom-left corner, you'll see two text boxes
2. In the first box (Summary), write a short description of what you changed
   - Example: "Updated homepage hero section"
   - Example: "Fixed typo in About page"
3. Optionally, add more details in the Description box
4. Click the blue **"Commit to main"** button

**Step 3: Push to GitHub**
1. After committing, you'll see a button that says **"Push origin"**
2. Click it to upload your changes to GitHub
3. Your changes are now saved and the team can see them!

### Common Commands

Here are the most common commands you'll use:

| Command | What it does |
|---------|-------------|
| `npm install` | Downloads all the code libraries (do this once at the start) |
| `npm run dev` | Starts the website on your computer |
| `npm run build` | Creates a production-ready version (for deployment) |

### Getting Help

- **Stuck?** Ask Antigravity! It can help you understand error messages and fix problems
- **Something not working?** Try closing the terminal and running `npm run dev` again
- **Still having issues?** Check with the team or review the troubleshooting section below

---

## ✨ Features

### Rakan Tutor Homepage
- � **Modern Homepage** - Beautiful, responsive design showcasing Rakan Tutor's mission and services
- 📖 **Company Information** - About, History, Impact, and News sections
- 🌓 **Dark Mode Support** - Automatic theme switching based on system preferences
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes

### NAIC 2026 Registration System
- 📝 **Multi-Step Registration Form** - Intuitive form with auto-save functionality
- 🗄️ **Supabase Backend** - PostgreSQL database with real-time capabilities
- 📊 **Google Sheets Sync** - Automatic data synchronization to Google Sheets
- 📧 **Email Automation** - Confirmation emails via Resend
- 🔒 **Secure & Scalable** - Row-level security and serverless architecture

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account (for backend features)

### Installation

```sh
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

### Build for Production

```sh
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🗺️ Site Structure

The website is organized into two main sections:

### Rakan Tutor (Main Site)
- **`/`** - Homepage
- **`/about`** - About Rakan Tutor
- **`/history`** - Company history
- **`/impact`** - Our impact and achievements
- **`/news`** - Latest news and updates
- **`/contact`** - Contact information
- **`/terms`** - Terms of service
- **`/privacy`** - Privacy policy

### NAIC 2026 (Competition Section)
- **`/naic`** - NAIC landing page
- **`/naic/register`** - Registration form
- **`/naic/tracks`** - Competition tracks
- **`/naic/faq`** - Frequently asked questions
- **`/naic/contact`** - NAIC contact
- **`/naic/terms`** - NAIC terms
- **`/naic/privacy`** - NAIC privacy policy

## 🏗️ Tech Stack

### Frontend
- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Framer Motion** - Animation library
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### Backend
- **Supabase** - Backend-as-a-Service (PostgreSQL + Auth + Storage)
- **Supabase Edge Functions** - Serverless functions (Deno runtime)
- **Google Sheets API** - Data synchronization
- **Resend** - Transactional email service

## 📂 Project Structure

```
rakantutor/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── v2/             # Rakan Tutor homepage components
│   │   ├── Hero.tsx        # NAIC hero section
│   │   ├── RegistrationForm.tsx  # NAIC registration
│   │   └── ...
│   ├── pages/              # Route pages
│   │   ├── RakanTutor.tsx  # Homepage (/)
│   │   ├── RakanTutorAbout.tsx
│   │   ├── RakanTutorHistory.tsx
│   │   ├── RakanTutorImpact.tsx
│   │   ├── RakanTutorNews.tsx
│   │   ├── Index.tsx       # NAIC landing (/naic)
│   │   ├── Register.tsx    # NAIC registration (/naic/register)
│   │   └── ...
│   ├── hooks/              # Custom React hooks
│   ├── integrations/       # External service integrations
│   │   └── supabase/       # Supabase client & types
│   ├── App.tsx             # Main app component with routing
│   └── index.css           # Global styles
├── supabase/
│   ├── functions/          # Edge Functions
│   │   └── handle-registration/  # NAIC registration handler
│   ├── migrations/         # Database migrations
│   └── README.md           # Backend documentation
├── docs/                   # Documentation
│   ├── google-sheets-setup.md
│   └── resend-setup.md
├── public/                 # Static assets
└── .agent/workflows/       # Automation workflows
```

## 🔧 Backend Setup (NAIC Registration)

The NAIC registration system includes automated Google Sheets sync and email notifications.

### Quick Setup

1. **Install Supabase CLI**
   ```bash
   brew install supabase/tap/supabase
   ```

2. **Link your project**
   ```bash
   supabase login
   supabase link --project-ref barsjbjrgzubewjodzdd
   ```

3. **Configure services**
   - Follow [`docs/google-sheets-setup.md`](docs/google-sheets-setup.md) for Google Sheets
   - Follow [`docs/resend-setup.md`](docs/resend-setup.md) for email setup

4. **Set secrets**
   ```bash
   supabase secrets set RESEND_API_KEY=your_key
   supabase secrets set GOOGLE_CREDENTIALS_BASE64=your_credentials
   supabase secrets set GOOGLE_SHEET_ID=your_sheet_id
   ```

5. **Deploy**
   ```bash
   supabase functions deploy handle-registration
   supabase db push
   ```

For detailed instructions, see [`supabase/README.md`](supabase/README.md)

## 🎯 NAIC Registration Flow

```
User fills form → Supabase DB → Trigger fires → Edge Function
                                                      ↓
                                            ┌─────────┴─────────┐
                                            ↓                   ↓
                                    Google Sheets         Resend Email
                                    (Data Sync)          (Confirmation)
```

## 🌐 Deployment

The site is deployed on Vercel with automatic deployments from the main branch.

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Configure environment variables:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key
   ```
3. Deploy!

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_PROJECT_ID=your_project_id
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key
```

## 🧪 Development

### Run Development Server
```bash
npm run dev
```

### Lint Code
```bash
npm run lint
```

### Type Check
```bash
npx tsc --noEmit
```

## 📊 Database Schema (NAIC)

The `registrations` table stores all NAIC registration data:

- Team information (name, track, category)
- 4 team members (name, email, phone, IC, school, qualification, graduation date)
- Advisor details (name, email, phone, relationship)
- Metadata (created_at, heard_about)

See migrations in `supabase/migrations/` for full schema.

## 🔐 Security

- **Row Level Security (RLS)** enabled on all tables
- **Public insert** allowed for registrations (no auth required)
- **API keys** stored as encrypted Supabase secrets
- **CORS** configured for Edge Functions
- **Input validation** with Zod schemas

## 📧 Email Template (NAIC)

NAIC registration confirmation emails include:
- Registration confirmation
- Team details
- Track and category information
- Next steps
- Contact information

Customize the template in `supabase/functions/handle-registration/index.ts`

## 🐛 Troubleshooting

### Frontend Issues
- Clear browser cache and localStorage
- Check console for errors
- Verify environment variables are set

### Backend Issues
- Check Edge Function logs: `supabase functions logs handle-registration`
- Verify secrets are set: `supabase secrets list`
- Test database connection in Supabase dashboard

See [`supabase/README.md`](supabase/README.md) for detailed troubleshooting.

## 📚 Documentation

- [Backend Setup](supabase/README.md)
- [Google Sheets Setup](docs/google-sheets-setup.md)
- [Resend Email Setup](docs/resend-setup.md)
- [Automation Workflow](.agent/workflows/setup-backend-automation.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2026 Rakan Tutor. All rights reserved.

## 🆘 Support

For issues or questions:
- Check the documentation in `/docs`
- Review troubleshooting guides
- Contact the development team

---

**Built with ❤️ by Rakan Tutor**
