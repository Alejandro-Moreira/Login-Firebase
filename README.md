# PruebaMovil
### **Descripción**

Se Ionic Framework y Firebase Authentication. La aplicación permite a los usuarios registrarse, iniciar sesión y acceder a una página de inicio . La autenticación de usuarios se gestiona con Firebase Authentication.

### **Características**

- **Registro de Usuarios:** Los usuarios pueden registrarse proporcionando un correo electrónico y una contraseña.
- **Inicio de Sesión:** Los usuarios pueden iniciar sesión utilizando su correo electrónico y contraseña.
- **Página de Inicio:** Una vez autenticados, los usuarios son redirigidos a la página de inicio (dashboard).

### **Estructura del Proyecto**

- **HomePage:** Página principal que se muestra después del inicio de sesión.
- **LoginPage:** Página de inicio de sesión de usuarios.
- **RegisterPage:** Página de registro de nuevos usuarios.
- **Firebase:** Configuración de Firebase Authentication para gestionar la autenticación de usuarios.

### **Configuración de Firebase**

Para configurar Firebase, hemos utilizado el servicio Firebase Authentication. La configuración de Firebase se encuentra en el archivo **`environment.ts`**.

**Archivo `environment.ts`**

export const environment = {
production: false,
firebaseConfig: {
apiKey: '
authDomain: '
projectId: 
storageBucket: '
messagingSenderId: '
appId: '1
measurementId: '
},
};

### **Páginas**

### **HomePage**

La página de inicio que se muestra después de que el usuario ha iniciado sesión correctamente.

**Archivo `home.page.html`**

### **LoginPage**

La página de inicio de sesión donde los usuarios pueden ingresar con su correo electrónico y contraseña.

### **RegisterPage**

La página de registro donde los nuevos usuarios pueden crear una cuenta proporcionando su correo electrónico y contraseña.

### **Conclusión**

Este proyecto demuestra cómo utilizar Ionic Framework junto con Firebase Authentication para crear una aplicación móvil que permite a los usuarios registrarse e iniciar sesión. La configuración de Firebase se gestiona mediante **`environment.ts`**, y las páginas están diseñadas para proporcionar una experiencia de usuario intuitiva y eficiente.

### **Dependencias Principales**

1. **Ionic Framework**: Proporciona la estructura y los componentes UI para desarrollar aplicaciones móviles híbridas con Angular.
    - **`@ionic/angular`**: Esta dependencia incluye los componentes y servicios de Ionic para Angular.
2. **Firebase para Angular**: Para integrar Firebase Authentication.
    - **`@angular/fire`**: Esta dependencia proporciona la integración de Firebase con Angular.
    - **`firebase`**: Biblioteca de Firebase que se utiliza para las operaciones de autenticación y otros servicios.

### **Dependencias de Desarrollo**

1. **Angular CLI**: Herramienta de línea de comandos para Angular.
    - **`@angular/cli`**: Herramienta para generar, desarrollar y probar aplicaciones Angular.
2. **Angular Firebase**: Herramientas adicionales para trabajar con Firebase en Angular.
    - **`firebase-tools`**: Herramienta de línea de comandos para trabajar con proyectos de Firebase.
3. **Typescript**: Lenguaje de programación tipado utilizado en Angular.
    - **`typescript`**: Lenguaje de programación base para Angular.
4. **Node.js y npm**: Plataforma y gestor de paquetes para JavaScript.
    - **`node.js`**: Plataforma de tiempo de ejecución para JavaScript.
    - **`npm`**: Gestor de paquetes para JavaScript.
5. **AngularFire**: Librería específica para integrar Firebase en aplicaciones Angular.
    - **`@angular/fire`**: Proporciona módulos Angular para Firebase Authentication, Firestore y otros servicios.

# Login-Firebase
# Login-Firebase
