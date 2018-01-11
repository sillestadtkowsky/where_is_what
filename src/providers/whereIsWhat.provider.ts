import 'rxjs/add/operator/toPromise';

import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Wohnung } from '../models/wohnung.model';


@Injectable()
export class WhereIsWhatProvider {

    public static storageKey = 'WhereIsWhatStorage';

    constructor(private storage: Storage) { }

    public removeWohnung(){
        return new Promise((resolve, reject) => {
            this.storage.remove(WhereIsWhatProvider.storageKey).then(() => {
                console.log(WhereIsWhatProvider.storageKey+'has been removed');
              });
        });
    }

    public createWohnung(wohnung: Wohnung): Promise<Wohnung> {
        return new Promise((resolve, reject) => {
            this.storage.set(WhereIsWhatProvider.storageKey, wohnung)
                .then(() => {
                    resolve(wohnung);
                })
                .catch(reject);
        });
    }

    public getWohnung(): Promise<Wohnung>{
        return new Promise((resolve, reject) => {
            this.storage.get(WhereIsWhatProvider.storageKey)
            .then(() => {
                    
            })
            .catch(reject)
        });
    }
}