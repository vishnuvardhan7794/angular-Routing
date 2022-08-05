import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Book } from '../services/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {
  book: Book = new Book();
  constructor(private route: ActivatedRoute,
      private router: Router,
      private bookService: BookService,
      private location: Location) { }
  ngOnInit(): void {
      this.route.params.pipe(
          switchMap((params: Params) => this.bookService.getBook(+params['id']))
      ).subscribe(book => this.book = book!);
  }
  goBack(): void {
      this.location.back();
  }
  updateBook(id: number): void {
      this.router.navigate(['/update-book', id]);
  }
}
