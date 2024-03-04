import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  selectedShape = '';
  numShapes = 0;
  @Output() shapeSelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() numberSelected: EventEmitter<number> = new EventEmitter<number>();
  @Output() generateArt: EventEmitter<boolean> = new EventEmitter<boolean>();

  selectShape(shape: string) {
    this.shapeSelected.emit(shape);
  }

  selectNumShapes() {
    this.numberSelected.emit(this.numShapes);
  }

  shapes = [
    { name: "triange", id: 1, value: "triangle", text: "Triangle" },
    { name: "square", id: 2, value: "square", text: "Square" }
  ];

  art(): void {
    this.generateArt.emit(true);
  }

}
