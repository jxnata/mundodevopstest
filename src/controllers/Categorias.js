import axios from 'axios';
import config from '../config';

const base_url = config.api_url;

class Categoria {

    async listar()
    {
        let resultado;

        await axios.get(`${base_url}/categorias`)
		.then(response => {
            resultado = response;
		})
		.catch(error => {
            resultado = error.response;
        });

        return resultado;
    }

    async ver(id, pagina = 1)
    {
        let resultado;

        await axios.get(`${base_url}/categoria/ver?categoriaId=${id}&pagina=${pagina}`)
		.then(response => {
            resultado = response;
		})
		.catch(error => {
            resultado = error.response;
        });

        return resultado;
    }

}
const Categorias = new Categoria();
export default Categorias;