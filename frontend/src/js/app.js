// TODO: write code here

import { fromEvent, of, Observable, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  debounceTime, pluck, switchMap, map, catchError, filter,
} from 'rxjs/operators';

    function getRequest(url) {
      return new Observable(() => {
        ajax.getJSON(url)
      });
    }

const unreadMessagesApi = 'http://localhost:7070/api/messages/unread';
interval(5000)
  .pipe(
    switchMap(o => ajax.getJSON(unreadMessagesApi)).pipe(
      map(o => console.log(o)),
    )
    
    //   map(() => getRequest(unreadMessagesApi)).pipe(
    //   map(data => console.log(data)),
    // )
  )
  .subscribe(
    console.log('111')
  )