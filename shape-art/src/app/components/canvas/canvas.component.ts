import { Component, Input, SimpleChanges } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css'
})
export class CanvasComponent {
  @Input() shape: string = '';
  @Input() numShapes: number = 0;
  @Input() generateArt: boolean = false;


  ngOnChanges() {
    if (this.generateArt) {
      this.generateArtFunction()
    }
  }


  generateArtFunction() {
    if (this.shape === 'triangle') {
      const canvas = document.getElementById('shapeCanvas') as HTMLCanvasElement;
      const predefinedColors: string[] = [
        '#FF0000', // Red
        '#00FF00', // Lime
        '#0000FF', // Blue
        '#FFFF00', // Yellow
        '#FF00FF', // Magenta
        '#00FFFF', // Cyan
        '#800000', // Maroon
        '#008000', // Green
        '#000080', // Navy
        '#808000', // Olive
        '#800080', // Purple
        '#008080', // Teal
        '#808080', // Gray
        '#C0C0C0', // Silver
        '#FFA500', // Orange
        '#FFC0CB', // Pink
        '#800080', // Purple
        '#800000', // Maroon
        '#808000', // Olive
        '#008000', // Green
        '#008080', // Teal
        '#000080', // Navy
        '#00008B', // DarkBlue
        '#0000CD', // MediumBlue
        '#0000FF', // Blue
        '#00BFFF', // DeepSkyBlue
        '#00CED1', // DarkTurquoise
        '#00FA9A', // MediumSpringGreen
        '#00FF7F', // SpringGreen
        '#00FF00', // Lime
        '#7CFC00', // LawnGreen
        '#ADFF2F', // GreenYellow
        '#7FFF00', // Chartreuse
        '#32CD32', // LimeGreen
        '#556B2F', // DarkOliveGreen
        '#8FBC8B', // DarkSeaGreen
        '#98FB98', // PaleGreen
        '#90EE90', // LightGreen
        '#2E8B57', // SeaGreen
        '#3CB371', // MediumSeaGreen
        '#20B2AA', // LightSeaGreen
        '#2F4F4F', // DarkSlateGray
        '#008080', // Teal
        '#48D1CC', // MediumTurquoise
        '#40E0D0', // Turquoise
        '#00FFFF', // Cyan
        '#00FFFF', // Aqua
        '#7FFFD4', // Aquamarine
        '#AFEEEE', // PaleTurquoise
        '#E0FFFF', // LightCyan
        '#5F9EA0', // CadetBlue
        '#4682B4', // SteelBlue
        '#B0C4DE', // LightSteelBlue
        '#B0E0E6', // PowderBlue
        '#ADD8E6', // LightBlue
        '#87CEEB', // SkyBlue
        '#87CEFA', // LightSkyBlue
        '#191970', // MidnightBlue
        '#000080', // Navy
        '#6A5ACD', // SlateBlue
        '#483D8B', // DarkSlateBlue
        '#7B68EE', // MediumSlateBlue
        '#9370DB', // MediumPurple
        '#4B0082', // Indigo
        '#8A2BE2', // BlueViolet
        '#6A5ACD', // SlateBlue
        '#483D8B', // DarkSlateBlue
        '#7B68EE', // MediumSlateBlue
        '#9370DB', // MediumPurple
        '#4B0082', // Indigo
        '#8A2BE2', // BlueViolet
        '#6A5ACD', // SlateBlue
        '#483D8B', // DarkSlateBlue
        '#7B68EE', // MediumSlateBlue
        '#9370DB', // MediumPurple
        '#4B0082', // Indigo
        '#8A2BE2', // BlueViolet
        '#6A5ACD', // SlateBlue
        '#483D8B', // DarkSlateBlue
        '#7B68EE', // MediumSlateBlue
        '#9370DB', // MediumPurple
        '#4B0082', // Indigo
        '#8A2BE2', // BlueViolet
        '#6A5ACD', // SlateBlue
        '#483D8B', // DarkSlateBlue
        '#7B68EE', // MediumSlateBlue
        '#9370DB', // MediumPurple
        '#4B0082', // Indigo
        '#8A2BE2', // BlueViolet
      ];

      if (canvas) {
        const ctx = canvas.getContext('2d');

        if (ctx) {
          let index = 0;
          const drawShape = () => {
            if (index < this.numShapes) {
              const vertex1 = { x: Math.floor(Math.random() * 1001), y: Math.floor(Math.random() * 501) };
              const vertex2 = { x: Math.floor(Math.random() * 1001), y: Math.floor(Math.random() * 501) };
              const vertex3 = { x: Math.floor(Math.random() * 1001), y: Math.floor(Math.random() * 501) };

              ctx.beginPath();
              ctx.moveTo(vertex1.x, vertex1.y);
              ctx.lineTo(vertex2.x, vertex2.y);
              ctx.lineTo(vertex3.x, vertex3.y);
              ctx.closePath();

              const colorIndex = Math.floor(Math.random() * predefinedColors.length);
              ctx.fillStyle = predefinedColors[colorIndex];
              ctx.fill();

              index++;
              setTimeout(drawShape, 250);
            }
          };

          drawShape();
        }
      }
    }
  }
}
