USE natilus_zone;

CREATE TABLE register_animal (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    scientificName VARCHAR(100) NULL,
    location VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL,
    photo LONGTEXT NOT NULL,
    sound LONGTEXT NULL,
    id_ctlg_type_specie INT(11) NULL,
    id_users INT(11) NOT NULL,
    create_  timestamp NOT NULL DEFAULT current_timestamp,
    updatee_ timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    delete_  timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id),
    FOREIGN KEY (id_ctlg_type_specie) REFERENCES ctlg_type_specie(id),
    FOREIGN KEY (id_users) REFERENCES users(id)
);