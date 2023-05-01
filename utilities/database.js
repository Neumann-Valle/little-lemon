import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("little_lemon");

export async function createTable() {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `create table if not exists user 
          (id integer primary key not null, 
            firstname text, lastname text, email text, 
            phone text,orderstatus integer,passwordchange integer, specialoffer integer, newsletter integer);`
        );
      },
      reject,
      resolve
    );
  });
}

export async function getUserData() {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql("select * from user", [], (_, { rows }) => {
        resolve(rows._array.length > 0 ? rows._array[0] : false);
      });
    });
  });
}

/**
 * updates user data
 * @param {*} params
 */
export async function updateUserData(params = {}) {
  db.transaction((tx) => {
    const query = `UPDATE user SET firstname='${params.firstname}', lastname='${params.lastname}',
    email='${params.email}',phone='${params.phone}', orderstatus='${params.orderstatus}',
    passwordchange='${params.passwordchange}',specialoffer='${params.specialoffer}',
    newsletter='${params.newsletter}' WHERE id=1`;

    tx.executeSql(
      query,
      [],
      (_, { rows }) => {
        // console.log(rows._array);
      },
      (_, err) => {
        throw new Error(`Something went wrong, stack info : ${err}`);
      }
    );
  });
}

/**
 * saves user data
 * param spect an object
 * {firstname:?, lastname:?,email:?,phone:?,orderstatus:?,passwordchange:?,specialoffer:?,newsletter:?}
 */
export async function saveUserData(params = {}) {
  db.transaction((tx) => {
    const query = `insert into user (firstname , lastname , email, 
        phone,orderstatus,passwordchange , specialoffer, newsletter) values 
        ('${params.firstname}', '${params.lastname}', '${params.email}', 
         '${params.phone}', '${params.orderstatus}', '${params.passwordchange}',
         '${params.specialoffer}', '${params.newsletter}'
        )`;
    tx.executeSql(
      query,
      [],
      (_, { rows }) => {
        // console.log(rows._array);
      },
      (_, err) => {
        throw new Error(`Something went wrong, stack info : ${err}`);
      }
    );
  });
}
