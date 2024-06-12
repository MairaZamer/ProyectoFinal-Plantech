CREATE TABLE product { id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
price INTEGER NOT NULL,
image VARCHAR(255),
technologies VARCHAR(20) NOT NULL CHECK (
    technologies IN('React.js', 'Angular', 'Vue.js', 'Esbelto')
),
categories VARCHAR(20) NOT NULL CHECK (
    categories IN('salud', 'tecnologia', 'educacion', 'moda')
),
file BYTEA NOT NULL }