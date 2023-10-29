# Valorant Competitivo
## Adán Pérez Hernández - 2DAM-T

App donde puedes administrar los torneos de Valorant, los equipos participantes y los jugadores de cada equipo.

## Creado en =>

- Backend = Spring
- Frontend = Ionic Angular
- Base de datos = MySQL

### Para empezar recuerda =>
- Recuera intalar las dependencias del frontend con =>

```
cd frontend
```
```
npm install
```

- Para iniciar el frontend =>
```
ionic serve
```

- Para iniciar el backend iniciar la app con la opción de Run As 'Spring Boot App'

- Para la base de datos solo tendras que crear la base de datos, las tablas se añaden automáticamente.


## Base de datos =>

- Nombre de la base de datos =>
```
db_orm_teams
```

### Lógica =>
- Un torneo se compone de un idTorneo, nombre_torneo y la localización, un equipo se compone de un idEquipo nombre_equipo, region, y el torneo en el que se encuentra actualmente, por lo que a un torneo pueden apuntarse muchos equipos, pero un equipo solo puede estar en un torneo al mismo tiempo.
- Y por último un jugador está compuesto por idJugador, nombre_jugador, rol, nacionalidad y el equipo al que pertenece, por lo que en un equipo pueden haber muchos jugadores pero un jugador solo puede estar en un equipo al mismo tiempo.

