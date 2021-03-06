import { TestBed, inject } from '@angular/core/testing';

import { BookService } from './book.service';
import { Book } from './book';
import { AppService } from '../app.service';

describe('BookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookService, AppService]
    });
  });

  it('should be created', inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAll()', () => {
    it('shold be an empty array by default', inject([BookService], (service: BookService) => {
      expect(service.getAll()).toEqual([]);
    }));

    it('should return all books', inject([BookService], (service: BookService) => {
      const book1 = new Book('Book 1', 'Author 1');
      const book2 = new Book('Book 2', 'Author 2');

      service.add(book1);
      service.add(book2);

      expect(service.getAll()).toEqual([book1, book2]);
    }));

  });

  describe('#save(book)', () => {
    it('should automatically assign an increment id', inject([BookService], (service: BookService) => {
      const book1 = new Book('Book 1', 'Author 1');
      const book2 = new Book('Book 2', 'Author 2');

      service.add(book1);
      service.add(book2);

      expect(service.getById(1)).toEqual(book1);
      expect(service.getById(2)).toEqual(book2);
    }));
  });

  describe('#delete(id)', () => {
    it('should remove a book with the corresponding id', inject([BookService], (service: BookService) => {
      const book1 = new Book('Book 1', 'Author 1');
      const book2 = new Book('Book 2', 'Author 2');

      service.add(book1);
      service.add(book2);
      expect(service.getAll()).toEqual([book1, book2]);
      service.delete(1);
      expect(service.getAll()).toEqual([book2]);
      service.delete(2);
      expect(service.getAll()).toEqual([]);
    }));

    it('it should not remove a book if corresponding id is not found', inject([BookService], (service: BookService) => {
      const book1 = new Book('Book 1', 'Author 1');
      const book2 = new Book('Book 2', 'Author 2');

      service.add(book1);
      service.add(book2);

      expect(service.getAll()).toEqual([book1, book2]);
      service.delete(3);
      expect(service.getAll()).toEqual([book1, book2]);
    }));
  });

  describe('#update(bbok)', () => {

    it('should return book with the corresponding id and updated data', inject([BookService], (service: BookService) => {
      const book1 = new Book('Book 1', 'Author 1');
      service.add(book1);
      const book2 = new Book('Book 3', 'Author 3');
      book2.id = book1.id;

      const updated = service.update(book2);
      expect(updated.name).toEqual('Book 3');
      expect(updated.author).toEqual('Author 3');
    }));

    it('should return null if book is not found', inject([BookService], (service: BookService) => {
      const book1 = new Book('Book 1', 'Author 1');
      service.add(book1);
      const book2 = new Book('Book 3', 'Author 3');
      book2.id = 3;

      const updated = service.update(book2);
      expect(updated).toBeUndefined();
    }));

  });





});
