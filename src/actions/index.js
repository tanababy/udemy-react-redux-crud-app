export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = () => ({
    type: INCREMENT
});//アロー関数の省略記法、戻り値がそのままならreturnを省略して（）だけにできる。

export const increment = () => ({
    type: DECREMENT
});