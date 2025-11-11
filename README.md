<<<<<<< HEAD
# Tech Pioneers Club - Landing Page

A modern, animation-rich landing page for Tech Pioneers Club built with React and Next.js.

## 🎨 Brand Colors (Extracted from Logo)

- **Primary Blue**: `#1E7BB8` - Main brand color representing trust and technology
- **Black**: `#000000` - For contrast and modern aesthetic
- **White**: `#FFFFFF` - Clean, modern spacing
- **Accent Blue**: `#2B9FD9` - Lighter blue for highlights

## 📁 Project Structure

\`\`\`
tech-pioneers-club/
├── app/
│   ├── page.jsx              # Main homepage
│   ├── layout.jsx            # Root layout (default)
│   └── globals.css           # Global styles with brand colors
├── components/
│   ├── sections/
│   │   ├── Hero.jsx          # Hero section with logo and CTA
│   │   ├── AboutSnippet.jsx  # Brief introduction
│   │   ├── Highlights.jsx    # Key offerings cards
│   │   ├── AboutUs.jsx       # Detailed about section
│   │   ├── WhyJoinUs.jsx     # Benefits section
│   │   ├── Programs.jsx      # 5-stage program overview
│   │   ├── Contact.jsx       # Contact information
│   │   └── Footer.jsx        # Footer with language toggle
│   └── ui/                   # Reusable UI components (default)
└── package.json
\`\`\`

## ✨ Animation Features

All animations are powered by **Anime.js** for smooth, professional transitions:

### Hero Section
- Logo fade-in with scale animation
- Staggered text entrance (headline → subheadline → quote)
- Button hover effects with scale transformation
- Animated background gradient blobs

### Highlights Section
- Staggered card entrance animations
- Hover effects with lift and scale
- Sequential reveal on scroll

### About Us Section
- Fade-up animations for each content block
- Scroll-triggered entrance effects
- Smooth transitions between sections

### Why Join Us Section
- Timeline-based animation sequence
- Staggered benefit cards from left
- CTA scale animation

### Programs Section
- Staggered stage cards with scale effect
- Hover interactions with border color change
- Smooth entrance on scroll

### Contact Section
- Staggered fade-in for contact methods
- Social link hover effects

## 🚀 Getting Started

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Key Features

- ✅ Fully responsive design
- ✅ Smooth Anime.js animations throughout
- ✅ Brand colors extracted from logo
- ✅ Modular component architecture
- ✅ Scroll-triggered animations
- ✅ Interactive hover effects
- ✅ Language toggle (EN/AR)
- ✅ Dark mode support
- ✅ Accessibility-focused

## 📱 Sections Included

1. **Hero** - Welcome message with logo and CTAs
2. **About Snippet** - Brief community introduction
3. **Highlights** - 4 key offerings in animated cards
4. **About Us** - Who we are, mission, vision, objectives
5. **Why Join Us** - Benefits and persuasive copy
6. **Programs** - 5-stage program breakdown
7. **Contact** - Email, website, and social links
8. **Footer** - Copyright and language toggle

## 🎨 Customization

### Colors
Edit `app/globals.css` to modify the color scheme:
\`\`\`css
--color-primary: #1E7BB8;
--color-accent: #2B9FD9;
\`\`\`

### Animations
Modify animation parameters in component files:
\`\`\`javascript
anime({
  targets: element,
  opacity: [0, 1],
  duration: 800,
  easing: 'easeOutExpo',
});
\`\`\`

## 📚 Animation Library

This project uses [Anime.js](https://animejs.com/) for all animations.

### Common Animation Patterns Used:
- `opacity: [0, 1]` - Fade in
- `translateY: [30, 0]` - Slide up
- `scale: [0.9, 1]` - Scale up
- `anime.stagger()` - Sequential delays
- `IntersectionObserver` - Scroll-triggered animations

## 🌐 Deployment

Deploy to Vercel with one click or build for production:

\`\`\`bash
npm run build
npm start
\`\`\`

## 📄 License

© 2025 Tech Pioneers Club. All rights reserved.
=======
# Tech_Club
Tech Pioneers Club is a volunteer-driven initiative dedicated to empowering youth and communities through free access to technology education, innovation, and digital collaboration. Our mission is to inspire , creativity, and problem-solving by providing a supportive environment for learning coding, digital skills, and project-based volunteering.
>>>>>>> 814a6fba1cd18ee1a49bfdbaa3cf39faa708945d
