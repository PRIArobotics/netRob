# Bewegungen

Führe zusammenhängend auf `Robot1` aus

Bewege nach `Pose` *// absolut*

Bewege um `Pose` *// relativ*

Bewege linear nach `Pose` *// absolut*

Bewege linear um `Pose` *// relativ*

Bewege `vorwärts/rückwärs/links/rechts/oben/unten` für `1` `mm` *// relativ*

Drehe `im/gegen den Uhrzeigersinn` um `180`° *// Z-Achse*

Drehe um Achse `Vector` um `90`°

# Bewegungseinstellungen

Setze Geschwindigkeit auf `1` `mm/s`

Setze Beschleunigung auf `1` `mm/s^2`

Schalte Werkzeug `ein/aus`

Schalte Werkzeug auf Wert `0.5`

Wechsle auf Werkzeug `Sauggreifer/Parallelgreifer`

Warte für `1` `ms`

# Pose Operationen

x:`1`, y:`2`, z:`3` *// Konstruktor x,y,z,0,0,0*

x:`1`, y:`2`, z:`3`, c:`3` *// Konstruktor x,y,z,0,0,c*

x:`1`, y:`2`, z:`3`, a:`4`, b:`5`, c:`6` *// Konstruktor x,y,z,a,b,c*

position: `Vector` rotation: `Vector`

Pose von `Objekt1/Roboter1`

Kombiniere `Pose` und `Pose` *// Interne 4x4 Matrix Multiplication*

Entfernung zwischen `Pose` und `Pose`

`x/y/z/a/b/c` von `Pose` *// Liefere Koordinate*

Rotation von `Pose`

Position von `Pose`

Rotiere `Pose` um Achse `Vector` um `90`°

# Vector Operationen

Addiere `Vector` und `Vector`

Subtrahiere `Vector` und `Vector`

Multipliziere `Vector` und `Vector`

Multipliziere elementweise `Vector` und `Vector`

Multipliziere `Vector` und `4`

Normalisiere `Vector`
