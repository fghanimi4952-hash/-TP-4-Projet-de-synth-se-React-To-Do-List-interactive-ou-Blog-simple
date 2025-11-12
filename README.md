# To-Do List Interactive - Projet React

Ce projet est une application To-Do List interactive créée avec React, dans le cadre du TP 4 du cours de Développement Front-End moderne avec React.

## Fonctionnalités

- ✅ Ajouter des tâches
- ✅ Afficher et cocher les tâches terminées
- ✅ Supprimer des tâches
- ✅ Interface moderne et responsive

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer l'application en mode développement :
```bash
npm start
```

L'application s'ouvrira automatiquement dans votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000)

## Structure du projet

```
src/
├── components/
│   ├── TodoForm.js      # Formulaire d'ajout de tâches
│   ├── TodoItem.js      # Composant pour un élément de la liste
│   ├── TodoList.js      # Liste des tâches
│   └── *.css            # Styles des composants
├── App.js               # Composant principal avec gestion du state
├── App.css              # Styles de l'application
├── index.js             # Point d'entrée
└── index.css            # Styles globaux
```

## Build pour la production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Le dossier `build/` contiendra les fichiers optimisés prêts à être déployés sur Netlify, Vercel ou tout autre hébergeur.

## Technologies utilisées

- React 18.2.0
- React Router DOM 6.8.0
- CSS3

## Concepts React utilisés

- Composants fonctionnels
- Hooks (useState)
- Gestion des événements
- Props et communication entre composants
- Formulaires contrôlés
- Manipulation d'état (state)

