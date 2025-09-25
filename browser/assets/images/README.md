# Images Directory

## 📸 How to Add Your Profile Photo

1. **Add your profile photo** to this directory with the name `profile-photo.jpg`
   - Recommended size: 400x400 pixels or larger (square format works best)
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - The image will be automatically cropped to a circle

2. **Alternative naming**: If you want to use a different name or format, update the path in:
   `src/app/components/hero/hero.html` - line with the `<img>` tag

## 🖼️ Project Images

For your project images, add them here with descriptive names like:
- `project-ecommerce.jpg`
- `project-dashboard.png`
- `project-mobile-app.jpg`

Then update the `imageUrl` property in `src/app/components/projects/projects.ts`

## 💡 Tips

- **Optimize your images** for web (compress them to reduce file size)
- **Use consistent naming** for easier management
- **Square images work best** for the profile photo (will be cropped to circle)
- **High resolution images** will look better on retina displays

## 🔄 If you don't have a photo yet

The system will show a broken image icon until you add `profile-photo.jpg`. You can:
1. Add a temporary placeholder image
2. Use a professional headshot
3. Use an avatar or illustration that represents you

## 📁 Current Expected Files

- `profile-photo.jpg` - Your main profile photo for the hero section
- `project1.jpg`, `project2.jpg`, etc. - Screenshots of your projects