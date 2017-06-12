import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBookComponent } from './show-book.component';
import { ListBooksComponent } from 'app/book/list-books/list-books.component';
import { NewBookComponent } from 'app/book/new-book/new-book.component';
import { RouterModule } from '@angular/router';
import { BookService } from 'app/book/book.service';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { routes } from 'app/routes';
import { AppService } from '../../app.service';

describe('ShowBookComponent', () => {
  let component: ShowBookComponent;
  let fixture: ComponentFixture<ShowBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListBooksComponent,
        NewBookComponent,
        ShowBookComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        FormsModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        BookService,
        AppService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
