# Aprenent REACT NATIVE

REACT NATIVE és un framework de JavaScript creat per META (i.e. Facebook) que permet als desenvolupadors d'aplicacions i webs crear codis multi-plataforma (eng: *cross-platform*) fent servir JavaScript i React.

En aquest document, i serie de directoris relacionats, trobarem tots els meus apunts i notes del procès d'aprenentatge de REACT NATIVE.

## REQUISITS

### Eines
Per tal de poder següir el contingut d'aquest resum es recomana instal·lar les següents eines:

- [VS Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en)

Segiu les instruccions que trobareu o a les pàgines web o a internet per instal·lar aquestes eines.

Per comprovar si tenim els recursos disponibles es pot obrir una nova terminal i escriure les següents comandes:

```bash
# Versió de NodeJS
node -v

# Versió de Git
git -v

# Versió de NPM
npm -v
```

Addicionalment, si volem desenvolupar aplicacions per a telèfons mòbils (Android o iOS) tenim dues opcions per veure els resultats del nostre programari. 
- **ExpoGO:** ExpoGO és una aplicació que ens podem descarregar per als dos models de telèfons diferents i que ens servirà per poder veure les apps que estem desenvolupant directament al nostre dispositiu.
- **Emuladors d'Android i iOS:** Alternativament, sempre podem muntar un emulador del sistema operatiu que desitgem per desenvolupar l'aplicatiu (Android: *Android Studio*; iOS: *Xcode*). Per a emuladors d'iOS caldrà fer servir un MAC. 

Per a més informació sobre els requisits consulteu la pàgina oficial d'[Expo](https://docs.expo.dev/get-started/set-up-your-environment/).

### Coneixements

En fer aquest resum s'assumeixen coneixements prèvis de **HTML**, **JS** i **CSS** (i.e. els llenguatges web). No cal saber REACT per seguir aquest resum.


## PRIMERES PASSES

Molts dels tutorials i recursos online ens recomanen fer servir REACT NATIVE a través d'un framework, per tant, s'ha decidit fer servir [EXPO](https://expo.dev/) per sobre de REACT NATIVE.

### Crear un projecte
Per crear un projecte amb EXPO farem servir la comanda:

```bash
npx create-expo-app@latest # --template default@sdk-57 # Comento el template pq com a mínim amb el template m'ha funcionat
```

Aquesta comanda es pot executar des de l'arrel del projecte, ja que crearà un subdirectori amb tot el contingut de la web, evitant la necessitat de crear subdirectoris per cada exercici.

### Executar un projecte
Per executar un projecte es pot fer servir la següent comanda:

```bash
npx expo start
```

Aquesta comanda ens donarà (entre d'altres) un codi QR. Aquest codi QR es pordà escanejar des de l'apliacació d'ExpoGO i ens 
### Continguts del directori del projecte

Un cop executada la comanda se'ns mostrarà un directori amb un munt de fitxers i directoris. En aquesta secció n'explorarem uns quants. 

El llistat de directoris i fitxers està ordenat per ordre d'importància i alguns es troben agrupats per temàtiques.



#### → src/* (*Source*)

Aquest és el directori principal de la nostra aplicació i a on podrem trobar tot el codi font. 

Per tal de mantindre els projectes nets i ordenats, aquest directori es sol dubdividir en els següents subdirectoris:

- **src/app/\* :** Aquesta carpeta es fa servir per l'enroutament basat en fitxers. En altres paraules, cada fitxer que es troba en aquest directori fa referència a una pàgina diferent dins de l'aplicació (p.e. index.tsx (i.e. pàgina principial), userProfile.tsk, explore.tsx...).
- **src/components/\* :** En aquest directori es poden trobar tots els components reutilitzables de la app (p.e. Button, UserCard, TextInput...).
- **src/constants/\* :** Directori que serveix per a guardar valors fixos de la app (p.e. API endpoints, URLs, paletes de colors...).
- **src/hooks/\* :** Directori on es desen els Custom Hooks de React (funcions lògiques reutilitzables que fan servir useState, useEffect, etc.). (NO TINC ENCARA CLAR EL PROPÒSIT D'AQUESTA CARPETA).

#### → assets/*

Clàssica carpeta a on s'enmagatzemen les imatges, icones, fonts o altres recursos de l'aplicació.

#### → app.json

Arxiu de configuració principal d'Expo. Aquí es poden definir el nom de l'aplicació, el nom de paquet per a Android/iOS, la versió i les icones de l'app entre d'altres.

#### → package.json, node_modules/* i package-lock.json

És un fitxer que actua com una documentació (*manifest*) del projecte, conté informació sobre:
- **Metadata del projecte:** Nom, versió i punt d'entrada (main).
- **Dependències (*Dependencies*):** Llista de tots els components i llibreries que l'app necessita per executar. En fer `npm install` s'instal·len totes aquestes dependències.
- **Dependències de desenvolupament (*devDependencies*):** Llista de tots els components extra que només són necessàris en la fase de desenvolupament de l'aplicació.
- **Programes (*scripts*):** Llistat de programes que ens poden servir per alleugerar tasques o comandes farragoses.


El directori *node_modules/* és a on es descarreguen i es guarden totes les dependències i llibreries indicades al fitxer "package.json".

El fitxer *package-lock.json* es genera automàticament quan s'instal·len paquets. Serveix per "congelar" les versions exactes de cada llibreria instal·lada, garantint que tothom qui baixi el projecte tingui exactament les mateixes versions.


#### → global.css

Un arxiu d'estils globals (molt utilitzat si es fa servir NativeWind o Tailwind CSS a React Native).

#### → .vscode/* i .expo/*

Carpetes autogenerades per a coses tant de visual studio code com per a coses d'expo. En ser autogenerades no cal que ens preocupem del seu contingut.

#### → .claude/* i AGENTS.md

Són arxius (no oficials ni necessàris) de documentació o context destinats a assistents d'intel·ligència artificial.

#### → .scripts/*

Directori que no forma part de l'estructura estàndard bàsica que ve per defecte, sinó que s'acostuma a crear de manera personalitzada per a tasques d'automatització.

Normalment, s'hi guarden fitxers de codi (com scripts de JavaScript, TypeScript o Bash) que serveixen per, ja sigui, automatitzar processos de desenvolupament o construcció (build), tasques de manteniment o migrongues de dades o validacions personalitzades.

### TypeScript

TypeScript és un superconjunt (*superset*) amb tipat estàtic de JavaScript.

Que sigui un superconjunt vol dir que TypeScript conté tot JavaScript. Qualsevol codi que s'hagi escrit en JavaScript pur és automàticament codi vàlid en TypeScript. TypeScript simplement agafa JavaScript i hi afegeix eines noves per sobre.

Que sigui un llenguatge tipat estàtic vol dir que t'obliga (o et permet) posar "etiquetes" (*types*) a les teves variables, funcions i objectes.

Com que s'ha decidit fer servir TypeScript per realitzar tots els codis d'aquest repositori, i com que no s'espera que ningú tingui coneixements prèvis sobre TypeScript, s'ha decidit fer un petit resum sobre els bàsics de TypeScript en un document apart en aquest mateix repositori (vegeu TYPE_SCRIPT.md a l'arrel del repositori).

## Bibliografia
[YT video - React Native Full Course for Beginners - freeCodeCamp](https://www.youtube.com/watch?v=sm5Y7Vtuihg)

[Pàgina WEB - REACT NATIVE](https://reactnative.dev/)