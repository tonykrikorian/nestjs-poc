import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApicallService } from '../apicall/apicall.service';
import { User } from '../user';

@Controller('users')
export class UsersController {
  constructor(private backendService: ApicallService) {}

  @Get()
  getUser(): Observable<User[]> {
    return this.backendService.getUsers();
  }
}
