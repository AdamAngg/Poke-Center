import { containsSpecialChars } from "../helpers/containsSpecialChars.helper";
import {
  decrementCurrentPage,
  incrementCurrentPage,
} from "../store/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
export const Pagination = () => {
  const dispatch = useDispatch();
  const searchedPokemon = useSelector(
    (state) => state?.pokemonReducer?.searchedPokemon
  );
  const pokemonArray = useSelector(
    (state) => state?.pokemonInfoReducer?.pokemon
  );
  const currentPage = useSelector(
    (state) => state?.pokemonReducer?.currentPage
  );
  const itemsPerPage = useSelector(
    (state) => state?.pokemonReducer?.itemsPerPage
  );
  const totalPages = Math.ceil(pokemonArray.length / itemsPerPage);
  return (
    containsSpecialChars(searchedPokemon) || (
      <div className="pagination-container">
        {currentPage - 1 !== 0 && (
          <button
            className="generations-btn pagination--hover--left"
            onClick={() => dispatch(decrementCurrentPage())}
          >
            <span>Page {currentPage - 1}</span>
          </button>
        )}
        {totalPages !== currentPage && (
          <button
            className="generations-btn pagination--hover--right"
            onClick={() => dispatch(incrementCurrentPage())}
          >
            <span>Page {currentPage + 1}</span>
          </button>
        )}
      </div>
    )
  );
};
