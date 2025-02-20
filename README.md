# Sorteo de Amigo Secreto

Este es un programa en JavaScript que permite a los usuarios agregar nombres a una lista y luego realizar un sorteo para seleccionar aleatoriamente un "amigo secreto".

![Vista previa del sorteo](/assets/Caputa-challenge.png)

## Características

- Permite agregar nombres a una lista validando que sean únicos y tengan al menos dos caracteres.
- Posibilidad de eliminar nombres de la lista antes del sorteo.
- Realiza el sorteo de manera aleatoria asegurando que haya al menos dos participantes.
- Interfaz con botones y animaciones para mejorar la experiencia de usuario.

## Instalación y Uso

1. Clona este repositorio o descarga los archivos.
2. Abre el archivo `index.html` en un navegador web.
3. Ingresa nombres en el campo de entrada y presiona "Enter" o el botón de agregar.
4. Haz clic en el botón "Sortear" para seleccionar un amigo secreto aleatorio.
5. Usa el botón "Reiniciar" para limpiar la lista y realizar un nuevo sorteo.

## Código Principal

El código principal está en el archivo `script.js` e incluye las siguientes funciones:

- `agregarAmigo()`: Agrega un nombre a la lista asegurando que sea válido y único.
- `eliminarAmigo(index)`: Permite eliminar un amigo de la lista antes del sorteo.
- `sortearAmigo()`: Selecciona aleatoriamente un amigo secreto de la lista.
- `reiniciar()`: Restablece la lista y la interfaz para un nuevo sorteo.

## Tecnologías Utilizadas

- **HTML**: Estructura de la aplicación.
- **CSS**: Estilización y animaciones.
- **JavaScript**: Lógica para manejar la lista de amigos y el sorteo.

## Mejoras Futuras

- Implementación de almacenamiento local para guardar la lista de amigos.
- Agregar la opción de evitar que alguien se asigne a sí mismo en el sorteo.
- Mejorar la interfaz con un diseño más atractivo y efectos visuales.

## Autor

Desarrollado por [Luisa María Valencia Quintero].

## Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo y modificarlo libremente.

