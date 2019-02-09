import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Zone } from '../models/index';

import { environment, ZONES } from '../../environments/environment';
import { getSessionValue, setSessionValue } from '../utils';

@Injectable()
export class ZoneService {

  zones: Zone[];

  constructor(

  ) {
    this.zones = getSessionValue('ZoneService.zones', ZONES);
  }

  getZones(): Observable<Zone[]> {
    return of(this.zones);
  }

  getZone( zoneId: number ): Observable<Zone> {
    return of(this.zones.filter(zone => zone.id === zoneId)[0]).delay(environment.delay);
  }

  createZone( zone: Zone ): Observable<Zone> {
    zone.id = Math.max.apply(Math.max, this.zones.map(z => z.id).concat([0])) + 1;
    this.zones.push(zone);
    setSessionValue('ZoneService.zones', this.zones);
    return of(zone);
  }

  updateZone( zone: Zone ): Observable<Zone> {
    const tmpZone = this.zones.find(z => z.id === zone.id);
    const index = this.zones.indexOf(tmpZone);
    this.zones[index] = zone;
    setSessionValue('ZoneService.zones', this.zones);
    return of(zone);
  }

  deleteZone( zoneId: number ): Observable<boolean> {
    this.zones = this.zones.filter(z => z.id !== zoneId);
    setSessionValue('ZoneService.zones', this.zones);
    return of(true);
  }

  _getZone(zone_id: number) {
    return this.zones.find(z => z.id === zone_id);
  }
}
