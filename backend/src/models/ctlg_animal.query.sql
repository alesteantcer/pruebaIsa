USE natilus_zone;

CREATE TABLE ctlg_animal (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    scientific_name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);