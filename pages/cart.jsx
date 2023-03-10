import React, {useContext, useMemo} from "react";
import { CartContext } from "@/context/CardContext";
import Link from "next/link";
import { quantityCount } from "@/helper/function";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const sum = useMemo(()=>{
    let tempSum=0
    state.selectedItems.forEach((item)=>{
      tempSum += item.quantity * item.price
    })
    return tempSum;
  }, [state])
  return (
    <div className="flex justify-center my-10">
      <div className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Latest Cart
          </h5>
          <Link
            href="/shop"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Back to Shop
          </Link>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {state?.selectedItems.map((item) => (
              <li className="py-3 sm:py-4">
                <div className="flex justify-between space-x-4">
                  <div className="flex-shrink-0">
                    <img className="w-12 h-12 rounded-full" src={item.image} />
                  </div>
                  <div className="flex-1 min-w-0 max-w-xs">
                    <p className="flex flex-col justify-center text-sm font-medium text-gray-900 truncate dark:text-white">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {item.category}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mr-2 font-semibold text-gray-900 dark:text-white">
                    <button
                      onClick={() =>
                        dispatch({ type: "INCREASE", payload: item })
                      }
                      className="w-8 mx-1"
                      style={{
                        padding: "7px",
                        backgroundColor: "#28a745",
                        color: "white",
                        border: "none",
                        fontSize: "16px",
                        borderRadius: "10px",
                      }}
                    >
                      +
                    </button>
                    {item.quantity}
                    {quantityCount(state, item.id) > 1 && (
                      <button
                        onClick={() =>
                          dispatch({ type: "DECREASE", payload: item })
                        }
                        className="w-8 mx-1 bg-red-500"
                        style={{
                          padding: "7px",
                          color: "white",
                          border: "none",
                          fontSize: "16px",
                          borderRadius: "10px",
                        }}
                      >
                        -
                      </button>
                    )}
                    {quantityCount(state, item.id) === 1 && (
                      <button
                        onClick={() =>
                          dispatch({ type: "REMOVE_ITEM", payload: item })
                        }
                        className="w-8 mx-1 bg-red-500"
                        style={{
                          padding: "7px",
                          color: "white",
                          border: "none",
                          fontSize: "16px",
                          borderRadius: "10px",
                        }}
                      >
                        -
                      </button>
                    )}
                  </div>
                  <div className="w-10 text-center flex flex-col justify-center font-semibold text-gray-900 dark:text-white">
                    ${item.price}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="float-right text-white">
          ${sum}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
