# Panda Tattoo Studio Website

A modern, responsive portfolio and booking website for Panda Tattoo Studio featuring a dark theme, bilingual support (English/Spanish), and organized tattoo galleries.

## Features

### 🎨 Design
- **Dark Theme**: Clean black and white design with elegant gradients
- **Responsive**: Fully optimized for mobile, tablet, and desktop devices
- **Modern UI**: Smooth animations and transitions
- **Gradient Buttons**: Eye-catching call-to-action buttons with gradient effects

### 🖼️ Portfolio
- **Organized by Style**: Tattoos categorized into:
  - Neo Traditional
  - Realism
  - Traditional
- **Filter System**: Easy-to-use filtering to view specific tattoo styles
- **Hover Effects**: Interactive portfolio items with smooth animations

### 📅 Booking System
- **Online Booking Form**: Complete form for appointment requests
- **Contact Page**: Easy way for clients to get in touch
- **Form Validation**: Ensures all required information is provided

### 🌐 Bilingual Support
- **English & Spanish**: Full website translation
- **Language Toggle**: Easy switching between languages
- **Dynamic Content**: All text updates instantly when changing language

### 📱 Mobile Responsive
- **Mobile Menu**: Hamburger menu for easy navigation on small screens
- **Touch-Friendly**: All interactive elements optimized for touch
- **Flexible Layout**: Adapts beautifully to any screen size

## File Structure

```
PandaTattoo/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript for interactivity and language toggle
└── README.md          # This file
```

## How to Use

### Opening the Website
1. Simply open `index.html` in any modern web browser
2. No server or installation required!

### Navigation
- Click on navigation links to jump to different sections
- Use the language toggle (EN/ES) in the top right to switch languages
- On mobile, tap the hamburger menu icon to access navigation

### Portfolio Filtering
- Click on style buttons to filter tattoos by category
- "All Styles" shows the complete portfolio

### Booking
1. Navigate to the Booking section
2. Fill out all required fields
3. Select your preferred date and tattoo style
4. Click "Submit Booking"

### Contact
- Use the Contact form to send messages
- Find contact information including phone, email, and hours

## Customization

### Adding Your Own Tattoo Images
Replace the image URLs in `index.html` (search for `https://images.unsplash.com`) with your own image paths:

```html
<img src="your-image-path.jpg" alt="Your tattoo description">
```

### Changing Colors
Edit the CSS variables in `styles.css` at the top:

```css
:root {
    --primary-bg: #0a0a0a;        /* Main background color */
    --secondary-bg: #121212;       /* Secondary background */
    --accent-bg: #1a1a1a;         /* Accent background */
    --text-primary: #ffffff;       /* Primary text color */
    --text-secondary: #b0b0b0;    /* Secondary text color */
    --gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Updating Contact Information
Edit the contact section in `index.html`:
- Address
- Phone number
- Email
- Business hours

### Adding New Language Translations
Add `data-XX` attributes to elements where XX is your language code:

```html
<h2 data-en="Hello" data-es="Hola" data-fr="Bonjour">Hello</h2>
```

Then update the language toggle in `script.js`.

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **Vanilla JavaScript**: No dependencies required
- **Font Awesome**: Icons (loaded via CDN)

## Future Enhancements

Consider adding:
- Backend integration for form submissions
- Image gallery lightbox
- Artist profiles section
- Client testimonials
- Instagram feed integration
- Online payment processing
- Real-time booking calendar

## License

This website is created for Panda Tattoo Studio. All rights reserved.

## Support

For questions or support, contact: info@pandatattoo.com

---

**Made with ❤️ for Panda Tattoo Studio**


