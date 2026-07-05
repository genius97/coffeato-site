Coffeato — Multi-page website
==============================

Structure:
  index.html      الرئيسية (Home)
  story.html      قصتنا (Our Story)
  menu.html       القائمة (Menu)
  gallery.html    المعرض (Gallery)
  location.html   الموقع (Visit Us)
  contact.html    تواصل (Contact + Google reviews)
  styles.css      shared styles
  script.js       shared JS (language toggle + persistence, menu tabs, WhatsApp links)
  assets/         images

How to deploy:
  Upload the entire folder (keep the structure) to any static host or your
  Coolify/VPS (e.g. serve as a static site). index.html is the entry point.
  Everything is relative-path, so no configuration is needed.

How to preview locally:
  Because it uses multiple files, open it via a local server (not file://):
    cd coffeeato-multipage
    python3 -m http.server 8080
  then visit http://localhost:8080

Notes:
  - Language (AR/EN) is remembered across pages via localStorage.
  - Google Fonts loads from the internet (works once hosted online).
