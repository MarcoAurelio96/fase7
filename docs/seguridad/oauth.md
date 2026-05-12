Paso a paso del flujo en nuestra App
Cuando el usuario hace clic en "Iniciar sesión con Google", ocurre lo siguiente:

Solicitud de Autorización: Nuestra web redirige al usuario a los servidores de Google. En esa URL enviamos nuestro GOOGLE_CLIENT_ID para que Google sepa quién está pidiendo el permiso.

Identificación y Consentimiento: El usuario ve la pantalla de Google, introduce su correo y contraseña y acepta darnos permiso para ver su perfil básico.

El Código de Autorización: Una vez que el usuario acepta, Google lo devuelve a nuestra web y nos envía un "Código de autorización" en la URL.

Intercambio Secreto (Back-channel): Aquí entra en juego NextAuth. Por detrás, nuestra web contacta con Google de nuevo. Le envía ese "Código de autorización" junto con nuestro GOOGLE_CLIENT_SECRET.

Entrega del Token: Google comprueba que el código y el secreto son correctos y nos entrega un Access Token (para pedir datos) y un ID Token (con la información del usuario).

Creación de Sesión: NextAuth recibe esos datos, crea una cookie de sesión encriptada en el navegador del usuario y ¡listo! El usuario ya aparece como autenticado en nuestra aplicación.