import { Component } from '@angular/core';
import { Portfolio } from './portfolio';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  filteredSkills: Portfolio [] = [];

    _skills: Portfolio[] = [];

    _filterBy!: string;

    constructor(private skillService: PortfolioService) { }

    ngOnInit(): void {
        this._skills = this.skillService.retrieveAll(); 
        this.filteredSkills = this._skills;     
    }

    set filter(value: string) {
        this._filterBy = value;

        this.filteredSkills = this._skills.filter((skill: Portfolio) => 
        skill.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1)
    }

    get filter(){
        return this._filterBy
    }

}