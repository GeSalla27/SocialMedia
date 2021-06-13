import { TestBed } from '@angular/core/testing';

import { PostsListResolver } from './posts-list.resolver';

describe('PostsListResolver', () => {
    let resolver: PostsListResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(PostsListResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
