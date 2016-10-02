import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Hero } from './hero';
import { HeroService } from './hero.services';

@Component({
    selector: 'my-dashboard',
    styles: [`
        [class*='col-'] {
          float: left;
        }
        *, *:after, *:before {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
        h3 {
          text-align: center; margin-bottom: 0;
        }
        [class*='col-'] {
          padding-right: 20px;
          padding-bottom: 20px;
        }
        [class*='col-']:last-of-type {
          padding-right: 0;
        }
        .grid {
          margin: 0;
        }
        .col-1-4 {
          width: 25%;
        }
        .module {
            padding: 20px;
            text-align: center;
            color: #eee;
            max-height: 120px;
            min-width: 120px;
            background-color: #607D8B;
            border-radius: 2px;
        }
        h4 {
          position: relative;
        }
        .module:hover {
          background-color: #EEE;
          cursor: pointer;
          color: #607d8b;
        }
        .grid-pad {
          padding: 10px 0;
        }
        .grid-pad > [class*='col-']:last-of-type {
          padding-right: 20px;
        }
        @media (max-width: 600px) {
            .module {
              font-size: 10px;
              max-height: 75px; }
        }
        @media (max-width: 1024px) {
            .grid {
              margin: 0;
            }
            .module {
              min-width: 60px;
            }
        }            
    `],
    template: `
        <h3>Top Heroes</h3>
        <div class="grid grid-pad">
            <div *ngFor="let hero of heroes" (click)="goToDetail(hero)" class="col-1-4">
                <div class="module hero">
                    <h4>{{hero.name}}</h4>
                </div>
            </div>
        </div>
    `
})

export class DashboardComponent implements OnInit {
    heroes: Hero[];

    constructor(private _heroService: HeroService, private _router: Router) { }

    /** Initialisation */
    ngOnInit() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    /** Go to hero's detail */
    goToDetail(hero: Hero) {
        // Set a route link parameters array
        let link = ['/detail', hero.id];
        // Pass the array to the router's navigate method
        this._router.navigate(link);
    }
}