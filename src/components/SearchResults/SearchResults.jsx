import Item from "../Item/Item.jsx";

const SearchResults = ({ searchResults }) => {
    return (
        <div className="bg-white pt-5 pb-5">
            <h2 className="text-center mb-5">Resultados da busca</h2>
            {searchResults.map((ong) => (
                <Item
                    key={ong.id}
                    instituicao={ong}
                />
            ))}
        </div>
    );
};

export default SearchResults;
