# patientsbox
Projet santé.

Application mobile réalisée avec **React Native.** (<https://facebook.github.io/react-native/docs/getting-started.html>) 

### Installation des outils 
1. Installer **NodeJS (v6.10.3).** Cette installation permettra d’accéder à l'outil npm qui est le gestionnaire de package. <p>Après l'installation de nodeJs, taper la commande **npm -v** pour vérifier que npm est bien installé..</p> <p>Cette commande affiche tout simplement la version de npm.</p>

2. Installer **create-react-native-app** (un outil de création de projet react native). <p>Pour cela, utiliser la commande **npm install -g create-react-native-app** </p>

3. Télécharger les outils SDK android. Pour cela, j'ai installé android studio. 
   <p> NB : android studio contient un simulateur android. On peut l'utiliser à la place de Genymotion. Le problème est que le simulateur d'Android studio est lent. </p>
  <p> Prérequis : le JRE (java runtime environement) doit être installé.</p>

4. Pour pouvoir exécuter le projet, il nous faudra un simulateur d'android. J'ai choisi Genymotion car il est léger et rapide.

   <p>Télécharger et Installer Genymotion. Après son installation, ajouter un nouveau terminal virtuel (j'ai installé android 4 et 7 sur mon terminal).</p>

 <p>NB : Il faut préalablement installé **virtual box**



### Exécution du projet 
Une fois les outils installés, suivre les instructions suivantes pour exécuter le projet.

1. Clone le projet github et se placer à la racine du projet en ligne de commande.

2. Installer les dépendances du projet grâce à la commande : **npm install** <p>Attention : Cette commande doit être exécutée à la racine du projet.</p>

3. Une fois les dépendances installées, 
 * Lancer votre simulateur d'android
 * Lancer le projet grâce à la ligne de commande : **npm run android** (il faut être à la racine du projet) 
