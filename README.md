# MHS Daily Schedule — 2025–2026

A PWA (Progressive Web App) for Minnetonka High School's daily schedule.

## Design
Neo-brutalist × Vercel aesthetic — dark, monospace, high contrast.

## Features
- ✅ Full schedule for Week A / Week B
- ✅ Live countdown timer per period
- ✅ Lunch selection (1, 2, 3)
- ✅ Date navigation
- ✅ Push notifications (1 min before period ends)
- ✅ PWA — installable on iOS & Android
- ✅ Custom themes (Dark, Light, Green, Blue, Red, Custom)
- ✅ Quick bookmarks
- ✅ Sign/TV mode
- ✅ AI Chat (NanoChat)
- ✅ Confetti celebrations

## File Structure

```
mhs-schedule/
├── index.html          ← Main app
├── style.css           ← Neo-brutalist styles
├── app.js              ← Schedule data + logic
├── sw.js               ← Service Worker (PWA + Push)
├── manifest.json       ← PWA manifest
├── icon.png            ← App icon (place your icon here)
└── .github/
    └── workflows/
        └── deploy.yml  ← GitHub Pages auto-deploy
```

## Deploy to GitHub Pages

1. Create a new GitHub repo
2. Upload all files (keep the folder structure)
3. **Place your `icon.png`** in the root folder
4. Go to **Settings → Pages**
5. Set source to **GitHub Actions**
6. Push to `main` — it deploys automatically

Your app will be live at:  
`https://<your-username>.github.io/<repo-name>/`

## PWA Icon

Place your icon file at `icon.png` in the root.  
For best results: 512×512px, square, PNG format.

## Push Notifications

Push notifications work via the browser's Notification API.  
Users enable them from the Settings section in the app.  
They receive a local notification 1 minute before each period ends.

> Note: For background push (when app is closed), you'd need a push server with VAPID keys. The current implementation uses foreground/local notifications.

## Local Dev

Just open `index.html` in a browser — no build step needed.

```bash
# Optional: use a local server for SW to work
npx serve .
# or
python3 -m http.server 8080
```

## Credits

Created by Sawyer Schulz — 035665@mtka.org
