<template>
  <tr>
    <td>
      <img :src="userDetail.avatar" class="mr-2" alt="image" />
      {{ userDetail.name }}
    </td>
    <td>{{ userDetail.age }}</td>
    <td>
      <label
        class="badge badge-gradient-primary mr-2"
        v-for="(item, index) in userDetail.programmingLanguage"
        :key="index"
        >{{ item }}</label
      >
    </td>
    <td>{{ userDetail.gender }}</td>
    <td>
      <button
        type="button"
        class="mr-2 btn btn-gradient-danger btn-icon-text"
        @click="handleRemove(userDetail.id)"
      >
        <i class="mdi mdi-delete btn-icon-prepend"></i> Remove
      </button>
      <button
        type="button"
        class="btn btn-gradient-info btn-icon-text"
        @click="handleOpenEdit"
      >
        <i class="mdi mdi-border-color btn-icon-prepend"></i> Edit
      </button>
    </td>
    <teleport to="#app">
      <app-modal :isOpen="isEdit" :handelCloseModal="handleCloseEdit">
        <form-add-user :dataUser="userDetail"></form-add-user>
      </app-modal>
    </teleport>
  </tr>
</template>

<script>
import { mapActions } from "vuex";

import FormAddUser from "./FormAddUser.vue";

export default {
  components: {
    FormAddUser,
  },
  data() {
    return {
      isEdit: false,
    };
  },
  props: {
    userDetail: {
      type: Object,
    },
  },
  methods: {
    handleCloseEdit() {
      this.isEdit = false;
    },
    handleOpenEdit() {
      this.isEdit = true;
    },
    ...mapActions({
      handleRemove: "removeUserAction",
    }),
  },
};
</script>

<style></style>
