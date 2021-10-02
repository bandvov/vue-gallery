import axios from "axios";

export default {
  state: {
    photos: [],
    currentPhoto: {},
    dialogVisible: false,
  },
  mutations: {
    setPhotos(state, payload) {
      state.photos = payload;
    },
    setCurrentPhoto(state, payload) {
      state.currentPhoto = payload;
    },
    showDialog(state) {
      state.dialogVisible = true;
    },
    hideDialog(state) {
      state.dialogVisible = false;
    },
    addPhoto(state, payload) {
      state.photos.push(payload);
    },
  },
  getters: {
    getAllPhotos(state) {
      return state.photos;
    },
    getCurrentPhoto(state) {
      return state.currentPhoto;
    },
    getDialogVisible(state) {
      return state.dialogVisible;
    },
  },
  actions: {
    fetchPhotos(context) {
      axios
        .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
        .then((res) => {
          context.commit("setPhotos", res.data);
        });
    },
  },
};
