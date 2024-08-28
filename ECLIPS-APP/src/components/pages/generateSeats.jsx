const rows = 10;
const seatsPerRow = 15;
const sectors = 3;
const seatsPerSector = seatsPerRow / sectors;

const generateSeats = () => {
  const rowLetters = "ABCDEFGHIJ";
  let seatArray = [];

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const rowLetter = rowLetters[rowIndex];
    for (let seatNumber = 1; seatNumber <= seatsPerRow; seatNumber++) {
      const seatId = `${rowLetter}${seatNumber}`;
      seatArray.push({
        id: seatId,
        row: rowLetter,
        seat: seatNumber,
      });
    }
  }
  return seatArray;
};

export default generateSeats;
