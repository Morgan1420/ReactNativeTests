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
npx create-expo-app@latest # --template blank # Comento el template, però el recomano per començar un projecte buit
```

Aquesta comanda es pot executar des de l'arrel del projecte, ja que crearà un subdirectori amb tot el contingut de la web, evitant la necessitat de crear subdirectoris per cada exercici. Ara bé, en crear el projecte, si el volem executar s'haurà de fer des de dins del directori.

NOTA: Si creem el projecte amb "--template blank" segurament no es veuran aluns fitxers i directoris com el de "components/*", no passa res, si ens veiem amb la necessitat de crear el directori el podem crear, sempre tenint en compte de seguir una estructura similar a l'estructura standard explicada al següent apartat. Adicionalment, segurament l'unic fitxer de "codi" sigui el de "App.js", aquest es pot executar perfectament, però si el que es desitja és treballar amb TypeScript en comptes de JavaScript només cal canviar la terminació del fitxer de: `App.js` a: `App.tsx`. En executar el projecte React detectarà automàticament el tipus de fitxer i installarà/farà els canvis necessàris per adaptar-se a les teves preferències (això es pot fer amb tots els fitxers)
.

### Executar un projecte
Per executar un projecte es pot fer servir la següent comanda (des de dins del directori del projecte):

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


## FILOSOFIA DE REACT NATIVE I PRIMERS CODIS

Com ja hem introduit abans, RN és un *framework¹* de *JavaScript³* que ens permet crear aplicacions multiplataforma (i.e. *cross-platform²*) fent servir JavaScript o, l'alternativa moderna, *TypeScript⁴*. 

NOTA: Tots els termes amb un superindex (p.e *framework¹*) es troben definits a la secció "Diccionari de conceptes" que trobareu al final d'aquest document (desprès de la bibliografia i abans de l'annex).

FILOSOFIA: Quan programem amb React Native ho hem de fer pensant sempre en què veurà l'usuari.

L'ARQUITECTURA de React Native es basa en **components**.

Un Component es pot entendre com una peça petita d'un trencaclosques, la qual podem reaprofitar per a fer components més grans. Es recomana que cada component tingui una única funcionalitat, és a dir, es veu amb molts bons ulls el delegar tasques entre components.

A React Native un **component és una funció**, no una classe.

Cada component tindrà un **estat**, l'estat és una espècie de memòria a curt termini que dictamina com es renderitzarà el component. Quan un estat canvia RN se n'adonarà i re-renderitzarà el component.

L'estat està conformat per **variables d'estat**. És reomanable disposar del mínim nombre de variables d'estat possible i calcular les demés. 

També se'ns recomana (pràcticament se'ns obliga) a actualitzar les variables d'estat fent servir **funcions setter**.

Una altra propietat dels components és que **les dades són unidireccionals**, és a dir, només es mouen en una direcció (i.e. de component pare a component fill).

Cada component haurà de retornar un *component nadiu*. Els components nadius són uns components especials de react que actuen de pont entre el codi i els elements natius dels diferents dispositius. Per exemple, el component nadiu `<View>` es tradueix a un `<div>` en HTML, a un `UIView` a iOS o a un `ViewGroup` a Android. A l'annex d'aquest document podem trobar una taula amb els principals components nadius i les seves traduccions.



```TypeScript
// Importem les eines necessàries i components nadius de React Native
import {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


// 1. Definim el tipus/interfície per a les dades pures del producte
interface Product {
  name: string;
  price: number;
}

// 2. Definim les props que necessita el component fill per pintar-se i comunicar-se
interface ProductItemProps extends Product {
  onAddToCart: (productName: string) => void;
}

/* 
  3. CHILD COMPONENT
  Notem que:
    - El component és una funció.
    - UNIDIRECCIONALITAT: Les dades es passen com a paràmetres (props) de component pare a component fill, però no al revés.
*/
function ProductItem({ name, price, onAddToCart }: ProductItemProps) {
  // Cada element ha de retornar un únic component arrel en format JSX
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>
        {/* Per saber més sobre com funcionen els estils (styles) a React Native aneu a la secció corresponent més endavant */}
        {name} - {price}€ {/* Podem accedir als paràmetres i variables de la funció fent servir {} */}
      </Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => onAddToCart(name)}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

/*
  4. COMPONENT PARE
  Amb "export default" indiquem a codis externs que aquesta és la funció "main" (i.e. a la primera que hem d'anar)
*/
export default function ShopingCart(){
  // Definim el contingut del carro com l'estat del component
  const [cart, setCart] = useState<Product[]>([]);

  // Calculem la longitut del carro sense necessitat de crear un nou estat
  const cartLength = cart.length;

  // Creem la funció que gestiona quan un producte s'afegeix al carro
  // Aquesta és la funció que enviarem a cada item
  const handleAddToCart = (productName: string) => {
    // Aqui hauriem de buscar el producte a una DB o algo, però, de cara al codi, senzillament es crea un nou producte
    const newProduct: Product = {
      name: productName,
      price: 10.0,
    };

    // Actualitzem l'estat del carro
    setCart([...cart, newProduct]);
  }

  // Return de la funció en format JSX
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Online Shop </Text>
      <Text style={styles.subtitle}> Number of products inside the cart: {cartLength} </Text>
      <Text style={styles.subtitle}> Products available: </Text>

      {/* Cridem als components fills */}
      <ProductItem name="T-Shirt" price={9.99} onAddToCart={handleAddToCart} />
      <ProductItem name="Cap" price={14.99} onAddToCart={handleAddToCart} />

    </View>
  );
}

// Per saber més sobre com funcionen els estils (styles) a ReactNative aneu a la secció corresponent més endavant. De moment només posem el codi per coherència.
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 20, color: '#666' },
  itemContainer: { padding: 15, backgroundColor: '#f9f9f9', marginBottom: 10, borderRadius: 8 },
  itemText: { fontSize: 16, marginBottom: 8 },
  button: { backgroundColor: '#007AFF', padding: 10, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});

```


## STYLE - COM HEM DE TRACTAR AMB ELS ESTILS

Els estils a React Native són molt fàcils d'entendre si ja coneixem els principis del desenvolupament web, concretament com fer estils amb CSS.

A React Native, però, **no farem servir fitxers CSS**, sinó que escriurem els estils directament dins del codi TS (o JS) utilitzant objectes de JavaScript i l'eina `StyleSheet.create()`.

La filosofia d'aquests estils és molt semblant a la de CSS, però amb una sintaxi adaptada:
* No fem servir classes (`.class`) ni IDs (`#id`) d'HTML. En el seu lloc, creem objectes dins de `StyleSheet.create()` i els assignem directament a la propietat `style` del component (p.e. `style={styles.container}`).
* Les propietats s'escriuen en format **camelCase** (p.e. `backgroundColor` en lloc de `background-color`) i **sense unitats** (p.e. `fontSize: 16` en lloc de `16px`).

A l'exemple de la secció anterior ja es pot veure com s'ha estilitzat una aplicació, per tant no realitzarem un nou exemple.

## NAVEGACIÓ



## Bibliografia
[YT video - React Native Full Course for Beginners - freeCodeCamp](https://www.youtube.com/watch?v=sm5Y7Vtuihg)

[Pàgina WEB - REACT NATIVE](https://reactnative.dev/)

## Diccionari de conceptes
1. *framework*: Ecosistema estructurat on escrivim codi. A diferència d'una llibreria tradicional, on nosaltres la cridem per executar un codi, un framework crida al nostre codi per executar a una altra banda.
2. *cross-platform*: Propietat d'un programa o codi que indica que pot ser executat a diferents dispositius.
3. *JavaScript*: Llenguatge de programació ....
4. *TypeScript*: Llenguatge de programació .... // Hi ha un document adjunt a aquest repo anomenat "TYPE_SCRIPT.md" que conté una serie d'apunts que he pres del tema.
5. *DOM*: El DOM (*Document Object Model*) és una representació en forma d'arbre que fa el navegador web de qualsevol pàgina HTML.




## Annex
### Taula de components nadius de React Native

| Component de React Native | Descripció principal | Equivalent en HTML (Web) | Equivalent Natiu a iOS | Equivalent Natiu a Android |
| :--- | :--- | :--- | :--- | :--- |
| `<View>` | El contenidor bàsic per estructurar la layout i maquetar. | `<div>` | `UIView` | `ViewGroup` / `View` |
| `<Text>` | S'utilitza obligatòriament per mostrar qualsevol text a la pantalla. | `<p>`, `<span>`, `<h1>`... | `UILabel` | `TextView` |
| `<Image>` | Per mostrar imatges locals o remotes. | `<img />` | `UIImageView` | `ImageView` |
| `<ScrollView>` | Un contenidor que permet fer scroll vertical o horitzontal quan el contingut no cap. | Un contenidor amb `overflow: auto` | `UIScrollView` | `ScrollView` |
| `<TextInput>` | Camp de text interactiu perquè l'usuari pugui escriure (ex: formularis). | `<input type="text">` o `<textarea>` | `UITextField` / `UITextView` | `EditText` |
| `<TouchableOpacity>` / `<Pressable>` | Components encarregats de detectar clics o gestos tàctils amb una animació d'opacitat. | `<button>` o qualsevol element amb `onclick` | `UIButton` / `UITapGestureRecognizer` | `Button` / `TouchableHighlight` |
| `<FlatList>` | Llista eficient dissenyada per mostrar grans volums de dades de manera optimitzada. | `<ul>` amb elements `<li>` | `UICollectionView` | `RecyclerView` |
| `<Modal>` | Una finestra emergent o panell que es superposa per sobre de tota la resta de la interfície. | `<dialog>` o un contenidor absolut amb fosc | `UIViewController` (amb modal presentation) | `Dialog` / `DialogFragment` |
| `<Switch>` | Botó d'interruptor o pestanya lliscant d'activat/desactivat (true/false). | `<input type="checkbox">` amb estil d'interruptor | `UISwitch` | `Switch` |
| `<ActivityIndicator>` | El cercle de càrrega o indicador d'activitat animat. | Un GIF o SVG de càrrega | `UIActivityIndicatorView` | `ProgressBar` |
| `<StatusBar>` | Controla la barra superior del dispositiu (on surt la bateria, hora, cobertura). | No té equivalent directe (controla l'entorn del sistema) | `UIStatusBar` | `WindowInsetsController` / `StatusBar` |