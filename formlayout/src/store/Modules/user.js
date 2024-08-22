const state = () => {
    return {
        userList: [
            {
                "id": 1,
                "name": "Nguyễn Phong Hào",
                "avatar": "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
                "age": 23,
                "description": "thân thiện , hoc hỏi nhanh",
                "programmingLanguage": ["JS", "JAVA"],
                "gender": "Nam",
                "type": "ADMIN"
            },
            {
                "id": 1,
                "name": "Phan Thùy Duyên",
                "avatar": "https://i.pinimg.com/564x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg",
                "age": 22,
                "description": "thân thiện , hoc hỏi nhanh",
                "programmingLanguage": ["PHP", "C#"],
                "gender": "Nữ",
                "type": "CLIENT"
            }
        ],
        searchName: "",
    }
};
const getters = {
    userListByBoy(state) {
        return state.userList.filter(user => user.gender == "Nam")
    },
    userListBySearchName(state) {
        const { userList, searchName } = state;
        return userList.filter(user => user.name.toLowerCase().includes(searchName.toLowerCase()));
    }
};

const mutations = {
    setSearchName(state, payload) {

        state.searchName = payload;
    },
    addUserMutations(state, payload) {
        state.userList.push(payload)
    },
    removeUserMutations(state, payload) {
        const index = state.userList.findIndex(user => user.id == payload);
        if (index > -1) {
            state.userList.splice(index, 1);
        } else { window.alert("Khon tim thay") }
    },
    updateUserMutations(state, payload) {
        const index = state.userList.findIndex(user => user.id == payload.id);
        if (index > -1) {
            state.userList[index] = payload;
        } else { window.alert("Khon tim thay") }
    }
};
const actions = {
    setSearchNameAction(context, payload) {
        setTimeout(() => {
            console.log("setSearchName")
        }, 5000)
        console.log("24122  ")
        context.commit("setSearchName", payload)
    },
    addUserAcion(context, payload) {
        const newuser = { ...payload, id: Math.random() };
        context.commit("addUserMutations", newuser)
    },
    removeUserAction(context, payload) {
        context.commit("removeUserMutations", payload);
    },
    updateUserAction(context, payload) {
        context.commit("updateUserMutations", payload);
    },

}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}