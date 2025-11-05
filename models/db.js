const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "cadastro",
    "root",
    "Rstflrst123@",
    {
        host: "localhost",
        dialect: "mysql",
    }
);

sequelize.authenticate().then((function(){
    console.log("Conexão com o banco de dados realizada com sucesso!");
})).catch(function(erro){
    console.log("Falha ao se conectar com o banco de dados: " + erro);
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};