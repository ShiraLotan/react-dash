import React from 'react';

function Widgets({data}) {

  return (
    <div className="Widgets">
        {data.name}
        {data.value}
    </div>
  );
}

export default Widgets;
