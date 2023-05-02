# Lógica & JS

## Intro
Hoy vamos a construir nuestra primera aplicación. Queremos una aplicación web que responda a la petición de bebida de un usuario con una nueva pregunta sobre su edad. El programa se limita a tres bebidas: leche, coca-cola y cerveza. La casuística será la siguiente:
1. Leche --> no se solicita la edad y se responde con la frase "aquí tiene su bebida"
2. Coca-cola --> se solicita la edad. Sí es mayor de 14 se responde con la frase "aquí tiene su bebida. Si es menor de 14 se responde con la frase: "lo siento, solo puedo servirle leche".
3. Cerveza --> se solicita la edad. Si es mayor o igual a 18 se responde con la frase "aquí tiene su bebida". Si no lo es, se responde con la frase: "lo siento, solo puedo servirle leche o cocacola".

## Iteraciones

### Iteración 1
- Investiga los métodos prompt y alert. Haz alguna prueba de su utilización.

### Iteración 2
- Monta el entorno y prueba que funciona correctamente. Presta atención a la conexión entre HTML y JavaScript.

### Iteración 3
- Comienza con el caso más sencillo y prueba que funciona.

### Iteración 4..n
- Añade otro caso y comprueba el nuevo caso y vuelve a probar el anterior.

### Iteración n+1
- Cuando tengas todos los casos probados. No te conformes con tu código. Comprueba si puedes mejorarlo, simplificándolo o haciendo abstracciones.

### Iteración BONUS
- Añade control de errores. Sí introducen una edad que no sea numérica, si introducen una bebida que no se sirve. Devuelve un mensaje acorde al error.

### Iteración BONUS + 1
- Refactoriza el código para permitir volver a solicitar una bebida en caso de que se haya negado por cuestiones de edad.