import { Component } from '@angular/core';
import { DataResource } from './data-resource.service';
import { trainsData } from './data-mock';
// import { DataPipe } from './data-pipe';

@Component({
    selector: 'app-root',
    // pipes: [DataPipe],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    private date;
    public headerArr = [];
    public sortUtil = {};
    public filterUtil = {};
    public trainSchedules: any;
    public dataKeys = [];
    public userChoice = [];

    constructor(private dataResource: DataResource) {
        // Initialize trainsData attribute
        this.dataKeys = Object.keys(trainsData[0]);

        // Set up time
        this.date = new Date();
        setInterval(() => {
            this.date = new Date();
        });

        // Initialize table data
        this.trainSchedules = this.dataResource.getSchedule();

        // Initialize filter options
        this.dataKeys.forEach((key) => {
            this.filterUtil[key] = [];
        });
        trainsData.forEach((element) => {
            Object.keys(element).forEach((key) => {
                if (this.filterUtil[key].indexOf(element[key]) === -1) {
                    this.filterUtil[key].push(element[key]);
                }
            });
        });

        // Initialize sort flag
        this.sortUtil = this.dataKeys.map((key) => {
            let param = key.charAt(0).toUpperCase() + key.slice(1);
            this.sortUtil[param] = true;
        });

        // Initialize table heads
        this.dataKeys.forEach((key) => {
            this.headerArr.push((key.charAt(0).toUpperCase() + key.slice(1)).replace(/([A-Z])/g, ' $1').trim());
        });

    }

    // column sorting function
    public sortColumn = function (attribute) {
        let temp = attribute.split(' ').join('');
        let originAttr = temp.charAt(0).toLowerCase() + temp.slice(1);
        let order = this.sortUtil[temp];
        let result = trainsData.sort(function(previous, next) {
            let x = previous[originAttr];
            let y = next[originAttr];
            if (order) {
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            } else {
                return ((x < y) ? 1 : ((x > y) ? -1 : 0));
            }
        });
        this.sortUtil[temp] = !this.sortUtil[temp];
        return result;
    };

    // Get user choice
    public getChoice = function (key, choice) {
        this.userChoice = [key, choice];
    };

    // Clear user choice
    public clearChoice = function () {
        this.userChoice = [];
    };

}
