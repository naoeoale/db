import connection from "./config/db.js";
import User from "./models/User.js";
import Livro from "./models/Livro.js";
import Carrinho from "./models/Carrinho.js";

const migrate = async () => {
    try {
       const result = await connection.sync({force: true}); 
       console.log(result);
    } catch (error) {
        console.log(error);
    }
}

migrate();
