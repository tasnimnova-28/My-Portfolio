# 🚀 Personal Portfolio — Next.js + Tailwind + Framer Motion

A modern, animated personal portfolio website built for beginner web developers.

---

## ✨ Features

- **Loading Screen** — Animated intro when site first opens
- **Custom Cursor** — Dot + ring combo with hover expansion
- **Hero Section** — Animated avatar with floating tech badges
- **About Section** — Code-style bio with scroll animations
- **Skills Section** — Animated progress bars with tab switching
- **Projects Section** — Cards with hover effects and demo/GitHub links
- **Contact Form** — Form with send animation + social media links
- **Dark Mode** — Beautiful dark theme with cyan/purple accent colors
- **Fully Responsive** — Works on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **React Intersection Observer**

---

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## 📝 Personalizing Your Portfolio

Search for `📝 REPLACE` comments throughout the code — these mark every place you need to update with your own info.

### Quick checklist:

#### 1. Basic Info
- [ ] `app/layout.tsx` → Update page title and description
- [ ] `components/Navbar.tsx` → Change `<YN />` to your initials
- [ ] `components/Footer.tsx` → Update name and initials
- [ ] `components/LoadingScreen.tsx` → Change `YN` to your initials

#### 2. Hero Section (`components/Hero.tsx`)
- [ ] Replace `"Your Name"` with your actual name
- [ ] Update the tagline/intro text
- [ ] Update the stats (projects, years, etc.)

#### 3. Add Your Photo
- [ ] Add your photo as `public/avatar.jpg`
- [ ] Open `components/FloatingAvatar.tsx`
- [ ] Delete the placeholder div
- [ ] Uncomment the `<Image>` component

#### 4. About Section (`components/About.tsx`)
- [ ] Replace the code snippet with your info (name, university, etc.)
- [ ] Write your own bio paragraphs
- [ ] Update "currently exploring" tags
- [ ] Add your resume PDF as `public/resume.pdf`

#### 5. Skills (`components/Skills.tsx`)
- [ ] Update skill names and percentages to match your actual skills
- [ ] Add or remove skills as needed

#### 6. Projects (`components/Projects.tsx`)
- [ ] Replace all project entries with your real projects
- [ ] Update GitHub links to your actual repos
- [ ] Update demo links if available
- [ ] Optionally add screenshots to `public/projects/` folder

#### 7. Contact (`components/Contact.tsx`)
- [ ] Update all social media links
- [ ] Replace email address
- [ ] Set up a real form service (Formspree recommended):
  1. Go to https://formspree.io
  2. Create a free account and get your form ID
  3. Uncomment the Formspree code in `handleSubmit`

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles, animations, cursor
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── LoadingScreen.tsx # Animated loading intro
│   ├── CustomCursor.tsx  # Custom mouse cursor
│   ├── Navbar.tsx        # Sticky navigation
│   ├── Hero.tsx          # Hero/landing section
│   ├── FloatingAvatar.tsx # Animated avatar with rings
│   ├── About.tsx         # About me section
│   ├── Skills.tsx        # Skills with progress bars
│   ├── Projects.tsx      # Projects showcase
│   ├── Contact.tsx       # Contact form + social links
│   └── Footer.tsx        # Footer
├── public/
│   ├── avatar.jpg        # ← Add your photo here!
│   └── resume.pdf        # ← Add your resume here!
└── README.md
```

---

## 🚀 Deployment

Deploy for free on Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and connect to Vercel at https://vercel.com

---

## 🎨 Customizing Colors

Open `tailwind.config.js` and update the `colors` section:

```js
accent: "#00e5ff",   // Main accent (cyan by default)
accent2: "#7c3aed",  // Secondary accent (purple)
accent3: "#f97316",  // Tertiary accent (orange)
```

---

## 💡 Tips

- Run `npm run build` before deploying to check for errors
- Keep project descriptions short and impactful (1-2 sentences)
- Use real screenshots for projects when you have them
- Update the "available for work" status in Contact.tsx when needed

---

Built with ❤️ — Happy coding! 🚀
