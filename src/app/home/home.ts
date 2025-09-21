import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']   // 👈 corregido (plural)
})
export class HomeComponent {   // 👈 corregido (Home → HomeComponent)
  // Solicitar permiso al usuario
  requestPermission() {
    if (!('Notification' in window)) {
      alert('Este navegador no soporta notificaciones.');
      return;
    }

    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        alert('✅ Permiso concedido para notificaciones.');
      } else {
        alert('❌ Permiso denegado.');
      }
    });
  }

  // Mostrar notificación de prueba
  showNotification() {
    if (Notification.permission === 'granted') {
      new Notification('Hola 👋', {
        body: 'Esta es una notificación de prueba desde tu app Angular.',
        icon: 'assets/icons/icon-192x192.png' // opcional si es PWA
      });
    } else {
      alert('Primero debes permitir notificaciones.');
    }
  }
}
