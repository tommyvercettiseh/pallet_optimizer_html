# Changelog

## 0.3.0 · 2026-09-03

- PNG-download behoudt nu de originele canvasverhouding en wordt niet meer uitgerekt
- `Pallet Qty` in de interface verduidelijkt naar `Items / pallet`
- Subtiele grijze `Last update` badge toegevoegd met 30% transparante achtergrond
- Live publicatiepad bijgewerkt naar `https://www.hesseldevries.com/pallet-optimizer/`
- Service Worker vernieuwd naar cacheversie `0.3.0`
- Nieuwe Service Worker haalt online eerst de nieuwste bestanden op en valt offline terug op cache
- Service Worker activeert nieuwe releases directer met `skipWaiting()` en `clients.claim()`
- Regression tests uitgebreid met nul-lagen, te grote dozen en custom pallets

## 0.1.0

- Eerste volledige statische HTML-versie
- Bestaande Pallet Optimizer-layout behouden
- Python/FastAPI-backend vervangen door browser-JavaScript
- Gemengde palletindelingen via region-based optimizer
- Responsive 3D Canvas-weergave
- Hoogteadvies en PNG-export
- PWA-manifest en offline cache
- Turbo Repo Hub-manifest en Windows-launcher
- Hostnet-ready zonder buildstap
