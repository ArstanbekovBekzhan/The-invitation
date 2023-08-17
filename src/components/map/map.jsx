import React from "react";
import M from "../../components/map/map.module.css"

const Map = () => {
  return (
    <div className={M.container}>
      <h2>Место проведения</h2>
      <p>Банкетный зал "Jannat Resort"</p>
      <p>г. Бишкек, улица Аалы Токомбаева, 21/2</p>
      <iframe className={M.map}
        src="https://yandex.ru/map-widget/v1/-/CCUsvOApXC"
        width="80%"
        height="400px"
        frameBorder="0"
        title="Карта"
      />
    </div>
  );
};

export default Map;
