import Category from "../component/Category";
import "./home.css";
import { useEffect } from "react";
import { useQuiz } from "../context/quiz-context";
import axios from "axios";
import { Footer } from "../component/Footer";
function Home() {
  const { state, dispatch } = useQuiz();

  const categoryData = [{ name: "Science" }, { name: "Entertainment" }];

  const filteredData = state.categories.filter((x) =>
    x.name.includes("Science")
  );

  return (
    <>
      <div className="categories">
        {categoryData.map((x) => (
          <Category key={x.name} value={x} />
        ))}
      </div>
      <Footer />
    </>
  );
}
export default Home;
