# War Echo

> Step into the most defining moments of human civilization through immersive WebVR experiences.

War Echo is a static, dependency-free WebVR site that turns four pivotal historical events into 360° interactive scenes. It runs on any modern browser, on desktop, mobile, or a VR headset (Oculus, Vive, Cardboard).

## Scenes

| Era | Event | Year |
| --- | --- | --- |
| Ancient Warfare | Battle of Thermopylae | 480 BC |
| World War II | D-Day: Normandy Landing | 1944 |
| Space Exploration | Apollo 11: Moon Landing | 1969 |
| Modern Revolution | Fall of the Berlin Wall | 1989 |

Each scene has 3–4 timeline phases with narration and clickable hotspots that surface historical context.

## Tech stack

- Plain HTML / CSS / JavaScript — no build step.
- [A-Frame](https://aframe.io) 1.5 (loaded from CDN) for the VR scene graph.
- Google Fonts: Cinzel + Inter.

## Run locally

The site is fully static — any HTTP server will do. The built-in Python server is the lowest-friction option:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Or, with Node:

```bash
npx serve .
```

Opening `index.html` directly via `file://` will also work for the landing page, but `vr.html` needs an HTTP origin so the browser can fetch the panoramic sky textures.

## Project layout

```
.
├── index.html      # Landing page (hero, events grid, features, footer)
├── vr.html         # A-Frame VR scene container
├── app.js          # Scene engine: data, timeline, hotspots, info panel
├── styles.css      # Landing-page design system
├── assets/         # Card thumbnails + 360° sky textures
└── README.md
```

`app.js` exports nothing; it self-bootstraps from the `?scene=<id>` query parameter on `vr.html`.

## Controls (in VR scene)

| Action | Input |
| --- | --- |
| Look around | Drag / move headset |
| Move | `W` `A` `S` `D` |
| Activate hotspot | Click / gaze |
| Next / previous phase | `→` / `e`, `←` / `q` |
| Close info panel | `Esc` |
| Enter immersive VR | A-Frame's goggle button (bottom-right) |

## Accessibility

- Event cards are keyboard-focusable buttons with visible focus rings.
- Animations, the loader delay, and the ambient particles are gated on `prefers-reduced-motion`.
- The VR page provides a `<noscript>` fallback and a graceful error overlay if the A-Frame CDN can't be reached.

## Adding a new scene

1. Drop a 360°-equirectangular image into `assets/sky_<id>.png` and a card thumbnail into `assets/card_<id>.png`.
2. Add a `<button class="event-card" onclick="enterVR('<id>')">…</button>` block to `index.html`.
3. Append a `<id>: { title, year, sky, ambientColor, lightColor, phases: [...] }` entry to the `SCENES` object at the top of `app.js`.

## Credits

- Built with [A-Frame](https://aframe.io).
- Typography: [Cinzel](https://fonts.google.com/specimen/Cinzel) and [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts.

## License

[MIT](LICENSE)
