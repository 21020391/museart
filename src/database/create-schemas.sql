-- MUSEUM DATABASE
-- MUSEUM DATABASE
CREATE TABLE IF NOT EXISTS artworks(
    id SERIAL PRIMARY KEY,
    detail JSONB
);

CREATE TABLE IF NOT EXISTS exhibitions(
    id SERIAL PRIMARY KEY,
    detail JSONB
);
CREATE TABLE IF NOT EXISTS articles(
    id SERIAL PRIMARY KEY,
    detail JSONB
);
CREATE TABLE IF NOT EXISTS products(
    id SERIAL PRIMARY KEY,
    detail JSONB
);

CREATE TABLE IF NOT EXISTS sounds(
    id SERIAL PRIMARY KEY,
    detail JSONB
);

CREATE TABLE IF NOT EXISTS images(
    id SERIAL PRIMARY KEY,
    detail JSONB
);

CREATE TABLE IF NOT EXISTS videos(
    id SERIAL PRIMARY KEY,
    detail JSONB
);


-- USER DATABASE
CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    role VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);





