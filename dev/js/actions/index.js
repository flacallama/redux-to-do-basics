export const selectUser = (user) => {
  console.log('you clicked on: ', user.first);
  return {
    type: "USER_SELECTED",
    payload: user
  }
}

export const selectDog = (dog) => {
  console.log('you clicked on: ', dog.name);
  return {
    type: "DOG_SELECTED",
    payload: dog
  }
}
