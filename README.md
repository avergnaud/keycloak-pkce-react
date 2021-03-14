
# install

## keycloak

```
docker container run --name=keycloak-simple -v keycloak-simple_db:/opt/jboss/keycloak/standalone/data/ -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin jboss/keycloak
```

![screenshot](./keycloak-meetup-app-pkce-client.png?raw=true)

## run

```
docker container stop|start keycloak-simple
```
(long à démarrer)

Révocation des consentements OAuth :

![screenshot](./keycloak-users-revoke-consent.png?raw=true)

resource-server :
```
./run.sh
```

client-app :
```
npm start
```