Résultats après avoir lancé les tests : 
Les deux premiers mockups sont passés mais pas le troisième. 
J'ai mis des logs dans ma fonction pour vérifier que les pouvoirs avaient été appliqués correctement
J'ai ensuite rajouté un log pour résultat final parce que j'ai du mal à calculer si c'est moi qui me suis trompée 
ou s'il y a un problème dans ma fonction, et effectivement j'ai mal calculé le résultat, donc le test est passé après correction.


Instructions pour lancer le projet : 
- Installer les dépendances : 
```bash
npm install
npm install -D vitest
npx init playwright@latest
```
- Script pour lancer les tests : 
```json
"scripts": {
"test": "vitest"
},
``` 
- Lancer le projet : 
```bash
npm run dev
```
- Lancer les tests : 
```bash
npm run test
```
