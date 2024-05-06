CREATE TABLE res_categoria (
    cd_categoria  VARCHAR(60) NOT NULL,
    nm_categoria  VARCHAR(60) NOT NULL,
    des_categoria VARCHAR(250) NOT NULL
);

ALTER TABLE res_categoria ADD CONSTRAINT pk_res_categoria PRIMARY KEY ( cd_categoria );

CREATE TABLE res_item (
    cd_item        VARCHAR(60) NOT NULL,
    cd_restaurante VARCHAR(50) NOT NULL,
    cd_categoria   VARCHAR(60) NOT NULL,
    nm_item        VARCHAR(60) NOT NULL,
    pre_item       NUMERIC(6, 2) NOT NULL,
    des_item       VARCHAR(60) NOT NULL,
    img_item       BYTEA
);

ALTER TABLE res_item ADD CONSTRAINT pk_res_item PRIMARY KEY ( cd_item );

CREATE TABLE res_restaurante (
    cd_restaurante   VARCHAR(50) NOT NULL,
    nom_restaurante  VARCHAR(60) NOT NULL,
    cnpj_restaurante NUMERIC(14) NOT NULL,
    img_restaurante  BYTEA
);

ALTER TABLE res_restaurante ADD CONSTRAINT pk_res_restaurante PRIMARY KEY ( cd_restaurante );

CREATE TABLE t_res_cliente (
    cd_cliente  VARCHAR(60) NOT NULL,
    nm_cliente  VARCHAR(60) NOT NULL,
    des_cliente VARCHAR(250) NOT NULL
);

ALTER TABLE t_res_cliente ADD CONSTRAINT pk_res_cliente PRIMARY KEY ( cd_cliente );

CREATE TABLE t_res_item_menu (
    cd_item VARCHAR(60) NOT NULL,
    cd_menu VARCHAR(60) NOT NULL
);

ALTER TABLE t_res_item_menu ADD CONSTRAINT pk_res_item_menu PRIMARY KEY ( cd_item );

CREATE TABLE t_res_item_pedido (
    cd_pedido       VARCHAR(60) NOT NULL,
    cd_item         VARCHAR(60) NOT NULL,
    qua_item_pedido NUMERIC(3) NOT NULL
);

ALTER TABLE t_res_item_pedido ADD CONSTRAINT pk_res_item_pedido PRIMARY KEY ( cd_pedido );

CREATE TABLE t_res_menu (
    cd_menu  VARCHAR(60) NOT NULL,
    des_menu VARCHAR(250)
);

ALTER TABLE t_res_menu ADD CONSTRAINT pk_res_menu PRIMARY KEY ( cd_menu );

CREATE TABLE t_res_pedido (
    cd_pedido  VARCHAR(60) NOT NULL,
    cd_cliente VARCHAR(60) NOT NULL,
    vl_total   NUMERIC(4, 2)
);

ALTER TABLE t_res_pedido ADD CONSTRAINT pk_res_pedido PRIMARY KEY ( cd_pedido );

ALTER TABLE res_item
    ADD CONSTRAINT fk_res_item_categoria FOREIGN KEY ( cd_categoria )
        REFERENCES res_categoria ( cd_categoria );

ALTER TABLE t_res_item_menu
    ADD CONSTRAINT fk_res_item_menu FOREIGN KEY ( cd_item )
        REFERENCES res_item ( cd_item );

ALTER TABLE t_res_item_pedido
    ADD CONSTRAINT fk_res_item_pedido_item FOREIGN KEY ( cd_item )
        REFERENCES res_item ( cd_item );

ALTER TABLE t_res_item_pedido
    ADD CONSTRAINT fk_res_item_pedido_pedido FOREIGN KEY ( cd_pedido )
        REFERENCES t_res_pedido ( cd_pedido );

ALTER TABLE res_item
    ADD CONSTRAINT fk_res_item_restaurante FOREIGN KEY ( cd_restaurante )
        REFERENCES res_restaurante ( cd_restaurante );

ALTER TABLE t_res_item_menu
    ADD CONSTRAINT fk_res_menu_item FOREIGN KEY ( cd_menu )
        REFERENCES t_res_menu ( cd_menu );

ALTER TABLE t_res_pedido
    ADD CONSTRAINT fk_res_pedido_cliente FOREIGN KEY ( cd_cliente )
        REFERENCES t_res_cliente ( cd_cliente );
