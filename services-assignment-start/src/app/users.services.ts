import { Injectable } from "@angular/core";
import { CountersService } from "./counters.service";

@Injectable()

export class UsersService{
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private countersService: CountersService){}

  setToActive(id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.countersService.incrementInactiveToActive();
  }

  setToInactive(id: number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.countersService.incrementActiveToInactive();
  }
};
