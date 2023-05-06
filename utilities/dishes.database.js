import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("little_lemon");

export async function createDishesTable() {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `create table if not exists dishes 
            (id integer primary key not null, 
              name text, price text, description text, 
              image text, category text
            );`
        );
      },
      reject,
      resolve
    );
  });
}

export async function saveDisheData(dishes) {
  db.transaction((tx) => {
    const query = `insert into dishes (name , price , description, image, category) values 
          ${dishes
            .map(
              (plate) =>
                `("${plate.name}", "${plate.price}","${plate.description}","${plate.image}","${plate.category}")`
            )
            .join(", ")}`;
    // console.log(query);
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

export async function searchDishesData(byquery, bycategory = []) {
  let strcategory = "(";

  bycategory.map((category) => {
    strcategory += `"${category}",`;
  });
  strcategory = strcategory.substring(0, strcategory.length - 1);
  strcategory += ")";
  const query = `SELECT * from dishes WHERE category in ${strcategory} AND name like "%${byquery}%"`;
  // console.log(query);

  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(query, [], (_, { rows }) => {
        resolve(rows._array.length > 0 ? rows._array : false);
      });
    });
  });
}

export async function getDishesData() {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * from dishes", [], (_, { rows }) => {
        resolve(rows._array.length > 0 ? rows._array : false);
      });
    });
  });
}
