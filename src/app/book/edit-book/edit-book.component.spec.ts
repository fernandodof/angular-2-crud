import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookComponent } from './edit-book.component';

import { FormsModule } from '@angular/forms';
import { ListBooksComponent } from 'app/book/list-books/list-books.component';
import { NewBookComponent } from 'app/book/new-book/new-book.component';
import { ShowBookComponent } from 'app/book/show-book/show-book.component';
import { RouterModule } from '@angular/router';
import { routes } from 'app/routes';
import { BookService } from 'app/book/book.service';
import { APP_BASE_HREF } from '@angular/common/';
import { AppService } from '../../app.service';

describe('EditBookComponent', () => {
  let component: EditBookComponent;
  let fixture: ComponentFixture<EditBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListBooksComponent,
        NewBookComponent,
        ShowBookComponent,
        EditBookComponent
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
    fixture = TestBed.createComponent(EditBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
