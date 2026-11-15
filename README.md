# Foundation: Static Web Portfolio

> **DE:** Statisches Web-Portfolio mit HTML, CSS & JS. Live gehostet auf GitHub Pages.
>
> **EN:** Static web portfolio built with HTML, CSS, and JS. Live on GitHub Pages.

**Live Production Demo:** [https://samuelankomahene.github.io/hello-world/](https://samuelankomahene.github.io/hello-world/)

---

## 1. Architecture Overview

This repository contains the foundational static web presentation layer developed during Month 1 of the FISI systems integration curriculum. It demonstrates semantic HTML5 structure, responsive CSS3 theming, and client-side JavaScript DOM manipulation.

### Technology Stack
* **Structure:** Semantic HTML5 (`index.html` & `index-en.html`)
* **Styling:** CSS3 Custom Properties & Responsive Layout (`style.css`)
* **Client Logic:** Vanilla JavaScript ES6+ (`script.js`)
* **Hosting:** GitHub Pages (Static CI/CD Deployment)

---

## 2. Client-Side Architecture & DOM Mapping

| Component / Selector | File | Technical Mechanism |
| :--- | :--- | :--- |
| `document.documentElement.lang` | `script.js` | Detects active page language (`de` or `en`) for localization |
| `#alertBtn` (`click`) | `script.js` | Triggers a localized modal greeting dialog (`Sie` / `en`) |
| `#themeBtn` (`click`) | `script.js` | Toggles `.light-mode` on `document.body` and updates label |
| `#hobbyBtn` (`click`) | `script.js` | Injects a random localized string (`tipsDE` / `tipsEN`) into `#hobbyText` |

---

## 3. Local Development Setup

Clone the repository and serve the static files over a local HTTP server:

```bash
git clone https://github.com/samuelankomahene/hello-world.git
cd hello-world
python3 -m http.server 8080
```

Open `http://localhost:8080` (`DE`) or `http://localhost:8080/index-en.html` (`EN`) in a browser.

---

## 4. Infrastructure Progression

This static portfolio is the first stage of a four-repository systems integration architecture:
1. **Static Web Layer:** [`hello-world`](https://github.com/samuelankomahene/hello-world)
2. **WSGI Routing Proof-of-Concept:** [`webserver`](https://github.com/samuelankomahene/webserver)
3. **Decoupled REST Client:** [`kontakte-gui`](https://github.com/samuelankomahene/kontakte-gui)
4. **Production Backend & SQLite API:** [`kontakte-api`](https://github.com/samuelankomahene/kontakte-api)
