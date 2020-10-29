import { listSectorsQuery } from '../graphql/sectors'
import { API, graphqlOperation } from 'aws-amplify';

const getlistSectors = async () => {
    const data = await API.graphql(graphqlOperation(listSectorsQuery));
    return data;
}

export default getlistSectors