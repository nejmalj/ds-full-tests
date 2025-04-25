Résultats après avoir lancé les tests unitaires : 
Les deux premiers mockups sont passés mais pas le troisième. 
J'ai mis des logs dans ma fonction pour vérifier que les pouvoirs avaient été appliqués correctement
J'ai ensuite rajouté un log pour résultat final parce que j'ai du mal à calculer si c'est moi qui me suis trompée 
ou s'il y a un problème dans ma fonction, et effectivement j'ai mal calculé le résultat, donc le test est passé après correction.

Résultats après avoir lancé les tests e2e pour l'interface graphique :
Les tests passent tous comme prévu sauf le premier (should have disabled button when no inputs), qui finit par renvoyer une erreur liée au dépassement du timeout.
J'ai essayé de mettre un nombre très élevé pour le timeout mais ça ne change rien.

Résultats pour les tests e2e avec screenshots : OK

Instructions pour lancer le projet : 
- Installer les dépendances : 
```bash
npm install
npm install -D vitest
npx init playwright@latest
```
- Scripts pour lancer les tests (e2e pour playwright uniquement) : 
```json
"scripts": {
"test": "vitest",
"e2e": "npx playwright test"
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
