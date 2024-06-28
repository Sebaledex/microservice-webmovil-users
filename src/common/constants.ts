export enum RabbitMQ {
  UserQueue = 'users',
}

export enum UserMsg {
  CREATE = 'CREATE_USER',
  CREATE_ADMIN = 'create_admin',
  FIND_ALL = 'FIND_USERS',
  FIND_ONE = 'FIND_USER',
  UPDATE = 'UPDATE_USER',
  DELETE = 'DELETE_USER',
  VALID_USER = 'VALID_USER',
  PATCH = "PATCH_USER",
  CHANGE_ROLE = "CHANGE_ROLE",
  
}
