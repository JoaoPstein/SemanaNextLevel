const sqlite3 = require("sqlite3").verbose();

// Criar o objeto que irá fazer operações no bd
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;

// Utilizar o objeto de bd para nossas operações
// db.serialize(() => {
//   // Cria uma tabela essa função pode ser chamada de template string
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         image TEXT,
//         name TEXT,
//         address TEXT,
//         address2 TEXT,
//         state TEXT,
//         city TEXT,
//         items TEXT
//     );
//   `);

//   // Inserir dados
//   const query = `
//   INSERT INTO places (
//     image,
//     name,
//     address,
//     address2,
//     state,
//     city,
//     items) VALUES (?, ?, ?, ?, ?, ?, ?);
// `;
//   const values = [
//     "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//     "Papersider",
//     "Guilherme Gemballa, Jardim América",
//     "Nº 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Papéis e Papelão"
//   ];

//   function afterInsertData(err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Cadastrado com sucesso!");
//     console.log(this);
//   }
//   db.run(query, values, afterInsertData);

//   // Consultar os dados da tabela
//   function fetchData(err, rows) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Aqui estão seus registros:");
//     console.log(rows);
//   }
//   db.all(`SELECT * FROM places`, fetchData);

//Deletar um dado da tabela
// function deleteRegister(err) {
//   if (err) {
//     return console.log(err);
//   } 
//   console.log("Registro deletado com sucesso!");
// }
// db.run(`DELETE FROM places WHERE id = ?`, [3], deleteRegister);
// });
