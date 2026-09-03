# Pallet Optimizer HTML

Volledig statische palletcalculator in HTML, CSS en JavaScript. De app behoudt de goedgekeurde Pallet Optimizer-layout en draait zonder Python-backend, database of externe API.

## Live website

De actuele browserversie staat op:

```text
https://www.hesseldevries.com/pallet-optimizer/
```

## Functies

- Europallet, blokpallet, halve pallet en custom maten
- Rechte, gedraaide en gemengde laagindelingen
- Hoogteadvies voor een extra laag
- 3D Canvas-visualisatie
- PNG-export met behoud van beeldverhouding
- Offline PWA-cache met online updatevoorkeur
- Responsive voor desktop en mobiel
- Geen gegevensverwerking op een server

## Lokaal starten

Dubbelklik op `Start Pallet Optimizer.bat` of open `index.html` rechtstreeks in een moderne browser.

## Publiceren

Publiceer de inhoud van deze repository naar het pad van de live website:

```text
/pallet-optimizer/
```

Er zijn geen packages, buildstappen of serverprocessen nodig.

## Techniek

- HTML5
- CSS3
- Vanilla JavaScript
- Canvas 2D
- Service Worker
- Browser-native branch-and-bound/region heuristic

## Betrouwbaarheid

De app toont `Optimized` wanneer de gevonden indeling gelijk is aan de theoretische oppervlaktegrens. In andere gevallen toont hij eerlijk `Best found`; dan is de uitkomst sterk maar niet mathematisch bewezen zoals bij de oude OR-Tools-serverversie.
