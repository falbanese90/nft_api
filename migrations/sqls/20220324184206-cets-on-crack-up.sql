CREATE TABLE cets_on_creck(
    t TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    symbol VARCHAR(50) NOT NULL,
    floor_price FLOAT NOT NULL,
    listed_count INTEGER NOT NULL
);