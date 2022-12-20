import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnDestroy {
  title!: string;
  tituloSubs$!: Subscription;

  constructor(private router: Router) {
    this.tituloSubs$ = this.getArgumentsRoutes().subscribe(({ title }) => {
      this.title = title;
      document.title = `AdminPro - ${title}`;
    });
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentsRoutes() {
    return this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
