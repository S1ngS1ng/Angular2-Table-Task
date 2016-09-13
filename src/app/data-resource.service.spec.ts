/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataResourceService } from './data-resource.service';

describe('Service: DataResource', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DataResourceService]
        });
    });

    it('should ...', inject([DataResourceService], (service: DataResourceService) => {
        expect(service).toBeTruthy();
    }));
});
