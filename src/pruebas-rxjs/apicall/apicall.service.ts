import { HttpService } from '@nestjs/axios';
import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { Observable, map, throwError, catchError } from 'rxjs';
import { User } from '../user';

@Injectable()
export class ApicallService {
  constructor(private httpService: HttpService) {}

  public getUsers(): Observable<User[]> {
    return this.httpService
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((value) => {
          return value.data;
        }),
        catchError(() => {
          return throwError(
            () =>
              new BadRequestException({
                message: 'No se encuentra el usuario',
                code: HttpStatus.BAD_REQUEST,
              }),
          );
        }),
      );
  }
}
