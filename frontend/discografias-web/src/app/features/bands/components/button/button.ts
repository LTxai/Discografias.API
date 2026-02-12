import { Component, input } from '@angular/core';
type ButtonVariants = 'primary' | 'secondary' | 'disabled';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  label = input<string>('');
  variant = input<ButtonVariants>('primary');
}
