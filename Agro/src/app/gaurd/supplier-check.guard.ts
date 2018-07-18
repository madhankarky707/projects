import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ChainServiceService } from '../service/chain-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SupplierCheckGuard implements CanActivate {
  public address;
  constructor(private cs:ChainServiceService,private route:Router){
    this.cs.getAccount().then(address=>this.address=address)
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
      return this.cs.check_supplier().then(result => {
        if (result != 0)
        {
          return true;
        }
        else if(result == 0)
        {
          alert('Supplier Not Registered')
          this.route.navigate(["addsupplier"]);
          return false;
        }
      })
  }
}
