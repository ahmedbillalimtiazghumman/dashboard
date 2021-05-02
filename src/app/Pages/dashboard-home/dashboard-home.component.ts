import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromRoot from '../../app-state/index';
@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss'],
})
export class DashboardHomeComponent implements OnInit {
  list = ['test1', 'test2', 'test3'];
  user: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private readonly store: Store) {
    this.store
      .select(fromRoot.getUsersSelector)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => (this.user = data.user));
  }
  ngOnInit(): void {}
}
