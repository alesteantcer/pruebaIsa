USE natilus_zone;

CREATE TABLE users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(15) NOT NULL,
    name VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    password VARCHAR(60) NOT NULL,
    email VARCHAR(100) NOT NULL,
    photo LONGTEXT NULL,
    create_  timestamp NOT NULL DEFAULT current_timestamp,
    updatee_ timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    delete_  timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id)
);