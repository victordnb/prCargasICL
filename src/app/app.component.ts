import { Component } from '@angular/core';

@Component({ //un decorador modifica el comportambiento de la clase
  selector: 'app-root', //etiqueta app-root
  templateUrl: './app.component.html', //le indicamos donde esta la vista (template)
  styleUrls: ['./app.component.css']  //le indicamos la hoja de estilo
})
export class AppComponent {
  title = 'prCargasICL';
}
