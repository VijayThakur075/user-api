export const GET_USER ='GET_USER';
export const GET_POST ='GET_POST';
export const GET_TODO ='GET_TODO';
export const GET_COMMENT = 'GET_COMMENT';
export const GET_ADD = 'GET_ADD';
export const GET_EDIT = 'GET_EDIT';

export const getUser =(payload) =>({type: GET_USER,payload});
export const getPost =(payload) =>({type: GET_POST,payload});
export const getTodo =(payload) =>({type: GET_TODO,payload});
export const getComment =(payload) =>({type: GET_COMMENT,payload});
export const getAdd =(payload) =>({type: GET_ADD,payload});
export const getEdit =(payload) =>({type: GET_EDIT,payload});

