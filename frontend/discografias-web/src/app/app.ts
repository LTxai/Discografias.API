import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './features/bands/components/button/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('discografias-web');
}
