import { Observable } from 'rxjs';

import { Sensor, SensorType } from '../models';


export interface SensorService {

  getSensors(onlyAlerting?: boolean): Observable<Sensor[]>;

  getSensor(sensorId: number): Observable<Sensor>;

  createSensor(sensor: Sensor): Observable<Sensor>;

  updateSensor(sensor: Sensor): Observable<Sensor>;

  deleteSensor(sensorId: number): Observable<boolean>;

  getAlert(sensorId?: number): Observable<boolean>;

  getSensorTypes(): Observable<SensorType[]>;

  resetReferences();
}
