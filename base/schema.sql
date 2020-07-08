-- Create Three Tables
CREATE TABLE athletes (
name TEXT,
nationality TEXT,
current_rank INT,
previous_year_rank INT,
sport TEXT,
year INT,
earnings_in_mm INT
);

CREATE TABLE celebrities (
name TEXT,
pay_in_mm INT,
year INT,
category TEXT
);

-- Long and Lat require float8 format to ensure decimals are captured properly
CREATE TABLE country (
country_code TEXT,
latitude float8,
longitude float8,
country TEXT
);
