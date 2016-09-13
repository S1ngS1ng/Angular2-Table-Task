import { Injectable } from '@angular/core';
import { Data } from './data-interface';
import { trainsData } from './data-mock';

@Injectable()
export class DataResource {

    getSchedule(): Data[] {
        return trainsData;
    }



}
