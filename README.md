# Dope Digital - Professional Business Page

A modern, professional business website for Dope Digital, built with Next.js 14, TypeScript, and Tailwind CSS. Ready for deployment on Vercel.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML
- **TypeScript**: Full type safety throughout the codebase
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd dope_digital
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚢 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account

3. Click "New Project" and import your GitHub repository

4. Vercel will automatically detect Next.js and configure the build settings

5. Click "Deploy" - your site will be live in minutes!

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

## 🔧 Configuration

### Environment Variables

#### Email Setup (Required for Contact Form)

The contact form uses Resend to send emails. You need to set up a Resend API key:

1. **Get a Resend API Key:**
   - Sign up at [resend.com](https://resend.com) (free tier available)
   - Go to API Keys in your dashboard
   - Create a new API key

2. **Set up environment variables:**

   **For local development:**
   - Create a `.env.local` file in the root directory
   - Add your Resend API key:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

   **For Vercel deployment:**
   - Go to your project settings in Vercel
   - Navigate to Environment Variables
   - Add `RESEND_API_KEY` with your API key value
   - Redeploy your application

3. **Update the sender email (optional):**
   - By default, emails are sent from `onboarding@resend.dev`
   - To use your own domain, verify it in Resend and update the `from` field in `app/api/contact/route.ts`
   - Change: `from: 'Dope Digital Contact Form <onboarding@resend.dev>'`
   - To: `from: 'Dope Digital Contact Form <noreply@yourdomain.com>'`

**Note:** All contact form submissions will be sent to `macoovae@gmail.com` (configured in the API route).

### Customization

- **Colors**: Edit `tailwind.config.ts` to change the color scheme
- **Content**: Update component files in `/components` directory
- **Metadata**: Modify `app/layout.tsx` for SEO information

## 📁 Project Structure

```
dope_digital/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services section
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── public/              # Static assets (add images here)
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎨 Customization Guide

### Changing Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Update these values to match your brand
    600: '#your-color',
  },
}
```

### Updating Content

- **Hero Section**: Edit `components/Hero.tsx`
- **Services**: Modify the `services` array in `components/Services.tsx`
- **About Section**: Update `components/About.tsx`
- **Contact Info**: Change contact details in `components/Contact.tsx`

### Adding Images

1. Place images in the `/public` directory
2. Reference them in components:
```tsx
<Image src="/your-image.jpg" alt="Description" width={500} height={300} />
```

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

For support, email hello@dopedigital.com or open an issue in the repository.

---

Built with ❤️ by Dope Digital

