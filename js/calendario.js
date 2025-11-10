document.addEventListener('DOMContentLoaded', function () {
    const calendarioEl = document.getElementById('calendario');
    const calendario = new FullCalendar.Calendar(calendarioEl, {
        
        initialView: 'dayGridMonth', // vista inicial: mes
        locale: 'es',                // idioma español
        selectable: true,            // permite seleccionar fechas
        editable: true,              // permite mover eventos
        
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },

        events: [
          {
            title: 'Evento inicial',
            start: new Date().toISOString().split('T')[0] // hoy
          }
        ],

        select: function (info) {
          const titulo = prompt('¿Nombre del evento?');
          if (titulo) {
            calendario.addEvent({
              title: titulo,
              start: info.startStr,
              end: info.endStr,
              allDay: info.allDay
            });
          }
          calendario.unselect(); // deselecciona después de crear
        },

        eventClick: function (info) {
          if (confirm(`¿Eliminar evento "${info.event.title}"?`)) {
            info.event.remove();
          }
        }
      });

      calendario.render();
    });