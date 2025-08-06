import React, { useState } from "react";

const Chips = () => {
  const [newChip, setNewChip] = useState<string>("");
  const [chips, setChips] = useState<string[]>([]);
  const handleChange = (e: any) => {
    setNewChip(e.target.value);
  };
  const handleMouseEnter = (e: any) => {
    const value = e.target.defaultValue;
    if (e.key === "Enter") {
      if (!chips.includes(value)) {
        setChips([...chips, value]);
      }
      setNewChip("");
    }
    // console.log(value, "value in enter");
  };
  const handleRemove = (chip) => {
    console.log(chip, "this chip has to be removed");
    setChips(chips.filter((currentChip) => currentChip !== chip));
  };
  if (chips.length > 0) {
    console.log(chips, "chips");
  }

  return (
    <>
      <div>
        <h2>Chips Component</h2>
        <input
          type="text"
          onChange={handleChange}
          onKeyDown={handleMouseEnter}
          value={newChip}
          className="border border-b border-black"
        />
        {chips.includes(newChip) ? (
          <p className="">its already there , please enter new chip</p>
        ) : (
          ""
        )}
        <div className="flex flex-col justify-center gap-2 items-center">
          {chips.length > 0 &&
            chips.map((chip) => (
              <div className="p-4 bg-gray-400">
                {chip}
                <p
                  className="cursor-pointer text-red-500"
                  onClick={() => handleRemove(chip)}
                >
                  X
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Chips;
