# Requirement 

- [nodejs](https://nodejs.org/en/download/).

# Installation 

- Jest (framwork de test js)

> npm init -y 

> npm add -D jest

optionnel :

- setup fetch mock 

> npx jest --init

[Jest-Fetch-Mock](https://github.com/jefflau/jest-fetch-mock)

# Utilisation 

> npx jest

## Test Parallele

*Deux méthodes :*

- Pour lancer des testes en parallele il faut écrire ses testes dans des fichiers séparés

- On peut aussi utiliser test.concurrent au sein d'un meme fichier



## Babel

[Babel](https://jestjs.io/docs/en/getting-started#using-babel)

# Exemple :

- *Test async*  

Le test timer.test.js teste la fonction sleep dans le fichier timer.js 

- *Mock*

Les mocks permettent de simuler des données que nous n'avons pas , par exemple si nous voulons tester les données renvoyer par une api sans se connecter a une api
Voir fichier discord.test.js qui teste la fonction ping() du fichier discord.js



