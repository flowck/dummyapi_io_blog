import { http } from "common/utils/http";
import { ItemsResponse } from "common/typings/index";
import { User, UserObj } from "modules/users/model/user";

export async function getUsers(page = 0, limit = 10) {
  const { data } = await http.get<ItemsResponse<UserObj>>("/user");
  return data.data;
}

export async function getUser(id: string) {
  const { data } = await http.get<UserObj>(`/user/${id}`);
  return data;
}
