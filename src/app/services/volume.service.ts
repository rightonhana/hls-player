import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VolumeService {
  private volume = new BehaviorSubject<number>(1);

  public setVolumeValue(value: number): void {
    this.volume.next(value);
  }

  public get volumeValue$(): Observable<number> {
    return this.volume.asObservable();
  }
}
