const Panel = ({ title, children }) => {
  return (
    <div className="text-bg-primary p-3">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default Panel;