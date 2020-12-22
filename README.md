## Clean code and best practices in node with Solid

### Architecture Layers

- Cada capa tiene un rol y una tarea unica
- tienen que haber capas de alto y bajo nivel
  - las de alto nivel tienen mas interacion con el usuario
  - las de bajo nivel lee y escribe datos o interactua con el hardware
- cada capa crea una abstraccion de la funcionalidad que ofrece
  - las capas no se conocen entre si
  - se conectan por inyeccion de dependencias
- la cantidad de capas es de acuerdo a tus necesidades

#### Presentation Layer

- se encarga de manejar la interacion entre un cliente y la aplicacion
- entrega y solicita informacion
- interpreta solicitudes del usuario en acciones para las capas de negocio

#### Aplication Layer

- es la que contine la logica de negocio
- esconde el acceso a datos
- validar los de la capa de presentacion

#### Data Layer

- se encarga de comunicarse con las bases de datos
- guarda y extrae informacion de las bases de datos

![img](/3-tier-architecture.png)

- based in [Robert C. Martin](https://www.youtube.com/watch?v=2dKZ-dWaCiU)
