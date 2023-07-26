import React from "react";
import { useQuery } from "react-query";
import cartInstance from "../apis/cart";
import CartProducts from "../components/templates/CartProducts";
import Box from "../components/atoms/Box";
import { comma, filterCartData } from "../utils/convert";
import Button from "../components/atoms/Button";
import Container from "../components/atoms/Container";
import NullCart from "../components/organisms/NullCart";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate();
  const { error, data } = useQuery(["carts"], cartInstance.getCart, {
    staleTime: 1000 * 60,
  });

  if (error) {
    return <div>{error.message}</div>;
  }
  const filteredData = filterCartData(data);
  return (
    <main className="flex flex-col justify-center items-center w-full min-h-full pb-8 bg-gray-100">
      <Container className="w-cart">
        <h3 className="text-center py-3 font-semibold bg-white border-t">
          장바구니
        </h3>
        {filteredData.length !== 0 ? (
          <>
            <CartProducts products={filteredData} />
            <Box className="flex justify-between w-full text-xl p-4 bg-white border-y">
              <strong>주문 예상 금액</strong>
              <span className="font-bold text-blue-500">
                {comma(data.totalPrice)}원
              </span>
            </Box>
            <Button
              width="w-full"
              padding="py-3"
              textsize="lg"
              font="bold"
              color="yellow"
              onClick={() => navigate("/order")}
            >
              주문하기
            </Button>
          </>
        ) : (
          <NullCart />
        )}
      </Container>
    </main>
  );
}
