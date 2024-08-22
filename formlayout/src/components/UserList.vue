<template>
  <tbody>
    <user-item
      v-for="item in userList"
      :key="item.id"
      :userDetail="item"
    ></user-item>
  </tbody>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import UserItem from "./UserItem.vue";
export default {
  components: {
    UserItem,
  },
  computed: {
    // userList() {
    //   return this.$store.state.userList;
    // },
    // userListByBoy() {
    //   return this.$store.getters.userListByBoy;
    // },
    ...mapState({
      userList: (state) => state.user.userList,
      user: "userList",
      searchName: (state) => state.searchName,
    }),
    ...mapGetters({
      userListByBoy123: "userListByBoy",
      userListBySearchName: "userListBySearchName",
    }),

    // mapState(["userList"]),
  },
};
</script>

<style></style>
