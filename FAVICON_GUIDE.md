# Favicon Setup Guide

A basic SVG favicon has been created at `/public/favicon.svg`. For best compatibility across all browsers and devices, you should generate additional favicon formats.

## Quick Setup (Recommended)

Use an online favicon generator to create all required sizes from your logo:

1. **Option 1: Use favicon.io or realfavicongenerator.net**
   - Upload your logo (or use the SVG at `/public/favicon.svg`)
   - Generate all favicon formats
   - Download and place the following files in `/public/`:
     - `favicon.ico` (16x16, 32x32, 48x48)
     - `favicon-16x16.png`
     - `favicon-32x32.png`
     - `apple-touch-icon.png` (180x180)
     - `favicon-192x192.png` (for manifest)
     - `favicon-512x512.png` (for manifest)

2. **Option 2: Use your existing logo.png**
   - If you have a logo at `/public/logo.png`, you can use an online tool to convert it to all required favicon formats

## Required Files

Place these files in the `/public/` directory:

- `favicon.ico` - Main favicon (multi-size ICO file)
- `favicon.svg` - SVG favicon (already created)
- `favicon-16x16.png` - 16x16 PNG
- `favicon-32x32.png` - 32x32 PNG
- `apple-touch-icon.png` - 180x180 PNG (for iOS)
- `favicon-192x192.png` - 192x192 PNG (for Android)
- `favicon-512x512.png` - 512x512 PNG (for Android)

## Testing

After adding the favicon files:
1. Clear your browser cache
2. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. Check that the favicon appears in the browser tab

## Open Graph Image

For social media sharing, create an Open Graph image:
- Size: 1200x630 pixels
- Place at: `/public/og-image.png`
- This will be used when sharing your site on Facebook, Twitter, LinkedIn, etc.



