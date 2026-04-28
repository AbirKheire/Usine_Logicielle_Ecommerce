# E-commerce Microservices – Usine Logicielle

## Description

Ce projet est un backend e-commerce basé sur une architecture microservices.

Il permet de :
- créer un compte et se connecter (JWT)
- gérer des produits
- passer des commandes

Les services communiquent entre eux via un système de messages avec RabbitMQ, ce qui permet de limiter les appels directs entre services et de garder un système découplé.

---

## Architecture

L’application est composée de plusieurs services :

- **API Gateway** : point d’entrée principal  
- **Auth Service** : gestion des utilisateurs  
- **Product Service** : gestion des produits  
- **Order Service** : gestion des commandes  
- **RabbitMQ** : communication entre services  

### Exemple de fonctionnement

- le service produit envoie un message à la queue `orders`
- le service commande le consomme et traite la commande
- des échanges se font ensuite via la queue `products`

---

## Stack technique

- Node.js / Express  
- MongoDB  
- RabbitMQ  
- Docker / Docker Compose  
- Mocha / Chai (tests)

---

## Lancer le projet

### Prérequis

- Node.js et npm  
- Docker  
- MongoDB  
- RabbitMQ  

---

### Configuration

Créer un fichier `.env` pour chaque service (`auth`, `product`, `order`) en suivant :

/auth/env.example
/product/env.example
/order/env.example

---

### Lancement avec Docker

```bash
docker-compose build
docker-compose up

L’API sera disponible sur :
http://localhost:3003

Lancement en local (optionnel)
Installer les dépendances dans chaque service :

cd auth && npm install
cd ../product && npm install
cd ../order && npm install
cd ../api-gateway && npm install

Puis lancer :

npm start
Tests

Les tests sont réalisés avec Mocha et Chai.

npm test
Structure du projet
/auth
/product
/order
/api-gateway

Chaque service suit une architecture modulaire inspirée de Clean Architecture.

Améliorations possibles
ajout d’un pipeline CI/CD
amélioration de la couverture de tests
ajout de monitoring (Prometheus, Grafana)
déploiement sur cloud (Azure)
orchestration avec Kubernetes
Auteur

Projet réalisé par Ahmed ROFSA et Abir KHEIREDDINE, dans le cadre du module Usine Logicielle / DevOps (M1 DevOps groupe A, Sup de Vinci)
