# Actividad 3 - 22011423
Williams Adolfo Vega Montenegro
Actividad 3 - Curso "Desarrollo de Aplicaciones Web - Sección A"
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
