import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSinglesComponent } from './user-singles.component';

describe('UserSinglesComponent', () => {
  let component: UserSinglesComponent;
  let fixture: ComponentFixture<UserSinglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSinglesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSinglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
