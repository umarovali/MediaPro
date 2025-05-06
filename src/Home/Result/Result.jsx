import { useEffect, useRef } from "react";
import Title from "../../ui/Title";
import ResultItem from "./ResultItem";

export default function Result() {

  return (
    <section className="result">
      <div className="container">
        <Title>
          <span>Kurs</span> natijasi
        </Title>

        <ul className="result_wrapper">
          <ResultItem />
          <ResultItem />
          <ResultItem />
          <ResultItem />
        </ul>
      </div>
    </section>
  );
}