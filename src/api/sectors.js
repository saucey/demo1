import { listSectorsQuery, createSectorQuery } from '../graphql/sectors'
import { API, graphqlOperation } from 'aws-amplify';

const getlistSectors = async () => {
    const data = await API.graphql(graphqlOperation(listSectorsQuery));
    return data;
}

const createSector = async (sector) => {
    const data = await API.graphql(graphqlOperation(createSectorQuery(sector)));
    return data;
}

export {getlistSectors, createSector}