import { ofType } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import { mergeMap, map, shareReplay} from 'rxjs/operators';
import { from} from 'rxjs';
import getlistSectors from '../api/sectors'
import { INSERT_SECTORS, TRANSFORM_SECTORS } from './actions'

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

const transformSectors = action$ => action$.pipe(
  ofType('TRANSFORM_SECTORS'),
  map(action => {
    return INSERT_SECTORS(action.listSectors)
  })
);

export const rootEpic = combineEpics(
    getSectors, transformSectors
);