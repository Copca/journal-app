import { AppDispatch, RootState } from '../store';

// import { setPokemons, startLoadingPokemons } from './pokemonSlice';
// import { pokemonApi } from '@/api/pokemonApi';

export const getPokemons = (page = 0) => {
	return async (dispatch: AppDispatch) => {
		// dispatch(startLoadingPokemons());
		// const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page}`);
		// const payload = { pokemons: data.results, page: page + 1 };
		// dispatch(setPokemons(payload));
	};
};
