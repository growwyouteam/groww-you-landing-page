# Groww You ERP - Design Document

## 1. Overview & Aesthetics
**Groww You ERP** features a modern, premium, and highly dynamic dark-themed design. The UI is built around **glassmorphism**, **neon glow effects**, and **smooth gradients** to create a stunning first impression and a futuristic feel. It avoids generic colors and flat designs, instead prioritizing vibrant accents on a deep dark canvas.

## 2. Technology Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS & Custom CSS (`globals.css`)
- **Animations**: Framer Motion (for dynamic enter/exit and scroll animations)
- **Icons**: Lucide React & React Icons
- **Typography**: Google Fonts (`next/font/google`)

## 3. Typography
Modern and clean typographic hierarchy relying on variable fonts.
- **Headings (H1 - H6)**: `Poppins` (var(--font-poppins))
  - Used for impactful, bold section titles (`.section-title`).
- **Body Text**: `Inter` (var(--font-inter))
  - Clean and highly legible for paragraphs, buttons, and UI text.

## 4. Color Palette
The color system is built on a deep slate background with vibrant "aurora" style accents.

### Backgrounds
- **Main Background**: `#0F172A` (Deep Slate / Navy)
- **Surface**: `#1E293B` (Lighter Slate for contrast)
- **Glass Card**: `rgba(255, 255, 255, 0.03)` with backdrop blur

### Accents & Gradients
- **Primary Gradient**: Orange to Purple (`bg-gradient-to-br from-orange-400 to-purple-400`)
- **Primary Color**: `#2563EB` (Blue)
- **Secondary Color**: `#8B5CF6` (Purple)
- **Accent Orange**: `#EF4B21` (High-energy call-to-action color)
- **WhatsApp Green**: `#22C55E` (Used for contact/trust buttons)

### Text Colors
- **Main Text**: `#F8FAFC` (Near White)
- **Muted Text**: `#94A3B8` (Slate Gray)
- **Dark Text**: `#334155` (For inverted surfaces)

## 5. UI Elements & Components

### Glassmorphism System
- `.glass-panel`: `rgba(15, 23, 42, 0.6)` with `blur(16px)`. Used for sticky headers or floating elements.
- `.glass-card`: `rgba(255, 255, 255, 0.03)` with `blur(12px)` and subtle borders. Used for feature boxes, testimonials, and solution steps. Includes a smooth hover state that lifts the card (`translateY(-5px)`) and intensifies the border glow.

### Buttons
- **Primary Button (`.btn-primary`)**: 
  - Vibrant Orange to Purple gradient.
  - Features an intense orange glow shadow (`0 0 30px rgba(239, 75, 33, 0.25)`).
  - Includes a dynamic sweep animation on hover using a pseudo-element.
- **WhatsApp Button (`.btn-whatsapp`)**:
  - Dark slate background with a neon green border.
  - Pulses a green glow (`var(--accent-glow)`) and turns solid green on hover.

### Effects & Atmosphere
- **Aurora Glow (`.aurora-glow`)**: A radial gradient blur combining Orange, Purple, and Blue placed behind sections to create a sense of depth and atmospheric lighting.
- **Grid Background (`.grid-bg`)**: A subtle geometric grid overlay on the very back layer (`z-index: -2`) to reinforce a structural, technical feel.
- **Text Gradient (`.text-gradient`)**: Used selectively on key phrases to make them pop against the dark background.

## 6. Page Structure & Sections
The primary landing page (`src/app/page.tsx`) flows logically to build trust, identify the problem, and present the ERP solution:

1. **Hero**: High-impact value proposition, main CTA, and dynamic background.
2. **TrustNumbers**: Animated statistics (using `react-countup`) proving scale and success.
3. **Trust**: Logos of trusted partners or clients.
4. **Problem**: Empathizing with the user's current pain points.
5. **Solution**: Introducing Groww You ERP as the answer.
6. **Features**: Grid of glass-cards detailing specific capabilities.
7. **WhyChoose**: Differentiating factors against competitors.
8. **Gallery**: Visual showcase of the software interface.
9. **DemoVideo**: Embedded interactive or auto-playing demo.
10. **Testimonials**: Social proof via client reviews (using `swiper` for a carousel).
11. **LeadForm**: Final conversion point (using `react-hook-form` and `resend` for email).
12. **FAQ**: Expandable accordion of common questions.

## 7. Responsiveness & Layout
- Mobile-first approach using standard Tailwind breakpoints (`md:`, `lg:`, `xl:`).
- `section` padding scales down on mobile (from `100px` to `60px`).
- Centralized `.container` utility caps maximum width to `1280px` for optimal readability on ultrawide screens.
