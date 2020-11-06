import { ofType } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import { mergeMap, map, shareReplay} from 'rxjs/operators';
import { from} from 'rxjs';
import {getlistSectors, createSector} from '../api/sectors'
import { INSERT_SECTORS, TRANSFORM_SECTORS, DEBUG } from './actions'

const getSectors = action$ => action$.pipe(
  ofType('GET_SECTORS'),
  mergeMap(action =>
    from(getlistSectors()).pipe(
      map(response => {
        response.data.listSectors.map((s, i)=> s['id'] = i+1);
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
        console.log(action, 'whats the action')
        console.log(response, 'after create!!!!')
        // response.data.listSectors.map((s, i)=> s['id'] = i+1);
        // return response.data.listSectors
      }),
      map(listSectors => DEBUG())
    ))
);

const transformSectors = action$ => action$.pipe(
  ofType('TRANSFORM_SECTORS'),
  map(action => {
    return INSERT_SECTORS(action.listSectors)
  })
);

export const rootEpic = combineEpics(
    getSectors, transformSectors, createListSector
);