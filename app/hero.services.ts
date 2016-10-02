import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable()
export class HeroService {
    constructor() { }

    /** Return a list of heroes */
    getHeroes(): Promise<Hero[]> {        
        return new Promise((resolve, reject)=>{
            let heroes: Hero[] = [
                { id: 11, name: 'Mr. Nice' },
                { id: 12, name: 'Narco' },
                { id: 13, name: 'Bombasto' },
                { id: 14, name: 'Celeritas' },
                { id: 15, name: 'Magneta' },
                { id: 16, name: 'RubberMan' },
                { id: 17, name: 'Dynama' },
                { id: 18, name: 'Dr IQ' },
                { id: 19, name: 'Magma' },
                { id: 20, name: 'Tornado' }];
    
            resolve(heroes);            
        });
    }

    /** Get hero by id */
    getHero(id: number){
        return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id === id));
    }
}