import 'rxjs/add/operator/toPromise';

import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Wohnung } from '../models/wohnung.model';

import _ from 'lodash';

@Injectable()
export class WhereIsWhatProvider {

    private static storageKey = 'storage';

    constructor(private storage: Storage) { }

    public createWohnung(wohnung: Wohnung): Promise<Wohnung> {
        return new Promise((resolve, reject) => {
            this.storage.get(WhereIsWhatProvider.storageKey)
                .then(wohnungen => {
                    if(!wohnungen) {
                        wohnungen = new Array<Wohnung>();
                    }
                    wohnungen.push(wohnung);
                    this.storage.set(WhereIsWhatProvider.storageKey, wohnungen)
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
            this.storage.get(WhereIsWhatProvider.storageKey)
                .then(wohnungen => resolve(wohnungen ? wohnungen : new Array<Wohnung>()))
                .catch(reject)
        });
    }

    private parseAll(raw: Array<any>) {
        return raw.map(e => this.parse(raw));
    }

    private parse(raw: any): Wohnung {
        return _.assign(new Wohnung(), raw);
    }
}