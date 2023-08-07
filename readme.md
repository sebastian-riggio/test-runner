# Proyecto de Pruebas en Node.js

Este proyecto contiene pruebas unitarias para varias funciones en JavaScript, utilizando el corredor de pruebas de Node.js.

## Funciones

El proyecto incluye pruebas para las siguientes funciones:

- Sumar (+) de dos números
- Restar (-) entre dos números
- Multiplicación (*) de dos números
- División (/) entre dos números
- Modúlo (%) resto entre dos números

## Objetivo

El objetivo de este proyecto es aprender a hacer pruebas de funciones en JavaScript utilizando el corredor de pruebas de Node.js. También se busca familiarizarse con los diferentes tipos de pruebas y cómo leer documentación relevante.

## Requisitos

Antes de ejecutar las pruebas, asegúrate de tener Node.js instalado en tu máquina.

## Cómo usar este proyecto

1. Clona este repositorio en tu máquina local.

# Documentación de Node.js
Puedes encontrar más información sobre el corredor de pruebas de Node.js en la documentación oficial.


# PATRÓN AAA
La realización del test debe seguir el patrón de AAA (Arrange, Act, Assert):

A --> Arrange ó Ajustar: configura el código, crea el escenario que el test pretende simular, de manera que el test quede aislado de todas sus dependencias. Esto podría incluir crear instancias de la unidad bajo el constructor del test, agregar registros de base de datos, mocks y stubs de objetos y cualquier otro código necesario.

A --> Act ó Actuar: Ejecuta la unidad en test. Normalmente 1 línea de código.

A --> Assert ó Afirmar: Comprobar que el valor recibido satisface las expectativas. Normalmente 1 línea de códig