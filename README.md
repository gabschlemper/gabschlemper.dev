# Personal Portfolio Website

A modern, responsive personal portfolio website showcasing my skills, experience, and projects as a Full Stack Developer. Built with cutting-edge technologies and featuring a clean, professional design with multi-language support.

## ✨ Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Multi-language Support**: Available in English, Portuguese, and Spanish
- **Dark/Light Theme**: Toggle between themes for better user experience
- **Modern UI Components**: Built with shadcn/ui for consistent, accessible design
- **Smooth Animations**: Engaging fade-in animations and transitions
- **Performance Optimized**: Fast loading times with Vite bundler
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gabschlemper.dev
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Contact.tsx     # Contact section
│   ├── Experience.tsx  # Work experience section
│   ├── Hero.tsx        # Hero/landing section
│   ├── Skills.tsx      # Skills and technologies
│   └── ...
├── contexts/           # React contexts
│   ├── LanguageContext.tsx  # Multi-language support
│   └── ThemeContext.tsx     # Theme management
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── styles/             # Global styles
```

## 🌐 Multi-language Support

The website supports three languages:
- **English** (default)
- **Portuguese** 
- **Spanish**

Language switching is handled through React Context and can be toggled using the language selector in the navigation.

## 🎨 Customization

### Themes
The website supports both light and dark themes. Theme preference is managed through React Context and persisted in localStorage.

### Colors
Color scheme can be customized in `tailwind.config.ts`. The project uses CSS custom properties for theme-aware colors.

### Content
All text content is managed through the translation system in `src/contexts/LanguageContext.tsx`, making it easy to update or add new languages.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🚀 Deployment

The project can be deployed to any static hosting service:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

Simply run `npm run build` and deploy the `dist` folder.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

## 📞 Contact

For any questions or collaboration opportunities, feel free to reach out through the contact form on the website or connect with me on social media.

---

Built with ❤️ using React, TypeScript, and modern web technologies.
