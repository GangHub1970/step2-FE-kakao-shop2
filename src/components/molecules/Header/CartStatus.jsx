import React from "react";
import Box from "../../atoms/Box";
import { filterCartData } from "../../../utils/convert";
import useCart from "../../../hooks/useCart";

export default function CartStatus() {
  const {
    cartsQuery: { error, data },
  } = useCart();

  if (error) {
    return <div>{error.message}</div>;
  }
  const filteredData = filterCartData(data);
  return (
    <>
      {filteredData.length !== 0 ? (
        <Box className="absolute top-1 left-7 flex justify-center items-center w-5 h-5 text-white text-sm font-bold bg-red-500 rounded-full">
          <span>{filteredData.length}</span>
        </Box>
      ) : null}
    </>
  );
}
