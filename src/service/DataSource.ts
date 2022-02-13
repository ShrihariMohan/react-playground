const comments = ['Hey There', ' This is a comment', 'Lets go man', ' Hey Hey Hello', 'Hell yeah']
export const getComments = () => {
  comments.pop()
  // console.log("🚀 ~ file: DataSource.ts ~ line 4 ~ getComments ~ comments.pop()", comments)
  return comments
}

export const addChangeListener = (fn: Function) => {

}

export const removeChangeListener = (fn: Function) => {

}