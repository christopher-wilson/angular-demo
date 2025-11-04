import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostExample } from './post-example';

describe('PostExample', () => {
  let component: PostExample;
  let fixture: ComponentFixture<PostExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
