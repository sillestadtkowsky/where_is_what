import 'rxjs/add/operator/toPromise';

import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Wohnung } from '../models/wohnung.model';

@Injectable()
export class WhoIsWhatProvider {

    private static storageKey = 'storage';

    constructor(private storage: Storage) { }

    public createWohnung(wohnung: Wohnung): Promise<Wohnung> {
        return new Promise((resolve, reject) => {
            this.storage.get(WhoIsWhatProvider.storageKey)
                .then(wohnungen => {
                    if(!wohnungen) {
                        wohnungen = new Array<Wohnung>();
                    }
                    wohnungen.push(wohnung);
                    this.storage.set(WhoIsWhatProvider.storageKey, wohnungen)
                        .then(() => {
                            resolve(wohnung);
                        })
                        .catch(reject);
                })
                .catch(reject);
        });
    }

    public getWohnungen(): Promise<Array<Wohnung>> {
        return new Promise((resolve, reject) => {
            this.storage.get(WhoIsWhatProvider.storageKey)
                .then(wohnungen => resolve(wohnungen ? wohnungen : new Array<Wohnung>()))
                .catch(reject)
        });
    }
}