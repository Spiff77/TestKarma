import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import {By} from '@angular/platform-browser';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports: [HttpClientTestingModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contains 3 li tag', () => {
    const lis = fixture.debugElement.queryAll(By.css('ul li'))
    expect(lis.length).toEqual(3)
  });

  it('should have the component updated with ngModel', () => {
    component.text = 'Hello'

    fixture.detectChanges()
    const input: HTMLButtonElement = fixture.debugElement.query(By.css('input')).nativeElement

    console.log(fixture.debugElement.query(By.css('input')))

    fixture.whenStable( ).then(t => {
      expect(input.value).toEqual('Hello');
    })
  });
});
