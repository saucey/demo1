import { ofType } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import { mergeMap, map, shareReplay} from 'rxjs/operators';
import { from} from 'rxjs';
import {getlistSectors, createSector, deleteSector} from '../api/sectors'
import { INSERT_SECTORS, INSERT_SECTOR, TRANSFORM_SECTORS, DEBUG } from './actions'

const getSectors = action$ => action$.pipe(
  ofType('GET_SECTORS'),
  mergeMap(action =>
    from(getlistSectors()).pipe(
      map(response => {
        response.data.listSectors.map((s) => s['id'] = s.idsectors);
        return response.data.listSectors
      }),
      map(listSectors => INSERT_SECTORS(listSectors))
    ))
);

const createListSector = action$ => action$.pipe(
  ofType('CREATE_SECTOR'),
  mergeMap(action =>
    from(createSector(action.sector)).pipe(
      map(response => {
        console.log(response, 'res!!!!')
        response.data.createSector['id'] = response.data.createSector.idsectors;
        return response.data.createSector;
      }),
      map(listSector => INSERT_SECTOR(listSector))
    ))
)

const deleteListSector = (action$,state$) => action$.pipe(
  ofType('DELETE_SECTOR'),
  mergeMap(action =>
    from(deleteSector(action.sectorId)).pipe( 
      map(response => {
        console.log(response.data.deleteSector, 'delete sectors')
        const newSectors = state$.value.listSectors.filter(val => val.idsectors !== response.data.deleteSector.idsectors);
        return newSectors;
      }),
      map(transformedResponse => INSERT_SECTORS(transformedResponse))
    ))
)

const transformSectors = action$ => action$.pipe(
  ofType('TRANSFORM_SECTORS'),
  map(action => {
    return INSERT_SECTORS(action.listSectors)
  })
);

export const rootEpic = combineEpics(
    getSectors, transformSectors, createListSector, deleteListSector
);