import {appConfig} from '../secret/secret'

async function getdataAPI(){    
    const data = await fetch(appConfig.api);
    const resultado = await data.json()
    return resultado;
}

export default getdataAPI;