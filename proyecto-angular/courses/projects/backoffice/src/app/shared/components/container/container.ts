import { Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header, Menu } from '@shared/components';
import {MatDrawerMode, MatSidenavModule} from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'cdev-container',
  imports: [Header, Menu, RouterOutlet, MatSidenavModule],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})

export class Container {
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly destroyRef = inject(DestroyRef);

  openedSidenav = true;
  sidenavMode = signal<MatDrawerMode>('side');

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor() {
    //una forma de inyectar en el constructor
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {

            const condition = query === Breakpoints.XSmall || query === Breakpoints.Small;

            this.sidenavMode.set(condition ? 'over' : 'side');
            this.openedSidenav = !condition;

            break;
          }
        }
      });
  }

  toggleSidenav(): void {
    this.openedSidenav = !this.openedSidenav;
  }
}