import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);


const getters = {
    doneTodos: state => {
        return state.todos.filter(todo => todo.done)
    }
}

export default new Vuex.Store({
    modules: {

    },
    state: {
        isLoading: false,
        isShowLogoutSpinner: true,
        appleColor: 'red',
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false },
            { id: 3, text: '...', done: true },
        ]
    },
    getters,
    /**
     * 嚴格模式: 無論何時發生了狀態變更且不是由 mutation 函數引起的，將會拋出錯誤。
     * 嚴格模式會深度監測狀態樹來檢測不合規的狀態變更——請確保在發佈環境下關閉嚴格模式，以避免性能損失。
     */
    strict: process.env.NODE_ENV !== "prod"
});
