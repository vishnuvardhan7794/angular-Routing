import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../services/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.scss']
})
export class ManageBookComponent implements OnInit {

  books: Book[] = [];
  book: Book = new Book();
  constructor(private router: Router,
    private bookService: BookService,
    public route: ActivatedRoute) { }
  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books);
  }
  ngOnInit(): void {
    this.getBooks();
  }
  updateBook(id: number): void {
    this.router.navigate(['../update-book', id], {
      relativeTo: this.route
    });
  }
  deleteBook(id: number): void {
    this.bookService.deleteBook(id);
  }

}
