# Seguridad de Credenciales: Almacenamiento y Hashing

En el desarrollo de aplicaciones web, la seguridad de las contraseñas es el pilar más crítico. Una gestión deficiente de las credenciales no solo pone en riesgo la privacidad del usuario, sino la reputación y legalidad de la plataforma.

## 1. ¿Por qué NUNCA se deben guardar contraseñas en texto plano?

Guardar una contraseña en texto plano (tal cual la escribe el usuario) es el error de seguridad más grave que un desarrollador puede cometer. Las razones principales son:

* **Vulnerabilidad ante brechas de datos:** Si un atacante logra acceso a la base de datos (mediante inyección SQL, por ejemplo), obtendría inmediatamente todas las contraseñas de todos los usuarios.
* **Reutilización de contraseñas:** La mayoría de los usuarios utilizan la misma contraseña en múltiples servicios. Si tu base de datos se filtra, los atacantes podrán acceder a sus correos, cuentas bancarias o redes sociales.
* **Privacidad interna:** Ni siquiera los administradores del sistema o los desarrolladores con acceso a la base de datos deberían poder conocer la contraseña de un usuario.

## 2. Algoritmos de Hashing: Bcrypt y Argon2

Para proteger las contraseñas, no las "encriptamos" (la encriptación es reversible), sino que las **hasheamos**. Un "hash" es un proceso de una sola vía: puedes convertir una contraseña en un código, pero es matemáticamente imposible volver atrás.

* **Bcrypt:** Es un algoritmo basado en el cifrado Blowfish. Su gran ventaja es que es "lento" por diseño. Al ser computacionalmente costoso, hace que los ataques de fuerza bruta (probar millones de combinaciones) sean extremadamente lentos e ineficientes para el atacante.
* **Argon2:** Es el ganador de la Password Hashing Competition (2015) y se considera el estándar más moderno y seguro actualmente. Permite configurar cuánta memoria y CPU consume, lo que lo hace resistente incluso frente a ataques realizados con hardware especializado (GPUs o ASICs).

## 3. ¿Qué son los "Salts" (Sales) y cómo funcionan?

Incluso usando hashes, existe un riesgo: si dos usuarios eligen la contraseña `123456`, sus códigos hash en la base de datos serían idénticos. Esto permite a los atacantes usar **Rainbow Tables** (tablas con millones de hashes pre-calculados) para crackear contraseñas en segundos.

Para evitar esto, usamos un **Salt**:

1.  Cuando un usuario se registra, el sistema genera una cadena de texto aleatoria única para ese usuario (el "salt").
2.  Esta cadena se añade a la contraseña antes de pasarla por el algoritmo de hashing: `Hash(Contraseña + Salt)`.
3.  El resultado es que, aunque dos usuarios tengan la misma contraseña, sus hashes en la base de datos serán **completamente diferentes**.



De esta forma, el atacante tendría que crackear cada contraseña una por una, lo cual, sumado a la lentitud de algoritmos como Bcrypt, hace que el ataque sea virtualmente imposible.