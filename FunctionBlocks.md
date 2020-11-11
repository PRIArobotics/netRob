# Bewegungen

Führe zusammenhängend auf `Robot1` aus **

Bewege nach `V[1][2][3]` *// absolut*

Bewege um `V[1][2][3]` *// relativ*

Bewege `vorwärts/rückwärs/links/rechts/oben/unten` für `1` `mm`

Drehe `im/gegen den Uhrzeigersinn` um `180`° *// Z-Achse*

Drehe um Achse `V[1][2][3]` um `90`°

Bewege linear nach `V[1][2][3]` *// absolut*

Bewege linear um `V[1][2][3]` *// relativ*

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

Position von `Objekt1`

Kombiniere `P[1][2][3]` und `P[4][5][6]` *// Interne 4x4 Matrix Multiplication*

Entfernung zwischen `Objekt1` und `Roboter1`

Drehe `V[1][2][3]` um Achse `V[1][2][3]` um `90`°

`x/y/z/a/b/c` von `V[1][2][3]` *// Liefere Koordinate*

# Vector Operationen

Addiere `V[1][2][3]` und `V[4][5][6]`

Subtrahiere `V[1][2][3]` und `V[4][5][6]`

Multipliziere `V[1][2][3]` und `V[4][5][6]`

Multipliziere elementweise `V[1][2][3]` und `V[4][5][6]`

Multipliziere `V[1][2][3]` und `4`

Normalisiere `V[1][2][3]`
