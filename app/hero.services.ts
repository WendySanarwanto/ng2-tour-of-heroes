import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Hero } from './hero';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    private _heroesUrl = 'app/heroes';
    constructor(private _http: Http) { }

    /** Handle api call's error */
    private handleError(error: any): Promise<any>{
        console.error('An error occured.', error); // for demo purpose only
        return Promise.reject(error);
    }

    /** Return a list of heroes */
    getHeroes(): Promise<Hero[]> {        
        return this._http.get(this._heroesUrl)
                    .toPromise()
                    .then(response=>response.json().data as Hero[])
                    .catch(this.handleError);
    }
    
    /** Get hero by id */
    getHero(id: number){
        return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id === id));
    }
}