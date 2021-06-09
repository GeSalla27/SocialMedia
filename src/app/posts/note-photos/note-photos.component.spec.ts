import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotePhotosComponent } from './note-photos.component';

describe('NotePhotosComponent', () => {
    let component: NotePhotosComponent;
    let fixture: ComponentFixture<NotePhotosComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NotePhotosComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NotePhotosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
