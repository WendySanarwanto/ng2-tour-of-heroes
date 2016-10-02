import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.services';

@Component({
    selector: 'my-hero-detail',
    styles: [`
        label {
          display: inline-block;
          width: 3em;
          margin: .5em 0;
          color: #607D8B;
          font-weight: bold;
        }
        input {
          height: 2em;
          font-size: 1em;
          padding-left: .4em;
        }
        button {
          margin-top: 20px;
          font-family: Arial;
          background-color: #eee;
          border: none;
          padding: 5px 10px;
          border-radius: 4px;
          cursor: pointer; cursor: hand;
        }
        button:hover {
          background-color: #cfd8dc;
        }
        button:disabled {
          background-color: #eee;
          color: #ccc; 
          cursor: auto;
        }            
    `],
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div>
                <label>id: </label>{{hero.id}}
            </div>
            <div>
                <label>name: </label>
                <input type="text" [(ngModel)]="hero.name" placeholder="name">
            </div>
            <button (click)="goBack()">Back</button>
        </div>
    `
})

export class HeroDetailComponent implements OnInit{
    @Input() hero: Hero;
    constructor(private _heroService: HeroService, private _route: ActivatedRoute, private _location: Location) { }
    
    ngOnInit(){
        this._route.params.forEach((params: Params)=>{
            let id = +params['id']; // '+' means convert string param as number
            this._heroService.getHero(id)
                .then(hero => this.hero=hero);
        });
    }

    /** Navigate back */
    goBack(){
        this._location.back();
    }
}