import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import cantores from "../../midia/cantores.png";
import passaro from "../../midia/passaro.png";

function Calendar() {
  return (
    <div className="bloco-calendario">
      <img className="cantores" src={cantores} alt="" />
      <img className="passaro" src={passaro} alt="" />
      <h1>Eventos</h1>
      <p>Confira nosso calendário de eventos!</p>
      <div className="calendario">
        <div className="corpo-calendario" style={{ width: "50vw" }}>
          <Fullcalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"}
            headerToolbar={{
              start: "title", // will normally be on the left. if RTL, will be on the right
              center: "",
              end: "today prev,next", // will normally be on the right. if RTL, will be on the left
            }}
            height={"80vh"}
          />
        </div>
      </div>

    </div>

  );
}

export default Calendar;