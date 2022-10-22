export const Slot = ({ data }) => {
  console.log(data);

  return (
    <>
      {data.map((slot, id) => (
        <div className="slot" key={id}>
          <h1>Vehicle No - {id + 1}</h1>
          <br />
          <h3>
            Vehical Number : <span style={{ color: "red" }}>{slot.number}</span>
          </h3>
          <h3>Driver Name: {slot.name}</h3>
          <h3>Check InTime :{slot.checkInTime}</h3>
          <h3>Check OutTime :{slot.checkOutTime}</h3>
        </div>
      ))}
    </>
  );
};

export default Slot;
