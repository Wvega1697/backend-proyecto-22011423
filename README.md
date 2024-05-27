# Proyecto Final - 22011423
Williams Adolfo Vega Montenegro
Proyecto Final - Curso "Desarrollo de Aplicaciones Web - Sección A"
Backend en NodeJS + Express

# Aplicación de Lista de Tareas y Metas Personales

Esta es el backend para una aplicación web diseñada para llevar el control de tareas y metas personales. Proporciona un espacio donde puedes registrar tus objetivos y las tareas necesarias para alcanzarlos.

## Instrucciones de Instalación

Sigue estos pasos para configurar y ejecutar la aplicación en tu entorno local:

### Prerrequisitos

- Node.js instalado en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

### Pasos

1. **Clona el Repositorio**: Abre una terminal y ejecuta el siguiente comando para clonar este repositorio en tu máquina:
   ```bash
   git clone https://github.com/Wvega1697/backend-proyecto-22011423.git
   ```

2. **Navega al Directorio del Proyecto**: Accede a la carpeta recién creada:
   ```bash
   cd backend-proyecto-22011423
   ```

3. **Instala las Dependencias**: Usa npm para instalar las dependencias del proyecto:
   ```bash
   npm install
   ```

## Ejecución de la Aplicación

Una vez que hayas instalado las dependencias, puedes iniciar la aplicación con el siguiente comando:

```bash
npm start
```

Este comando inicia un servidor de desarrollo en el puerto 3000. Usa los endpoint de la aplicación desde la terminarl o desde herramientas como Postman o curl.

## Endpoints

http://localhost:3000/

* `taks/getTasks` - GET
* `goals/getGoals` - GET
* `tasks/addTask` - POST
* `goals/addGoal` - POST
* `tasks/removeTask/:index` - DELETE
* `goals/removeGoal/:index` - DELETE

Puedes exportar el archivo a Postman para facilitar las pruebas a los endpoints: [Postman File](https://github.com/Wvega1697/backend-proyecto-22011423/blob/main/BACKEND%20-%2022011423.postman_collection.json)


## API Key

Recuerda agregar el API key `mL5XpgYV4oBNBjTv` en el header `Authorization` de cada request.

## Imagenes
## Actividad 5

![image](https://github.com/Wvega1697/backend-proyecto-22011423/assets/20270532/b63194a7-976e-4a1a-afcc-ebca9e80de27)

### Tasks

![image](https://github.com/Wvega1697/backend-proyecto-22011423/assets/20270532/492d5d57-c062-4a01-be00-534cdce290f7)

![image](https://github.com/Wvega1697/backend-proyecto-22011423/assets/20270532/2dec5073-2394-4d11-9a6e-9a4fdc6fbdc9)

![image](https://github.com/Wvega1697/backend-proyecto-22011423/assets/20270532/effb6625-781e-43f2-98e4-4bad8e622651)

![image](https://github.com/Wvega1697/backend-proyecto-22011423/assets/20270532/5b8a02d5-2bc3-4424-a49c-0fb7b29d3a88)

### Goals

![image](https://github.com/Wvega1697/backend-proyecto-22011423/assets/20270532/202982c5-ce9a-4410-9f77-228e433ea000)

![image](https://github.com/Wvega1697/backend-proyecto-22011423/assets/20270532/a7f72b73-0d8c-4ea2-af7d-dd3f056ac74f)

![image](https://github.com/Wvega1697/backend-proyecto-22011423/assets/20270532/e5e32065-241d-409f-871a-66376aa91e97)

![image](https://github.com/Wvega1697/backend-proyecto-22011423/assets/20270532/20de281b-5416-47b6-b2f8-892483bd5cd7)
