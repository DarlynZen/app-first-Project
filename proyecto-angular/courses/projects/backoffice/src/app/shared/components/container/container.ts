import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header, Menu } from '@shared/components';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'cdev-container',
  imports: [Header, Menu, RouterOutlet, MatSidenavModule],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})

export class Container {
  openedSidenav = true;

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor() {
    inject(BreakpointObserver)
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });
  }


}