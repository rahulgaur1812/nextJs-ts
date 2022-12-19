import React from "react";
import { GetStaticProps, NextPage } from "next";
import { GetProductResult, Welcome } from "../types";
import "bootstrap/dist/css/bootstrap.css";

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products/");
  const data: GetProductResult = await response.json();
  return {
    props: {
      list: data,
    },
  };
};

const Products: NextPage<{ list: Welcome[] }> = ({ list }) => {
  return (
    <>
      <div className="row">
        {list.map((item) => (
          <div className="col-md-12">{item.title}</div>
        ))}
      </div>
    </>
  );
};

export default Products;
