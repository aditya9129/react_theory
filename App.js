const heading=React.createElement("h1",{},"hello react");
const root=ReactDOM.createRoot(document.getElementById("root"));

const parent=React.createElement("div",{id:"parent"},
  React.createElement("div",{id:"child"},
  [React.createElement("h1",{},"h1 it is"),React.createElement("h2",{},"h2 it is")]
  )
)
root.render(parent);